from rest_framework import serializers
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from main.models import Product
from rest_framework.response import Response

from .models import Cart

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','password','email','first_name', 'last_name')
        extra_kwargs = {
            'password': {'write_only': True}
         }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], password=validated_data['password'],
                                        email=validated_data['email'], first_name=validated_data['first_name'],
                                        last_name=validated_data['last_name'])
        return user


# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    user_name = serializers.CharField(source='user.username')

    class Meta:
        model = Cart
        fields = ('id','product', 'user_name')

    def get(self, request, user_name):
        username = user_name
        user = get_object_or_404(User, username=username)
        carts = Cart.objects.filter(user=user)
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)
    def create(self, validated_data):
        username = validated_data.pop('user')['username']
        user = User.objects.get(username=username)
        product = validated_data.pop('product')
        product_id = product.id
        product = Product.objects.get(id=product_id)
        cart = Cart.objects.create(product_id=product_id,user=user)
        return cart

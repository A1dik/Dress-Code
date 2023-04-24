from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import ProductCategory, Product
from django.forms.fields import ImageField
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=128, validators=[UniqueValidator(queryset=ProductCategory.objects.all())])
    description = serializers.CharField(allow_null=True, allow_blank=True)


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=256)
    price = serializers.DecimalField(max_digits=7, decimal_places=2)
    quantity = serializers.IntegerField(default=0)
    image = serializers.ImageField()
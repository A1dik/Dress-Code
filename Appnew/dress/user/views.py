from rest_framework import generics, permissions, mixins, status
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from .serializers import RegisterSerializer, UserSerializer, CartSerializer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Cart
from main.models import Product

User = get_user_model()
# Register API
class RegisterApi(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny, )

    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })


class CartView(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    serializer_class = CartSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Cart.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CartDetailedView(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin,generics.GenericAPIView):
    serializer_class = CartSerializer
    permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = 'user_name'
    lookup_url_kwarg = 'product_id'
    queryset = Cart.objects.all()

    def get(self, request, user_name):
        username = user_name
        user = get_object_or_404(User, username=username)
        carts = Cart.objects.filter(user=user)
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, cart_id):
        cart = Cart.objects.get(id=cart_id)
        cart.delete()
        return Response({'deleted': True})

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from .views import RegisterApi, CartView, CartDetailedView

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('register/', RegisterApi.as_view()),
    path('cart/', CartView.as_view()),
    path('cart/<int:cart_id>/', CartDetailedView.as_view()),
    path('cart/<str:user_name>/', CartDetailedView.as_view()),
    path('cart/<int:product_id>/', CartDetailedView.as_view())
]
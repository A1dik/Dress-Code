from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from main.models import Product

User = get_user_model()


class Cart(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
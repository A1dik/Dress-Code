from django.shortcuts import render, HttpResponse
from main.models import ProductCategory, Product


def index(request):
    context = {'title': 'Dress Code' }
    return render(request, 'dress/index.html', context)


def products(request):
    context = {
        'title': 'Dress Code - Каталог',
        'products': Product.objects.all(),
        'categories': ProductCategory.objects.all()
    }
    return render(request, 'dress/products.html', context)
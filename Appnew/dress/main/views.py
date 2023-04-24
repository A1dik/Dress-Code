from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.shortcuts import HttpResponseRedirect, render
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView

from common.views import TitleMixin
from main.models import Basket, Product, ProductCategory
from users.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CategorySerializer, ProductSerializer

class IndexView(TitleMixin,TemplateView):  # класс который отвечает на view представлеие
    template_name = 'dress/index.html'
    title = 'Dress Code'


class ProductsListView(TitleMixin,ListView):
    model = Product
    template_name = 'dress/products.html'
    paginate_by = 3
    title = 'Dress code - Каталог'

    def get_queryset(self):
        queryset = super(ProductsListView, self).get_queryset()
        category_id = self.kwargs.get(
            'category_id')  # если нет категории - none, если есть нам будет определен айдишник категории
        return queryset.filter(category_id=category_id) if category_id else queryset

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(ProductsListView, self).get_context_data()
        context['categories'] = ProductCategory.objects.all()
        return context


# def index(request):
# context = {'title': 'Dress Code'}
# return render(request, 'dress/index.html', context)


# def products(request, category_id=None, page_number=1): #none потому что может и не быть никакого значения, в page будем передавать станицу
# на которой находяся наши товары
#  products = Product.objects.filter(category_id=category_id) if category_id else Product.objects.all()
# per_page = 3 #кол-во наших страниц
# paginator = Paginator(products, per_page)
# products_paginator = paginator.page(page_number)

# if category_id:
# products = Product.objects.filter(category_id=category_id)
# else:
# products = Product.objects.all()


# context = {
#    'title': 'Dress Code - Каталог',
#    'categories': ProductCategory.objects.all(),
#     'products': products_paginator, #пагинатор это же самое что и наш queryset но с большими функциями
# }
#
# return render(request, 'dress/products.html', context)


@login_required
def basket_add(request, product_id):
    product = Product.objects.get(id=product_id)
    baskets = Basket.objects.filter(user=request.user, product=product)

    if not baskets.exists():
        Basket.objects.create(user=request.user, product=product, quantity=1)
    else:
        basket = baskets.first()
        basket.quantity = basket.quantity + 1
        basket.save()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])


class CategoryList(APIView):
    def get(self, request):
        categories = ProductCategory.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ProductList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class CategoryProduct(APIView):
    def get(self, request, category_id):
        products = Product.objects.filter(category_id=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
@login_required
def basket_remove(request, basket_id):
    basket = Basket.objects.get(id=basket_id)
    basket.delete()
    return HttpResponseRedirect(request.META['HTTP_REFERER'])

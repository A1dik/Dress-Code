from django.urls import path

from main.views import ProductsListView, basket_add, basket_remove, CategoryList, ProductList, CategoryProduct

app_name = 'dress'
urlpatterns = [
    path('', ProductsListView.as_view(), name='index'),
    path('category/<int:category_id>/', ProductsListView.as_view(), name='category'),
    path('categories', CategoryList.as_view()),
    path('categories/<int:category_id>', CategoryProduct.as_view()),
    path('product', ProductList.as_view()),
    path('page/<int:page>/', ProductsListView.as_view(), name='paginator'),
    path('baskets/add/<int:product_id>/', basket_add, name='basket_add'),
    path('baskets/remove/<int:basket_id>/', basket_remove, name='basket_remove'),
]

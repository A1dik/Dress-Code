from django.urls import path


from .views import ProductsListView, basket_add, basket_remove, CategoryList, ProductList, CategoryProduct, ProductDetailAPIView, category_list, product_list

app_name = 'dress'
urlpatterns = [
    path('', ProductsListView.as_view(), name='index'),
    path('category/<int:category_id>/', ProductsListView.as_view(), name='category'),
    path('categories', category_list),
    path('categories/<int:category_id>', CategoryProduct.as_view()),
    path('product', product_list),
    path('product/<int:product_id>', ProductDetailAPIView.as_view()),
    path('page/<int:page>/', ProductsListView.as_view(), name='paginator'),
    path('baskets/add/<int:product_id>/', basket_add, name='basket_add'),
    path('baskets/remove/<int:basket_id>/', basket_remove, name='basket_remove'),
]

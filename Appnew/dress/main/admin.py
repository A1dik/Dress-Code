from django.contrib import admin

from main.models import Basket, Product, ProductCategory

admin.site.register(ProductCategory)


@admin.register(Product)#это мы говорим с какой именной частью мы будем работать
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'quantity', 'category')
    fields = ('name', 'description', ('price', 'quantity'), 'image', 'category')
    readonly_fields = ('description', )#переменная доступна только для чтения
    search_fields = ('name',)
    ordering = ('-name',)


class BasketAdmin(admin.TabularInline):
    model = Basket
    fields = ('product', 'quantity')

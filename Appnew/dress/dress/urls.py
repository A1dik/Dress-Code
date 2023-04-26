from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from main.views import IndexView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', IndexView.as_view(extra_context={'title': 'Dress code'}), name='index'),
    path('products/', include('main.urls', namespace='products')),
    path('users/', include('users.urls', namespace='users')),
    path('accounts/', include('allauth.urls')),
    path('user/', include('user.urls')),


]

if settings.DEBUG:

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

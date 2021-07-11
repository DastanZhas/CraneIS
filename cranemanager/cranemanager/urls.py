from django.contrib import admin
from django.urls import path, include, re_path
from cranes import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('cranes.urls')),
    path('', include('accounts.urls')),
    path('api/', include('cranes.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^api/cranes/$', views.cranes_list),
    re_path(r'^api/cranes/([0-9])$', views.cranes_detail),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

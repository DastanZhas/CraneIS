from django.urls import path
from . import views
from .views import index, CranesDetailView

urlpatterns = [
    path('', views.index)
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('get/', views.get_posts),
    path('addpost/', views.add_post, name='add_post'),
]
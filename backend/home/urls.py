from django.urls import path
from . import views

#URLConfiguration
urlpatterns = [
    path('', views.home),
    #path('test/', views.homeTest),
]
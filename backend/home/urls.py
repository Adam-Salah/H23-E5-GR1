from django.urls import path
from . import views

#URLConfiguration
urlpatterns = [
    path('', views.homeScreen),
    #path('test/', views.homeTest),
]
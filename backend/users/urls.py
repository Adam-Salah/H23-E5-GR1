from django.urls import path
from . import views

#URLConfiguration
urlpatterns = [
    path('', views.sayHello),
    #path('sayHello2', views.sayHello2)
]
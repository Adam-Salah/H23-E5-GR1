from django.urls import path
from . import views

#URLConfiguration
urlpatterns = [
    path('', views.usersScreen),
    path('details/<int:id>', views.details, name='details'),

    #path('sayHello2', views.sayHello2)
]
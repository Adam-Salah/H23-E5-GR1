from django.urls import path
from . import views

urlpatterns = [
    path('component_list/', views.component_list),
    path('', views.create_component),
    # dynbamic path, depends on the id
    path('<int:pk>', views.component),


]
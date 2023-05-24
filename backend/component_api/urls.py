from django.urls import path
from component_api.views import ComponentList, CreateComponent, ComponentDetail

urlpatterns = [
    # liste des composantes
    path('list/', ComponentList.as_view()),

    # interface pour créer une composante
    path('', CreateComponent.as_view()),

    # détails d'une composante
    path('<int:pk>', ComponentDetail.as_view()),
]
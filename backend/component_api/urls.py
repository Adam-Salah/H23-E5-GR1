from django.urls import path
from component_api.views import ComponentList, CreateComponent, ComponentDetail

urlpatterns = [
    path('list/', ComponentList.as_view()),
    path('', CreateComponent.as_view()),
    # dynbamic path, depends on the id
    path('<int:pk>', ComponentDetail.as_view()),


]
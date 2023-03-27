"""

from django.shortcuts import render
# from django.http import JsonResponse
from component_api.models import Component
from component_api.serializer import ComponentSerializer

# rest framework
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

"""
"""
def component_list(request):
    components = Component.objects.all() # will return complex data, we must turn this into python data structure
    components_list = list(components.values()) # python ds -> list
    # convert to json
    return JsonResponse({
        'components': components_list
    })
"""
"""
# to hit this method, we hit this endpoint : component_api/component_list/
@api_view(['GET'])
def component_list(request):
    components = Component.objects.all() 
    serializer = ComponentSerializer(components, many=True) 
    return Response(serializer.data)

# https://youtu.be/mlr9BF4JomE?t=1691
@api_view(['POST'])
def create_component(request):
    serializer = ComponentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
# pk = primary key = id
def component(request, pk):
    try:
        component = Component.objects.get(pk=pk)
    except:
        return Response({
            'Component does not exist'
            }, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ComponentSerializer(component)
        return Response(serializer.datas, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'PUT':
        # component is the instance and data is the data we want it to be updated to
        serializer = ComponentSerializer(component, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        component.delete()
        # status
        return Response(status=status.HTTP_204_NO_CONTENT)

"""

from rest_framework.views import APIView
from component_api.models import Component
from component_api.serializer import ComponentSerializer

# rest framework
from rest_framework.response import Response
from rest_framework import status


class ComponentList(APIView):
    # get request
    def get(self, request):
        components = Component.objects.all() 
        serializer = ComponentSerializer(components, many=True) 
        return Response(serializer.data)

class CreateComponent(APIView):
    def post(self, request):
        serializer = ComponentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ComponentDetail(APIView):

    def get_component_by_pk(self, pk):
        try:
            return Component.objects.get(pk=pk)
        except:
            return Response({
                'error':'Component does not exist'
            }, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        component = self.get_component_by_pk(pk)
        serializer = ComponentSerializer(component)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        component = self.get_component_by_pk(pk)
        serializer = ComponentSerializer(component, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        component = self.get_component_by_pk(pk)
        component.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
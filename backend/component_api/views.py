from rest_framework.views import APIView
from component_api.models import Component
from component_api.serializer import ComponentSerializer

# rest framework
from rest_framework.response import Response
from rest_framework import status


class ComponentList(APIView):
    """ interface pour liste des composantes

    Args:
        APIView (_type_): _description_

    Returns:
        _type_: _description_
    """
    # get request
    def get(self, request):
        components = Component.objects.all() 
        serializer = ComponentSerializer(components, many=True) 
        return Response(serializer.data)

class CreateComponent(APIView):
    """ interface pour créer des composantes

    Args:
        APIView (_type_): _description_
    """
    def post(self, request):
        serializer = ComponentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ComponentDetail(APIView):
    """ interface pour voir une composante

    Args:
        APIView (_type_): _description_
    """
    def get_component_by_pk(self, pk):
        
        """ voir les détail d'une composante

        Args:
            pk (_type_): _description_

        Returns:
            _type_: _description_
        """
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
        """ modifier une composante

        Args:
            request (_type_): _description_
            pk (_type_): _description_

        Returns:
            _type_: _description_
        """
        component = self.get_component_by_pk(pk)
        serializer = ComponentSerializer(component, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """ Effacer une composante

        Args:
            request (_type_): _description_
            pk (_type_): _description_

        Returns:
            _type_: _description_
        """
        component = self.get_component_by_pk(pk)
        component.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
from rest_framework import serializers
from component_api.models import Component

class ComponentSerializer(serializers.ModelSerializer):
    """ Sérialiser objet composante 

    Args:
        serializers (_type_): _description_
    """
    class Meta: 
        model = Component
        fields = "__all__"
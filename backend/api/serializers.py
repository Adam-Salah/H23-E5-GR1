from rest_framework import serializers
from .models import Item, Location

#takes django model database and turns it into json data

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('__all__')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('__all__')
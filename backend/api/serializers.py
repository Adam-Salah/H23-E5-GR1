from rest_framework import serializers
from base.models import Item

#converts instances of our objects into json datatype so Response 
#object can understand

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
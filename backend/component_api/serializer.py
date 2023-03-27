from rest_framework import serializers
from component_api.models import Component

#converts instances of our objects into json datatype so Response 
#object can understand

class ComponentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    type = serializers.CharField(max_length=100)
    position_x = serializers.FloatField()
    position_y = serializers.FloatField()
    size = serializers.FloatField()

    voltage = serializers.FloatField()
    resistance = serializers.FloatField()
    capacitance = serializers.FloatField()

    def create(self, data):
        return Component.objects.create(**data)

    def update(self, instance, data):
        instance.type = data.get('type', instance.type)
        instance.position_x = data.get('position_x', instance.position_x)
        instance.position_y = data.get('position_y', instance.position_y)
        instance.size = data.get('size', instance.size)
        instance.voltage = data.get('voltage', instance.voltage)
        instance.resistance = data.get('resistance', instance.resistance)
        instance.capacitance = data.get('capacitance', instance.capacitance)

        instance.save()
        return instance




"""
class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = '__all__'


{
    "type": "Resistor",
    "position_x": 100,
    "position_y": 100,
    "size": 200,
    "voltage": 0,
    "resistance": 100,
    "capacitance": 0
}
"""

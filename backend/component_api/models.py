from django.db import models

class Component(models.Model):
    type = models.CharField(max_length=100)
    position_x = models.FloatField()
    position_y = models.FloatField()
    size = models.FloatField()
    #port_1 = models.ForeignKey('Component', on_delete=models.DO_NOTHING)
    #port_2 = models.ForeignKey('Component', on_delete=models.DO_NOTHING)

    # Source
    voltage = models.FloatField()

    # Resistance
    resistance = models.FloatField()

    # Capacitor
    capacitance = models.FloatField()

    def __str__(self):
        return self.name
"""
class Source(Component):
    voltage = models.FloatField()

class Resistor(Component):
    resistance = models.FloatField()

class Capacitor(Component):
    capacitance = models.FloatField()
"""
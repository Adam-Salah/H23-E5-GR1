from django.db import models

class Component(models.Model):

    """ Composante

    Returns:
        _type_: _description_
    """

    type = models.CharField(max_length=100)
    position_x = models.FloatField()
    position_y = models.FloatField()
    size = models.FloatField()

    # Source
    voltage = models.FloatField()

    # Resistance
    resistance = models.FloatField()

    # Capacitor
    capacitance = models.FloatField()

    def __str__(self):
        return self.name

from rest_framework import serializers
from . import models

class RealEstateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Property
        fields = '__all__'
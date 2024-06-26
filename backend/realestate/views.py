from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models
# Create your views here.

class RealEstateViewSet(viewsets.ModelViewSet):
    queryset = models.Property.objects.all()
    serializer_class = serializers.RealEstateSerializer
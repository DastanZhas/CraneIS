from rest_framework import serializers
from cranes.models import Cranes

# Cranes Serializer
class CranesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cranes
        fields = '__all__'
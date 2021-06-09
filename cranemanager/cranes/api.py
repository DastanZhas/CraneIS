from cranes.models import Cranes
from rest_framework import viewsets, permissions
from .serializers import CranesSerializer

# Cranes Viewset
class CranesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CranesSerializer

    def get_queryset(self):
        return self.request.user.cranes.all()


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
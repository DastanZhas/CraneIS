from cranes.models import (
    ExaminationPeriodTechPassport, 
    Cranes, FirstTechnicalMaintenance, 
    SecondTechnicalMaintenance, 
    Inspection, 
    PersonResponsibleToFixedState, 
    PersonResponsibleForSupervision )

from rest_framework import viewsets, permissions
from .serializers import ( 
    CranesSerializer, 
    ExaminationPeriodTechPassportSerializer, 
    FirstTechnicalMaintenanceSerializer, 
    SecondTechnicalMaintenanceSerializer, 
    InspectionSerializer, 
    PersonResponsibleToFixedStateSerializer, 
    PersonResponsibleForSupervisionSerializer )

from .models import ( ExaminationPeriodTechPassport, 
Cranes, FirstTechnicalMaintenance, 
SecondTechnicalMaintenance, 
Inspection, 
PersonResponsibleToFixedState, 
PersonResponsibleForSupervision )

from .models import CraneQuerySet, CranesManager
from .serializers import ExaminationListRetrieveSerializer

# Cranes Viewset
class CranesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        # permissions.IsAuthenticated
        permissions.IsAuthenticated
    ]
    #queryset = Cranes.objects.all().filter(craneType='asda7asd')
    queryset = Cranes.objects.all()
    serializer_class = CranesSerializer

    # action_to_serializer = {
    #     "list": ExaminationListRetrieveSerializer,
    #     "retrieve": ExaminationListRetrieveSerializer
    # }

    # def get_serializer_class(self):
    #     return self.action_to_serializer.get(
    #         self.action,
    #         self.serializer_class
    #     )

class ExaminationPeriodTechPassportViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = ExaminationPeriodTechPassport.objects.all()
    serializer_class = ExaminationPeriodTechPassportSerializer

class FirstTechnicalMaintenanceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = FirstTechnicalMaintenance.objects.all()
    serializer_class = FirstTechnicalMaintenanceSerializer

class SecondTechnicalMaintenanceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = SecondTechnicalMaintenance.objects.all()
    serializer_class = SecondTechnicalMaintenanceSerializer

class InspectionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = Inspection.objects.all()
    serializer_class = InspectionSerializer

class PersonResponsibleToFixedStateViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = PersonResponsibleToFixedState.objects.all()
    serializer_class = PersonResponsibleToFixedStateSerializer

class PersonResponsibleForSupervisionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = PersonResponsibleForSupervision.objects.all()
    serializer_class = PersonResponsibleForSupervisionSerializer

    # def get_queryset(self):
    #     return self.request.user.cranes.all()


    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)
    def perform_test(self, serializer):
        serializer.save(owner.self.request.user)

    def perform_create(self, serializer):
        serializer.save()
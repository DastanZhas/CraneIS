from cranes.models import (
    ExaminationPeriodTechPassport, 
    Cranes, FirstTechnicalMaintenance, 
    SecondTechnicalMaintenance, 
    Inspection, 
    PersonResponsibleToFixedState, 
    PersonResponsibleForSupervision )

from .serializers import ( 
    CranesSerializer,
    ExaminationPeriodTechPassportSerializer, 
    FirstTechnicalMaintenanceSerializer, 
    SecondTechnicalMaintenanceSerializer, 
    InspectionSerializer, 
    PersonResponsibleToFixedStateSerializer, 
    PersonResponsibleForSupervisionSerializer,
    CranesUpdateSerializer )

from .models import ( ExaminationPeriodTechPassport, 
Cranes, FirstTechnicalMaintenance, 
SecondTechnicalMaintenance, 
Inspection, 
PersonResponsibleToFixedState,
PersonResponsibleForSupervision )

from .models import CraneQuerySet, CranesManager
from .serializers import ForeignKeyRetrieveSerializer
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
import json

# Cranes Viewset
class CranesViewSet(viewsets.ModelViewSet):
    permission_classes = [
        # permissions.AllowAny
        permissions.AllowAny
    ]
    #queryset = Cranes.objects.all().filter(craneType='asda7asd')
    queryset = Cranes.objects.all()
    serializer_class = CranesSerializer

    action_to_serializer = {
        "list": ForeignKeyRetrieveSerializer,
        "retrieve": ForeignKeyRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class CranesUpdateViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = Cranes.objects.all()
    serializer_class = CranesUpdateSerializer

# @api_view(['GET', 'POST'])
# def cranes_view(request):
#     if request.method == 'GET':
#         return Response("Not Implemented")
#     elif requets.method == 'POST':
#         serializer = CranesSerializer(data=request.data)
#         if serializer.is_valid():
#             craneType = request.data[craneType]
#             Cranes.objects.create(craneType=craneType)
#             return Response("Crane created", status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ExaminationPeriodTechPassportViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = ExaminationPeriodTechPassport.objects.all()
    serializer_class = ExaminationPeriodTechPassportSerializer

class FirstTechnicalMaintenanceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = FirstTechnicalMaintenance.objects.all()
    serializer_class = FirstTechnicalMaintenanceSerializer

class SecondTechnicalMaintenanceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = SecondTechnicalMaintenance.objects.all()
    serializer_class = SecondTechnicalMaintenanceSerializer

class InspectionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = Inspection.objects.all()
    serializer_class = InspectionSerializer

class PersonResponsibleToFixedStateViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = PersonResponsibleToFixedState.objects.all()
    serializer_class = PersonResponsibleToFixedStateSerializer

    def post(self, request, *args, **kwargs):
        personImage = request.data['personImage']
        employeePost = request.data['employeePost']
        orderNumber = request.data['orderNumber']
        employeeFirstName = request.data['employeeFirstName']
        employeeSecondName = request.data['employeeSecondName']
        employeePatronymic = request.data['employeePatronymic']
        return HttpResponse({'message': 'person created'}, status=200)

class PersonResponsibleForSupervisionViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
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
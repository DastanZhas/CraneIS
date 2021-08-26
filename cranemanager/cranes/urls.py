from django.db.models import base
from rest_framework import routers
from .api import CranesViewSet, CranesSearchListView, ExaminationPeriodTechPassportViewSet, FirstTechnicalMaintenanceViewSet, SecondTechnicalMaintenanceViewSet, InspectionViewSet
from .api import PersonResponsibleToFixedStateViewSet, PersonResponsibleForSupervisionViewSet, CranesUpdateViewSet
from django.urls import path, include, re_path
from . import views
from . import api

router = routers.DefaultRouter()
router.register('api/cranes', CranesViewSet, 'cranes')
router.register('api/<int:cranes_id>/examination', ExaminationPeriodTechPassportViewSet, 'examination')
router.register('api/examination', ExaminationPeriodTechPassportViewSet, 'cranes')
router.register('api/to1', FirstTechnicalMaintenanceViewSet, 'cranes')
router.register('api/to2', SecondTechnicalMaintenanceViewSet, 'cranes')
router.register('api/inspection', InspectionViewSet, 'cranes')
router.register('api/personResponsibleFix', PersonResponsibleToFixedStateViewSet, 'cranes')
router.register('api/personResponsibleVision', PersonResponsibleForSupervisionViewSet, basename='supervision')
router.register('api/cranes_update', CranesUpdateViewSet, basename='update_cranes')

urlpatterns = router.urls
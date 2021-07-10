from rest_framework import routers
from .api import CranesViewSet, ExaminationPeriodTechPassportViewSet, FirstTechnicalMaintenanceViewSet, SecondTechnicalMaintenanceViewSet, InspectionViewSet
from .api import PersonResponsibleToFixedStateViewSet, PersonResponsibleForSupervisionViewSet
from . import views

router = routers.DefaultRouter()
router.register('api/cranes', CranesViewSet, 'cranes')
router.register('api/examination', ExaminationPeriodTechPassportViewSet, 'cranes')
router.register('api/to1', FirstTechnicalMaintenanceViewSet, 'cranes')
router.register('api/to2', SecondTechnicalMaintenanceViewSet, 'cranes')
router.register('api/inspection', InspectionViewSet, 'cranes')
router.register('api/personResponsibleFix', PersonResponsibleToFixedStateViewSet, 'cranes')
router.register('api/personResponsibleVision', PersonResponsibleForSupervisionViewSet, basename='supervision')

urlpatterns = router.urls
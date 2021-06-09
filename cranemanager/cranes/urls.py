from rest_framework import routers
from .api import CranesViewSet

router = routers.DefaultRouter()
router.register('api/cranes', CranesViewSet, 'cranes')

urlpatterns = router.urls
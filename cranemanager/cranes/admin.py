from django.contrib import admin
from .models import Cranes, ExaminationPeriodTechPassport, FirstTechnicalMaintenance, SecondTechnicalMaintenance, Inspection, PersonResponsibleToFixedState, PersonResponsibleForSupervision

# Register your models here.
admin.site.register(Cranes)
admin.site.register(ExaminationPeriodTechPassport)
admin.site.register(FirstTechnicalMaintenance)
admin.site.register(SecondTechnicalMaintenance)
admin.site.register(Inspection)
admin.site.register(PersonResponsibleToFixedState)
admin.site.register(PersonResponsibleForSupervision)
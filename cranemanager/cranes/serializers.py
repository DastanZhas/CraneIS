from rest_framework import serializers
from cranes.models import Cranes, ExaminationPeriodTechPassport, FirstTechnicalMaintenance, SecondTechnicalMaintenance, Inspection, PersonResponsibleToFixedState, PersonResponsibleForSupervision

# Cranes Serializer
class CranesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cranes
        fields = '__all__'   

# Технический паспорт и сроки освидетельствования
class ExaminationPeriodTechPassportSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExaminationPeriodTechPassport
        fields = '__all__'

# Serializer for retrieve data from examination table to cranes table
# Сериалайзер для представления данных из таблицы examination на таблицу cranes
class ExaminationListRetrieveSerializer(serializers.ModelSerializer):
    examinationPeriod = ExaminationPeriodTechPassportSerializer()

    class Meta:
        model = Cranes
        fields = '__all__'

# ТО 1
class FirstTechnicalMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FirstTechnicalMaintenance
        fields = '__all__'

# ТО 2
class SecondTechnicalMaintenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondTechnicalMaintenance
        fields = '__all__'

# Обследование
class InspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspection
        fields = '__all__'

# Лицо ответственное за исправленное состояние
class PersonResponsibleToFixedStateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonResponsibleToFixedState
        fields = '__all__'

# Лицо ответственное по надзору
class PersonResponsibleForSupervisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonResponsibleForSupervision
        fields = '__all__'



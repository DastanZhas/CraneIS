from rest_framework import serializers
from cranes.models import Cranes, ExaminationPeriodTechPassport, FirstTechnicalMaintenance, SecondTechnicalMaintenance, Inspection, PersonResponsibleToFixedState, PersonResponsibleForSupervision


# Технический паспорт и сроки освидетельствования
class ExaminationPeriodTechPassportSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExaminationPeriodTechPassport
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

# Cranes Serializer
class CranesSerializer(serializers.ModelSerializer):
    examinationPeriod = ExaminationPeriodTechPassportSerializer()
    technicalMaintenanceFirst = FirstTechnicalMaintenanceSerializer()
    technicalMaintenanceSecond = SecondTechnicalMaintenanceSerializer()
    inspection = InspectionSerializer()
    personResponsibleToFixedState = PersonResponsibleToFixedStateSerializer()
    personResponsibleForSupervision = PersonResponsibleForSupervisionSerializer()

    class Meta:
        model = Cranes
        fields = '__all__'

    def create(self, validated_data):
        # """
        # Create and return a new `Cranes` instance, given the validated data.
        # """
        examinationPeriod_data = validated_data.pop('examinationPeriod', None)
        if examinationPeriod_data:
            examinationPeriod = ExaminationPeriodTechPassport.objects.get_or_create(**examinationPeriod_data)[0]
            validated_data['examinationPeriod'] = examinationPeriod

        technicalMaintenanceFirst_data = validated_data.pop('technicalMaintenanceFirst', None)
        if technicalMaintenanceFirst_data:
            technicalMaintenanceFirst = FirstTechnicalMaintenance.objects.get_or_create(**technicalMaintenanceFirst_data)[0]
            validated_data['technicalMaintenanceFirst'] = technicalMaintenanceFirst

        technicalMaintenanceSecond_data = validated_data.pop('technicalMaintenanceSecond', None)
        if technicalMaintenanceSecond_data:
            technicalMaintenanceSecond = SecondTechnicalMaintenance.objects.get_or_create(**technicalMaintenanceSecond_data)[0]
            validated_data['technicalMaintenanceSecond'] = technicalMaintenanceSecond

        inspection_data = validated_data.pop('inspection', None)
        if inspection_data:
            inspection = Inspection.objects.get_or_create(**inspection_data)[0]
            validated_data['inspection'] = inspection

        personResponsibleToFixedState_data = validated_data.pop('personResponsibleToFixedState', None)
        if personResponsibleToFixedState_data:
            personResponsibleToFixedState = PersonResponsibleToFixedState.objects.get_or_create(**personResponsibleToFixedState_data)[0]
            validated_data['personResponsibleToFixedState'] = personResponsibleToFixedState

        personResponsibleForSupervision_data = validated_data.pop('personResponsibleForSupervision', None)
        if personResponsibleForSupervision_data:
            personResponsibleForSupervision = PersonResponsibleForSupervision.objects.get_or_create(**personResponsibleForSupervision_data)[0]
            validated_data['personResponsibleForSupervision'] = personResponsibleForSupervision
        return Cranes.objects.create(**validated_data)


# Serializer for retrieve data from examination table to cranes table
# Сериалайзер для представления данных из таблицы examination на таблицу cranes
class ForeignKeyRetrieveSerializer(serializers.ModelSerializer):
    examinationPeriod = ExaminationPeriodTechPassportSerializer()
    technicalMaintenanceFirst = FirstTechnicalMaintenanceSerializer()
    technicalMaintenanceSecond = SecondTechnicalMaintenanceSerializer()
    inspection = InspectionSerializer()
    personResponsibleToFixedState = PersonResponsibleToFixedStateSerializer()
    personResponsibleForSupervision = PersonResponsibleForSupervisionSerializer()

    class Meta:
        model = Cranes
        fields = '__all__'

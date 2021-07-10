from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers
from datetime import datetime, date

# Технический паспорт и сроки освидетельствования
class ExaminationPeriodTechPassport(models.Model):
    technicalPassportdownloadUrl = models.FileField(max_length=None, upload_to='files/', blank=False) # Изменить required to True
    examinationPeriodDate = models.DateTimeField(auto_now=False)

# Техническое обслуживание 1 - ТО1
class FirstTechnicalMaintenance(models.Model):
    periodOfFirstTMfrom = models.DateTimeField(auto_now=False)
    periodOfFirstTMto = models.DateTimeField(auto_now=False)

# Техническое обслуживание 2 - ТО2
class SecondTechnicalMaintenance(models.Model):
    periodOfSecondTMfrom = models.DateTimeField(auto_now=False)
    periodOfSecondTMto = models.DateTimeField(auto_now=False)
    # Ведомость дефектов
    defectsStatement = models.CharField(max_length=200)
    # Ведомость материалов
    materialsStatement = models.CharField(max_length=200)

# Обследование и сроки
class Inspection(models.Model):
    periodInspectionfrom = models.DateTimeField(auto_now=False)
    periodInspectionto = models.DateTimeField(auto_now=False)
    inspection = models.CharField(max_length=200)

# Лицо ответственное за исправленное состояние
class PersonResponsibleToFixedState(models.Model):
    personImage = models.ImageField(max_length=None, upload_to='files/', blank=False)
    employeePost = models.CharField(max_length=100)
    orderNumber = models.IntegerField(unique=True)
    employeeFirstName = models.CharField(max_length=100)
    employeeSecondName = models.CharField(max_length=100)
    # Отчество
    employeePatronymic = models.CharField(max_length=100)

# Лицо ответственное по надзору
class PersonResponsibleForSupervision(models.Model):
    personImage = models.ImageField(max_length=None, upload_to='files/', blank=False) # Изменить required to True
    employeePost = models.CharField(max_length=100)
    orderNumber = models.IntegerField(unique=True)
    employeeFirstName = models.CharField(max_length=100)
    employeeSecondName = models.CharField(max_length=100)
    # Отчество
    employeePatronymic = models.CharField(max_length=100)

class CraneQuerySet(models.QuerySet):
    def find_by_title_in_qs(self, craneType):
        return self.filter(title__icontains=craneType)

class CranesManager(models.Manager):
    def get_queryset(self):
        return CraneQuerySet(self.model, using=self.db)

    def find_by_title_in_qs(self, craneType):
        return self.get_queryset().find_by_title_in_qs(craneType)

class Cranes(models.Model):
    # Тип крана
    craneType = models.CharField(max_length=100)
    # Грузоподъемность
    loadCapacity = models.IntegerField()
    # Регистрационный номер - уникальный
    registerNumber = models.IntegerField(unique=True)
    # Заводской номер - уникальный
    factoryNumber = models.IntegerField(unique=True)
    # Инвентаризационный номер - уникальный
    inventorizationNumber = models.IntegerField(unique=True)
    # Завод изготовитель
    factoryManufacturer = models.CharField(max_length=100, unique=True)
    # Срок освидетельствования
    examinationPeriod = models.ForeignKey(ExaminationPeriodTechPassport, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Режим работы
    workMode = models.CharField(max_length=50)
    # Место установки
    installationPlace = models.CharField(max_length=120)
    # ТО1 = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    technicalMaintenanceFirst = models.ForeignKey(FirstTechnicalMaintenance, related_name="cranes", on_delete=models.CASCADE, null=True)
    # ТО2 = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    technicalMaintenanceSecond = models.ForeignKey(SecondTechnicalMaintenance, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Обследование
    inspection = models.ForeignKey(Inspection, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Лицо ответственное за исправленное состояние
    personResponsibleToFixedState = models.ForeignKey(PersonResponsibleToFixedState,related_name="cranes", on_delete=models.CASCADE, null=True)
    # Лицо ответственное по надзору
    personResponsibleForSupervision = models.ForeignKey(PersonResponsibleForSupervision, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Контроль по металу
    metalInspection = models.CharField(max_length=100)
    # Механический контроль
    mechanicalControl = models.TextField(max_length=100)
    # Электронная часть
    electricalParts = models.CharField(max_length=100)
    # user?
    owner = models.ForeignKey(User, related_name="cranes", on_delete=models.CASCADE, null=True)
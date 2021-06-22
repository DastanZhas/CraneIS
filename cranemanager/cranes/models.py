from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers
from datetime import datetime, date

# Технический паспорт и сроки освидетельствования
class ExaminationPeriodTechPassport(models.Model):
    technicalPassportdownloadUrl = models.FileField(max_length=None, blank=False) # Изменить required to True
    examinationPeriodDate = models.DateField(auto_now_add=True, auto_now=False, blank=True)

# Техническое обслуживание 1 - ТО1
class FirstTechnicalMaintenance(models.Model):
    #periodOfFirstTMfrom = models.DateTimeField(blank=True, null=True)
    periodOfFirstTMfrom = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    periodOfFirstTMto = models.DateField(auto_now_add=True, auto_now=False, blank=True)

# Техническое обслуживание 2 - ТО2
class SecondTechnicalMaintenance(models.Model):
    periodOfSecondTMfrom = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    periodOfSecondTMto = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    # Ведомость дефектов
    defectsStatement = models.CharField(max_length=200)
    # Ведомость материалов
    materialsStatement = models.CharField(max_length=200)

# Обследование и сроки
class Inspection(models.Model):
    periodInspectionfrom = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    periodInspectionto = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    inspection = models.CharField(max_length=200)

# Лицо ответственное за исправленное состояние
class PersonResponsibleToFixedState(models.Model):
    personImage = models.ImageField(max_length=None, blank=False) # Изменить required to True
    employeePost = models.CharField(max_length=100)
    orderNumber = models.IntegerField(unique=True)
    employeeFirstName = models.CharField(max_length=100)
    employeeSecondName = models.CharField(max_length=100)
    # Отчество
    employeePatronymic = models.CharField(max_length=100)

class PersonResponsibleForSupervision(models.Model):
    personImage = models.ImageField(max_length=None, blank=False) # Изменить required to True
    employeePost = models.CharField(max_length=100)
    orderNumber = models.IntegerField(unique=True)
    employeeFirstName = models.CharField(max_length=100)
    employeeSecondName = models.CharField(max_length=100)
    # Отчество
    employeePatronymic = models.CharField(max_length=100)

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
    examinationPeriod = models.ForeignKey(ExaminationPeriodTechPassport, related_name="cranes", on_delete=models.CASCADE)
    # Режим работы
    workMode = models.CharField(max_length=50)
    # Место установки
    installationPlace = models.CharField(max_length=120)
    # ТО1 = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    technicalMaintenanceFirst = models.ForeignKey(FirstTechnicalMaintenance, related_name="cranes", on_delete=models.CASCADE)
    # ТО2 = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    technicalMaintenanceSecond = models.ForeignKey(SecondTechnicalMaintenance, related_name="cranes", on_delete=models.CASCADE)
    # Обследование
    inspection = models.ForeignKey(Inspection, related_name="cranes", on_delete=models.CASCADE)
    # Лицо ответственное за исправленное состояние
    personResponsibleToFixedState = models.CharField(max_length=100)
    # Лицо ответственное по надзору
    personResponsibleForSupervision = models.CharField(max_length=100)
    # Контроль по металу
    metalInspection = models.CharField(max_length=100)
    # Механический контроль
    mechanicalControl = models.CharField(max_length=100)
    # Электронная часть
    electricalParts = models.CharField(max_length=100)
    timestamp = models.DateField(auto_now_add=True, auto_now=False, blank=True)
    # user?
    owner = models.ForeignKey(User, related_name="cranes", on_delete=models.CASCADE, null=True)
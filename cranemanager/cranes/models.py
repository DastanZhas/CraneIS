from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import related
from rest_framework import serializers
from datetime import datetime, datetime
from django.db.models import signals


# Технический паспорт и сроки освидетельствования
class ExaminationPeriodTechPassport(models.Model):
    technicalPassportdownloadUrl = models.FileField(max_length=None, upload_to='uploads/', blank=True, null=True)
    examinationPeriodDate = models.DateField(auto_now=False)

    # Когда удаляем файл с базы данных, он удаляется и с файловой системы
    def delete(self, using=None, keep_parents=False):
        self.technicalPassportdownloadUrl.storage.delete(self.technicalPassportdownloadUrl.name)
        super().delete()
    
# Техническое обслуживание 1 - ТО1
class FirstTechnicalMaintenance(models.Model):
    to1 = models.TextField(max_length=250)
    periodOfFirstTMfrom = models.DateField(auto_now=False)
    periodOfFirstTMto = models.DateField(auto_now=False)

# Техническое обслуживание 2 - ТО2
class SecondTechnicalMaintenance(models.Model):
    to2 = models.TextField(max_length=250)
    periodOfSecondTMfrom = models.DateField(auto_now=False)
    periodOfSecondTMto = models.DateField(auto_now=False)
    # Ведомость дефектов
    defectsStatement = models.TextField(max_length=250)
    # Ведомость материалов
    materialsStatement = models.TextField(max_length=250)

# Обследование и сроки
class Inspection(models.Model):
    periodInspectionfrom = models.DateField(auto_now=False)
    periodInspectionto = models.DateField(auto_now=False)
    inspection = models.TextField(max_length=250)

# Лицо ответственное за исправленное состояние


class PersonResponsibleToFixedState(models.Model):
    personImage = models.ImageField(
        max_length=None, upload_to='uploads/images', null=True, blank=True)
    employeePost = models.CharField(max_length=100)
    orderNumber = models.IntegerField(unique=True)
    employeeFirstName = models.CharField(max_length=100)
    employeeSecondName = models.CharField(max_length=100)
    # Отчество
    employeePatronymic = models.CharField(max_length=100)

    # Когда удаляем файл с базы данных, он удаляется и с файловой системы
    def delete(self, using=None, keep_parents=False):
        self.personImage.storage.delete(self.personImage.name)
        super().delete()

# Лицо ответственное по надзору
class PersonResponsibleForSupervision(models.Model):
    personImage = models.ImageField(
        max_length=None, upload_to='uploads/images', null=True, blank=True)  # Изменить required to True
    employeePost = models.CharField(max_length=100)
    orderNumber = models.IntegerField(unique=True)
    employeeFirstName = models.CharField(max_length=100)
    employeeSecondName = models.CharField(max_length=100)
    # Отчество
    employeePatronymic = models.CharField(max_length=100)

    # Когда удаляем файл с базы данных, он удаляется и с файловой системы
    def delete(self, using=None, keep_parents=False):
        self.personImage.storage.delete(self.personImage.name)
        super().delete()


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
    technicalMaintenanceFirst = models.ForeignKey(
        FirstTechnicalMaintenance, related_name="cranes", on_delete=models.CASCADE, null=True)
    # ТО2 = models.ForeignKey(Album, related_name='tracks', on_delete=models.CASCADE)
    technicalMaintenanceSecond = models.ForeignKey(
        SecondTechnicalMaintenance, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Обследование
    inspection = models.ForeignKey(
        Inspection, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Лицо ответственное за исправленное состояние
    personResponsibleToFixedState = models.ForeignKey(
        PersonResponsibleToFixedState, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Лицо ответственное по надзору
    personResponsibleForSupervision = models.ForeignKey(
        PersonResponsibleForSupervision, related_name="cranes", on_delete=models.CASCADE, null=True)
    # Контроль по металу
    metalInspection = models.TextField(max_length=250)
    # Механический контроль
    mechanicalControl = models.TextField(max_length=250)
    # Электронная часть
    electricalParts = models.TextField(max_length=250)
    # user?
    owner = models.ForeignKey(
        User, related_name="cranes", on_delete=models.CASCADE, null=True)

    def delete(self, using=None, keep_parents=False):
        self.examinationPeriod.delete()
        self.technicalMaintenanceFirst.delete()
        self.technicalMaintenanceSecond.delete()
        self.inspection.delete()
        self.personResponsibleToFixedState.delete()
        self.personResponsibleForSupervision.delete()
        super().delete()
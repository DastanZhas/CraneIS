from django.db import models
from django.contrib.auth.models import User

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
    examinationPeriod = models.DateTimeField()
    # Режим работы
    workMode = models.CharField(max_length=50)
    # Место установки
    installationPlace = models.CharField(max_length=120)
    # ТО1
    technicalMaintenanceFirst = models.CharField(max_length=100)
    # ТО2
    technicalMaintenanceSecond = models.CharField(max_length=100)
    # Обследование
    inspection = models.CharField(max_length=100)
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
    owner = models.ForeignKey(User, related_name="cranes", on_delete=models.CASCADE, null=True)

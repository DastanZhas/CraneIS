# Generated by Django 3.2.4 on 2021-07-11 10:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ExaminationPeriodTechPassport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('technicalPassportdownloadUrl', models.FileField(upload_to='files/')),
                ('examinationPeriodDate', models.DateTimeField()),
                ('examinationPeriodTitle', models.CharField(max_length=100)),
                ('examinationPeriodContent', models.TextField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='FirstTechnicalMaintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to1', models.TextField(max_length=250)),
                ('periodOfFirstTMfrom', models.DateTimeField()),
                ('periodOfFirstTMto', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Inspection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('periodInspectionfrom', models.DateTimeField()),
                ('periodInspectionto', models.DateTimeField()),
                ('inspection', models.TextField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='PersonResponsibleForSupervision',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('personImage', models.ImageField(upload_to='files/')),
                ('employeePost', models.CharField(max_length=100)),
                ('orderNumber', models.IntegerField(unique=True)),
                ('employeeFirstName', models.CharField(max_length=100)),
                ('employeeSecondName', models.CharField(max_length=100)),
                ('employeePatronymic', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='PersonResponsibleToFixedState',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('personImage', models.ImageField(upload_to='files/')),
                ('employeePost', models.CharField(max_length=100)),
                ('orderNumber', models.IntegerField(unique=True)),
                ('employeeFirstName', models.CharField(max_length=100)),
                ('employeeSecondName', models.CharField(max_length=100)),
                ('employeePatronymic', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='SecondTechnicalMaintenance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to2', models.TextField(max_length=250)),
                ('periodOfSecondTMfrom', models.DateTimeField()),
                ('periodOfSecondTMto', models.DateTimeField()),
                ('defectsStatement', models.TextField(max_length=250)),
                ('materialsStatement', models.TextField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Cranes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('craneType', models.CharField(max_length=100)),
                ('loadCapacity', models.IntegerField()),
                ('registerNumber', models.IntegerField(unique=True)),
                ('factoryNumber', models.IntegerField(unique=True)),
                ('inventorizationNumber', models.IntegerField(unique=True)),
                ('factoryManufacturer', models.CharField(max_length=100, unique=True)),
                ('workMode', models.CharField(max_length=50)),
                ('installationPlace', models.CharField(max_length=120)),
                ('metalInspection', models.TextField(max_length=250)),
                ('mechanicalControl', models.TextField(max_length=250)),
                ('electricalParts', models.TextField(max_length=250)),
                ('examinationPeriod', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to='cranes.examinationperiodtechpassport')),
                ('inspection', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to='cranes.inspection')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to=settings.AUTH_USER_MODEL)),
                ('personResponsibleForSupervision', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to='cranes.personresponsibleforsupervision')),
                ('personResponsibleToFixedState', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to='cranes.personresponsibletofixedstate')),
                ('technicalMaintenanceFirst', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to='cranes.firsttechnicalmaintenance')),
                ('technicalMaintenanceSecond', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cranes', to='cranes.secondtechnicalmaintenance')),
            ],
        ),
    ]

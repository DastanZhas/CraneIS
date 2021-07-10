# Generated by Django 3.2.4 on 2021-07-08 05:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cranes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='examinationperiodtechpassport',
            name='technicalPassportdownloadUrl',
            field=models.FileField(upload_to='files/'),
        ),
        migrations.AlterField(
            model_name='personresponsibleforsupervision',
            name='personImage',
            field=models.ImageField(upload_to='files/'),
        ),
        migrations.AlterField(
            model_name='personresponsibletofixedstate',
            name='personImage',
            field=models.ImageField(upload_to='files/'),
        ),
    ]
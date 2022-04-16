# Generated by Django 4.0.1 on 2022-01-23 10:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('lastname', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=100)),
                ('content', models.TextField(blank=True, default=None, null=True)),
                ('image', models.ImageField(blank=True, default=None, null=True, upload_to='images')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meetups.author')),
            ],
        ),
    ]
# Generated by Django 4.0.1 on 2022-01-23 05:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meetups', '0007_author_f1'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='author',
            name='f1',
        ),
        migrations.RemoveField(
            model_name='author',
            name='fullname',
        ),
        migrations.RemoveField(
            model_name='note',
            name='desc',
        ),
        migrations.RemoveField(
            model_name='note',
            name='f1',
        ),
        migrations.RemoveField(
            model_name='note',
            name='fullname',
        ),
    ]
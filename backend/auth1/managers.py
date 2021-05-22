from django.db import models

class DriverManager(models.Manager):
    def get_drivers(self):
        return super().get_queryset().order_by('-created_date').filter(isDriver=True)

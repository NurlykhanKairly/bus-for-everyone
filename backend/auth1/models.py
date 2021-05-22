from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    @property
    def full_name(self):
        return f'{self.first_name} {self.last_login}'

    def __str__(self):
        return f'{self.id}: {self.username}'


class Driver(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    years = models.IntegerField(default=0)


class Passenger(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    spravka = models.FileField(default=None)
    isSpecial = models.BooleanField(default=False)

from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    isDriver = models.BooleanField(default=False)
    years = models.IntegerField(default=0)
    isSpecial = models.BooleanField(default=False)
    token = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    @property
    def full_name(self):
        return f'{self.first_name} {self.last_login}'

    def __str__(self):
        return f'{self.id}: {self.username}'



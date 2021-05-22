from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *


# Register your models here.


@admin.register(User)
class UserAdmin(UserAdmin):
    list_display = ('username', 'email')


@admin.register(Driver)
class DriverAdmin(admin.ModelAdmin):
    pass


@admin.register(Passenger)
class PassengerAdmin(admin.ModelAdmin):
    pass

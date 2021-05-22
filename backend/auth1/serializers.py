from rest_framework import serializers
from auth1.models import *
from django.db import transaction
import logging


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'token')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class DriverGetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = UserSerializer.Meta.fields + ('years',)
        read_only_fields = UserSerializer.Meta.fields + ('years',)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class PassengerGetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = UserSerializer.Meta.fields + ('isSpecial',)
        read_only_fields = UserSerializer.Meta.fields + ('isSpecial',)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
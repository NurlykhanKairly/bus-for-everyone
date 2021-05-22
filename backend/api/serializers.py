from rest_framework import serializers
from auth1.models import User
from api.models import *

class BaseFeedbackSerializer(serializers.ModelSerializer):
    driver = User

    class Meta:
        model = Feedback
        fields = ('id', 'driver', 'created_by', 'created_at', 'content')
        read_only_fields = ('id', 'created_by', 'created_at')


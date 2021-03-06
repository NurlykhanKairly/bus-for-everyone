from django.db import models
from auth1.models import *
from api.managers import FeedbackManager


# Create your models here.


class Feedback(models.Model):
    driver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='driver_feedback')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField(max_length=1000, default='')
    objects = FeedbackManager()

    class Meta:
        verbose_name = 'Feedback'
        verbose_name_plural = 'Feedbacks'

    def __str__(self):
        return f'{self.id}: {self.driver}'

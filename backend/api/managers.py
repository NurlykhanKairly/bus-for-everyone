from django.db import models


class FeedbackManager(models.Manager):
    def driver_feedbacks(self, driver):
        return super().get_queryset().order_by('-created_date').filter(driver=driver)
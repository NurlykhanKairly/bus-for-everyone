from api.views import *
from rest_framework import routers
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework import routers

router = routers.DefaultRouter()
router.register('feedback', FeedbackViewSet, basename='api')

urlpatterns = [
    path('feedbacks/<int:pk>/', FeedbackListViewSet.as_view({'get': 'feedback_to_driver'})),
]


urlpatterns += router.urls


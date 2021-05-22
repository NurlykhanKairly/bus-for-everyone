from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token


from auth1.views import *



urlpatterns = [
    path('login/', obtain_jwt_token),
    path('registerDriver/', RegisterDriverAPIView.as_view()),
    path('registerPassenger/', RegisterPassengerAPIView.as_view()),
    path('generate/', GenerateRegisterAPIView)
]

router = DefaultRouter()
router.register('drivers', DriverViewSet, basename='auth1')
router.register('passengers', PassengerViewSet, basename='auth1')


urlpatterns += router.urls
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import *
from rest_framework.views import APIView

# Create your views here.
class RegisterDriverAPIView(APIView):
    http_method_names = ['post']

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.isDriver = True
            user.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class RegisterPassengerAPIView(APIView):
    http_method_names = ['post']
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.isDriver = False
            user.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class DriverViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = DriverGetSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return User.objects.all().filter(isDriver=True)

    @action(methods=['GET'], detail=False)
    def me(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)



class PassengerViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PassengerGetSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return User.objects.all().filter(isDriver=False)

    @action(methods=['GET'], detail=False)
    def me(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class GenerateRegisterAPIView(APIView):
    http_method_names = ['post']

    def post(self, request):
        for i in range(2):
            serializer = UserSerializer(username="username", password="password")
            if serializer.is_valid():
                serializer.save()
        return Response("OK")
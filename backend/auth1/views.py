from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework import viewsets
from .serializers import *
from rest_framework.views import APIView
from auth1.send_push import send_push

# Create your views here.
class RegisterDriverAPIView(APIView):
    http_method_names = ['post']

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.isDriver = True
            user.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class RegisterPassengerAPIView(APIView):
    http_method_names = ['post']
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
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


class GetToken(APIView):
    http_method_names = ['get']
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            to = User.objects.get(id=int(request.data.get('id')))
            if to is not None:
                return Response(status=200, data=to.token)
        except Exception as e:
            return Response(status=400, data="Couldn't find driver")



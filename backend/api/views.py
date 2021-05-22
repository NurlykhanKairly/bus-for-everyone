from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework import mixins, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.views import APIView
from api.serializers import *
from api.utils import *
from rest_framework.decorators import action

class FeedbackListViewSet(mixins.RetrieveModelMixin,
                         viewsets.GenericViewSet):
    serializer_class = BaseFeedbackSerializer
    permission_classes = (IsAuthenticated,)

    @action(methods=['get'], detail=True)
    def feedback_to_driver(self, request, pk):
        comments = Feedback.objects.filter(driver=pk)
        serializer = self.get_serializer(comments, many=True)
        return Response(serializer.data)

class FeedbackViewSet(viewsets.ModelViewSet):
    serializer_class = BaseFeedbackSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Feedback.objects.all().filter()

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        if not has_permission(instance.created_by, self.request.user):
            return Response(serializer.data, status=status.HTTP_404_NOT_FOUND)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()

    def perform_create(self, serializer):
        print("CRARET")
        return serializer.save(created_by=self.request.user)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if not has_permission(instance.created_by, self.request.user):
            return Response(status=status.HTTP_404_NOT_FOUND)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

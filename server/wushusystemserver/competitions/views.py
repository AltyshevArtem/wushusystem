from django.shortcuts import render
from competitions.filterset.filterset import CompetitionsSetFilter
from competitions.serializers import *
from competitions.models import *
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerialize


class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerialize


class CompetitonViewSet(viewsets.ModelViewSet):
    queryset = Competition.objects.all()
    model = Competition
    serializer_class = CompetitonSerialize

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CompetitionsSetFilter


class CompetitionGroupViewSet(viewsets.ModelViewSet):
    queryset = CompetitionGroup.objects.all()
    serializer_class = CompetitionGroupSerialize

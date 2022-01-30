from django.shortcuts import render
from competitions.serializers import *
from competitions.models import *
from rest_framework import viewsets

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerialize

class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerialize

class CompetitonViewSet(viewsets.ModelViewSet):
    queryset = Competition.objects.all()
    serializer_class = CompetitonSerialize

class CompetitionGroupViewSet(viewsets.ModelViewSet):
    queryset = CompetitionGroup.objects.all()
    serializer_class = CompetitionGroupSerialize

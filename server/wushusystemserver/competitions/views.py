from django.shortcuts import render
from competitions.filterset.filterset import CategorySetFilter, CommandSetFilter, CompetitionGroupSetFilter, CompetitionsSetFilter
from competitions.serializers import *
from competitions.models import *
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter


class AgeCategoryViewSet(viewsets.ModelViewSet):
    queryset = AgeCategory.objects.all()
    model = AgeCategory
    serializer_class = AgeCategorySerialize


class NameCategoryViewSet(viewsets.ModelViewSet):
    queryset = NameCategory.objects.all()
    model = NameCategory
    serializer_class = NameCategorySerialize


class NameCategoryViewGet(viewsets.ModelViewSet):
    queryset = NameCategory.objects.all()
    model = NameCategory
    serializer_class = NameCategorySerializeGet


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    model = Category
    serializer_class = CategorySerialize

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CategorySetFilter


class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerialize


class CommandViewSet(viewsets.ModelViewSet):
    queryset = Command.objects.all()
    model = Command
    serializer_class = CommandSerialize

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CommandSetFilter


class CommandSerializeGet(viewsets.ModelViewSet):
    queryset = Command.objects.all()
    model = Command
    serializer_class = CommandSerializeGet

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CommandSetFilter


class CompetitionViewSetGet(viewsets.ModelViewSet):
    queryset = Competition.objects.all()
    model = Competition
    serializer_class = CompetitonSerializeGet

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CompetitionsSetFilter


class CompetitonViewSet(viewsets.ModelViewSet):
    queryset = Competition.objects.all()
    model = Competition
    serializer_class = CompetitonSerialize


class CompetitionGroupViewSet(viewsets.ModelViewSet):
    queryset = CompetitionGroup.objects.all()
    model = CompetitionGroup
    serializer_class = CompetitionGroupSerializeGet

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CompetitionGroupSetFilter


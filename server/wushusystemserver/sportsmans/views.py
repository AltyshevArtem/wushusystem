# DJANGO
from django.shortcuts import render
from django.db.models import Q
# SPORTSMAN
from sportsmans.models import *
from sportsmans.serializers import *
# REST_FRAMEWORK
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import OrderingFilter
# DJANGO_FILTERS
from django_filters import FilterSet, CharFilter
from django_filters.rest_framework import DjangoFilterBackend

class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()
    serializer_class = GenderSerialize


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerialize


class TrainerViewSet(viewsets.ModelViewSet):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerialize


class FederationViewSet(viewsets.ModelViewSet):
    queryset = Federation.objects.all()
    serializer_class = FederationSerialize


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerialize


class InsuranceViewSet(viewsets.ModelViewSet):
    queryset = Insurance.objects.all()
    serializer_class = InsuranceSerialize


class RankViewSet(viewsets.ModelViewSet):
    queryset = Rank.objects.all()
    serializer_class = RankSerialize


class Duan_CziViewSet(viewsets.ModelViewSet):
    queryset = Duan_Czi.objects.all()
    serializer_class = Duan_CziSerialize

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerialize


class PaginatorSportsman(PageNumberPagination):
    page_size = 50
    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'results' : data
        })

class SportsmanSetFilter(FilterSet):
    search = CharFilter(method="get_search")
    print(search)
    def get_search(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(name__icontains=value)|
                Q(surname__icontains=value)|
                Q(patronymic__icontains=value)|
                Q(city__name_of_city__icontains=value)
            )
        return queryset
# что будет в чекбоксе:
    # пол
    # клуб
    #TODO: дата рождения(не через чекбокс, но я пока убрал, хз как искать) - (через DateFilter отдельной функцией)
    # округ(в city модели он)
    # ранг обычный
    # ранг дуан цзи

class SportsmanViewSet(viewsets.ModelViewSet):
    queryset = Sportsman.objects.all()
    model = Sportsman
    serializer_class = SportsmanSerialize
    pagination_class = PaginatorSportsman
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = SportsmanSetFilter


class Rank_historyViewSet(viewsets.ModelViewSet):
    queryset = Rank_history.objects.all()
    serializer_class = Rank_historySerialize


class Trainer_historyViewSet(viewsets.ModelViewSet):
    queryset = Trainer_history.objects.all()
    serializer_class = Trainer_historySerialize


class Duan_Czi_historyViewSet(viewsets.ModelViewSet):
    queryset = Duan_Czi_history.objects.all()
    serializer_class = Duan_Czi_historySerialize


class Club_historyViewSet(viewsets.ModelViewSet):
    queryset = Club_history.objects.all()
    serializer_class = Club_historySerialize
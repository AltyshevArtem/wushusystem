# DJANGO
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


class FederalRegionViewSet(viewsets.ModelViewSet):
    queryset = Federal_Region.objects.all
    serializer_class = FederalRegionSerialize


class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerialize


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


class PassportViewSet(viewsets.ModelViewSet):
    queryset = Passport.objects.all()
    serializer_class = PassportSerialize


class Birth_CertificateViewSet(viewsets.ModelViewSet):
    queryset = Birth_Certificate.objects.all()
    serializer_class = Birth_CertificateSerialize


class OMSViewSet(viewsets.ModelViewSet):
    queryset = OMS.objects.all()
    serializer_class = OMSSerialize


class Proxy_docViewSet(viewsets.ModelViewSet):
    queryset = Proxy_doc.objects.all()
    serializer_class = Proxy_docSerialize


class PaginatorSportsman(PageNumberPagination):
    page_size = 30

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'page_size': self.page_size,
            'count': self.page.paginator.count,
            'results': data
        })


class SportsmanSetFilter(FilterSet):
    name = CharFilter(method="get_name")
    gender = CharFilter(method="get_gender")
    club = CharFilter(method="get_club")
    city = CharFilter(method="get_city")
    trainer = CharFilter(method="get_trainer")
    rank = CharFilter(method="get_rank")
    duan_czi = CharFilter(method="get_duan_czi")

    def get_name(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(name__icontains=value) |
                Q(surname__icontains=value) |
                Q(patronymic__icontains=value)
            )
        return queryset

    def get_gender(self, queryset, name, value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')  # парсим queryset
            querysetresult = Sportsman.objects.none()  # создание пустого queryset-a
            for value in value_list:
                temp_query = queryset.filter(
                    Q(gender__name_of_gender__icontains=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_club(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')  # парсим queryset
            querysetresult = Sportsman.objects.none()  # создание пустого queryset-a
            for value in value_list:
                temp_query = queryset.filter(
                    Q(club__name_of_club__icontains=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_city(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')  # парсим queryset
            querysetresult = Sportsman.objects.none()  # создание пустого queryset-a
            for value in value_list:
                temp_query = queryset.filter(
                    Q(city__name_of_city__icontains=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_trainer(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')  # парсим queryset
            querysetresult = Sportsman.objects.none()  # создание пустого queryset-a
            for value in value_list:
                temp_query = queryset.filter(
                    Q(trainer__name__icontains=value) |
                    Q(trainer__surname__icontains=value) |
                    Q(trainer__patronymic__icontains=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_rank(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')  # парсим queryset
            querysetresult = Sportsman.objects.none()  # создание пустого queryset-a
            for value in value_list:
                temp_query = queryset.filter(
                    Q(rank__name_of_rank__icontains=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_duan_czi(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')  # парсим queryset
            querysetresult = Sportsman.objects.none()  # создание пустого queryset-a
            for value in value_list:
                temp_query = queryset.filter(
                    Q(duan_czi__name_of_rank__icontains=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

# TODO:Подумать над фильтрацией даты со стороны клиента и сервера (через DateFilter отдельной функцией)

# TODO:Разнести бы на файлы:
# 1) Основные ViewSet-ы которые есть в запросах
# 2) Дополнительные ViewSet-ы
# 3) SetFilter-ы
# 4) Пагинации


class SportsmanViewSet(viewsets.ModelViewSet):
    queryset = Sportsman.objects.all()
    model = Sportsman
    serializer_class = SportsmanSerialize
    pagination_class = PaginatorSportsman

    # параметры фильтрации
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

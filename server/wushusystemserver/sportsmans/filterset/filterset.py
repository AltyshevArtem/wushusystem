# DJANGO
from django.db.models import Q
# SPORTSMAN
from sportsmans.models import *
# DJANGO_FILTERS
from django_filters import FilterSet, CharFilter

class SportsmanSetFilter(FilterSet):
    name = CharFilter(method="get_name")
    gender = CharFilter(method="get_gender")
    club = CharFilter(method="get_club")
    city = CharFilter(method="get_city")
    trainer = CharFilter(method="get_trainer")
    rank = CharFilter(method="get_rank")
    duan_czi = CharFilter(method="get_duan_czi")
    get_federal_region_name = CharFilter(field_name='federal_region', method="get_federal_region")
    get_region_name = CharFilter(field_name='region', method="get_region")

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
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                temp_query = queryset.filter(
                    Q(gender__name_of_gender__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_club(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                temp_query = queryset.filter(
                    Q(club__name_of_club__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_city(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                temp_query = queryset.filter(
                    Q(city__name_of_city__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_trainer(self, queryset, name,  value):
        if value:
            print(value)
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                fio_arr = value.split(' ')
                temp_query = queryset.filter(
                    Q(trainer__name__iexact=fio_arr[1]) |
                    Q(trainer__surname__iexact=fio_arr[0]) |
                    Q(trainer__patronymic__iexact=fio_arr[2])
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_rank(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                temp_query = queryset.filter(
                    Q(rank__name_of_rank__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_duan_czi(self, queryset, name,  value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                temp_query = queryset.filter(
                    Q(duan_czi__name_of_rank__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_federal_region(self, queryset, name, value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                print(value)
                temp_query = queryset.filter(
                    Q(city__name_of_region__name_of_federal_region__name_of_federal_region__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

    def get_region(self, queryset, name, value):
        if value:
            value_list = value.replace('[', "").replace(']', "").replace(
                "'", "").split(',')
            querysetresult = Sportsman.objects.none()
            for value in value_list:
                print(value)
                temp_query = queryset.filter(
                    Q(city__name_of_region__name_of_region__iexact=value)
                )
                querysetresult = querysetresult | temp_query
            queryset = querysetresult
        return queryset

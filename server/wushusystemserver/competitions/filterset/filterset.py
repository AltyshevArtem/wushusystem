# DJANGO
from django.db.models import Q
# COMPETITIONS
from competitions.models import *
# DJANGO_FILTERS
from django_filters import FilterSet, CharFilter, NumberFilter


class CategorySetFilter(FilterSet):
    category_name = CharFilter(method="get_category")
    age_category = CharFilter(method="get_category")

    def get_category(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(category_name__icontains=value) |
                Q(age_category__icontains=value)
            )
        return queryset


class CompetitionsSetFilter(FilterSet):
    name_of_competition = CharFilter(method="get_competitions")
    competition_group_day = CharFilter(method="get_competitiongroup_day")
    competition_group_area = CharFilter(method="get_competitiongroup_area")

    def get_competitiongroup_day(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(competition_group__day__icontains=value)
            )

    def get_competitiongroup_day(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(competition_group__area__icontains=value)
            )

    def get_competitions(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(name_of_competition__icontains=value)
            )
        return queryset


class CommandSetFilter(FilterSet):
    name_of_command = CharFilter(method="get_commands")
    sportsmans = CharFilter(method="get_sportsman")

    def get_commands(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(name_of_command__icontains=value)
            )
        return queryset

    def get_sportsman(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(sportsmans__name__icontains=value) |
                Q(sportsmans__surname__icontains=value) |
                Q(sportsmans__patronymic__icontains=value)
            )
        return queryset


class CompetitionGroupSetFilter(FilterSet):
    category = CharFilter(method="get_competitionGroup_category")
    competition_day = NumberFilter(method="get_competitionGroup_day")
    competition_area = NumberFilter(method="get_competitionGroup_area")

    def get_competitionGroup_category(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(category__category_name__icontains=value) |
                Q(category__age_category__icontains=value)
            )
        return queryset

    def get_competitionGroup_day(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(competition_day__iexact=value)
            )
        return queryset

    def get_competitionGroup_area(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(competition_area__iexact=value)
            )
        return queryset

# DJANGO
from django.db.models import Q
# COMPETITIONS
from competitions.models import *
# DJANGO_FILTERS
from django_filters import FilterSet, CharFilter


class CompetitionsSetFilter(FilterSet):
    name_of_competition = CharFilter(method="get_competitions")

    def get_competitions(self, queryset, name, value):
        if value:
            queryset = queryset.filter(
                Q(name_of_competition__icontains=value)
            )
        return queryset

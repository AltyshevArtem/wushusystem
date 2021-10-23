# SPORTSMAN
from sportsmans.models import *
from sportsmans.serializers import *
# REST_FRAMEWORK
from rest_framework import viewsets
from rest_framework.filters import OrderingFilter
# DJANGO_FILTERS
from django_filters.rest_framework import DjangoFilterBackend
# PAGINATOR
from .paginator import *
# FILTERSET
from .filterset import *


class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()
    serializer_class = GenderSerialize


class FederalRegionViewSet(viewsets.ModelViewSet):
    queryset = Federal_Region.objects.all()
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

class SportsmanViewSet(viewsets.ModelViewSet):
    queryset = Sportsman.objects.all()
    model = Sportsman
    serializer_class = SportsmanSerialize
    # pagination_class = PaginatorSportsman

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

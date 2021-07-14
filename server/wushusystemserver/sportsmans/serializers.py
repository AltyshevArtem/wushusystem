from django.db.models import fields
from rest_framework import serializers
from sportsmans.models import *


class GenderSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Gender
        fields = "__all__"

class FederalRegionSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Federal_Region
        fields = "__all__"
class RegionSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    name_of_federal_region = FederalRegionSerialize()
    class Meta:
        model = Region
        fields = "__all__"


class CitySerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    name_of_region = RegionSerialize()
    class Meta:
        model = City
        fields = "__all__"


class TrainerSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Trainer
        fields = "__all__"


class FederationSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    name_of_region = RegionSerialize()
    class Meta:
        model = Federation
        fields = "__all__"


class ClubSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    federation = FederationSerialize()
    class Meta:
        model = Club
        fields = "__all__"


class InsuranceSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Insurance
        fields = "__all__"


class RankSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Rank
        fields = "__all__"




class Duan_CziSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Duan_Czi
        fields = "__all__"

class PassportSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Passport
        fields = "__all__"

class Birth_CertificateSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Birth_Certificate
        fields = "__all__"

class OMSSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = OMS
        fields = "__all__"


class Proxy_docSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Proxy_doc
        fields = "__all__"

class SportsmanSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    city = CitySerialize()
    trainer = TrainerSerialize()
    insurance = InsuranceSerialize()
    club = ClubSerialize()
    passport = PassportSerialize()
    birth_certificate = Birth_CertificateSerialize()
    proxy = Proxy_docSerialize()
    oms = OMSSerialize()

    class Meta:
        model = Sportsman
        fields = "__all__"


class Rank_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_rank = RankSerialize()

    class Meta:
        model = Rank_history
        fields = "__all__"


class Trainer_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_trainer = TrainerSerialize()

    class Meta:
        model = Trainer_history
        fields = "__all__"


class Duan_Czi_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_duan_czi = Duan_CziSerialize()

    class Meta:
        model = Duan_Czi_history
        fields = "__all__"


class Club_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_club = ClubSerialize()

    class Meta:
        model = Club_history
        fields = "__all__"
from django.db.models import fields
from rest_framework import serializers
from sportsmans.models import *


class GenderSerialize(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = "__all__"

class FederalRegionSerialize(serializers.ModelSerializer):
    class Meta:
        model = Federal_Region
        fields = "__all__"
class RegionSerialize(serializers.ModelSerializer):
    name_of_federal_region = FederalRegionSerialize()
    class Meta:
        model = Region
        fields = "__all__"


class CitySerialize(serializers.ModelSerializer):
    name_of_region = RegionSerialize()
    class Meta:
        model = City
        fields = "__all__"


class TrainerSerialize(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = "__all__"


class FederationSerialize(serializers.ModelSerializer):
    name_of_region = RegionSerialize()
    class Meta:
        model = Federation
        fields = "__all__"


class ClubSerialize(serializers.ModelSerializer):
    federation = FederationSerialize()
    class Meta:
        model = Club
        fields = "__all__"


class InsuranceSerialize(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = "__all__"


class RankSerialize(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = "__all__"


class Duan_CziSerialize(serializers.ModelSerializer):
    class Meta:
        model = Duan_Czi
        fields = "__all__"


class SportsmanSerialize(serializers.ModelSerializer):
    city = CitySerialize()
    trainer = TrainerSerialize()
    insurance = InsuranceSerialize()
    club = ClubSerialize()

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
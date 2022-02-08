from typing_extensions import Required
from django.db.models import fields
from rest_framework import serializers
from competitions.models import *
from sportsmans.serializers import TrainerSerialize, RegionSerialize, SportsmanSerialize


class CategorySerialize(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class DisciplineSerialize(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = "__all__"


class CompetitonSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    main_judje = TrainerSerialize(required=False)
    competition_region = RegionSerialize(required=False, many=True)

    class Meta:
        model = Competition
        fields = "__all__"


class CompetitionGroupSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    competition = CompetitonSerialize(required=False)
    category = CategorySerialize(required=False)
    discipline = DisciplineSerialize(required=False)
    judjes = TrainerSerialize(required=False, many=True)
    sportsmans = SportsmanSerialize(required=False, many=True)

    class Meta:
        model = CompetitionGroup
        fields = "__all__"

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

    def update(self, instance, validated_data):
        instance.name_of_competition = validated_data.get(
            'name_of_competition', instance.name_of_competition)
        instance.description_of_competition = validated_data.get(
            'description_of_competition', instance.description_of_competition)
        instance.venue_of_competition = validated_data.get(
            'venue_of_competition', instance.venue_of_competition)
        instance.competition_date_start = validated_data.get(
            'competition_date_start', instance.competition_date_start)
        instance.competition_date_end = validated_data.get(
            'competition_date_end', instance.competition_date_end)
        instance.registration_start = validated_data.get(
            'registration_start', instance.registration_start)
        instance.registration_end = validated_data.get(
            'registration_end', instance.registration_end)
        instance.competition_days = validated_data.get(
            'competition_days', instance.competition_days)
        instance.competition_areas = validated_data.get(
            'competition_areas', instance.competition_areas)



        if(validated_data.get('main_judje') is not None):
            trainer_data = validated_data.pop('main_judje')
            trainer = JudjeTrainer.objects.get(id=trainer_data['id'])
            instance.main_judje = trainer
            instance.main_judje.save()

        instance.save()

        return instance

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

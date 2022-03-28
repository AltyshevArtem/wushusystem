from typing_extensions import Required
from attr import validate
from django.db.models import fields
from rest_framework import serializers
from competitions.models import *
from sportsmans.serializers import FederalRegionSerialize, TrainerSerialize, RegionSerialize, SportsmanSerialize


class AgeCategorySerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = AgeCategory
        fields = "__all__"


class NameCategorySerialize(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = NameCategory
        fields = "__all__"


class CategorySerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category_age = AgeCategorySerialize(required=False, many=True)
    category_name = NameCategorySerialize(
        queryset=NameCategory.objects.all(), many=True)

    class Meta:
        model = Category
        fields = "__all__"


class DisciplineSerialize(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = "__all__"


class CommandSerializeSet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    sportsmans = serializers.PrimaryKeyRelatedField(
        required=False, many=True, queryset=Sportsman.objects.all())

    def update(self, instance, validated_data):
        instance.name_of_command = validated_data.get(
            'name_of_command', instance.name_of_command)
        instance.date_of_create = validated_data.get(
            'date_of_create', instance.date_of_create)

        print(validated_data)
        if (validated_data.get('sportsmans') is not None):
            sportsmans_data = validated_data.pop('sportsmans')
            print(sportsmans_data)
            instance.sportsmans.clear()
            for sportsman in sportsmans_data:
                instance.sportsmans.add(
                    Sportsman.objects.get(id=sportsman.id))

        instance.save()

        return instance

    class Meta:
        model = Command
        fields = "__all__"


class CommandSerializeGet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    sportsmans = SportsmanSerialize(required=False, many=True)

    class Meta:
        model = Command
        fields = "__all__"


class CommandSerialize(serializers.PrimaryKeyRelatedField):
    id = serializers.IntegerField(required=False)
    sportsmans = SportsmanSerialize(many=True)

    class Meta:
        model = Command
        fields = "__all__"


class CompetitionGroupSerialize(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category = CategorySerialize(required=False)
    discipline = DisciplineSerialize(required=False)
    judjes = TrainerSerialize(required=False, many=True)
    sportsmans = SportsmanSerialize(required=False, many=True)

    def create(self, validated_data):
        if(validated_data.get('category') is not None):
            category_data = validated_data.pop('category')
            category = Category.objects.get(id=category_data['id'])
        else:
            category = None

        if(validated_data.get('competition') is not None):
            competition_data = validated_data.pop('competition')
            competition = Competition.objects.get(id=competition_data['id'])
        else:
            competition = None

        competition_group = CompetitionGroup.objects.create(
            category=category, competition=competition, **validated_data)

        return competition_group

    class Meta:
        model = CompetitionGroup
        fields = "__all__"


class CompetitonSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    main_judje = TrainerSerialize(required=False)
    name_category = NameCategorySerialize(
        required=False, many=True, queryset=NameCategory.objects.all())
    commands = CommandSerialize(
        required=False, many=True, queryset=Command.objects.all())
    competition_group = CompetitionGroupSerialize(
        required=False, many=True, queryset=CompetitionGroup.objects.all())

    def create(self, validated_data):
        if(validated_data.get('main_judje') is not None):
            trainer_data = validated_data.pop('main_judje')
            trainer = JudjeTrainer.objects.get(id=trainer_data['id'])
        else:
            trainer = None

        if (validated_data.get('name_category') is not None):
            name_category_data = validated_data.pop('name_category')

        if (validated_data.get('commands') is not None):
            commands_data = validated_data.pop('commands')

        if (validated_data.get('competition_group') is not None):
            validated_data.pop('competition_group')

        competition = Competition.objects.create(
            main_judje=trainer, **validated_data)

        for command in commands_data:
            competition.commands.add(
                Command.objects.get(name_of_command=command))

        for name in name_category_data:
            competition.name_category.add(
                NameCategory.objects.get(name_category=name))
            for category in Category.objects.filter(category_name=name):
                competition_group_data = CompetitionGroup.objects.create(
                    category=category)
                competition.competition_group.add(competition_group_data)

        return competition

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

        if (validated_data.get('commands') is not None):
            commands_data = validated_data.pop('commands')
            instance.commands.clear()
            for command in commands_data:
                instance.commands.add(
                    Command.objects.get(name_of_command=command))

        instance.save()

        return instance

    class Meta:
        model = Competition
        fields = "__all__"


class NameCategorySerializeGet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = NameCategory
        fields = "__all__"


class CategorySerializeGet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category_age = AgeCategorySerialize(required=False)
    category_name = NameCategorySerializeGet(required=False)

    class Meta:
        model = Category
        fields = "__all__"


class CompetitionGroupSerializeGet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category = CategorySerializeGet(required=False)
    discipline = DisciplineSerialize(required=False)
    judjes = TrainerSerialize(required=False, many=True)
    sportsmans = SportsmanSerialize(required=False, many=True)

    class Meta:
        model = CompetitionGroup
        fields = "__all__"


class CompetitonSerializeGet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    main_judje = TrainerSerialize(required=False)
    name_category = NameCategorySerializeGet(required=False, many=True)
    commands = CommandSerializeGet(required=False, many=True)
    competition_group = CompetitionGroupSerializeGet(required=False, many=True)

    class Meta:
        model = Competition
        fields = "__all__"

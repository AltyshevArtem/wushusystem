from rest_framework import serializers
from competitions.models import *
from sportsmans.serializers import TrainerSerialize, SportsmanSerialize


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


class CommandSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    sportsmans = serializers.PrimaryKeyRelatedField(
        required=False, many=True, queryset=Sportsman.objects.all())

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
    name_category = serializers.PrimaryKeyRelatedField(
        required=False, many=True, queryset=NameCategory.objects.all())
    commands = serializers.PrimaryKeyRelatedField(
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

        # Общий список спортсменов из всех команд
        listSportsmans = []

        for command in commands_data:
            command_data = Command.objects.get(id=command.id)
            competition.commands.add(command_data)
            for sportsman in command.sportsmans.all():
                if sportsman not in listSportsmans:
                    listSportsmans.append(sportsman)

        for name in name_category_data:
            competition.name_category.add(
                NameCategory.objects.get(name_category=name))

            for category in Category.objects.filter(category_name=name):
                competition_group_data = CompetitionGroup.objects.create(
                    category=category)

                gender = category.gender.name_of_gender
                from_age = category.category_age.from_age
                on_age = category.category_age.on_age

                for sportsman in listSportsmans:
                    if sportsman.gender.name_of_gender == gender:
                        if from_age <= sportsman.age() < on_age:
                            competition_group_data.sportsmans.add(
                                sportsman)

                competition.competition_group.add(competition_group_data)

        return competition

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

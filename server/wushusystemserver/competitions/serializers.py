from rest_framework import serializers
from competitions.models import *
from sportsmans.serializers import TrainerSerialize, SportsmanSerialize


class AgeCategorySerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = AgeCategory
        fields = "__all__"


class NameCategorySerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = NameCategory
        fields = "__all__"


class CategorySerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category_age = AgeCategorySerialize(required=False)
    category_name = NameCategorySerialize(required=False)

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


class CompetitionGroupSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category = CategorySerialize(required=False)
    discipline = DisciplineSerialize(required=False)
    judjes = serializers.PrimaryKeyRelatedField(
        required=False, many=True, queryset=JudjeTrainer.objects.all())
    sportsmans = serializers.PrimaryKeyRelatedField(
        required=False, many=True, queryset=Sportsman.objects.all())

    # def create(self, validated_data):
    #     if(validated_data.get('category') is not None):
    #         category_data = validated_data.pop('category')
    #         category = Category.objects.get(id=category_data['id'])
    #     else:
    #         category = None

    #     if(validated_data.get('competition') is not None):
    #         competition_data = validated_data.pop('competition')
    #         competition = Competition.objects.get(id=competition_data['id'])
    #     else:
    #         competition = None

    #     competition_group = CompetitionGroup.objects.create(
    #         category=category, competition=competition, **validated_data)

    #     return competition_group

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
    competition_group = serializers.PrimaryKeyRelatedField(
        required=False, many=True, queryset=CompetitionGroup.objects.all())

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

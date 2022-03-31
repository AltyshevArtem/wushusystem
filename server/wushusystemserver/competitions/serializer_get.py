from competitions.serializers import *


class CommandSerializeGet(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    sportsmans = SportsmanSerialize(required=False, many=True)

    class Meta:
        model = Command
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

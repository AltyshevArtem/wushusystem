from django.shortcuts import get_object_or_404, render
from competitions.filterset.filterset import CategorySetFilter, CommandSetFilter, CompetitionGroupSetFilter, CompetitionsSetFilter
from competitions.serializers import *
from competitions.serializer_get import *
from competitions.models import *
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework.response import Response


class AgeCategoryViewSet(viewsets.ModelViewSet):
    queryset = AgeCategory.objects.all()
    model = AgeCategory
    serializer_class = AgeCategorySerialize


class NameCategoryViewSet(viewsets.ModelViewSet):
    queryset = NameCategory.objects.all()
    model = NameCategory
    serializer_class = NameCategorySerialize


class NameCategoryViewGet(viewsets.ModelViewSet):
    queryset = NameCategory.objects.all()
    model = NameCategory
    serializer_class = NameCategorySerializeGet


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    model = Category
    serializer_class = CategorySerialize

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CategorySetFilter


class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerialize


class CommandViewSet(viewsets.ModelViewSet):
    queryset = Command.objects.all()
    model = Command
    serializer_class = CommandSerialize

    def list(self, request):
        queryset = Command.objects.all()
        serializer = CommandSerializeGet(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Command.objects.all()
        command = get_object_or_404(queryset, pk=pk)
        serializer = CommandSerializeGet(command)
        return Response(serializer.data)

    def update(self, request, pk=None):
        queryset = Command.objects.all()
        command = get_object_or_404(queryset, pk=pk)

        if (request.data.get('name_of_command') is not None):
            command.name_of_command = request.data.get(
                'name_of_command')

        if (request.data.get('date_of_create') is not None):
            command.date_of_create = request.data.get(
                'date_of_create')

        if (request.data.getlist('sportsmans') != []):
            command.sportsmans.clear()
            for sportsman in request.data.getlist('sportsmans'):
                command.sportsmans.add(
                    Sportsman.objects.get(id=sportsman))

        command.save()
        serializer = CommandSerializeGet(command)
        return Response(serializer.data)

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CommandSetFilter


class CompetitonViewSet(viewsets.ModelViewSet):
    queryset = Competition.objects.all()
    model = Competition
    serializer_class = CompetitonSerialize

    def list(self, request):
        queryset = Competition.objects.all()
        serializer = CompetitonSerializeGet(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Competition.objects.all()
        competition = get_object_or_404(queryset, pk=pk)
        serializer = CompetitonSerializeGet(competition)
        return Response(serializer.data)

    def update(self, request, pk=None):
        queryset = Competition.objects.all()
        competition = get_object_or_404(queryset, pk=pk)

        if (request.data.get('name_of_competition') is not None):
            competition.name_of_competition = request.data.get(
                'name_of_competition')

        if (request.data.get('description_of_competition') is not None):
            competition.description_of_competition = request.data.get(
                'description_of_competition')

        if (request.data.get('venue_of_competition') is not None):
            competition.venue_of_competition = request.data.get(
                'venue_of_competition')

        if (request.data.get('competition_date_start') is not None):
            competition.competition_date_start = request.data.get(
                'competition_date_start')

        if (request.data.get('competition_date_end') is not None):
            competition.competition_date_end = request.data.get(
                'competition_date_end')

        if (request.data.get('registration_start') is not None):
            competition.registration_start = request.data.get(
                'registration_start')

        if (request.data.get('registration_end') is not None):
            competition.registration_end = request.data.get(
                'registration_end')

        if (request.data.get('competition_days') is not None):
            competition.competition_days = request.data.get(
                'competition_days')

        if (request.data.get('competition_areas') is not None):
            competition.competition_areas = request.data.get(
                'competition_areas')

        if (request.data.get('main_judje.id') is not None):
            trainer = JudjeTrainer.objects.get(
                id=request.data.get('main_judje.id'))
            competition.main_judje = trainer
            competition.main_judje.save()

        if (request.data.getlist('commands') != []):
            competition.commands.clear()
            for command in request.data.getlist('commands'):
                competition.commands.add(
                    Command.objects.get(id=command))

        if (request.data.getlist('name_category') != []):
            competition.name_category.clear()
            for name_category in request.data.getlist('name_category'):
                competition.name_category.add(
                    NameCategory.objects.get(id=name_category))

        competition.save()
        serializer = CompetitonSerializeGet(competition)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        competition_data = request.data
        if(competition_data.get('main_judje.id') is not None):
            trainer = JudjeTrainer.objects.get(
                id=request.data.get('main_judje.id'))
        else:
            trainer = None

        if(competition_data.getlist('commands') != []):
            commands = competition_data.getlist('commands')
        else:
            commands = None

        if(competition_data.getlist('name_category') != []):
            list_nameCategory = competition_data.getlist('name_category')
        else:
            list_nameCategory = None

        competition = Competition.objects.create(
            name_of_competition=competition_data.get('name_of_competition'),
            description_of_competition=competition_data.get(
                'description_of_competition'),
            venue_of_competition=competition_data.get('venue_of_competition'),
            competition_date_start=competition_data.get(
                'competition_date_start'),
            competition_date_end=competition_data.get('competition_date_end'),
            registration_start=competition_data.get('registration_start'),
            registration_end=competition_data.get('registration_end'),
            competition_days=competition_data.get('competition_days'),
            competition_areas=competition_data.get('competition_areas'),
            main_judje=trainer)

        # Общий список спортсменов из всех команд
        listSportsmans = []

        for command in commands:
            command_data = Command.objects.get(id=command)
            competition.commands.add(command_data)
            for sportsman in command_data.sportsmans.all():
                if sportsman not in listSportsmans:
                    listSportsmans.append(sportsman)

        for name in list_nameCategory:
            competition.name_category.add(
                NameCategory.objects.get(id=name))

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

        competition.save()
        serializer = CompetitonSerializeGet(competition)
        return Response(serializer.data)

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CompetitionsSetFilter


class CompetitionGroupViewSet(viewsets.ModelViewSet):
    queryset = CompetitionGroup.objects.all()
    model = CompetitionGroup
    serializer_class = CompetitionGroupSerializeGet

    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filterset_class = CompetitionGroupSetFilter

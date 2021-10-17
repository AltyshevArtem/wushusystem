from django.db import models
from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey
from sportsmans.models import JudjeTrainer, Region, Gender, Sportsman 


# Create your models here.

class Category(models.Model):
    category_name = models.TextField(
        blank=True,
        verbose_name="Вид выступления"
        #Даошу
    )
    age_category = models.TextField(
        blank=True,
        verbose_name="Возрастной диапазон"
        #Юниоры (15-17 лет)
    )

    def __str__(self):
        return "%s, %s" % (self.category_name, self.age_category)

    class Meta:
        verbose_name = "Соревновательная категория"
        verbose_name_plural = "Соревновательные категории"


class Discipline(models.Model):
    discipline_name = models.TextField(
        blank=True,
        verbose_name="Дисциплина соревнований"
    )

    def __str__(self):
        return "%s" % self.discipline_name
    class Meta:
        verbose_name = "Дисплина соревнований"
        verbose_name_plural = "Дисплина соревнований"

class CompetitionGroup(models.Model):
    category = models.ForeignKey(
        Category,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Соревновательная категория"
    )
    gender = models.ForeignKey(
        Gender,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Пол"
    )
    discipline = models.ForeignKey(
        Discipline,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Дисциплина"
    )
    duration = models.IntegerField(
        blank=True,
        verbose_name="Длительность выступления одного человека"
    )
    judjes = models.ForeignKey(
        JudjeTrainer,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Судьи обсуживающие соревновательную группу"
    )
    sportsmans = models.ForeignKey(
        Sportsman,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Список спортсменов учствующих в группе"
    )

    def __str__(self):
        return "%s" % self.category

    class Meta:
        verbose_name = "Соревновательная группа"
        verbose_name_plural = "Соревновательные группы"

class Competiton(models.Model):
    name_of_competition = models.TextField(
       blank=False,
       verbose_name="Название соревнования" 
    )
    description_of_competition = models.TextField(
        blank=True,
        verbose_name="Описание соревнования"
    )
    venue_of_competition = models.TextField(
        blank=False,
        verbose_name="Место проведения соревнования"
    )
    competition_date_start = models.DateField(
        blank=True,
        verbose_name="Дата начала соревнования"
    )
    competition_date_end = models.DateField(
        blank=True,
        verbose_name="Дата конца соревнований"
    )
    competition_days = models.DateField(
        blank=True,
        verbose_name="Соревновательные дни"
    )
    #Дата начала + дата конца
    registration_start = models.DateTimeField(
        blank=True,
        verbose_name="Дата начала регистрации"
    )
    registration_end = models.DateTimeField(
        blank=True,
        verbose_name="Дата конца регистрации"
    )
    number_of_competition_areas = models.IntegerField(
        blank=True,
        verbose_name="Количество ковров"
    )
    main_judje = models.ForeignKey(
        JudjeTrainer,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Главный судья соревнований"
    )
    competition_region = models.ForeignKey(
        Region,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Регионы участвующие на соревнованиях"
    )
    group = models.ForeignKey(
        CompetitionGroup,
        blank=False,
        on_delete=models.CASCADE,
        verbose_name="Выбор соревновательных групп"
    )

    def __str__(self):
        return "%s, %s" % (self.name_of_competition, self.competition_days)

    class Meta:
        verbose_name = "Соревнования"
        verbose_name_plural = "Соревнования"

class Schedule(models.Model):
    competition = models.OneToOneField(
        Competiton,
        blank=False,
        on_delete = models.CASCADE,
        verbose_name="Соревнование"
    )
    group = models.OneToOneField(
        CompetitionGroup,
        blank=False,
        on_delete=models.CASCADE,
        verbose_name="Соревновательная группа"
    )
    competition_area = models.IntegerField(
        blank=False,
        verbose_name="Ковёр"
    )
    time_start = models.TimeField(
        blank=False,
        verbose_name="Время начала"
    )
    time_end = models.TimeField(
        blank=False,
        verbose_name="Время окончания"
    )

    def __str__(self):
        return "%s, %s" % (self.competition, self.group)

    class Meta:
        verbose_name = "Расписание"
        verbose_name_plural = "Расписание"
from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey
from sportsmans.models import Federal_Region, JudjeTrainer, Region, Gender, Sportsman


# Create your models here.
class AgeCategory(models.Model):
    from_age = models.IntegerField(
        blank=True,
        verbose_name="от"
    )
    on_age = models.IntegerField(
        blank=True,
        verbose_name="до"
    )

    def __str__(self):
        return "%s - %s" % (self.from_age, self.on_age)

    class Meta:
        verbose_name = "Возрастная группа"
        verbose_name_plural = "Возрастные группы"


class NameCategory(models.Model):
    name_category = models.TextField(
        blank=True,
        verbose_name="Вид выступления"
    )

    def __str__(self):
        return "%s" % (self.name_category)

    class Meta:
        verbose_name = "Вид выступления"
        verbose_name_plural = "Виды выступлений"


class Category(models.Model):
    category_name = models.ForeignKey(
        NameCategory,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Вид выступления"
        # Даошу
    )
    gender = models.ForeignKey(
        Gender,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Пол"
    )
    category_age = models.ForeignKey(
        AgeCategory,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Возрастной диапазон"
        # Юниоры (15-17 лет)
    )

    def __str__(self):
        return "%s %s %s" % (self.category_name, self.category_age, self.gender)

    class Meta:
        verbose_name = "Программа выступления"
        verbose_name_plural = "Программы выступлений"


class Discipline(models.Model):
    discipline_name = models.TextField(
        blank=True,
        verbose_name="Дисциплина соревнований"
    )

    def __str__(self):
        return "%s" % self.discipline_name

    class Meta:
        verbose_name = "Дисциплина соревнований"
        verbose_name_plural = "Дисциплины соревнований"


class Command(models.Model):
    name_of_command = models.TextField(
        blank=False, verbose_name="Название команды")
    date_of_create = models.DateField(blank=True,
                                      null=True,
                                      verbose_name="Дата создания соревнования")
    sportsmans = models.ManyToManyField(Sportsman,
                                        blank=True,
                                        verbose_name="Список спортсменов в команде")

    def size(self):
        self.sportsmans.length

    def __str__(self):
        return "%s" % self.name_of_command

    class Meta:
        verbose_name = "Команда"
        verbose_name_plural = "Команды"


class CompetitionGroup(models.Model):
    category = models.ForeignKey(
        Category,
        blank=False,
        null=True,
        on_delete=models.CASCADE,
        verbose_name="Программа выступлений"
    )
    competition_day = models.IntegerField(
        blank=True,
        null=True,
        verbose_name="Выбрать день для выступления"
    )
    competition_area = models.IntegerField(
        blank=True,
        null=True,
        verbose_name="Выбрать ковёр для выступления"
    )
    performance_number = models.IntegerField(
        blank=True,
        null=True,
        verbose_name="Номер группы по порядку"
    )
    time_start = models.TimeField(
        blank=True,
        null=True,
        verbose_name="Время начала"
    )
    time_end = models.TimeField(
        blank=True,
        null=True,
        verbose_name="Время окончания"
    )
    discipline = models.ForeignKey(
        Discipline,
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        verbose_name="Дисциплина"
    )
    duration = models.IntegerField(
        blank=True,
        null=True,
        verbose_name="Длительность выступления одного человека"
    )
    judjes = models.ManyToManyField(
        JudjeTrainer,
        blank=True,
        verbose_name="Судьи обслуживающие соревновательную группу"
    )
    sportsmans = models.ManyToManyField(
        Sportsman,
        blank=True,
        verbose_name="Список спортсменов участвующих в группе"
    )

    def __str__(self):
        return "%s" % self.category

    class Meta:
        verbose_name = "Соревновательная группа"
        verbose_name_plural = "Соревновательные группы"


class Competition(models.Model):
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
        null=True,
        verbose_name="Дата начала соревнования"
    )
    competition_date_end = models.DateField(
        blank=True,
        null=True,
        verbose_name="Дата конца соревнований"
    )
    registration_start = models.DateTimeField(
        blank=True,
        null=True,
        verbose_name="Дата начала регистрации"
    )
    registration_end = models.DateTimeField(
        blank=True,
        null=True,
        verbose_name="Дата конца регистрации"
    )
    competition_days = models.IntegerField(
        blank=True,
        null=True,
        verbose_name="Задать количество соревновательных дней"
    )
    competition_areas = models.IntegerField(
        blank=True,
        null=True,
        verbose_name="Задать количество соревновательных ковров"
    )
    main_judje = models.ForeignKey(
        JudjeTrainer,
        blank=True,
        null=True,
        on_delete=models.CASCADE,
        verbose_name="Главный судья соревнований"
    )
    # competition_region = models.ManyToManyField(
    #     Federal_Region,
    #     blank=True,
    #     verbose_name="Федеральные регионы участвующие на соревнованиях"
    # )
    commands = models.ManyToManyField(
        Command,
        blank=True,
        verbose_name="Список команд"
    )
    competition_group = models.ManyToManyField(
        CompetitionGroup,
        blank=True,
        verbose_name="Соревновательные группы"
    )
    name_category = models.ManyToManyField(
        NameCategory,
        blank=True,
        verbose_name="Названия категорий"
    )

    def __str__(self):
        return "%s" % self.name_of_competition

    class Meta:
        verbose_name = "Соревнование"
        verbose_name_plural = "Соревнования"

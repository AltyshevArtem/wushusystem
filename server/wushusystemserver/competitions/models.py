from django.db import models
from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey
from sportsmans.models import Trainer, Region 

from sportsmans.models import Trainer

# Create your models here.

class CompetitionName(models.Model):
    name_of_competition = models.TextField(
       blank=False,
       verbose_name="Название соревнования" 
    )

    def __str__(self):
        return "%s" % (self.name_of_competition)

    class Meta():
        verbose_name = "Список соревнований"
        verbose_name_plural = "Список соревнований"


class CompetitionDescription(models.Model):
    description_of_competition = models.TextField(
        blank=True,
        verbose_name="Описание соревнования"
    )

    def __str__(self):
        return "%s" % (self.description_of_competition)

    class Meta():
         verbose_name = "Описание соревнования"
         verbose_name_plural = "Описание соревнований"


class CompetitionVenue(models.Model):
    venue_of_competition = models.TextField(
        blank=False,
        verbose_name="Место проведения соревнования"
    )

    def __str__(self):
        return "%s" % (self.venue_of_competition)

    class Meta():
         verbose_name = "Место проведения соревнования"
         verbose_name_plural = "Место проведения соревнований"


class CompetitionPeriod(models.Model):
    date_start = models.DateField(
        blank=True,
        verbose_name="Дата начала соревнования"
    )
    date_end = models.DateField(
        blank=True,
        verbose_name="Дата конца соревнований"
    )
    competition_days = models.DateField(
        blank=True,
        verbose_name="Соревновательные дни"
    )

    def __str__(self):
        return "%s" % (self.competition_days)    

    class Meta():
        verbose_name = "Дата проведения соревнований"
        verbose_name_plural = "Даты проведения соревнований"


class RegistrationDate(models.Model):
    date_time_start = models.DateTimeField(
        blank=True,
        verbose_name="Датаа начала регистрации"
    )
    date_time_end = models.DateTimeField(
        blank=True,
        verbose_name="Дата конца регистрации"
    )

    def __str__(self):
        return "%s, %s" % (self.date_time_start, self.date_time_end)    

    class Meta():
        verbose_name = "Дата начала и конца регистрации"
        verbose_name_plural = "Даты начала и конца регистрации"


class NumberOfCompetitionAreas(models.Model):
    number_of_competition_areas = models.IntegerField(
        blank=True,
        verbose_name="Количество ковров"
    )

    def __str__(self):
        return "%s" % (self.number_of_competition_areas)    

    class Meta():
        verbose_name = "Число соревновательных площадок"
        verbose_name_plural = "Число соревновательных площадок"


class MainJudje(models.Model):
    main_judje = models.ForeignKey(
        Trainer,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Главный судья соревнований"
    )

    def __str__(self):
        return "%s" % (self.main_judje)    

    class Meta():
        verbose_name = "Главный судья соревнований"
        verbose_name_plural = "Главный судья соревнований"


class CompetitionRegion(models.Model):
    competition_region = models.ForeignKey(
        Region,
        blank=True,
        on_delete=models.CASCADE,
        verbose_name="Регионы участвующие на соревнованиях"
    )

    def __str__(self):
        return "%s" % (self.competition_region)

    class Meta():
        verbose_name = "Регионы участвующие на соревнованиях"
        verbose_name_plural = "Регионы участвующие на соревнованиях"
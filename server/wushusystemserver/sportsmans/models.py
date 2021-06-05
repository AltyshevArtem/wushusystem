from django.db import models
from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey


class Gender(models.Model):
    name_of_gender = models.TextField(
        primary_key=True, blank=False, verbose_name="Наименование пола")

    def __str__(self):
        return "%s" % (self.name_of_gender)

    class Meta():
        verbose_name = "Список доступных полов"
        verbose_name_plural = "Список доступных полов"


class Region(models.Model):
    name_of_region = models.TextField(blank=False, primary_key=True,
                                      verbose_name="Название округа/области/края/республики")
    name_of_federal_region = models.TextField(
        blank=False, verbose_name="Название федерального округа")
    name_of_country = models.TextField(
        blank=False, verbose_name="Название страны")

    def __str__(self):
        return "%s" % (self.name_of_region)

    class Meta():
        verbose_name = "Список округов/областей/краёв/республик"
        verbose_name_plural = "Список округов/областей/краёв/республик"


class City (models.Model):
    name_of_city = models.TextField(
        primary_key=True, blank=False, verbose_name="Наименование города")
    name_of_region = models.ForeignKey(
        Region, blank=False, on_delete=models.CASCADE, verbose_name="Название округа/области/края/республики")

    def __str__(self):
        return "%s" % (self.name_of_city)

    class Meta():
        verbose_name = "Список городов"
        verbose_name_plural = "Список городов"


class Trainer(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя тренера")
    #TODO: surname необязательный?
    surname = models.TextField(verbose_name="Фамилия тренера")
    patronymic = models.TextField(verbose_name="Отчество тренера")
    photo = models.ImageField(verbose_name="Фотография тренера")
    gender = models.ForeignKey(
        Gender, on_delete=models.CASCADE, verbose_name="Наименование пола")
    date_of_birth = models.DateField(verbose_name="Дата рождения тренера")

    def __str__(self):
        return "%s %s %s" % (self.surname, self.name, self.patronymic)

    class Meta():
        verbose_name = "Список тренеров"
        verbose_name_plural = "Список тренеров"


class Federation(models.Model):
    name_of_federation = models.TextField(
        primary_key=True, blank=False, verbose_name="Название федерации")
    name_of_region = models.ForeignKey(
        Region, blank=False, on_delete=models.CASCADE, verbose_name="Название округа/области/края/республики в которой находится федерация")

    def __str__(self):
        return "%s" % (self.name_of_federation)

    class Meta():
        verbose_name = "Список федераций Ушу"
        verbose_name_plural = "Список федераций Ушу"


class Club(models.Model):
    id = models.AutoField(primary_key=True)
    name_of_club = models.TextField(
        blank=False, verbose_name="Наименование клуба")
    name_of_owner = models.TextField(
        blank=True, verbose_name="ФИО владельца клуба")
    address = models.TextField(
        blank=True, verbose_name="Адрес регистрации клуба")
    #TODO: name_of_federation может federation?
    name_of_federation = models.ForeignKey(Federation,
                                           on_delete=models.CASCADE, verbose_name="Федерация, к которой привязан клуб")

    def __str__(self):
        return "%s" % (self.name_of_club)

    class Meta():
        verbose_name = "Список клубов"
        verbose_name_plural = "Список клубов"


class Insurance(models.Model):
    date_start = models.DateField(verbose_name="Дата начала страхования")
    date_end = models.DateField(
        blank=False, verbose_name="Дата окончания страхования")
    file_insurance = models.FileField(
        blank=False, verbose_name="Фотография страховки")

    def __str__(self):
        return "%s" % (self.file_insurance)

    class Meta():
        verbose_name = "Список страховок"
        verbose_name_plural = "Список страховок"


class Rank(models.Model):
    name_of_rank = models.TextField(
        blank=False, primary_key=True, verbose_name="Имя ранга")

    def __str__(self):
        return "%s" % (self.name_of_rank)

    class Meta():
        verbose_name = "Список рангов"
        verbose_name_plural = "Список рангов"


class Duan_Czi(models.Model):
    name_of_rank = models.TextField(
        blank=False, primary_key=True, verbose_name="Название степени сертификата")

    def __str__(self):
        return "%s" % (self.name_of_rank)

    class Meta():
        verbose_name = "Список рангов Дуань Цзи"
        verbose_name_plural = "Список рангов Дуань Цзи"


class Sportsman(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя спортсмена")
    surname = models.TextField(blank=False, verbose_name="Фамилия спортсмена")
    patronymic = models.TextField(verbose_name="Отчество спортсмена")
    photo = models.ImageField(verbose_name="Фотография спортсмена")
    date_of_birth = models.DateField(blank=False, verbose_name="Дата рождения")
    address = models.TextField(verbose_name="Адрес прописки")
    gender = models.ForeignKey(
        Gender, on_delete=models.CASCADE, blank=False, verbose_name="Наименование пола")
    file_main_document = models.FileField(
        verbose_name="Фото подтверждающего документа")
    city = models.ForeignKey(
        City, on_delete=models.CASCADE, verbose_name="Название города")
    trainer = models.ForeignKey(
        Trainer, on_delete=models.CASCADE, verbose_name="Тренер спортсмена")
    club = models.ForeignKey(
        Club, on_delete=models.CASCADE, verbose_name="Наименование клуба")
    insurance = models.ForeignKey(
        Insurance, on_delete=models.CASCADE, verbose_name="Страховка")
    rank = models.ForeignKey(
        Rank, on_delete=models.CASCADE, verbose_name="Наименование ранга")
    rusada = models.FileField(
        verbose_name="Изображение антидопингового сертификата")
    duan_czi = models.ForeignKey(
        Duan_Czi, on_delete=models.CASCADE, verbose_name="Ранг Дуань Цзи")

    class Meta():
        verbose_name = "Спортсмен"
        verbose_name_plural = "Спортсмены"


class Rank_history(models.Model):
    sportsman = models.ForeignKey(
        Sportsman, on_delete=models.CASCADE, blank=False, verbose_name="Спортсмен")
    new_rank = models.ForeignKey(
        Rank, on_delete=models.CASCADE, blank=False, verbose_name="Новый ранг спортсмена")
    date = models.DateField(blank=False, verbose_name="Дата выпуска приказа")
    file_order = models.FileField(
        verbose_name="Скан приказа об изменении ранга")

    class Meta():
        verbose_name = "История изменения рангов спортсменов"
        verbose_name_plural = "История изменения рангов спортсменов"


class Trainer_history(models.Model):
    sportsman = models.ForeignKey(
        Sportsman, on_delete=models.CASCADE, blank=False, verbose_name="Спортсмены")
    new_trainer = models.ForeignKey(
        Trainer, blank=False, on_delete=models.CASCADE, verbose_name="Новый тренер")
    date = models.DateField(blank=False, verbose_name="Дата смены тренера")

    class Meta():
        verbose_name = "История смены тренеров"
        verbose_name_plural = "История смены тренеров"


class Duan_Czi_history(models.Model):
    sportsman = models.ForeignKey(
        Sportsman, on_delete=models.CASCADE, blank=False, verbose_name="Спортсмен")
    new_duan_czi = models.ForeignKey(
        Duan_Czi, on_delete=models.CASCADE, blank=False, verbose_name="Новый ранг спортсмена Дуань Цзи")
    date = models.DateField(blank=False, verbose_name="Дата выпуска приказа")
    file_order = models.FileField(
        verbose_name="Скан приказа об изменении ранга")

    class Meta():
        verbose_name = "История изменения рангов  Дуань Цзи спортсменов"
        verbose_name_plural = "История изменения рангов Дуань Цзи спортсменов"


class Club_history(models.Model):
    sportsman = models.ForeignKey(
        Sportsman, on_delete=models.CASCADE, blank=False, verbose_name="Спортсмены")
    new_club = models.ForeignKey(
        Club, blank=False, on_delete=models.CASCADE, verbose_name="Новый клуб")
    date = models.DateField(blank=False, verbose_name="Дата смены тренера")

    class Meta():
        verbose_name = "История смены клубов"
        verbose_name_plural = "История смены клубов"

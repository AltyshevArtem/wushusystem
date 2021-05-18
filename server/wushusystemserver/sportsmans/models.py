from django.db import models
from django.db.models.fields.related import ForeignKey

class sportsman(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя спортсмена")
    surname = models.TextField(blank=False, verbose_name="Фамилия спортсмена")
    patronymic = models.TextField(verbose_name="Отчество спортсмена")
    date_of_birth = models.DateField(blank=False, verbose_name="Дата рождения")
    address = models.TextField(blank=False, verbose_name="Адрес прописки") 
    sex = models.ForeignKey(blank=False, verbose_name="Наименование пола")
    main_document = models.ImageField(blank=False, verbose_name="Фото подтверждающего документа") 
    city = models.ForeignKey(city, on_delete=models.CASCADE, verbose_name="Город") 
    trainer = models.ForeignKey(trainer, on_delete=models.CASCADE, verbose_name="Тренер спортсмена")
    club = models.ForeignKey(club, on_delete=models.CASCADE, verbose_name="Наименование клуба")
    insurance = models.ForeignKey(insurance, on_delete=models.CASCADE, verbose_name="Страховка")
    rank = models.ForeignKey(rank, on_delete=models.CASCADE, verbose_name="Наименование ранга")
    rusada = models.ImageField(blank=False, verbose_name="Изображение антидопингового сертификата")
    duan_czi = models.ForeignKey(duan_czi, on_delete=models.CASCADE, verbose_name="Ранг Дуань Цзи")
    class Meta():
        verbose_name = "Спортсмен"
        verbose_name_plural = "Спортсмены"

class sex(models.Model):
    name_sex = models.TextField(blank=False, verbose_name="Наименование пола")
    class Meta():
        verbose_name = "Список доступных полов"
        verbose_name_plural = "Список доступных полов"

class city(models.Model):
    city = models.TextField(primary_key=True, blank=False, verbose_name="Название населённого пункта")
    region = models.ForeignKey(region, on_delete=models.CASCADE, verbose_name="Название округа/области/края")
    class Meta():
        verbose_name = "Список населённых пунктов"
        verbose_name_plural = "Список населённых пунктов"

class federal_region(models.Model):
    federal_region_name = models.TextField(blank=False, verbose_name="Название федерального округа")
    class Meta():
        verbose_name = "Список федеральных округов"
        verbose_name_plural = "Список федеральных округов"

class region(models.Model):
    region_name = models.TextField(primary_key=True, blank=False, verbose_name="Название округа/области/края")
    federal_region = models.ForeignKey(federal_region, blank=False, verbose_name="Название федерального округа")
    country = models.TextField(verbose_name="Название страны")
    class Meta():
        verbose_name = "Список округов/областей/краев"
        verbose_name_plural = "Список округов/областей/краев"

class trainer(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя тренера")
    surname = models.TextField(verbose_name="Фамилия тренера")
    patronymics = models.TextField(verbose_name="Отчество тренера")
    date_birth = models.DateField(verbose_name="Дата рождения тренера")
    class Meta():
        verbose_name = "Список тренеров"
        verbose_name_plural = "Список тренеров"

class club(models.Model):
    name_club = models.TextField(blank=False, verbose_name="Наименование клуба")
class insurance(models.Model):
    date_start = models.DateField(verbose_name="Дата начала страхования")
    date_end = models.DateField(blank=False, verbose_name="Дата окончания страхования")
    img_insurance = models.ImageField(blank=False, verbose_name="Фотография страховки")
    class Meta():
        verbose_name = "Список страховок"
        verbose_name_plural = "Список страховок"
class rank(models.Model):
    name_rank = models.TextField(blank=False, verbose_name="Имя ранга")
    class Meta():
        verbose_name = "Список рангов"
        verbose_name_plural = "Список рангов"

class duan_czi(models.Model):
    name_rank = models.TextField(blank=False, verbose_name="Название степени сертификата")
    class Meta():
        verbose_name = "Список рангов Дуань Цзи"
        verbose_name_plural = "Список рангов Дуань Цзи"

class rank_history(models.Model):
    sportsman = models.ForeignKey(sportsman, on_delete=models.CASCADE, blank=False, verbose_name="Спортсмен")
    new_rank = models.ForeignKey(rank, on_delete=models.CASCADE, blank=False, verbose_name="Новый ранг спортсмена")
    date = models.DateField(blank=False, verbose_name="Дата выпуска приказа")
    order = models.ImageField(verbose_name="Скан приказа об изменении ранга")
    class Meta():
        verbose_name = "История изменения рангов спортсменов"
        verbose_name_plural = "История изменения рангов спортсменов"
class trainer_history(models.Model):
    sportsman = models.ForeignKey(sportsman, on_delete=models.CASCADE, blank=False, verbose_name="Спортсмены")
    new_trainer = models.ForeignKey(trainer, blank=False, on_delete=models.CASCADE, verbose_name="Новый тренер")
    date = models.DateField(blank=False, verbose_name="Дата смены тренера")
    class Meta():
        verbose_name = "История смены тренеров"
        verbose_name_plural = "История смены тренеров"
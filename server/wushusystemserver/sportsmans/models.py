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
    city = models.ForeignKey(city, on_delete=models.CASCADE) 
    trainer = models.ForeignKey(trainer, on_delete=models.CASCADE) 
    insurance = models.ForeignKey(insurance, on_delete=models.CASCADE)
    rank = models.ForeignKey(rank, on_delete=models.CASCADE)
    rusada = models.ImageField(blank=False, verbose_name="Изображение антидопингового сертификата")
    duan_czi = models.ForeignKey(duan_czi, on_delete=models.CASCADE)
    
class sex(models.Model):
    name_sex = models.TextField(blank=False, verbose_name="Наименование пола")
class city(models.Model):
    city = models.TextField(primary_key=True, blank=False, verbose_name="Название населённого пункта")
    region = models.ForeignKey(region, on_delete=models.CASCADE)
class region(models.Model):
    region_name = models.TextField(primary_key=True, blank=False, verbose_name="Название округа") 
    country = models.TextField(verbose_name="Название страны")
class trainer(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя тренера")
    surname = models.TextField(verbose_name="Фамилия тренера")
    patronymics = models.TextField(verbose_name="Отчество тренера")
    date_birth = models.DateField(verbose_name="Дата рождения тренера")
class insurance(models.Model):
    date_start = models.DateField(verbose_name="Дата начала страхования")
    date_end = models.DateField(blank=False, verbose_name="Дата окончания страхования")
    img_insurance = models.ImageField(blank=False)
class rank(models.Model):
    name_rank = models.TextField(blank=False, verbose_name="Имя ранга")
class duan_czi(models.Model):
    name_rank = models.TextField(blank=False, verbose_name="Название степени сертификата")
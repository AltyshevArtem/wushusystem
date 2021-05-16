from django.db import models
from django.db.models.fields.related import ForeignKey

# Create your models here.

class sportsman(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя спортсмена")
    surname = models.TextField(blank=False, verbose_name="Фамилия спортсмена")
    patronymic = models.TextField(verbose_name="Отчество спортсмена")
    date_of_birth = models.DateField(blank=False, verbose_name="Дата рождения")
    address = models.TextField(blank=False, verbose_name="Адрес прописки") 
    sex = models.TextField(blank=False, verbose_name="Адрес прописки") #я не нашел инфы как тут только два значения сделать
    main_document = models.ForeignKey(main_document,on_delete=models.CASCADE) 
    city = models.ForeignKey(city, on_delete=models.CASCADE) #тут только город, страна и округ подтянутся потом
    trainer = models.ForeignKey(trainer, on_delete=models.CASCADE) #подумать над историей переходов
    insurance = models.ForeignKey(insurance, on_delete=models.CASCADE)
    rank = models.ForeignKey(rank, on_delete=models.CASCADE)
    rusada = models.ForeignKey(rusada, on_delete=models.CASCADE)
    #certificate(китайская дичь) * #пузнать чё ваще за сертификат
    

class main_document(models.Model): #допустим только паспорт можно внести(уточнить у Артёма какой документ подтверждения)
    photo = models.ImageField(blank=False, verbose_name="Фото подтверждающего документа")

class city(models.Model):
    city = models.TextField(primary_key=True, blank=False, verbose_name="Название населённого пункта")
    region = models.ForeignKey(region, on_delete=models.CASCADE)

class region(models.Model): #модель регионов(области + края)
    region_name = models.TextField(primary_key=True, blank=False, verbose_name="Название округа") 
    country = models.TextField(verbose_name="Название страны") #если россия онли то и не надо это


class trainer(models.Model):
    name = models.TextField(blank=True, verbose_name="Имя тренера")
    surname = models.TextField(blank=True, verbose_name="Фамилия тренера")
    patronymics = models.TextField(verbose_name="Отчество тренера")
    date_birth = models.DateField(verbose_name="Дата рождения тренера")

class insurance(models.Model):
    #id = models.TextField(primary_key=True, verbose_name="Номер страховки") 
    date_start = models.DateField(verbose_name="Дата начала страхования")
    date_end = models.DateField(blank=True, name="Дата окончания страхования")
    #+картинка

class rank(models.Model):
    name_rank = models.TextField(verbose_name="Имя ранга") #мб тут ещё надо будет поля

class rusada(models.Model):
    img_rusada = models.ImageField(verbose_name="Изображение антидопингового сертификата")
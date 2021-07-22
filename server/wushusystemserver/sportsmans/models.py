from django.db import models
from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey


class Gender(models.Model):
    name_of_gender = models.TextField(
        primary_key=True, 
        blank=False, 
        verbose_name="Наименование пола"
    )

    def __str__(self):
        return "%s" % (self.name_of_gender)

    class Meta():
        verbose_name = "Список доступных полов"
        verbose_name_plural = "Список доступных полов"


class Federal_Region(models.Model):
    name_of_federal_region = models.TextField(
        blank = True,
        verbose_name="Название федерального округа"
    )
    abbr_of_federal_region = models.TextField(
        blank = True, 
        verbose_name="Аббревиатура федерального округа"
    )

    def __str__(self):
        return "%s" % (self.name_of_federal_region)

    class Meta():
        verbose_name = "Список федеральных округов"
        verbose_name_plural = "Список федеральных округов"


class Region(models.Model):
    name_of_region = models.TextField(
        blank = True, 
        primary_key=True,
        verbose_name="Название округа/области/края/республики"
    )
    name_of_federal_region = models.ForeignKey(
        Federal_Region, 
        on_delete=models.CASCADE,
        blank = True,
        verbose_name="Название федерального округа"
    )
    name_of_country = models.TextField(
        blank = True, 
        verbose_name="Название страны"
    )

    def __str__(self):
        return "%s" % (self.name_of_region)

    class Meta():
        verbose_name = "Список округов/областей/краёв/республик"
        verbose_name_plural = "Список округов/областей/краёв/республик"


class City (models.Model):
    name_of_city = models.TextField(
        blank=True,
        primary_key=True, 
        verbose_name="Наименование города"
    )
    name_of_region = models.ForeignKey(
        Region, 
        blank=False, 
        on_delete=models.CASCADE, 
        verbose_name="Название округа/области/края/республики"
    )

    def __str__(self):
        return "%s" % (self.name_of_city)

    class Meta():
        verbose_name = "Список городов"
        verbose_name_plural = "Список городов"


class Trainer(models.Model):
    name = models.TextField(
        blank=True, 
        verbose_name="Имя тренера"
    )
    surname = models.TextField(
        blank=True,  
        verbose_name="Фамилия тренера"
    )
    patronymic = models.TextField(
        blank = True, 
        verbose_name="Отчество тренера"
    )
    photo = models.ImageField(
        blank = True, 
        verbose_name="Фотография тренера"
    )
    gender = models.ForeignKey(
        Gender, 
        blank = True,  
        on_delete=models.CASCADE, 
        verbose_name="Наименование пола"
    )
    date_of_birth = models.DateField(
        blank = True, 
        verbose_name="Дата рождения тренера"
    )

    def __str__(self):
        return "%s %s %s" % (self.surname, self.name, self.patronymic)

    class Meta():
        verbose_name = "Список тренеров"
        verbose_name_plural = "Список тренеров"


class Federation(models.Model):
    name_of_federation = models.TextField(
        primary_key=True, 
        blank = True, 
        verbose_name="Название федерации"
    )
    name_of_region = models.ForeignKey(
        Region,
        blank = True, 
        on_delete=models.CASCADE, 
        verbose_name="Название округа/области/края/республики в которой находится федерация"
    )

    def __str__(self):
        return "%s" % (self.name_of_federation)

    class Meta():
        verbose_name = "Список федераций Ушу"
        verbose_name_plural = "Список федераций Ушу"


class Club(models.Model):
    name_of_club = models.TextField(
        blank = True, 
        verbose_name="Наименование клуба"
    )
    name_of_owner = models.TextField(
        blank = True, 
        verbose_name="ФИО владельца клуба"
    )
    address = models.TextField(
        blank = True, 
        verbose_name="Адрес регистрации клуба"
    )
    federation = models.ForeignKey(
        Federation,
        blank = True, 
        on_delete=models.CASCADE, 
        verbose_name="Федерация, к которой привязан клуб"
    )

    def __str__(self):
        return "%s" % (self.name_of_club)

    class Meta():
        verbose_name = "Список клубов"
        verbose_name_plural = "Список клубов"


class Insurance(models.Model):
    date_start = models.DateField(
        blank = True, 
        verbose_name="Дата начала страхования"
    )
    date_end = models.DateField(
        blank = True, 
        verbose_name="Дата окончания страхования"
    )
    file_insurance = models.FileField(
        upload_to='insurance_files_pdf/',
        blank = True, 
        verbose_name="Фотография страховки"
    )

    def __str__(self):
        return "%s" % (self.file_insurance)

    class Meta():
        verbose_name = "Список страховок"
        verbose_name_plural = "Список страховок"


class Rank(models.Model):
    name_of_rank = models.TextField(
        blank=False, 
        primary_key=True, 
        verbose_name="Имя ранга"
    )

    def __str__(self):
        return "%s" % (self.name_of_rank)

    class Meta():
        verbose_name = "Список рангов"
        verbose_name_plural = "Список рангов"


class Duan_Czi(models.Model):
    name_of_rank = models.TextField(
        blank=False, 
        primary_key=True, 
        verbose_name="Название степени сертификата"
    )

    def __str__(self):
        return "%s" % (self.name_of_rank)

    class Meta():
        verbose_name = "Список рангов Дуань Цзи"
        verbose_name_plural = "Список рангов Дуань Цзи"


class Passport(models.Model):
    number = models.TextField(
        blank = True, 
        verbose_name="Серия и номер паспорта"
    ) #TODO: в бд для хранения ПДн использовать солевые хэши
    scan = models.FileField(
        upload_to='passport_files/',
        blank = True,
        verbose_name="Скан паспорта"
    )
    date_start = models.DateField(
        blank = True, 
        verbose_name="Дата выдачи паспорта"
    )
    issue = models.TextField(
        blank = True,
        verbose_name="Кем выдан паспорт"
    )
    code = models.TextField(
        blank = True,
        verbose_name="Код подразделения"
    )

    class Meta():
        verbose_name = "Список паспортов"
        verbose_name_plural = "Список паспортов"


class Birth_Certificate(models.Model):
    number = models.TextField(
        blank = True,
        verbose_name="Номер свидетельства о рождении"
    )
    scan = models.FileField(
        upload_to='birth_certificate_files/',
        blank = True,
        verbose_name="Скан свидетельства о рождении"
    )

    class Meta():
        verbose_name = "Список свидетельств о рождении"
        verbose_name_plural = "Список свидетельств о рождении"


class OMS(models.Model):
    number = models.TextField(
        blank = True, 
        verbose_name="Номер полиса ОМС"
    )
    scan = models.FileField(
        upload_to="oms_files/", 
        blank = True,
        verbose_name="Скан полиса ОМС"
    )

    class Meta():
        verbose_name = "Список полисов ОМС"
        verbose_name_plural = "Список полисов ОМС"


class Proxy_doc(models.Model):
    scan = models.FileField(
        upload_to="proxy_files/",
        blank = True,
        verbose_name="Скан доверенности"
    )
    #TODO: Сделать upload_to в original_passport, original_birth_certificate
    original_passport = models.ForeignKey(
        Passport, 
        blank = True,
        on_delete=models.CASCADE, 
        verbose_name="Оригинал паспорта"
    )
    original_birth_certificate = models.ForeignKey(
        Birth_Certificate, 
        blank = True,
        on_delete=models.CASCADE, 
        verbose_name="Оригинал свидетельства о рождении"
    )
    date_end = models.DateField(
        blank = True,
        verbose_name="Дата окончания доверенности"
    )

    class Meta():
        verbose_name = "Список доверенностей"
        verbose_name_plural = "Список доверенностей"


class Sportsman(models.Model):
    name = models.TextField(blank=False, verbose_name="Имя спортсмена")
    surname = models.TextField(blank=False, verbose_name="Фамилия спортсмена")
    patronymic = models.TextField(
        blank = True, 
        verbose_name="Отчество спортсмена"
    )
    photo = models.ImageField(
        upload_to='sportsman_photo/', 
        blank = True,
        verbose_name="Фотография спортсмена"
    )
    date_of_birth = models.DateField(
        blank= True,
        null = True, 
        verbose_name="Дата рождения"
    )
    address = models.TextField(
        blank = True, 
        verbose_name="Адрес прописки"
    )
    confirm_address = models.FileField(
        upload_to="confirm_address_files/",
        blank = True,
        verbose_name="Документ с подтверждением прописки"
    )  # нужно для детей до 14 лет
    gender = models.ForeignKey(
        Gender, 
        blank = False, 
        on_delete = models.CASCADE,
        verbose_name = "Наименование пола",
    )
    passport = models.ForeignKey(
        Passport, 
        blank = True,
        null = True,
        on_delete = models.CASCADE, 
        verbose_name = "Паспорт"
    )
    birth_certificate = models.ForeignKey(
        Birth_Certificate, 
        blank = True,
        null = True, 
        on_delete = models.CASCADE, 
        verbose_name = "Свидетельство о рождении"
    )
    proxy = models.ForeignKey(
        Proxy_doc, 
        on_delete = models.CASCADE, 
        blank = True,
        null = True,
        verbose_name = "Доверенность на паспорт/свидетельство о рождении"
    )
    oms = models.ForeignKey(
        OMS,
        on_delete = models.CASCADE, 
        blank = True,
        null = True, 
        verbose_name = "Полис ОМС"
    )
    city = models.ForeignKey(
        City,
        on_delete = models.CASCADE, 
        null = True,
        blank = True, 
        verbose_name = "Название города"
    )
    trainer = models.ForeignKey(
        Trainer, 
        on_delete=models.CASCADE, 
        null = True,
        blank = True, 
        verbose_name="Тренер спортсмена"
    )
    club = models.ForeignKey(
        Club,
        on_delete=models.CASCADE, 
        null = True, 
        blank = True, 
        verbose_name="Наименование клуба"
    )
    insurance = models.ForeignKey(
        Insurance, 
        blank = True, 
        on_delete=models.CASCADE, 
        verbose_name="Страховка"
    )
    rank = models.ForeignKey(
        Rank, 
        blank = True, 
        on_delete=models.CASCADE, 
        verbose_name="Наименование ранга"
    )
    rusada = models.FileField(
        upload_to='rusada_files_pdf/', 
        blank = True,
        verbose_name="Изображение антидопингового сертификата"
    )
    covid_test = models.FileField(
        upload_to = "covid_test_files/", 
        blank = True,
        verbose_name = "Тест ковид"
    )
    covid_contact = models.FileField(
        upload_to = "covid_contact_files/",
        blank = True,
        verbose_name = "Справка об отсутствии контактов с инфекционными больными"
    )
    parent_doc = models.FileField(
        upload_to = "parent_doc_files/",
        blank = True,
        verbose_name = "Доверенность от родителей на заселение в гостиницу"
    )
    school_doc = models.FileField( 
        blank = True,
        upload_to = "school_doc/", 
        verbose_name = "Справка об обучении в школе"
    )
    duan_czi = models.ForeignKey(
        Duan_Czi,
        blank = True,
        null = True, 
        on_delete = models.CASCADE, 
        verbose_name="Ранг Дуань Цзи"
    )

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

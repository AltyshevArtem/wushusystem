from django.contrib import admin
from .models import*
# Register your models here.


class GenderAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Gender._meta.fields]

    class Meta:
        model = Gender


admin.site.register(Gender, GenderAdmin)


class JudjeCategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in JudjeCategory._meta.fields]

    class Meta:
        model = JudjeCategory


admin.site.register(JudjeCategory, JudjeCategoryAdmin)

class FederalRegionAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Federal_Region._meta.fields]

    class Meta:
        model = Federal_Region


admin.site.register(Federal_Region, FederalRegionAdmin)


class RegionAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Region._meta.fields]

    class Meta:
        model = Region


admin.site.register(Region, RegionAdmin)


class CityAdmin(admin.ModelAdmin):
    list_display = [field.name for field in City._meta.fields]

    class Meta:
        model = City


admin.site.register(City, CityAdmin)


class JudjeTrainerAdmin(admin.ModelAdmin):
    list_display = [field.name for field in JudjeTrainer._meta.fields]

    class Meta:
        model = JudjeTrainer


admin.site.register(JudjeTrainer, JudjeTrainerAdmin)


class FederationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Federation._meta.fields]

    class Meta:
        model = Federation


admin.site.register(Federation, FederationAdmin)


class ClubAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Club._meta.fields]

    class Meta:
        model = Club


admin.site.register(Club, ClubAdmin)


class InsuranceAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Insurance._meta.fields]

    class Meta:
        model = Insurance


admin.site.register(Insurance, InsuranceAdmin)


class RankAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Rank._meta.fields]

    class Meta:
        model = Rank


admin.site.register(Rank, RankAdmin)


class Duan_CziAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Duan_Czi._meta.fields]

    class Meta:
        model = Duan_Czi


admin.site.register(Duan_Czi, Duan_CziAdmin)


class PassportAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Passport._meta.fields]

    class Meta:
        model = Passport


admin.site.register(Passport, PassportAdmin)


class Birth_CertificateAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Birth_Certificate._meta.fields]

    class Meta:
        model = Birth_Certificate


admin.site.register(Birth_Certificate, Birth_CertificateAdmin)


class OMSAdmin(admin.ModelAdmin):
    list_display = [field.name for field in OMS._meta.fields]

    class Meta:
        model = OMS


admin.site.register(OMS, OMSAdmin)


class Proxy_docAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Proxy_doc._meta.fields]

    class Meta:
        model = Proxy_doc


admin.site.register(Proxy_doc, Proxy_docAdmin)


class SportsmanAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Sportsman._meta.fields]

    class Meta:
        model = Sportsman


admin.site.register(Sportsman, SportsmanAdmin)


class Rank_historyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Rank_history._meta.fields]

    class Meta:
        model = Rank_history


admin.site.register(Rank_history, Rank_historyAdmin)


class Trainer_historyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Trainer_history._meta.fields]

    class Meta:
        model = Trainer_history


admin.site.register(Trainer_history, Trainer_historyAdmin)


class Duan_Czi_historyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Duan_Czi_history._meta.fields]

    class Meta:
        model = Duan_Czi_history


admin.site.register(Duan_Czi_history, Duan_Czi_historyAdmin)


class Club_historyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Club_history._meta.fields]

    class Meta:
        model = Club_history


admin.site.register(Club_history, Club_historyAdmin)

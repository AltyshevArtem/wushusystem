from django.contrib import admin
from . models import *
# Register your models here.


class CompetitionAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Competition._meta.fields]

    class Meta:
        model = Competition


admin.site.register(Competition, CompetitionAdmin)


class AgeCategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in AgeCategory._meta.fields]

    class Meta:
        model = AgeCategory

admin.site.register(AgeCategory, AgeCategoryAdmin)


class NameCategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in NameCategory._meta.fields]

    class Meta:
        model = NameCategory

admin.site.register(NameCategory, NameCategoryAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Category._meta.fields]

    class Meta:
        model = Category


admin.site.register(Category, CategoryAdmin)


class CommandAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Command._meta.fields]

    class Meta:
        model = Command


admin.site.register(Command, CommandAdmin)


class DisciplineAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Discipline._meta.fields]

    class Meta:
        model = Discipline


admin.site.register(Discipline, DisciplineAdmin)


class CompetitionGroupAdmin(admin.ModelAdmin):
    list_display = [field.name for field in CompetitionGroup._meta.fields]

    class Meta:
        model = CompetitionGroup


admin.site.register(CompetitionGroup, CompetitionGroupAdmin)

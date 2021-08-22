from django.db.models import fields
from rest_framework import serializers
from sportsmans.models import *


class GenderSerialize(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = "__all__"

class FederalRegionSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Federal_Region
        fields = "__all__"
class RegionSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    name_of_federal_region = FederalRegionSerialize()
    class Meta:
        model = Region
        fields = "__all__"


class CitySerialize(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name_of_region = RegionSerialize(required=False)
    class Meta:
        model = City
        fields = "__all__"


class TrainerSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField()
    class Meta:
        model = Trainer
        fields = "__all__"


class FederationSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    name_of_region = RegionSerialize()
    class Meta:
        model = Federation
        fields = "__all__"


class ClubSerialize(serializers.ModelSerializer):
    id = serializers.IntegerField()
    federation = FederationSerialize(required=False)
    class Meta:
        model = Club
        fields = "__all__"


class InsuranceSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Insurance
        fields = "__all__"


class RankSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Rank
        fields = "__all__"


class Duan_CziSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Duan_Czi
        fields = "__all__"

class PassportSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Passport
        fields = "__all__"

class Birth_CertificateSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Birth_Certificate
        fields = "__all__"

class OMSSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = OMS
        fields = "__all__"


class Proxy_docSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Proxy_doc
        fields = "__all__"

class SportsmanSerialize(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    city = CitySerialize(required=False)
    trainer = TrainerSerialize(required=False)
    club = ClubSerialize(required=False)
    insurance = InsuranceSerialize(required=False)
    passport = PassportSerialize(required=False)
    birth_certificate = Birth_CertificateSerialize(required=False)
    proxy = Proxy_docSerialize(required=False)
    oms = OMSSerialize(required=False)
    class Meta:
        model = Sportsman
        fields = "__all__"

    def create(self, validated_data):
        if(validated_data.get('city') is not None):
            city_data = validated_data.pop('city')
            city = City.objects.get(id=city_data['id'])
        else:
            city = None

        if(validated_data.get('city') is not None):
            trainer_data = validated_data.pop('trainer')
            trainer = Trainer.objects.get(id=trainer_data['id'])
        else:
            trainer = None

        if(validated_data.get('city') is not None):
            club_data = validated_data.pop('club')
            club = Club.objects.get(id=club_data['id'])
        else:
            club = None

        if(validated_data.get('city') is not None):
            insurance_data = validated_data.pop('insurance')
            insurance = Insurance.objects.create(**insurance_data)
        else:
            insurance = None

        if(validated_data.get('city') is not None):
            passport_data = validated_data.pop('passport')
            passport = Passport.objects.create(**passport_data)
        else:
            passport = None

        if(validated_data.get('city') is not None):
            birth_certificate_data = validated_data.pop('birth_certificate')
            birth_certificate = Birth_Certificate.objects.create(**birth_certificate_data)
        else:
            birth_certificate = None

        if(validated_data.get('city') is not None):
            proxy_data = validated_data.pop('proxy')
            proxy = Proxy_doc.objects.create(**proxy_data)
        else:
            proxy = None

        if(validated_data.get('city') is not None):
            oms_data = validated_data.pop('oms')
            oms = OMS.objects.create(**oms_data)
        else:
            oms = None

        sportsman = Sportsman.objects.create(insurance=insurance, 
                                            passport=passport, 
                                            birth_certificate=birth_certificate,
                                            proxy=proxy,
                                            oms=oms,
                                            city=city,
                                            trainer=trainer,
                                            club=club, 
                                            **validated_data)
        return sportsman
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.surname = validated_data.get('surname', instance.surname)
        instance.patronymic = validated_data.get('patronymic', instance.patronymic)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.date_of_birth = validated_data.get('date_of_birth', instance.date_of_birth)
        instance.address = validated_data.get('address', instance.address)
        instance.confirm_address = validated_data.get('confirm_address', instance.confirm_address)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.rank = validated_data.get('rank', instance.rank)
        instance.rusada = validated_data.get('rusada', instance.rusada)
        instance.covid_test = validated_data.get('covid_test', instance.covid_test)
        instance.covid_contact = validated_data.get('covid_contact', instance.covid_contact)
        instance.parent_doc = validated_data.get('parent_doc', instance.parent_doc)
        instance.school_doc = validated_data.get('school_doc', instance.school_doc)
        instance.duan_czi = validated_data.get('duan_czi', instance.duan_czi)

        instance.save()

        city_data = validated_data.get('city')
        if (city_data is not None):
            city = instance.city
            city.save()

        trainer_data = validated_data.get('trainer')
        if (trainer_data is not None):
            trainer = instance.trainer
            trainer.save()

        club_data = validated_data.get('club')
        if (club_data is not None):
            club = instance.club
            club.save()      

        insurance_data = validated_data.get('insurance')
        if (insurance_data is not None):
            insurance = instance.insurance
            insurance.save()

        passport_data = validated_data.get('passport')
        if (passport_data is not None):
            passport = instance.passport
            passport.save()

        birth_certificate_data = validated_data.get('birth_certificate')
        if (birth_certificate_data is not None):
            birth_certificate = instance.birth_certificate
            birth_certificate.save()

        proxy_data = validated_data.get('proxy')
        if (proxy_data is not None):
            proxy = instance.proxy
            proxy.save()

        oms_data = validated_data.get('oms')
        if (oms_data is not None):
            oms = instance.oms
            oms.save()

        return instance

class Rank_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_rank = RankSerialize()

    class Meta:
        model = Rank_history
        fields = "__all__"


class Trainer_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_trainer = TrainerSerialize()

    class Meta:
        model = Trainer_history
        fields = "__all__"


class Duan_Czi_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_duan_czi = Duan_CziSerialize()

    class Meta:
        model = Duan_Czi_history
        fields = "__all__"


class Club_historySerialize(serializers.ModelSerializer):
    sportsman = SportsmanSerialize()
    new_club = ClubSerialize()

    class Meta:
        model = Club_history
        fields = "__all__"
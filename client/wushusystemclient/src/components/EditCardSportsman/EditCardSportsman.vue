<template>
    <div class="container">
        <ul>
            <li>
                Фамилия:
                <input
                    @change="this.Editable = true"
                    placeholder="Фамилия"
                    v-model="sportsmanMap.sportsman.name"
                />
            </li>
            <li>
                Имя:
                <input
                    @change="this.Editable = true"
                    placeholder="Имя"
                    v-model="sportsmanMap.sportsman.surname"
                />
            </li>
            <li>
                Отчество:
                <input
                    @change="this.Editable = true"
                    placeholder="Отчество"
                    v-model="sportsmanMap.sportsman.patronymic"
                />
            </li>
            <li>
                <div v-if="sportsmanMap.sportsman.photo !== (undefined || null)">
                    <img class="photo" :src="sportsmanMap.sportsman.photo" alt="PhotoSportsman" />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.photo = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="PhotoSportsman"
                        ref="PhotoSportsman"
                        class="input input__file"
                        @change="PhotoSportsmanUpload()"
                    />
                    <label class="input__file-button" for="PhotoSportsman">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="Фото спортсмена"
                                width="25"
                        /></span>
                        <span class="input__file-button-text"> Фото спортсмена </span>
                    </label>
                    {{ PhotoSportsman }}
                </div>
            </li>
            <li>
                Пол:
                <SelectGender
                    @change="Editable = true"
                    mode="single"
                    v-model="sportsmanMap.sportsman.gender"
                />
            </li>
            <li>
                Тренер:
                <SelectTrainer mode="single" @change="Editable = true" v-model="trainerName" />
            </li>
            <li>
                <div class="form-group">
                    <label for="DateOfBirth">Дата Рождения</label>
                    <input
                        placeholder="YYYY-MM-DD"
                        @change="this.Editable = true"
                        v-model="sportsmanMap.sportsman.date_of_birth"
                    />
                </div>
            </li>
            <li>
                Клуб:
                <SelectClub mode="single" @change="Editable = true" v-model="clubName" />
            </li>
            <li>
                Разряд:
                <SelectRank
                    mode="single"
                    @change="Editable = true"
                    v-model="sportsmanMap.sportsman.rank"
                />
            </li>
            <li>
                Город:
                <SelectCity mode="single" @change="Editable = true" v-model="cityName" />
            </li>
            <li>
                Адрес прописки:
                <input @change="this.Editable = true" v-model="sportsmanMap.sportsman.address" />
            </li>
            <li>
                Подтверждение подписки:
                <div v-if="sportsmanMap.sportsman.confirm_address !== (undefined || null)">
                    <img
                        class="photo"
                        :src="sportsmanMap.sportsman.confirm_address"
                        alt="ConfirmAddressFile"
                    />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.confirm_address = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="ConfirmAddressFile"
                        ref="ConfirmAddressFile"
                        class="input input__file"
                        @change="ConfirmAddressFileUpload()"
                    />
                    <label class="input__file-button" for="ConfirmAddressFile">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="Подтверждение прописки"
                                width="25"
                        /></span>
                        <span class="input__file-button-text"> Подтверждение прописки </span>
                    </label>
                    {{ ConfirmAddressFile }}
                </div>
            </li>
            <li>
                РУСАДА:
                <div v-if="sportsmanMap.sportsman.rusada !== (undefined || null)">
                    <img class="photo" :src="sportsmanMap.sportsman.rusada" alt="RusadaFile" />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.rusada = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="RusadaFile"
                        ref="RusadaFile"
                        class="input input__file"
                        @change="RusadaFileUpload()"
                    />
                    <label class="input__file-button" for="RusadaFile">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="Сертификат РУСАДА"
                                width="25"
                        /></span>
                        <span class="input__file-button-text"> Сертификат РУСАДА </span>
                    </label>
                    {{ RusadaFile }}
                </div>
            </li>
            <li>
                Дуань/Цзи:
                <SelectDuanDzi
                    @change="Editable = true"
                    mode="single"
                    v-model="sportsmanMap.sportsman.duan_czi"
                />
            </li>
            <li>
                Справка об отсутствии контактов с инфекционными больными:
                <div v-if="sportsmanMap.sportsman.covid_contact !== (undefined || null)">
                    <img
                        class="photo"
                        :src="sportsmanMap.sportsman.covid_contact"
                        alt="CovidContactFile"
                    />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.covid_contact = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="CovidContactFile"
                        ref="CovidContactFile"
                        class="input input__file"
                        @change="CovidContactFileUpload()"
                    />
                    <label class="input__file-button" for="CovidContactFile">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="Справка об отсутствии контактов с инфекционными больными"
                                width="25"
                        /></span>
                        <span class="input__file-button-text">
                            Справка об отсутствии контактов с инфекционными больными
                        </span>
                    </label>
                    {{ CovidContactFile }}
                </div>
            </li>
            <li>
                ПЦР-тест COVID-19:
                <div v-if="sportsmanMap.sportsman.covid_test !== (undefined || null)">
                    <img
                        class="photo"
                        :src="sportsmanMap.sportsman.covid_test"
                        alt="CovidTestFile"
                    />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.covid_test = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="CovidTestFile"
                        ref="CovidTestFile"
                        class="input input__file"
                        @change="CovidTestFileUpload()"
                    />
                    <label class="input__file-button" for="CovidTestFile">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="ПЦР-тест COVID-19"
                                width="25"
                        /></span>
                        <span class="input__file-button-text"> ПЦР-тест COVID-19 </span>
                    </label>
                    {{ CovidTestFile }}
                </div>
            </li>
            <li>
                Доверенность от родителей:
                <div v-if="sportsmanMap.sportsman.parent_doc !== (undefined || null)">
                    <img
                        class="photo"
                        :src="sportsmanMap.sportsman.parent_doc"
                        alt="ParentDocFile"
                    />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.parent_doc = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="ParentDocFile"
                        ref="ParentDocFile"
                        class="input input__file"
                        @change="ParentDocFileUpload()"
                    />
                    <label class="input__file-button" for="ParentDocFile">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="Доверенность родителя"
                                width="25"
                        /></span>
                        <span class="input__file-button-text"> Доверенность родителя </span>
                    </label>
                    {{ ParentDocFile }}
                </div>
            </li>
            <li>
                Справка об обучении в школе:
                <div v-if="sportsmanMap.sportsman.school_doc !== (undefined || null)">
                    <img class="photo" :src="sportsmanMap.sportsman.school_doc" alt="SchoolFile" />
                    <button
                        class="btn btn-primary"
                        @click="
                            sportsmanMap.sportsman.school_doc = null;
                            Editable = true;
                        "
                    >
                        Удалить
                    </button>
                </div>
                <div v-else class="input__wrapper-file">
                    <input
                        type="file"
                        name="file"
                        id="SchoolFile"
                        ref="SchoolFile"
                        class="input input__file"
                        @change="SchoolFileUpload()"
                    />
                    <label class="input__file-button" for="SchoolFile">
                        <span class="input__file-icon-wrapper"
                            ><img
                                class="input__file-icon"
                                src="@/assets/attach.svg"
                                alt="Справка об обучении в школе"
                                width="25"
                        /></span>
                        <span class="input__file-button-text"> Справка об обучении в школе </span>
                    </label>
                    {{ SchoolFile }}
                </div>
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.insurance && !insuranceMap.insurance">
                    Страховой полис:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalInsurance = true;
                                isEdit = false;
                            }
                        "
                    >
                        Добавить новый страховой полис
                    </button>
                </template>
                <template v-else>
                    Страховой полис:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalInsurance = true;
                                isEdit = true;
                            }
                        "
                    >
                        Редактировать страховой полис
                    </button>
                </template>
                <span v-if="sportsmanMap.sportsman.insurance">
                    {{ sportsmanMap.sportsman.insurance }}
                </span>
                <span v-else>
                    {{ insuranceMap.insurance }}
                </span>
            </li>
            <li>
                <template
                    v-if="
                        !sportsmanMap.sportsman.birth_certificate &&
                        !birthCertificateMap.birthCertificate
                    "
                >
                    Свидетельство о рождении:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalBirthCertificate = true;
                                isEdit = false;
                            }
                        "
                    >
                        Добавить новое свидетельство о рождении
                    </button>
                </template>
                <template v-else>
                    Свидетельство о рождении:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalBirthCertificate = true;
                                isEdit = true;
                            }
                        "
                    >
                        Редактировать свидетельство о рождении
                    </button>
                </template>
                <span v-if="sportsmanMap.sportsman.birth_certificate">
                    {{ sportsmanMap.sportsman.birth_certificate }}
                </span>
                <span v-else>
                    {{ birthCertificateMap.birthCertificate }}
                </span>
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.oms && !omsMap.oms">
                    Полис ОМС:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalOms = true;
                                isEdit = false;
                            }
                        "
                    >
                        Добавить новый полис ОМС
                    </button>
                </template>
                <template v-else>
                    Полис ОМС:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalOms = true;
                                isEdit = true;
                            }
                        "
                    >
                        Редактировать полис ОМС
                    </button>
                </template>
                <span v-if="sportsmanMap.sportsman.oms">
                    {{ sportsmanMap.sportsman.oms }}
                </span>
                <span v-else>
                    {{ omsMap.oms }}
                </span>
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.passport && !passportMap.passport">
                    Паспорт:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalPassport = true;
                                isEdit = false;
                            }
                        "
                    >
                        Добавить новый паспорт
                    </button>
                </template>
                <template v-else>
                    Паспорт:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalPassport = true;
                                isEdit = true;
                            }
                        "
                    >
                        Редактировать паспорт
                    </button>
                </template>
                <span v-if="sportsmanMap.sportsman.passport">
                    {{ sportsmanMap.sportsman.passport }}
                </span>
                <span v-else>
                    {{ passportMap.passport }}
                </span>
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.proxy && !proxyMap.proxy">
                    Прокси:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalProxy = true;
                                isEdit = false;
                            }
                        "
                    >
                        Добавить новый прокси
                    </button>
                </template>
                <template v-else>
                    Прокси:
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="
                            {
                                isModalProxy = true;
                                isEdit = true;
                            }
                        "
                    >
                        Редактировать прокси
                    </button>
                </template>
                <span v-if="sportsmanMap.sportsman.proxy">
                    {{ sportsmanMap.sportsman.proxy }}
                </span>
                <span v-else>
                    {{ proxyMap.proxy }}
                </span>
            </li>
        </ul>
        <div class="row">
            <button
                class="btn btn-primary"
                type="button"
                :class="{ disabled: !Editable }"
                @click="editSportsman"
            >
                Сохранить
            </button>
        </div>
    </div>
    <InsuranceModal
        v-if="isModalInsurance && sportsmanMap.sportsman.insurance"
        v-model:mode="isEdit"
        v-model:insurance="sportsmanMap.sportsman.insurance"
        v-model:show="isModalInsurance"
    />
    <InsuranceModal
        v-if="isModalInsurance && !sportsmanMap.sportsman.insurance"
        v-model:mode="isEdit"
        v-model:insurance="insuranceMap.insurance"
        v-model:show="isModalInsurance"
    />

    <BirthCertificateModal
        v-if="isModalBirthCertificate && sportsmanMap.sportsman.birth_certificate"
        v-model:mode="isEdit"
        v-model:birthCertificate="sportsmanMap.sportsman.birth_certificate"
        v-model:show="isModalBirthCertificate"
    />
    <BirthCertificateModal
        v-if="isModalBirthCertificate && !sportsmanMap.sportsman.birth_certificate"
        v-model:mode="isEdit"
        v-model:birthCertificate="birthCertificateMap.birthCertificate"
        v-model:show="isModalBirthCertificate"
    />
    <OmsModal
        v-if="isModalOms && sportsmanMap.sportsman.oms"
        v-model:mode="isEdit"
        v-model:oms="sportsmanMap.sportsman.oms"
        v-model:show="isModalOms"
    />
    <OmsModal
        v-if="isModalOms && !sportsmanMap.sportsman.oms"
        v-model:mode="isEdit"
        v-model:oms="omsMap.oms"
        v-model:show="isModalOms"
    />
    <PassportModal
        v-if="isModalPassport && sportsmanMap.sportsman.passport"
        v-model:mode="isEdit"
        v-model:passport="sportsmanMap.sportsman.passport"
        v-model:show="isModalPassport"
    />
    <PassportModal
        v-if="isModalPassport && !sportsmanMap.sportsman.passport"
        v-model:mode="isEdit"
        v-model:passport="passportMap.passport"
        v-model:show="isModalPassport"
    />
    <ProxyModal
        v-if="isModalProxy && sportsmanMap.sportsman.proxy"
        v-model:mode="isEdit"
        v-model:proxy="sportsmanMap.sportsman.proxy"
        v-model:show="isModalProxy"
    />
    <ProxyModal
        v-if="isModalProxy && !sportsmanMap.sportsman.proxy"
        v-model:mode="isEdit"
        v-model:proxy="proxyMap.proxy"
        v-model:show="isModalProxy"
    />
</template>

<script lang="ts">
/* eslint-disable camelcase */
/* VUE */
import { Vue, Options } from 'vue-class-component';
// import { Watch } from 'vue-property-decorator';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* STATE */
import { ISportsmanState } from '@/store/modules/sportsman/types';
import { ICityState } from '@/store/modules/city/types';
import { IClubState } from '@/store/modules/club/types';
import { ITrainerState } from '@/store/modules/trainer/types';
import { IInsuranceState } from '@/store/modules/insurance/types';
import { IBirthCertificateState } from '@/store/modules/birth_certificate/types';
import { IOmsState } from '@/store/modules/oms/types';
import { IPassportState } from '@/store/modules/passport/types';
import { IProxyDocState } from '@/store/modules/proxy/types';

/* COMPONENTS */
import SelectGender from '../Select/SelectGender.vue';
import SelectRank from '../Select/SelectRank.vue';
import SelectCity from '../Select/SelectCity.vue';
import SelectClub from '../Select/SelectClub.vue';
import SelectTrainer from '../Select/SelectTrainer.vue';
import SelectDuanDzi from '../Select/SelectDuanCzi.vue';
import InsuranceModal from '../Modal/Documents/InsuranceModal.vue';
import BirthCertificateModal from '../Modal/Documents/BirthCertificateModal.vue';
import OmsModal from '../Modal/Documents/OmsModal.vue';
import PassportModal from '../Modal/Documents/PassportModal.vue';
import ProxyModal from '../Modal/Documents/ProxyModal.vue';

/* NAMESPACE */
const namespace = 'sportsman';

const namespaceCity = 'city';
const namespaceClub = 'club';
const namespaceTrainer = 'trainer';

@Options({
    name: 'EditCardSportsman',
    methods: {
        PhotoSportsmanUpload(): void {
            this.PhotoSportsman = this.$refs.PhotoSportsman.files[0];
            this.Editable = true;
        },
        ConfirmAddressFileUpload(): void {
            this.ConfirmAddressFile = this.$refs.ConfirmAddressFile.files[0];
            this.Editable = true;
        },
        RusadaFileUpload(): void {
            this.RusadaFile = this.$refs.RusadaFile.files[0];
            this.Editable = true;
        },
        SchoolFileUpload(): void {
            this.SchoolFile = this.$refs.SchoolFile.files[0];
            this.Editable = true;
        },
        CovidTestFileUpload(): void {
            this.CovidTestFile = this.$refs.CovidTestFile.files[0];
            this.Editable = true;
        },
        CovidContactFileUpload(): void {
            this.CovidContactFile = this.$refs.CovidContactFile.files[0];
            this.Editable = true;
        },
        ParentDocFileUpload(): void {
            this.ParentDocFile = this.$refs.ParentDocFile.files[0];
            this.Editable = true;
        },
        initSelectors(): void {
            if (this.sportsmanMap.sportsman.trainer !== '') {
                const trainer = this.sportsmanMap.sportsman.trainer;
                this.trainerName = `${trainer.surname} ${trainer.name} ${trainer.patronymic}`;
            }
            if (this.sportsmanMap.sportsman.club !== '') {
                this.clubName = this.sportsmanMap.sportsman.club.name_of_club;
            }
            if (this.sportsmanMap.sportsman.city !== '') {
                this.cityName = this.sportsmanMap.sportsman.city.name_of_city;
            }
        },
        editSportsman() {
            console.log('SportsmanMap = ', this.sportsmanMap);
            console.log('sportsman = ', this.sportsman);
            if (this.sportsmanMap.photo) {
                this.sportsman.photo = this.sportsmanMap.photo;
            } else {
                this.sportsman.photo = this.PhotoSportsman;
            }
            if (this.sportsmanMap.confirm_address) {
                this.sportsman.confirm_address = this.sportsmanMap.confirm_address;
            } else {
                this.sportsman.confirm_address = this.ConfirmAddressFile;
            }
            if (this.sportsmanMap.rusada) {
                this.sportsman.rusada = this.sportsmanMap.rusada;
            } else {
                this.sportsman.rusada = this.RusadaFile;
            }
            if (this.sportsmanMap.school_doc) {
                this.sportsman.school_doc = this.sportsmanMap.school_doc;
            } else {
                this.sportsman.school_doc = this.SchoolFile;
            }
            if (this.sportsmanMap.covid_test) {
                this.sportsman.covid_test = this.sportsmanMap.covid_test;
            } else {
                this.sportsman.covid_test = this.CovidTestFile;
            }
            if (this.sportsmanMap.covid_contact) {
                this.sportsman.covid_contact = this.sportsmanMap.covid_contact;
            } else {
                this.sportsman.covid_contact = this.CovidContactFile;
            }
            if (this.sportsmanMap.parent_doc) {
                this.sportsman.parent_doc = this.sportsmanMap.parent_doc;
            } else {
                this.sportsman.parent_doc = this.ParentDocFile;
            }

            this.sportsman.name = this.sportsmanMap.sportsman.name;
            this.sportsman.surname = this.sportsmanMap.sportsman.surname;
            this.sportsman.patronymic = this.sportsmanMap.sportsman.patronymic;
            this.sportsman.date_of_birth = this.sportsmanMap.sportsman.date_of_birth;
            this.sportsman.address = this.sportsmanMap.sportsman.address;
            this.sportsman.gender = this.sportsmanMap.sportsman.gender;
            this.sportsman.duan_czi = this.sportsmanMap.sportsman.duan_czi;
            this.sportsman.rank = this.sportsmanMap.sportsman.rank;

            if (this.sportsmanMap.sportsman.passport) {
                this.sportsman.passport = this.sportsmanMap.sportsman.passport;
            } else {
                this.sportsman.passport = this.passportMap.passport;
            }
            if (this.sportsmanMap.sportsman.birth_certificate) {
                this.sportsman.birth_certificate = this.sportsmanMap.sportsman.birth_certificate;
            } else {
                this.sportsman.birth_certificate = this.birthCertificateMap.birthCertificate;
            }
            if (this.sportsmanMap.sportsman.proxy) {
                this.sportsman.proxy = this.sportsmanMap.sportsman.proxy;
            } else {
                this.sportsman.proxy = this.proxyMap.proxy;
            }
            if (this.sportsmanMap.sportsman.oms) {
                this.sportsman.oms = this.sportsmanMap.sportsman.oms;
            } else {
                this.sportsman.oms = this.omsMap.oms;
            }
            if (this.sportsmanMap.sportsman.insurance) {
                this.sportsman.insurance = this.sportsmanMap.sportsman.insurance;
            } else {
                this.sportsman.insurance = this.insuranceMap.insurance;
            }

            const oldCity = this.cityName;
            const oldClub = this.clubName;
            const oldTrainer = this.trainerName;

            const cityId = this.arrValueCity.indexOf(oldCity);
            const clubId = this.arrValueClub.indexOf(oldClub);
            const trainerId = this.arrValueTrainer.indexOf(oldTrainer);

            this.sportsman.city = this.cityMap.cities[cityId];
            this.sportsman.club = this.clubMap.clubs[clubId];
            this.sportsman.trainer = this.trainerMap.trainers[trainerId];

            this.putSportsman(this.sportsman);

            this.cityName = oldCity;
            this.clubName = oldClub;
            this.trainerName = oldTrainer;
        },
    },
    data() {
        return {
            sportsman: {
                id: this.$route.params.id,
                name: '',
                surname: '',
                patronymic: '',
                photo: '',
                date_of_birth: '',
                address: '',
                confirm_address: '',
                gender: '',
                passport: '',
                birth_certificate: '',
                proxy: '',
                oms: '',
                city: '',
                trainer: '',
                club: '',
                insurance: '',
                rank: '',
                rusada: '',
                covid_test: '',
                covid_contact: '',
                parent_doc: '',
                school_doc: '',
                duan_czi: '',
            },
            clubName: '',
            cityName: '',
            trainerName: '',
            PhotoSportsman: '',
            ConfirmAddressFile: '',
            RusadaFile: '',
            SchoolFile: '',
            CovidContactFile: '',
            CovidTestFile: '',
            ParentDocFile: '',
        };
    },
    mounted() {
        this.initSelectors();
    },
    components: {
        SelectGender,
        SelectRank,
        SelectCity,
        SelectTrainer,
        SelectClub,
        SelectDuanDzi,
        InsuranceModal,
        BirthCertificateModal,
        OmsModal,
        PassportModal,
        ProxyModal,
    },
})
export default class EditCardSportsman extends Vue {
    /* MODAL */
    isEdit = false;
    isModalInsurance = false;
    isModalBirthCertificate = false;
    isModalOms = false;
    isModalPassport = false;
    isModalProxy = false;

    Editable = false;

    /* STATE */
    @State('sportsman')
    sportsmanMap!: ISportsmanState;
    @State('city')
    cityMap!: ICityState;
    @State('club')
    clubMap!: IClubState;
    @State('trainer')
    trainerMap!: ITrainerState;
    @State('insurance')
    insuranceMap!: IInsuranceState;
    @State('birth_certificate')
    birthCertificateMap!: IBirthCertificateState;
    @State('oms')
    omsMap!: IOmsState;
    @State('passport')
    passportMap!: IPassportState;
    @State('proxy')
    proxyMap!: IProxyDocState;

    /* ACTION */
    @Action('putSportsman', { namespace })
    putSportsman: any;

    /* GETTERS */
    @Getter('arrValueCity', { namespace: namespaceCity })
    arrValueCity: Array<string> | undefined;
    @Getter('arrValueClub', { namespace: namespaceClub })
    arrValueClub: Array<string> | undefined;
    @Getter('arrValueTrainer', { namespace: namespaceTrainer })
    arrValueTrainer: Array<string> | undefined;
}
</script>

<style scoped></style>

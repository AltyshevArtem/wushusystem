<template>
    <div class="container-fluid">
        <form @submit.prevent="addNewSportsman">
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <input
                            class="form-control"
                            placeholder="Фамилия"
                            id="surname"
                            v-model="sportsman.surname"
                        />
                        <input
                            class="form-control"
                            placeholder="Имя"
                            id="name"
                            v-model="sportsman.name"
                        />
                        <input
                            class="form-control"
                            placeholder="Отчество"
                            id="patronymic"
                            v-model="sportsman.patronymic"
                        />
                    </div>
                </div>
                <div class="col-6">
                    <div class="input__wrapper-file">
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
                    <SelectGender v-model="sportsman.gender" mode="single" />
                    <div class="form-group">
                        <label for="DateOfBirth">Дата Рождения</label>
                        <input
                            placeholder="YYYY-MM-DD"
                            id="DateOfBirth"
                            class="form-control"
                            v-model="sportsman.date_of_birth"
                        />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <SelectTrainer mode="single" id="selectTrainer" v-model="sportsman.trainer" />

                    <SelectRank mode="single" id="selectRank" v-model="sportsman.rank" />

                    <SelectDuanCzi mode="single" id="selectDuanCzi" v-model="sportsman.duan_czi" />
                </div>
                <div class="col-6">
                    <SelectCity mode="single" v-model="sportsman.city" />
                    <SelectClub mode="single" v-model="sportsman.club" />
                    <div class="form-group">
                        <input
                            placeholder="Адрес"
                            class="form-control"
                            v-model="sportsman.address"
                        />
                    </div>
                </div>
            </div>
            <div class="row">
                <template v-if="!insuranceMap.insurance">
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
                {{ insuranceMap.insurance }}
            </div>
            <div class="row">
                <template v-if="!birthCertificateMap.birthCertificate">
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
                {{ birthCertificateMap.birthCertificate }}
            </div>
            <div class="row">
                <template v-if="!omsMap.oms">
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
                {{ omsMap.oms }}
            </div>
            <div class="row">
                <template v-if="!passportMap.passport">
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
                {{ passportMap.passport }}
            </div>
            <div class="row">
                <template v-if="!proxyMap.proxy">
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
                {{ proxyMap.proxy }}
            </div>
            <div class="input__wrapper-file">
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
            <div class="input__wrapper-file">
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
            <div class="input__wrapper-file">
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
            <div class="input__wrapper-file">
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
            <div class="input__wrapper-file">
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
            <div class="input__wrapper-file">
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
            <div class="row">
                <button type="submit" class="btn btn-primary">Добавить нового спортсмена</button>
            </div>
        </form>
    </div>
    <InsuranceModal
        v-if="isModalInsurance"
        v-model:mode="isEdit"
        v-model:insurance="insuranceMap.insurance"
        v-model:show="isModalInsurance"
    />
    <BirthCertificateModal
        v-if="isModalBirthCertificate"
        v-model:mode="isEdit"
        v-model:birthCertificate="birthCertificateMap.birthCertificate"
        v-model:show="isModalBirthCertificate"
    />
    <OmsModal
        v-if="isModalOms"
        v-model:mode="isEdit"
        v-model:oms="omsMap.oms"
        v-model:show="isModalOms"
    />
    <PassportModal
        v-if="isModalPassport"
        v-model:mode="isEdit"
        v-model:passport="passportMap.passport"
        v-model:show="isModalPassport"
    />
    <ProxyModal
        v-if="isModalProxy"
        v-model:mode="isEdit"
        v-model:proxy="proxyMap.proxy"
        v-model:show="isModalProxy"
    />
</template>

<script lang="ts">
/* eslint-disable camelcase */
// import Datepicker from 'vue3-datepicker';
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* COMPONENTS */
import SelectGender from '@/components/Select/SelectGender.vue';
import SelectRank from '@/components/Select/SelectRank.vue';
import SelectTrainer from '@/components/Select/SelectTrainer.vue';
import SelectDuanCzi from '@/components/Select/SelectDuanCzi.vue';
import SelectClub from '@/components/Select/SelectClub.vue';
import SelectCity from '@/components/Select/SelectCity.vue';
import InsuranceModal from '../Modal/Documents/InsuranceModal.vue';
import BirthCertificateModal from '../Modal/Documents/BirthCertificateModal.vue';
import OmsModal from '../Modal/Documents/OmsModal.vue';
import PassportModal from '../Modal/Documents/PassportModal.vue';
import ProxyModal from '../Modal/Documents/ProxyModal.vue';

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

/* NAMESPACE */
const namespace = 'sportsman';
const namespaceCity = 'city';
const namespaceClub = 'club';
const namespaceTrainer = 'trainer';

@Options({
    name: 'AddCardSportsman',
    methods: {
        PhotoSportsmanUpload() {
            this.PhotoSportsman = this.$refs.PhotoSportsman.files[0];
        },
        ConfirmAddressFileUpload() {
            this.ConfirmAddressFile = this.$refs.ConfirmAddressFile.files[0];
        },
        RusadaFileUpload() {
            this.RusadaFile = this.$refs.RusadaFile.files[0];
        },
        SchoolFileUpload() {
            this.SchoolFile = this.$refs.SchoolFile.files[0];
        },
        CovidTestFileUpload() {
            this.CovidTestFile = this.$refs.CovidTestFile.files[0];
        },
        CovidContactFileUpload() {
            this.CovidContactFile = this.$refs.CovidContactFile.files[0];
        },
        ParentDocFileUpload() {
            this.ParentDocFile = this.$refs.ParentDocFile.files[0];
        },
        //TODO: Сделать нормальную валидацию формы, используя сторонние библиотеки
        validateForm(): boolean {
            if (!this.sportsman.name) return false;
            if (!this.sportsman.surname) return false;
            if (!this.sportsman.patronymic) return false;
            if (!this.sportsman.date_of_birth) return false;
            if (!this.sportsman.city) return false;
            return true;
        },
        addNewSportsman() {
            if (this.validateForm()) {
                this.sportsman.photo = this.PhotoSportsman;
                this.sportsman.confirm_address = this.ConfirmAddressFile;
                this.sportsman.rusada = this.RusadaFile;
                this.sportsman.school_doc = this.SchoolFile;
                this.sportsman.covid_test = this.CovidTestFile;
                this.sportsman.covid_contact = this.CovidContactFile;
                this.sportsman.parent_doc = this.ParentDocFile;

                this.sportsman.birth_certificate = this.birthCertificateMap.birthCertificate;
                this.sportsman.insurance = this.insuranceMap.insurance;
                this.sportsman.oms = this.omsMap.oms;
                this.sportsman.proxy = this.proxyMap.proxy;
                this.sportsman.passport = this.passportMap.passport;

                const oldCity = this.sportsman.city;
                const oldClub = this.sportsman.club;
                const oldTrainer = this.sportsman.trainer;

                const cityId = this.arrValueCity.indexOf(this.sportsman.city);
                const clubId = this.arrValueClub.indexOf(this.sportsman.club);
                const trainerId = this.arrValueTrainer.indexOf(this.sportsman.trainer);

                this.sportsman.city = this.cityMap.cities[cityId];
                this.sportsman.club = this.clubMap.clubs[clubId];
                this.sportsman.trainer = this.trainerMap.trainers[trainerId];

                this.postSportsman(this.sportsman);
                //TODO: Сделать роутер пуш на созданного спортсмена в случае успеха

                this.sportsman.city = oldCity;
                this.sportsman.club = oldClub;
                this.sportsman.trainer = oldTrainer;
            } else {
                console.log('Не все поля заполнены');
            }
        },
    },
    data() {
        return {
            sportsman: {
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
            PhotoSportsman: '',
            ConfirmAddressFile: '',
            SchoolFile: '',
            RusadaFile: '',
            CovidTestFile: '',
            CovidContactFile: '',
            ParentDocFile: '',
        };
    },
    components: {
        SelectGender,
        SelectRank,
        SelectTrainer,
        SelectDuanCzi,
        SelectClub,
        SelectCity,
        InsuranceModal,
        BirthCertificateModal,
        OmsModal,
        PassportModal,
        ProxyModal,
    },
})
export default class AddCardSportsman extends Vue {
    /* MODAL */
    isEdit = false;
    isModalInsurance = false;
    isModalBirthCertificate = false;
    isModalOms = false;
    isModalPassport = false;
    isModalProxy = false;

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

    /* GETTERS */
    @Getter('arrValueCity', { namespace: namespaceCity })
    arrValueCity: Array<string> | undefined;
    @Getter('arrValueClub', { namespace: namespaceClub })
    arrValueClub: Array<string> | undefined;
    @Getter('arrValueTrainer', { namespace: namespaceTrainer })
    arrValueTrainer: Array<string> | undefined;

    /* ACTION */
    @Action('postSportsman', { namespace })
    postSportsman: any;
}
</script>

<style scoped></style>

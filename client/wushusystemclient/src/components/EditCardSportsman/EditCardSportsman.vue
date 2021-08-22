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
                <SelectTrainer
                    @change="Editable = true"
                    mode="single"
                    v-model="sportsmanMap.sportsman.trainer"
                />
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
                Разряд:
                <SelectRank
                    mode="single"
                    @change="Editable = true"
                    v-model="sportsmanMap.sportsman.rank"
                />
            </li>
            <li>
                Город:
                <SelectCity
                    mode="single"
                    @change="Editable = true"
                    v-model="sportsmanMap.sportsman.city"
                />
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
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.insurance">
                    Страховой полис:
                    <button
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
                {{ sportsmanMap.sportsman.insurance }}
                <InsuranceModal
                    v-if="isModalInsurance"
                    :mode="isEdit"
                    :insurance="sportsmanMap.sportsman.insurance"
                    @closeModal="isModalInsurance = false"
                />
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.birth_certificate">
                    Свидетельство о рождении:
                    <button
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
                {{ sportsmanMap.sportsman.birth_certificate }}
                <BirthCertificateModal
                    v-if="isModalBirthCertificate"
                    :mode="isEdit"
                    :birthCertificate="sportsmanMap.sportsman.birth_certificate"
                    @closeModal="isModalBirthCertificate = false"
                />
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.oms">
                    Полис ОМС:
                    <button
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
                {{ sportsmanMap.sportsman.oms }}
                <OmsModal
                    v-if="isModalOms"
                    :mode="isEdit"
                    :oms="sportsmanMap.sportsman.oms"
                    @closeModal="isModalOms = false"
                />
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.passport">
                    Паспорт:
                    <button
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
                {{ sportsmanMap.sportsman.passport }}
                <PassportModal
                    v-if="isModalPassport"
                    :mode="isEdit"
                    :passport="sportsmanMap.sportsman.passport"
                    @closeModal="isModalPassport = false"
                />
            </li>
            <li>
                <template v-if="!sportsmanMap.sportsman.proxy">
                    Прокси:
                    <button
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
                {{ sportsmanMap.sportsman.proxy }}
                <ProxyModal
                    v-if="isModalProxy"
                    :mode="isEdit"
                    :proxy="sportsmanMap.sportsman.proxy"
                    @closeModal="isModalProxy = false"
                />
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
// import { IInsuranceState } from '@/store/modules/insurance/types';
// import { IBirthCertificateState } from '@/store/modules/birth_certificate/types';
// import { IOmsState } from '@/store/modules/oms/types';
// import { IPassportState } from '@/store/modules/passport/types';
// import { IProxyDocState } from '@/store/modules/proxy/types';

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
        editSportsman() {
            if (this.PhotoSportsman !== '') {
                this.sportsman.photo = this.PhotoSportsman;
            }
            if (this.ConfirmAddressFile !== '') {
                this.sportsman.confirm_address = this.ConfirmAddressFile;
            }
            if (this.RusadaFile !== '') {
                this.sportsman.rusada = this.RusadaFile;
            }
            if (this.SchoolFile !== '') {
                this.sportsman.school_doc = this.SchoolFile;
            }
            if (this.CovidTestFile !== '') {
                this.sportsman.covid_test = this.CovidTestFile;
            }
            if (this.CovidContactFile !== '') {
                this.sportsman.covid_contact = this.CovidContactFile;
            }
            if (this.ParentDocFile !== '') {
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

            this.sportsman.passport = this.sportsmanMap.sportsman.passport;
            this.sportsman.birth_certificate = this.sportsmanMap.sportsman.birth_certificate;
            this.sportsman.proxy = this.sportsmanMap.sportsman.proxy;
            this.sportsman.oms = this.sportsmanMap.sportsman.oms;
            this.sportsman.insurance = this.sportsmanMap.sportsman.insurance;

            const oldCity = this.sportsman.city;
            const oldClub = this.sportsman.club;
            const oldTrainer = this.sportsman.trainer;

            const cityId = this.arrValueCity.indexOf(this.sportsmanMap.sportsman.city);
            const clubId = this.arrValueClub.indexOf(this.sportsmanMap.sportsman.club);
            const trainerId = this.arrValueTrainer.indexOf(this.sportsmanMap.sportsman.trainer);

            this.sportsman.city = this.cityMap.cities[cityId];
            this.sportsman.club = this.clubMap.clubs[clubId];
            this.sportsman.trainer = this.trainerMap.trainers[trainerId];

            this.putSportsman(this.sportsman);

            this.sportsman.city = oldCity;
            this.sportsman.club = oldClub;
            this.sportsman.trainer = oldTrainer;
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
            PhotoSportsman: '',
            ConfirmAddressFile: '',
            RusadaFile: '',
            SchoolFile: '',
            CovidContactFile: '',
            CovidTestFile: '',
            ParentDocFile: '',
        };
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

    // mounted(): void {
    // }

    // /* INSURANCE */
    // @Watch('sportsmanMap.sportsman.insurance.date_start')
    // handlerInsuranceDS(newVal: Date, oldVal: Date): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.insurance.date_end')
    // handlerInsuranceDE(newVal: Date, oldVal: Date): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.insurance.file_insurance')
    // handlerInsuranceFI(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }

    // /* BIRTHCERTIFICATE */
    // @Watch('sportsmanMap.sportsman.birth_certificate.number')
    // handlerBirthCertificateNumber(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.birth_certificate.scan')
    // handlerBirthCertificateScan(newVal: number, oldVal: number): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }

    // /* OMS */
    // @Watch('sportsmanMap.sportsman.oms.number')
    // handlerOMSNumber(newVal: number, oldVal: number): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.oms.scan')
    // handlerOMSScan(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }

    // /* PASSPORT */
    // @Watch('sportsmanMap.sportsman.passport.number')
    // handlerPassportNumber(newVal: number, oldVal: number): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.passport.scan')
    // handlerPassportScan(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.passport.date_start')
    // handlerPassportDS(newVal: Date, oldVal: Date): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.passport.issue')
    // handlerPassportIssue(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.passport.code')
    // handlerPassportCode(newVal: number, oldVal: number): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }

    // /* PROXY */
    // @Watch('sportsmanMap.sportsman.proxy.scan')
    // handlerProxyScan(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.proxy.original_passport')
    // handlerProxyOP(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.proxy.original_birth_certificate')
    // handlerProxyOBC(newVal: string, oldVal: string): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
    // @Watch('sportsmanMap.sportsman.proxy.date_end')
    // handlerProxyDE(newVal: Date, oldVal: Date): void {
    //     if (oldVal !== newVal) this.Editable = true;
    // }
}
</script>

<style scoped></style>

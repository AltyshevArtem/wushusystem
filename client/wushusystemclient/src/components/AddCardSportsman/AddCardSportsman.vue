<template>
    <form @submit.prevent="addNewSportsman">
        <div class="container py-4">
            <div>
                <div class="pb-3 mb-4 d-flex justify-content-between">
                    <span class="fs-4">
                        <strong>Добававление нового спортсмена</strong>
                    </span>
                </div>
            </div>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="PhotoSportsman"
                                                ref="PhotoSportsman"
                                                class="input input__file"
                                                @change="PhotoSportsmanUpload($event)"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="PhotoSportsman"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="Фото спортсмена"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            <!-- <img src="" alt="PhotoSportsman"
                                            id="TestImage" /> -->
                                            {{ PhotoSportsman }}
                                        </div>
                                    </li>
                                    <li class="list-group-item">
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
                                            <div class="form-group">
                                                <input
                                                    placeholder="YYYY-MM-DD"
                                                    class="form-control"
                                                    v-model="sportsman.date_of_birth"
                                                />
                                            </div>
                                            <SelectGender
                                                v-model="sportsman.gender"
                                                mode="single"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item second-list">
                                        <SelectTrainer
                                            mode="single"
                                            id="selectTrainer"
                                            v-model="sportsman.trainer"
                                        />

                                        <SelectRank
                                            mode="single"
                                            id="selectRank"
                                            v-model="sportsman.rank"
                                        />

                                        <SelectDuanCzi
                                            mode="single"
                                            id="selectDuanCzi"
                                            v-model="sportsman.duan_czi"
                                        />
                                        <SelectCity mode="single" v-model="sportsman.city" />
                                        <SelectClub mode="single" v-model="sportsman.club" />
                                        <div class="form-group">
                                            <input
                                                placeholder="Адрес"
                                                class="form-control"
                                                v-model="sportsman.address"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item four-list">
                                        <template v-if="!passportMap.passport">
                                            <p><strong>Данные паспорта</strong></p>
                                            <span>Добавить данные о паспорте: </span>
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                @click="
                                                    {
                                                        isModalPassport = true;
                                                        isEdit = false;
                                                    }
                                                "
                                            >
                                                Добавить
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
                                    </li>
                                    <li class="list-group-item">
                                        <template v-if="!insuranceMap.insurance">
                                            <p><strong>Страховка</strong></p>
                                            <span>Добавить данные о страховке: </span>
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                @click="
                                                    {
                                                        isModalInsurance = true;
                                                        isEdit = false;
                                                    }
                                                "
                                            >
                                                Добавить
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
                                    </li>
                                    <li class="list-group-item">
                                        <template v-if="!birthCertificateMap.birthCertificate">
                                            <p><strong>Свидетельство о рождении</strong></p>
                                            <span>Добавить данные о сведительстве рождения: </span>
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                @click="
                                                    {
                                                        isModalBirthCertificate = true;
                                                        isEdit = false;
                                                    }
                                                "
                                            >
                                                Добавить
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
                                    </li>
                                    <li class="list-group-item">
                                        <template v-if="!omsMap.oms">
                                            <p><strong>Полис ОМС</strong></p>
                                            <span>Добавить данные о полисе ОМС: </span>
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                @click="
                                                    {
                                                        isModalOms = true;
                                                        isEdit = false;
                                                    }
                                                "
                                            >
                                                Добавить
                                            </button>
                                        </template>
                                        <template v-else>
                                            Полис ОМС:
                                            <button
                                                type="button"
                                                class="btn btn-dark"
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
                                    </li>
                                    <li class="list-group-item">
                                        <template v-if="!proxyMap.proxy">
                                            <p>
                                                <strong
                                                    >Заверенные копии и доверенность
                                                    родителя</strong
                                                >
                                            </p>
                                            <span
                                                >Добавить данные о заверенной копии и доверенности
                                                родителя:
                                            </span>
                                            <button
                                                type="button"
                                                class="btn btn-dark"
                                                @click="
                                                    {
                                                        isModalProxy = true;
                                                        isEdit = false;
                                                    }
                                                "
                                            >
                                                Добавить
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item button-list">
                                        <span><strong>Подтверждение прописки</strong></span>
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="ConfirmAddressFile"
                                                ref="ConfirmAddressFile"
                                                class="input input__file"
                                                @change="ConfirmAddressFileUpload()"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="ConfirmAddressFile"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="Подтверждение прописки"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            {{ ConfirmAddressFile }}
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>Сертификат РУСАДА</strong></span>
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="RusadaFile"
                                                ref="RusadaFile"
                                                class="input input__file"
                                                @change="RusadaFileUpload()"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="RusadaFile"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="Сертификат РУСАДА"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            {{ RusadaFile }}
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>Справка из школы</strong></span>
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="SchoolFile"
                                                ref="SchoolFile"
                                                class="input input__file"
                                                @change="SchoolFileUpload()"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="SchoolFile"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="Справка об обучении в школе"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            {{ SchoolFile }}
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>ПЦР-тест COVID-19</strong></span>
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="CovidTestFile"
                                                ref="CovidTestFile"
                                                class="input input__file"
                                                @change="CovidTestFileUpload()"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="CovidTestFile"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="ПЦР-тест COVID-19"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            {{ CovidTestFile }}
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span
                                            ><strong
                                                >Справка об отсутствии контактов с инфекционными
                                                больными</strong
                                            ></span
                                        >
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="CovidContactFile"
                                                ref="CovidContactFile"
                                                class="input input__file"
                                                @change="CovidContactFileUpload()"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="CovidContactFile"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="Справка об отсутствии
                                                        контактов с инфекционными больными"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            {{ CovidContactFile }}
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>Доверенность родителя</strong></span>
                                        <div class="input__wrapper-file upload">
                                            <input
                                                type="file"
                                                name="file"
                                                id="ParentDocFile"
                                                ref="ParentDocFile"
                                                class="input input__file"
                                                @change="ParentDocFileUpload()"
                                            />
                                            <label
                                                class="input__file-button load-file"
                                                for="ParentDocFile"
                                            >
                                                <span class="input__file-icon-wrapper"
                                                    ><img
                                                        class="input__file-icon"
                                                        src="@/assets/attach.svg"
                                                        alt="Доверенность родителя"
                                                        width="25"
                                                /></span>
                                                <span class="input__file-button-text">
                                                    Загрузить файл
                                                </span>
                                            </label>
                                            {{ ParentDocFile }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <button type="submit" class="btn btn-success">
                        Добавить нового спортсмена
                    </button>
                </div>
            </div>
        </div>
    </form>
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
            // let reader = new FileReader();
            // const imageReader = document.getElementById('TestImage') as HTMLImageElement;
            // reader.onload = () => {
            //     imageReader.src = event.target.result;
            // };
            // reader.readAsDataURL(this.PhotoSportsman);

            //

            // console.log(this.PhotoSportsman);
            // const reader = new FileReader();
            // const csv: string | ArrayBuffer | null = reader.result;
            // if (!(csv === null)) {
            //     reader.onload = function () {
            //         imageReader.src = csv.toString();
            //     };
            // }
            // reader.readAsDataURL(this.PhotoSportsman);
            // console.log(imageReader.src);
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

<style scoped>
.second-list {
    height: 290px;
}
.upload {
    width: 300px;
}
.load-file {
    width: 69%;
    height: 35px;
    margin: 0;
}
.custom-input {
    color: blue;
}
</style>

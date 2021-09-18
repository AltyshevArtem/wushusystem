<template>
    <img v-if="!loading" src="@/assets/spin.svg" />
    <form @submit.prevent="AddNewSportsman" v-else>
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
                                    <li class="list-group-item list-sportsman">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="PhotoSportsman"
                                                        ref="PhotoSportsman"
                                                        class="input input__file"
                                                        @input="PhotoSportsmanUpload"
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
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="PhSpImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${PhSpImg})`,
                                                    }"
                                                >
                                                    <div
                                                        class="
                                                            danger-button__new-file
                                                            btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                PhSpImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
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
                                            <span>Добавить данные о свидетельстве рождения: </span>
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
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="ConfirmAddress"
                                                        ref="ConfirmAddress"
                                                        class="input input__file"
                                                        @input="ConfirmAddressFileUpload"
                                                    />
                                                    <label
                                                        class="input__file-button load-file"
                                                        for="ConfirmAddress"
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
                                                    <div
                                                        v-if="ConfAddrImg !== (undefined || null)"
                                                        class="
                                                            danger-button__new-file
                                                            list-btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                ConfAddrImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="ConfAddrImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${ConfAddrImg})`,
                                                    }"
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>Сертификат РУСАДА</strong></span>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="Rusada"
                                                        ref="Rusada"
                                                        class="input input__file"
                                                        @input="RusadaFileUpload"
                                                    />
                                                    <label
                                                        class="input__file-button load-file"
                                                        for="Rusada"
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
                                                    <div
                                                        v-if="RusadaFileImg !== (undefined || null)"
                                                        class="
                                                            danger-button__new-file
                                                            list-btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                RusadaFileImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="RusadaFileImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${RusadaFileImg})`,
                                                    }"
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>Справка из школы</strong></span>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="School"
                                                        ref="School"
                                                        class="input input__file"
                                                        @input="SchoolFileUpload"
                                                    />
                                                    <label
                                                        class="input__file-button load-file"
                                                        for="School"
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
                                                    <div
                                                        v-if="SchoolFileImg !== (undefined || null)"
                                                        class="
                                                            danger-button__new-file
                                                            list-btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                SchoolFileImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="SchoolFileImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${SchoolFileImg})`,
                                                    }"
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>ПЦР-тест COVID-19</strong></span>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="CovidTest"
                                                        ref="CovidTest"
                                                        class="input input__file"
                                                        @input="CovidTestFileUpload"
                                                    />
                                                    <label
                                                        class="input__file-button load-file"
                                                        for="CovidTest"
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
                                                    <div
                                                        v-if="CovidTestImg !== (undefined || null)"
                                                        class="
                                                            danger-button__new-file
                                                            list-btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                CovidTestImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="CovidTestImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${CovidTestImg})`,
                                                    }"
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span
                                            ><strong
                                                >Справка об отсутствии контактов с инфекционными
                                                больными</strong
                                            ></span
                                        >
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="CovidContact"
                                                        ref="CovidContact"
                                                        class="input input__file"
                                                        @input="CovidContactFileUpload"
                                                    />
                                                    <label
                                                        class="input__file-button load-file"
                                                        for="CovidContact"
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
                                                    <div
                                                        v-if="CovidContImg !== (undefined || null)"
                                                        class="
                                                            danger-button__new-file
                                                            list-btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                CovidContImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="CovidContImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${CovidContImg})`,
                                                    }"
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="list-group-item button-list">
                                        <span><strong>Доверенность родителя</strong></span>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input__wrapper-file upload">
                                                    <input
                                                        type="file"
                                                        name="file"
                                                        id="ParentDoc"
                                                        ref="ParentDoc"
                                                        class="input input__file"
                                                        @input="ParentDocFileUpload"
                                                    />
                                                    <label
                                                        class="input__file-button load-file"
                                                        for="ParentDoc"
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
                                                    <div
                                                        v-if="ParentDocImg !== (undefined || null)"
                                                        class="
                                                            danger-button__new-file
                                                            list-btnDeleteSportsman
                                                        "
                                                    >
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                ParentDocImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div
                                                    v-if="ParentDocImg !== (undefined || null)"
                                                    class="imagePreviewWrapper PreviewImgSportsman"
                                                    :style="{
                                                        'background-image': `url(${ParentDocImg})`,
                                                    }"
                                                ></div>
                                            </div>
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
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* SELECT */
import SelectGender from '@/components/Select/SelectGender.vue';
import SelectRank from '@/components/Select/SelectRank.vue';
import SelectTrainer from '@/components/Select/SelectTrainer.vue';
import SelectDuanCzi from '@/components/Select/SelectDuanCzi.vue';
import SelectClub from '@/components/Select/SelectClub.vue';
import SelectCity from '@/components/Select/SelectCity.vue';

/* MODALS */
import InsuranceModal from '@/components/Modal/Documents/InsuranceModal.vue';
import BirthCertificateModal from '@/components/Modal/Documents/BirthCertificateModal.vue';
import OmsModal from '@/components/Modal/Documents/OmsModal.vue';
import PassportModal from '@/components/Modal/Documents/PassportModal.vue';
import ProxyModal from '@/components/Modal/Documents/ProxyModal.vue';

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

/* MODELS */
import { IGender } from '@/models/gender';
import { IBirthCertificate, IInsurance, IOms, IPassport, IProxyDoc } from '@/models/sportsman';
import { IRank } from '@/models/rank';
import { IDuanCzi } from '@/models/duan_czi';
import { ICity } from '@/models/city';
import { ITrainer } from '@/models/trainer';
import { IClub } from '@/models/club';

/* NAMESPACE */
const namespace = 'sportsman';
const namespaceCity = 'city';
const namespaceClub = 'club';
const namespaceTrainer = 'trainer';

@Options({
    name: 'AddCardSportsman',
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
    /* LOADING */
    loading = false;

    /* DATA */
    sportsman!: {
        name: string | undefined;
        surname: string | undefined;
        patronymic: string | undefined;
        photo: string | File | null;
        date_of_birth: Date | undefined;
        address: string | undefined;
        confirm_address: string | File | null;
        gender: IGender | undefined;
        passport: IPassport | undefined;
        birth_certificate: IBirthCertificate | undefined;
        proxy: IProxyDoc | undefined;
        oms: IOms | undefined;
        city: ICity | string;
        trainer: ITrainer | string;
        club: IClub | string;
        insurance: IInsurance | undefined;
        rank: IRank | undefined;
        rusada: string | File | null;
        covid_test: string | File | null;
        covid_contact: string | File | null;
        parent_doc: string | File | null;
        school_doc: string | File | null;
        duan_czi: IDuanCzi | undefined;
    };

    PhotoSportsmanFile: string | File | null = '';
    ConfirmAddressFile: string | File | null = '';
    RusadaFile: string | File | null = '';
    SchoolFile: string | File | null = '';
    CovidContactFile: string | File | null = '';
    CovidTestFile: string | File | null = '';
    ParentDocFile: string | File | null = '';

    ParentDocImg: string | ArrayBuffer | null = null;
    CovidContImg: string | ArrayBuffer | null = null;
    CovidTestImg: string | ArrayBuffer | null = null;
    SchoolFileImg: string | ArrayBuffer | null = null;
    RusadaFileImg: string | ArrayBuffer | null = null;
    ConfAddrImg: string | ArrayBuffer | null = null;
    PhSpImg: string | ArrayBuffer | null = null;

    /* MODAL */
    isEdit = false;
    isModalInsurance = false;
    isModalBirthCertificate = false;
    isModalOms = false;
    isModalPassport = false;
    isModalProxy = false;

    /* METHOD */
    public PhotoSportsmanUpload(): void {
        const fileList: FileList | null = (this.$refs['PhotoSportsman'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.PhSpImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('PhotoSportsman', file);
            }
        }
        this.PhotoSportsmanFile = file;
    }
    public ConfirmAddressFileUpload(): void {
        const fileList: FileList | null = (this.$refs['ConfirmAddress'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.ConfAddrImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('ConfirmAddress', file);
            }
        }
        this.ConfirmAddressFile = file;
    }
    public RusadaFileUpload(): void {
        const fileList: FileList | null = (this.$refs['Rusada'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.RusadaFileImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('Rusada', file);
            }
        }
        this.RusadaFile = file;
    }
    public SchoolFileUpload(): void {
        const fileList: FileList | null = (this.$refs['School'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.SchoolFileImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('School', file);
            }
        }
        this.SchoolFile = file;
    }
    public CovidTestFileUpload(): void {
        const fileList: FileList | null = (this.$refs['CovidTest'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.CovidTestImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('CovidTest', file);
            }
        }
        this.CovidTestFile = file;
    }
    public CovidContactFileUpload(): void {
        const fileList: FileList | null = (this.$refs['CovidContact'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.CovidContImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('CovidContact', file);
            }
        }
        this.CovidContactFile = file;
    }
    public ParentDocFileUpload(): void {
        const fileList: FileList | null = (this.$refs['ParentDoc'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.ParentDocImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('ParentDoc', file);
            }
        }
        this.ParentDocFile = file;
    }
    //TODO: Сделать нормальную валидацию формы, используя сторонние библиотеки
    private validateForm(): boolean {
        if (!this.sportsman.name) return false;
        if (!this.sportsman.surname) return false;
        if (!this.sportsman.patronymic) return false;
        if (!this.sportsman.date_of_birth) return false;
        if (!this.sportsman.city) return false;
        return true;
    }
    public AddNewSportsman(): void {
        if (this.validateForm()) {
            this.sportsman.photo = this.PhotoSportsmanFile;
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

            const cityId = this.arrValueCity?.indexOf(String(oldCity));
            const clubId = this.arrValueClub?.indexOf(String(oldClub));
            const trainerId = this.arrValueTrainer?.indexOf(String(oldTrainer));

            if (cityId !== undefined) {
                this.sportsman.city = this.cityMap.cities[cityId];
            }
            if (clubId !== undefined) {
                this.sportsman.club = this.clubMap.clubs[clubId];
            }
            if (trainerId !== undefined) {
                this.sportsman.trainer = this.trainerMap.trainers[trainerId];
            }

            this.postSportsman(this.sportsman);

            this.sportsman.city = oldCity;
            this.sportsman.club = oldClub;
            this.sportsman.trainer = oldTrainer;
        } else {
            console.log('Не все поля заполнены');
        }
    }

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

    mounted(): void {
        this.loading = false;
        this.sportsman = {
            name: '',
            surname: '',
            patronymic: '',
            photo: '',
            date_of_birth: undefined,
            address: '',
            confirm_address: '',
            gender: undefined,
            passport: undefined,
            birth_certificate: undefined,
            proxy: undefined,
            oms: undefined,
            city: '',
            trainer: '',
            club: '',
            insurance: undefined,
            rank: undefined,
            rusada: '',
            covid_test: '',
            covid_contact: '',
            parent_doc: '',
            school_doc: '',
            duan_czi: undefined,
        };
        this.loading = true;
    }
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
.imagePreviewWrapper {
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    display: block;
    cursor: pointer;
    background-size: contain;
    background-position: center center;
}
.danger-button__new-file {
    padding-left: 22px;
    padding-top: 20px;
}
.PreviewImgSportsman {
    width: 140px;
    height: 140px;
    margin-top: 20px;
    margin-left: 0px;
}
.btnDeleteSportsman {
    padding-top: 160px;
    margin-left: 15px;
}
.list-sportsman {
    height: 250px;
}
</style>

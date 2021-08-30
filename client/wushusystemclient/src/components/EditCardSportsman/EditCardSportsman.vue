<template>
    <div>
        <div class="container py-4">
            <div>
                <div class="pb-3 mb-4 d-flex justify-content-between">
                    <span class="fs-4">
                        <strong> Редактирование спортсмена: </strong><span> {{ FullName }}</span>
                    </span>
                </div>
            </div>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Информация о спортсмене:</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <span><strong>Фамилия: </strong></span>
                                        <input
                                            @change="this.Editable = true"
                                            placeholder="Фамилия"
                                            v-model="sportsmanMap.sportsman.surname"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Имя: </span>
                                        <input
                                            @change="this.Editable = true"
                                            placeholder="Имя"
                                            v-model="sportsmanMap.sportsman.name"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Отчество: </span>
                                        <input
                                            @change="this.Editable = true"
                                            placeholder="Отчество"
                                            v-model="sportsmanMap.sportsman.patronymic"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Пол:</span>
                                        <span
                                            ><SelectGender
                                                @change="Editable = true"
                                                mode="single"
                                                v-model="sportsmanMap.sportsman.gender"
                                        /></span>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="form-group">
                                            <label for="DateOfBirth">Дата Рождения</label>
                                            <input
                                                placeholder="YYYY-MM-DD"
                                                @change="this.Editable = true"
                                                v-model="sportsmanMap.sportsman.date_of_birth"
                                            />
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Разряд:
                                        <SelectRank
                                            mode="single"
                                            @change="Editable = true"
                                            v-model="sportsmanMap.sportsman.rank"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        Дуань/Цзи:
                                        <SelectDuanDzi
                                            @change="Editable = true"
                                            mode="single"
                                            v-model="sportsmanMap.sportsman.duan_czi"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div v-if="sportsmanMap.sportsman.photo !== (undefined || null)">
                                <img
                                    class="photo"
                                    :src="sportsmanMap.sportsman.photo"
                                    alt="PhotoSportsman"
                                />
                                <button
                                    class="btn btn-danger"
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
                                <label class="input__file-button load-file" for="PhotoSportsman">
                                    <span class="input__file-icon-wrapper"
                                        ><img
                                            class="input__file-icon"
                                            src="@/assets/attach.svg"
                                            alt="Фото спортсмена"
                                            width="25"
                                    /></span>
                                    <span class="input__file-button-text">Загрузить файл</span>
                                </label>
                                {{ PhotoSportsman }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Принадлежность:</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span>Город: </span>
                                <span>
                                    <SelectCity
                                        mode="single"
                                        @change="Editable = true"
                                        v-model="sportsmanMap.sportsman.city"
                                    />
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>Адрес прописки: </span>
                                <span
                                    ><input
                                        @change="this.Editable = true"
                                        v-model="sportsmanMap.sportsman.address"
                                /></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Документы:</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <!-- <p><strong>Паспорт</strong></p>
                                        <p>
                                            <span>Серия и номер паспорта: </span>
                                            <span
                                                ><strong>{{
                                                    sportsmanMap.sportsman.passport.number
                                                }}</strong></span
                                            >
                                        </p>
                                        <p>
                                            <span>Кем выдан: </span>
                                            <span>{{ sportsmanMap.sportsman.passport.issue }}</span>
                                        </p>
                                        <p>
                                            <span>Дата выдачи: </span>
                                            <span>{{
                                                sportsmanMap.sportsman.passport.date_start
                                            }}</span>
                                        </p>
                                        <p>
                                            <span>Код подразделения: </span>
                                            <span>{{ sportsmanMap.sportsman.passport.code }}</span>
                                        </p> -->
                                        <span>
                                            <template v-if="!sportsmanMap.sportsman.passport">
                                                <button
                                                    class="btn btn-primary"
                                                    @click="
                                                        {
                                                            isModalPassport = true;
                                                            isEdit = false;
                                                        }
                                                    "
                                                >
                                                    Добавить данные о паспорте
                                                </button>
                                            </template>
                                            <template v-else>
                                                <span>Редактировать данные о паспорте: </span>
                                                <button
                                                    class="btn btn-primary"
                                                    @click="
                                                        {
                                                            isModalPassport = true;
                                                            isEdit = true;
                                                        }
                                                    "
                                                >
                                                    Редактировать
                                                </button>
                                            </template>
                                            <PassportModal
                                                v-if="isModalPassport"
                                                :mode="isEdit"
                                                :passport="sportsmanMap.sportsman.passport"
                                                @closeModal="isModalPassport = false"
                                            />
                                        </span>
                                    </div>
                                    <div class="col-md-4">
                                        <!-- {{ sportsmanMap.sportsman.passport.scan }} -->
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p>
                                            <strong
                                                >Справка о регистрации по месту жительства
                                            </strong>
                                        </p>
                                        <span
                                            v-if="
                                                sportsmanMap.sportsman.confirm_address !==
                                                (undefined || null)
                                            "
                                        >
                                            <img
                                                class="photo"
                                                :src="sportsmanMap.sportsman.confirm_address"
                                                alt="ConfirmAddressFile"
                                            />
                                            <button
                                                class="btn btn-danger"
                                                @click="
                                                    sportsmanMap.sportsman.confirm_address = null;
                                                    Editable = true;
                                                "
                                            >
                                                Удалить
                                            </button>
                                        </span>
                                        <span v-else class="input__wrapper-file">
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
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Свидетельство о рождении</strong></p>
                                        <template v-if="!sportsmanMap.sportsman.birth_certificate">
                                            <span>Добавить данные о свидетельстве рождения: </span>
                                            <button
                                                class="btn btn-primary"
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
                                        <BirthCertificateModal
                                            v-if="isModalBirthCertificate"
                                            :mode="isEdit"
                                            :birthCertificate="
                                                sportsmanMap.sportsman.birth_certificate
                                            "
                                            @closeModal="isModalBirthCertificate = false"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p>
                                            <strong
                                                >Заверенные копии и доверенность родителя</strong
                                            >
                                        </p>
                                        <span
                                            ><template v-if="!sportsmanMap.sportsman.proxy">
                                                <span
                                                    >Добавить данные о заверенной копии и
                                                    доверенности родителя:
                                                </span>
                                                <button
                                                    class="btn btn-primary"
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
                                                    class="btn btn-primary"
                                                    @click="
                                                        {
                                                            isModalProxy = true;
                                                            isEdit = true;
                                                        }
                                                    "
                                                >
                                                    Редактировать заверенные копии
                                                </button>
                                            </template>
                                        </span>
                                        {{ sportsmanMap.sportsman.proxy }}
                                        <ProxyModal
                                            v-if="isModalProxy"
                                            :mode="isEdit"
                                            :proxy="sportsmanMap.sportsman.proxy"
                                            @closeModal="isModalProxy = false"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p>
                                            <strong
                                                >Согласие родителя на заселение в гостиницу</strong
                                            >
                                        </p>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            v-if="
                                                sportsmanMap.sportsman.parent_doc !==
                                                (undefined || null)
                                            "
                                        >
                                            <img
                                                class="photo"
                                                :src="sportsmanMap.sportsman.parent_doc"
                                                alt="ParentDocFile"
                                            />
                                            <button
                                                class="btn btn-danger"
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
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Сертификат РУСАДА</strong></p>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            v-if="
                                                sportsmanMap.sportsman.rusada !==
                                                (undefined || null)
                                            "
                                        >
                                            <img
                                                class="photo"
                                                :src="sportsmanMap.sportsman.rusada"
                                                alt="RusadaFile"
                                            />
                                            <button
                                                class="btn btn-danger"
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
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p>
                                            <strong
                                                >Справка об отсутствии контактов с инфекционными
                                                больными</strong
                                            >
                                        </p>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            v-if="
                                                sportsmanMap.sportsman.covid_contact !==
                                                (undefined || null)
                                            "
                                        >
                                            <img
                                                class="photo"
                                                :src="sportsmanMap.sportsman.covid_contact"
                                                alt="CovidContactFile"
                                            />
                                            <button
                                                class="btn btn-danger"
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
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>ПЦР-тест COVID-19</strong></p>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            v-if="
                                                sportsmanMap.sportsman.covid_test !==
                                                (undefined || null)
                                            "
                                        >
                                            <img
                                                class="photo"
                                                :src="sportsmanMap.sportsman.covid_test"
                                                alt="CovidTestFile"
                                            />
                                            <button
                                                class="btn btn-danger"
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
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Справка об обучении в школе</strong></p>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            v-if="
                                                sportsmanMap.sportsman.school_doc !==
                                                (undefined || null)
                                            "
                                        >
                                            <img
                                                class="photo"
                                                :src="sportsmanMap.sportsman.school_doc"
                                                alt="SchoolFile"
                                            />
                                            <button
                                                class="btn btn-danger"
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
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Страховка</strong></p>
                                        <template v-if="!sportsmanMap.sportsman.insurance">
                                            <button
                                                class="btn btn-primary"
                                                @click="
                                                    {
                                                        isModalInsurance = true;
                                                        isEdit = false;
                                                    }
                                                "
                                            >
                                                Добавить новую страховку
                                            </button>
                                        </template>
                                        <template v-else>
                                            <button
                                                class="btn btn-primary"
                                                @click="
                                                    {
                                                        isModalInsurance = true;
                                                        isEdit = true;
                                                    }
                                                "
                                            >
                                                Редактировать страховку
                                            </button>
                                        </template>

                                        <InsuranceModal
                                            v-if="isModalInsurance"
                                            :mode="isEdit"
                                            :insurance="sportsmanMap.sportsman.insurance"
                                            @closeModal="isModalInsurance = false"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Полис ОМС</strong></p>
                                        <template v-if="!sportsmanMap.sportsman.oms">
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
                                        <OmsModal
                                            v-if="isModalOms"
                                            :mode="isEdit"
                                            :oms="sportsmanMap.sportsman.oms"
                                            @closeModal="isModalOms = false"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Тренер</strong></p>
                                        <SelectTrainer
                                            @change="Editable = true"
                                            mode="single"
                                            v-model="sportsmanMap.sportsman.trainer"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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
    @Getter('FullName', { namespace })
    FullName: string | undefined;

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

<style scoped>
.load-file {
    width: 65%;
}
</style>

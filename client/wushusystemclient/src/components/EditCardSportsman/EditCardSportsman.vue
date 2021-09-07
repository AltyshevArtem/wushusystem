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
                                        <span>Фамилия:</span>
                                        <input
                                            @change="this.Editable = true"
                                            class="form-control"
                                            placeholder="Фамилия"
                                            v-model="sportsmanMap.sportsman.surname"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Имя: </span>
                                        <input
                                            @change="this.Editable = true"
                                            class="form-control"
                                            placeholder="Имя"
                                            v-model="sportsmanMap.sportsman.name"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Отчество: </span>
                                        <input
                                            @change="this.Editable = true"
                                            class="form-control"
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
                                            <label for="DateOfBirth">Дата рождения: </label>
                                            <input
                                                placeholder="YYYY-MM-DD"
                                                class="form-control"
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
                            <div
                                class="personal__sportsman-photo"
                                v-if="sportsmanMap.sportsman.photo !== (undefined || null)"
                            >
                                <div class="col-xs-6 sportsman-image">
                                    <img
                                        class="documents"
                                        :src="sportsmanMap.sportsman.photo"
                                        alt="PhotoSportsman"
                                        tabindex="0"
                                    />
                                </div>
                                <div class="col-xs-6 delete-button">
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
                                        v-model="cityName"
                                    />
                                </span>
                            </li>
                            <li class="list-group-item">
                                <span>Адрес прописки: </span>
                                <span
                                    ><input
                                        @change="this.Editable = true"
                                        class="form-control"
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
                                        <span>
                                            <p><strong>Данные паспорта</strong></p>
                                            <template v-if="!sportsmanMap.sportsman.passport">
                                                <span>Добавить данные о паспорте: </span>
                                                <button
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
                                                <span>Редактировать данные о паспорте: </span>
                                                <button
                                                    class="btn btn-secondary"
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
                                        <div class="documents-scan__container">
                                            <div class="documents-scan__files">
                                                <span
                                                    v-if="
                                                        sportsmanMap.sportsman.confirm_address !==
                                                        (undefined || null)
                                                    "
                                                >
                                                    <div class="documents__scan-photo-edit-card">
                                                        <img
                                                            class="documents"
                                                            :src="
                                                                sportsmanMap.sportsman
                                                                    .confirm_address
                                                            "
                                                            alt="ConfirmAddressFile"
                                                            tabindex="0"
                                                        />
                                                    </div>
                                                    <button
                                                        class="btn btn-danger"
                                                        @click="
                                                            sportsmanMap.sportsman.confirm_address =
                                                                null;
                                                            Editable = true;
                                                        "
                                                    >
                                                        Удалить
                                                    </button>
                                                </span>
                                                <span v-else class="input__wrapper-file upload">
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
                                            <span
                                                >Редактировать данные о свидетельстве рождения:
                                            </span>
                                            <button
                                                class="btn btn-secondary"
                                                @click="
                                                    {
                                                        isModalBirthCertificate = true;
                                                        isEdit = true;
                                                    }
                                                "
                                            >
                                                Редактировать
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
                                                <span
                                                    >Редактировать заверенные копии и доверенность
                                                    родителя:
                                                </span>
                                                <button
                                                    class="btn btn-secondary"
                                                    @click="
                                                        {
                                                            isModalProxy = true;
                                                            isEdit = true;
                                                        }
                                                    "
                                                >
                                                    Редактировать
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
                                        <div class="documents-scan__container">
                                            <div class="documents-scan__files">
                                                <div
                                                    v-if="
                                                        sportsmanMap.sportsman.parent_doc !==
                                                        (undefined || null)
                                                    "
                                                >
                                                    <div class="documents__scan-photo-edit-card">
                                                        <img
                                                            class="documents"
                                                            :src="sportsmanMap.sportsman.parent_doc"
                                                            alt="ParentDocFile"
                                                            tabindex="0"
                                                        />
                                                    </div>
                                                    <button
                                                        class="btn btn-danger"
                                                        @click="
                                                            sportsmanMap.sportsman.parent_doc =
                                                                null;
                                                            Editable = true;
                                                        "
                                                    >
                                                        Удалить
                                                    </button>
                                                </div>
                                                <div v-else class="input__wrapper-file upload">
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
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Сертификат РУСАДА</strong></p>
                                    </div>
                                    <div class="documents-scan__container">
                                        <div class="documents-scan__files">
                                            <span
                                                v-if="
                                                    sportsmanMap.sportsman.rusada !==
                                                    (undefined || null)
                                                "
                                            >
                                                <div class="documents__scan-photo-edit-card rusada">
                                                    <img
                                                        class="documents"
                                                        :src="sportsmanMap.sportsman.rusada"
                                                        alt="RusadaFile"
                                                        tabindex="0"
                                                    />
                                                </div>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="
                                                        sportsmanMap.sportsman.rusada = null;
                                                        Editable = true;
                                                    "
                                                >
                                                    Удалить
                                                </button>
                                            </span>
                                            <div v-else class="input__wrapper-file upload">
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
                                    <div class="documents-scan__container">
                                        <div class="documents-scan__files">
                                            <span
                                                v-if="
                                                    sportsmanMap.sportsman.covid_contact !==
                                                    (undefined || null)
                                                "
                                            >
                                                <div class="documents__scan-photo-edit-card">
                                                    <img
                                                        class="documents"
                                                        :src="sportsmanMap.sportsman.covid_contact"
                                                        alt="CovidContactFile"
                                                        tabindex="0"
                                                    />
                                                </div>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="
                                                        sportsmanMap.sportsman.covid_contact = null;
                                                        Editable = true;
                                                    "
                                                >
                                                    Удалить
                                                </button>
                                            </span>
                                            <div v-else class="input__wrapper-file upload">
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
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>ПЦР-тест COVID-19</strong></p>
                                    </div>
                                    <div class="documents-scan__container">
                                        <div class="documents-scan__files">
                                            <span
                                                v-if="
                                                    sportsmanMap.sportsman.covid_test !==
                                                    (undefined || null)
                                                "
                                            >
                                                <div class="documents__scan-photo-edit-card">
                                                    <img
                                                        class="photo"
                                                        :src="sportsmanMap.sportsman.covid_test"
                                                        alt="CovidTestFile"
                                                        tabindex="0"
                                                    />
                                                </div>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="
                                                        sportsmanMap.sportsman.covid_test = null;
                                                        Editable = true;
                                                    "
                                                >
                                                    Удалить
                                                </button>
                                            </span>
                                            <div v-else class="input__wrapper-file upload">
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
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Справка об обучении в школе</strong></p>
                                    </div>
                                    <div class="documents-scan__container">
                                        <div class="documents-scan__files">
                                            <span
                                                v-if="
                                                    sportsmanMap.sportsman.school_doc !==
                                                    (undefined || null)
                                                "
                                            >
                                                <div class="documents__scan-photo-edit-card">
                                                    <img
                                                        class="photo"
                                                        :src="sportsmanMap.sportsman.school_doc"
                                                        alt="SchoolFile"
                                                        tabindex="0"
                                                    />
                                                </div>
                                                <button
                                                    class="btn btn-danger"
                                                    @click="
                                                        sportsmanMap.sportsman.school_doc = null;
                                                        Editable = true;
                                                    "
                                                >
                                                    Удалить
                                                </button>
                                            </span>
                                            <div v-else class="input__wrapper-file upload">
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
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Страховка</strong></p>
                                        <template v-if="!sportsmanMap.sportsman.insurance">
                                            <span>Добавить данные о страховке: </span>
                                            <button
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
                                            <span>Редактировать страховку: </span>
                                            <button
                                                class="btn btn-secondary"
                                                @click="
                                                    {
                                                        isModalInsurance = true;
                                                        isEdit = true;
                                                    }
                                                "
                                            >
                                                Редактировать
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
                                            <span>Дабавить данные о полисе ОМС: </span>
                                            <button
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
                                            <span>Редактировать полис ОМС: </span>
                                            <button
                                                class="btn btn-secondary"
                                                @click="
                                                    {
                                                        isModalOms = true;
                                                        isEdit = true;
                                                    }
                                                "
                                            >
                                                Редактировать
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
                                            mode="single"
                                            @change="Editable = true"
                                            v-model="trainerName"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Клуб</strong></p>
                                        <SelectClub
                                            mode="single"
                                            @change="Editable = true"
                                            v-model="clubName"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <button
                        class="btn btn-success"
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
        this.getSportsman(this.$route.params.id);
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
    @Action('getSportsman', { namespace })
    getSportsman: any;

    /* GETTERS */
    @Getter('arrValueCity', { namespace: namespaceCity })
    arrValueCity: Array<string> | undefined;
    @Getter('arrValueClub', { namespace: namespaceClub })
    arrValueClub: Array<string> | undefined;
    @Getter('arrValueTrainer', { namespace: namespaceTrainer })
    arrValueTrainer: Array<string> | undefined;
    @Getter('FullName', { namespace })
    FullName: string | undefined;
}
</script>

<style scoped>
.load-file {
    width: 75%;
    margin: 0;
}
.documents__scan-photo-edit-card {
    position: relative;
    width: 150px;
    height: 150px;
}
.documents-scan__files {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}
.documents-scan__container {
    width: 400px;
}
.documents {
    position: absolute;
    width: 16rem;
    display: block;
    height: auto;
    max-width: 70%;
    margin-top: 5px;
    margin-right: auto;
}
.photo {
    width: 16rem;
    display: block;
    height: auto;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
}
.img-container {
    width: 250px;
    height: 340px;
}
.upload {
    width: 300px;
}
img[tabindex='0'] {
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 4px;
}
img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
img[tabindex='0']:focus {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    box-shadow: 0 0 20px #000, 0 0 0 1000px rgba(59, 59, 59, 0.4);
}
img[tabindex='0']:focus,
img[tabindex='0']:focus ~ * {
    pointer-events: none;
}
.personal__sportsman-photo {
    position: relative;
    width: 250px;
    height: 350px;
    padding-left: 25px;
    padding-top: 5px;
    overflow: hidden;
}
.sportsman-image {
    height: 240px;
}
.delete-button {
    margin-left: 3px;
}
.rusada {
    position: relative;
    width: 150px;
    height: 100px;
}
</style>

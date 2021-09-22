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
                                            @change="Editable = true"
                                            class="form-control"
                                            placeholder="Фамилия"
                                            v-model="sportsmanMap.sportsman.surname"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Имя: </span>
                                        <input
                                            @change="Editable = true"
                                            class="form-control"
                                            placeholder="Имя"
                                            v-model="sportsmanMap.sportsman.name"
                                        />
                                    </li>
                                    <li class="list-group-item">
                                        <span>Отчество: </span>
                                        <input
                                            @change="Editable = true"
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
                                                @change="Editable = true"
                                                placeholder="YYYY-MM-DD"
                                                class="form-control"
                                                v-model="sportsmanMap.sportsman.date_of_birth"
                                            />
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Разряд:
                                        <SelectRank
                                            @change="Editable = true"
                                            mode="single"
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
                                    @input="PhotoSportsmanUpload"
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
                                <div
                                    v-if="PhotoSportsmanImg !== (undefined || null)"
                                    class="imagePreviewWrapper PreviewImgSportsman"
                                    :style="{
                                        'background-image': `url(${PhotoSportsmanImg})`,
                                    }"
                                    @click="selectImage"
                                >
                                    <div class="danger-button__new-file btnDeleteSportsman">
                                        <button
                                            class="btn btn-danger"
                                            @click="
                                                PhotoSportsmanImg = null;
                                                Editable = true;
                                            "
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
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
                                        @change="Editable = true"
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
                                            <template
                                                v-if="
                                                    !passportMap.passport &&
                                                    !sportsmanMap.sportsman.passport
                                                "
                                            >
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
                                                <button
                                                    v-if="passportMap.passport"
                                                    class="btn btn-danger"
                                                    @click="passportMap.passport = null"
                                                >
                                                    Удалить
                                                </button>
                                                <button
                                                    v-if="sportsmanMap.sportsman.passport"
                                                    class="btn btn-danger"
                                                    @click="sportsmanMap.sportsman.passport = null"
                                                >
                                                    Удалить
                                                </button>
                                            </template>
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
                                                <div
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
                                                </div>
                                                <div v-else class="input__wrapper-file upload">
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
                                                                alt="Подтверждение прописки"
                                                                width="25"
                                                        /></span>
                                                        <span class="input__file-button-text">
                                                            Загрузить файл
                                                        </span>
                                                    </label>
                                                    <div
                                                        v-if="CAImg !== (undefined || null)"
                                                        class="imagePreviewWrapper"
                                                        :style="{
                                                            'background-image': `url(${CAImg})`,
                                                        }"
                                                        @click="selectImage"
                                                    >
                                                        <div class="danger-button__new-file">
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="
                                                                    CAImg = null;
                                                                    Editable = true;
                                                                "
                                                            >
                                                                Удалить
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Свидетельство о рождении</strong></p>
                                        <template
                                            v-if="
                                                !birthCertificateMap.birthCertificate &&
                                                !sportsmanMap.sportsman.birth_certificate
                                            "
                                        >
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
                                            <button
                                                v-if="birthCertificateMap.birthCertificate"
                                                class="btn btn-danger"
                                                @click="birthCertificateMap.birthCertificate = null"
                                            >
                                                Удалить
                                            </button>
                                            <button
                                                v-if="sportsmanMap.sportsman.birth_certificate"
                                                class="btn btn-danger"
                                                @click="
                                                    sportsmanMap.sportsman.birth_certificate = null
                                                "
                                            >
                                                Удалить
                                            </button>
                                        </template>
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
                                            ><template
                                                v-if="
                                                    !proxyMap.proxy && !sportsmanMap.sportsman.proxy
                                                "
                                            >
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
                                                <button
                                                    v-if="sportsmanMap.sportsman.proxy"
                                                    class="btn btn-danger"
                                                    @click="sportsmanMap.sportsman.proxy = null"
                                                >
                                                    Удалить
                                                </button>
                                                <button
                                                    v-if="proxyMap.proxy"
                                                    class="btn btn-danger"
                                                    @click="proxyMap.proxy = null"
                                                >
                                                    Удалить
                                                </button>
                                            </template>
                                        </span>
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
                                                        v-if="ParDocImg !== (undefined || null)"
                                                        class="imagePreviewWrapper"
                                                        :style="{
                                                            'background-image': `url(${ParDocImg})`,
                                                        }"
                                                        @click="selectImage"
                                                    >
                                                        <div class="danger-button__new-file">
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="
                                                                    ParDocImg = null;
                                                                    Editable = true;
                                                                "
                                                            >
                                                                Удалить
                                                            </button>
                                                        </div>
                                                    </div>
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
                                                    class="imagePreviewWrapper"
                                                    :style="{
                                                        'background-image': `url(${RusadaFileImg})`,
                                                    }"
                                                    @click="selectImage"
                                                >
                                                    <div class="danger-button__new-file">
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
                                                    v-if="CovidImg !== (undefined || null)"
                                                    class="imagePreviewWrapper"
                                                    :style="{
                                                        'background-image': `url(${CovidImg})`,
                                                    }"
                                                    @click="selectImage"
                                                >
                                                    <div class="danger-button__new-file">
                                                        <button
                                                            class="btn btn-danger"
                                                            @click="
                                                                CovidImg = null;
                                                                Editable = true;
                                                            "
                                                        >
                                                            Удалить
                                                        </button>
                                                    </div>
                                                </div>
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
                                                    class="imagePreviewWrapper"
                                                    :style="{
                                                        'background-image': `url(${CovidTestImg})`,
                                                    }"
                                                    @click="selectImage"
                                                >
                                                    <div class="danger-button__new-file">
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
                                                    class="imagePreviewWrapper"
                                                    :style="{
                                                        'background-image': `url(${SchoolFileImg})`,
                                                    }"
                                                    @click="selectImage"
                                                >
                                                    <div class="danger-button__new-file">
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
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Страховка</strong></p>
                                        <template
                                            v-if="
                                                !insuranceMap.insurance &&
                                                !sportsmanMap.sportsman.insurance
                                            "
                                        >
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
                                            <button
                                                v-if="insuranceMap.insurance"
                                                class="btn btn-danger"
                                                @click="insuranceMap.insurance = null"
                                            >
                                                Удалить
                                            </button>
                                            <button
                                                v-if="sportsmanMap.sportsman.insurance"
                                                class="btn btn-danger"
                                                @click="sportsmanMap.sportsman.insurance = null"
                                            >
                                                Удалить
                                            </button>
                                        </template>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <p><strong>Полис ОМС</strong></p>
                                        <template v-if="!omsMap.oms && !sportsmanMap.sportsman.oms">
                                            <span>Добавить данные о полисе ОМС: </span>
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
                                            <button
                                                v-if="omsMap.oms"
                                                class="btn btn-danger"
                                                @click="omsMap.oms = null"
                                            >
                                                Удалить
                                            </button>
                                            <button
                                                v-if="sportsmanMap.sportsman.oms"
                                                class="btn btn-danger"
                                                @click="sportsmanMap.sportsman.oms = null"
                                            >
                                                Удалить
                                            </button>
                                        </template>
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
                        @click="EditSportsman"
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
// TODO: Сделать кнопку редирект после усешного PUT запроса в модалке Успеха
// TODO: Изменить цвет кнопки редактирования на другой
// TODO: Изменить размер всех кнопок на меньший
/* eslint-disable camelcase */
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* SWAL */
import Swal from 'sweetalert2';

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

/* SELECT */
import SelectGender from '@/components/Select/SelectGender.vue';
import SelectRank from '@/components/Select/SelectRank.vue';
import SelectCity from '@/components/Select/SelectCity.vue';
import SelectClub from '@/components/Select/SelectClub.vue';
import SelectTrainer from '@/components/Select/SelectTrainer.vue';
import SelectDuanDzi from '@/components/Select/SelectDuanCzi.vue';

/* MODAL */
import InsuranceModal from '@/components/Modal/Documents/InsuranceModal.vue';
import BirthCertificateModal from '@/components/Modal/Documents/BirthCertificateModal.vue';
import OmsModal from '@/components/Modal/Documents/OmsModal.vue';
import PassportModal from '@/components/Modal/Documents/PassportModal.vue';
import ProxyModal from '@/components/Modal/Documents/ProxyModal.vue';

/* MODELS */
import { IGender } from '@/models/gender';
import { IRank } from '@/models/rank';
import { IDuanCzi } from '@/models/duan_czi';
import { ICity } from '@/models/city';
import { IBirthCertificate, IInsurance, IOms, IPassport, IProxyDoc } from '@/models/sportsman';
import { ITrainer } from '@/models/trainer';
import { IClub } from '@/models/club';

/* NAMESPACE */
const namespace = 'sportsman';

const namespaceCity = 'city';
const namespaceClub = 'club';
const namespaceTrainer = 'trainer';

@Options({
    name: 'EditCardSportsman',
    beforeRouteLeave(to, from, next) {
        if (this.Editable === true) {
            Swal.fire({
                title: 'Вы действительно хотите покинуть страницу?',
                text: 'У вас есть несохраненные данные!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Да, покинуть страницу!',
                cancelButtonText: 'Отмена',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.Editable = true;
                    next();
                } else {
                    next(false);
                }
            });
        } else {
            next();
        }
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
    /* DATA */
    sportsman!: {
        id: number | undefined;
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
        city: ICity | undefined;
        trainer: ITrainer | undefined;
        club: IClub | undefined;
        insurance: IInsurance | undefined;
        rank: IRank | undefined;
        rusada: string | File | null;
        covid_test: string | File | null;
        covid_contact: string | File | null;
        parent_doc: string | File | null;
        school_doc: string | File | null;
        duan_czi: IDuanCzi | undefined;
    };

    clubName = '';
    cityName = '';
    trainerName = '';

    PhotoSportsmanFile: string | File | null = '';
    ConfirmAddressFile: string | File | null = '';
    RusadaFile: string | File | null = '';
    SchoolFile: string | File | null = '';
    CovidContactFile: string | File | null = '';
    CovidTestFile: string | File | null = '';
    ParentDocFile: string | File | null = '';

    ParDocImg: string | ArrayBuffer | null = null;
    CovidImg: string | ArrayBuffer | null = null;
    CovidTestImg: string | ArrayBuffer | null = null;
    SchoolFileImg: string | ArrayBuffer | null = null;
    RusadaFileImg: string | ArrayBuffer | null = null;
    CAImg: string | ArrayBuffer | null = null;
    PhotoSportsmanImg: string | ArrayBuffer | null = null;

    /* MODAL */
    isEdit = false;
    isModalInsurance = false;
    isModalBirthCertificate = false;
    isModalOms = false;
    isModalPassport = false;
    isModalProxy = false;
    Editable = false;

    /* METHOD */
    public PhotoSportsmanUpload(): void {
        const fileList: FileList | null = (this.$refs['PhotoSportsman'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.PhotoSportsmanImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('PhotoSportsman', file);
            }
        }

        this.PhotoSportsmanFile = file;

        this.Editable = true;
    }
    public ConfirmAddressFileUpload(): void {
        const fileList: FileList | null = (this.$refs['PhotoSportsman'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.CAImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('ConfirmAddress', file);
            }
        }

        this.ConfirmAddressFile = file;

        this.Editable = true;
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

        this.Editable = true;
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

        this.Editable = true;
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

        this.Editable = true;
    }
    public CovidContactFileUpload(): void {
        const fileList: FileList | null = (this.$refs['CovidContact'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.CovidImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('CovidContact', file);
            }
        }
        this.CovidContactFile = file;
        this.Editable = true;
    }
    public ParentDocFileUpload(): void {
        const fileList: FileList | null = (this.$refs['ParentDoc'] as HTMLInputElement).files;
        const file: File = fileList?.item(0) as File;
        if (fileList && file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target != null) {
                    this.ParDocImg = event.target.result;
                }
            };
            if (file) {
                reader.readAsDataURL(file);
                this.$emit('ParentDoc', file);
            }
        }
        this.ParentDocFile = file;
        this.Editable = true;
    }
    public initSelectors(): void {
        if (this.sportsmanMap.sportsman?.trainer) {
            const trainer = this.sportsmanMap.sportsman?.trainer;

            this.trainerName = `${trainer.surname} ${trainer.name} ${trainer.patronymic}`;
        }
        if (this.sportsmanMap.sportsman?.club) {
            this.clubName = this.sportsmanMap.sportsman.club.name_of_club;
        }
        if (this.sportsmanMap.sportsman?.city) {
            this.cityName = this.sportsmanMap.sportsman.city.name_of_city;
        }
    }
    public EditSportsman(): void {
        this.sportsman = {
            id: 0,
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
            city: undefined,
            trainer: undefined,
            club: undefined,
            insurance: undefined,
            rank: undefined,
            rusada: '',
            covid_test: '',
            covid_contact: '',
            parent_doc: '',
            school_doc: '',
            duan_czi: undefined,
        };
        /* ID */
        if (this.sportsmanMap.sportsman?.id) {
            this.sportsman.id = this.sportsmanMap.sportsman.id;
        }

        /* FILES */
        if (this.sportsmanMap.sportsman?.photo) {
            this.sportsman.photo = this.sportsmanMap.sportsman?.photo;
        } else {
            this.sportsman.photo = this.PhotoSportsmanFile;
        }
        if (this.sportsmanMap.sportsman?.confirm_address) {
            this.sportsman.confirm_address = this.sportsmanMap.sportsman?.confirm_address;
        } else {
            this.sportsman.confirm_address = this.ConfirmAddressFile;
        }
        if (this.sportsmanMap.sportsman?.rusada) {
            this.sportsman.rusada = this.sportsmanMap.sportsman?.rusada;
        } else {
            this.sportsman.rusada = this.RusadaFile;
        }
        if (this.sportsmanMap.sportsman?.school_doc) {
            this.sportsman.school_doc = this.sportsmanMap.sportsman?.school_doc;
        } else {
            this.sportsman.school_doc = this.SchoolFile;
        }
        if (this.sportsmanMap.sportsman?.covid_test) {
            this.sportsman.covid_test = this.sportsmanMap.sportsman?.covid_test;
        } else {
            this.sportsman.covid_test = this.CovidTestFile;
        }
        if (this.sportsmanMap.sportsman?.covid_contact) {
            this.sportsman.covid_contact = this.sportsmanMap.sportsman?.covid_contact;
        } else {
            this.sportsman.covid_contact = this.CovidContactFile;
        }
        if (this.sportsmanMap.sportsman?.parent_doc) {
            this.sportsman.parent_doc = this.sportsmanMap.sportsman?.parent_doc;
        } else {
            this.sportsman.parent_doc = this.ParentDocFile;
        }

        this.sportsman.name = this.sportsmanMap.sportsman?.name;
        this.sportsman.surname = this.sportsmanMap.sportsman?.surname;
        this.sportsman.patronymic = this.sportsmanMap.sportsman?.patronymic;
        this.sportsman.date_of_birth = this.sportsmanMap.sportsman?.date_of_birth;
        this.sportsman.address = this.sportsmanMap.sportsman?.address;
        this.sportsman.gender = this.sportsmanMap.sportsman?.gender;
        this.sportsman.duan_czi = this.sportsmanMap.sportsman?.duan_czi;
        this.sportsman.rank = this.sportsmanMap.sportsman?.rank;

        /* MODAL */
        if (this.sportsmanMap.sportsman?.passport) {
            this.sportsman.passport = this.sportsmanMap.sportsman.passport;
        } else {
            this.sportsman.passport = this.passportMap.passport;
        }
        if (this.sportsmanMap.sportsman?.birth_certificate) {
            this.sportsman.birth_certificate = this.sportsmanMap.sportsman.birth_certificate;
        } else {
            this.sportsman.birth_certificate = this.birthCertificateMap.birthCertificate;
        }
        if (this.sportsmanMap.sportsman?.proxy) {
            this.sportsman.proxy = this.sportsmanMap.sportsman.proxy;
        } else {
            this.sportsman.proxy = this.proxyMap.proxy;
        }
        if (this.sportsmanMap.sportsman?.oms) {
            this.sportsman.oms = this.sportsmanMap.sportsman.oms;
        } else {
            this.sportsman.oms = this.omsMap.oms;
        }
        if (this.sportsmanMap.sportsman?.insurance) {
            this.sportsman.insurance = this.sportsmanMap.sportsman.insurance;
        } else {
            this.sportsman.insurance = this.insuranceMap.insurance;
        }

        const oldCity = this.cityName;
        const oldClub = this.clubName;
        const oldTrainer = this.trainerName;

        const cityId = this.arrValueCity?.indexOf(oldCity);
        const clubId = this.arrValueClub?.indexOf(oldClub);
        const trainerId = this.arrValueTrainer?.indexOf(oldTrainer);

        if (cityId !== undefined) {
            this.sportsman.city = this.cityMap.cities[cityId];
        }
        if (clubId !== undefined) {
            this.sportsman.club = this.clubMap.clubs[clubId];
        }
        if (trainerId !== undefined) {
            this.sportsman.trainer = this.trainerMap.trainers[trainerId];
        }

        this.putSportsman(this.sportsman);

        this.cityName = oldCity;
        this.clubName = oldClub;
        this.trainerName = oldTrainer;

        this.Editable = false;
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

    mounted(): void {
        this.getSportsman(this.$route.params.id);
        this.initSelectors();
    }
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
    height: 210px;
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
.imagePreviewWrapper {
    margin-top: 10px;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
    display: block;
    cursor: pointer;
    background-size: contain;
    background-position: center center;
}
.danger-button__new-file {
    padding-right: 15px;
    padding-top: 130px;
}
.PreviewImgSportsman {
    width: 220px;
    height: 220px;
    margin-top: 20px;
    margin-left: 50px;
}
.btnDeleteSportsman {
    padding-top: 230px;
    padding-right: 90px;
}
</style>

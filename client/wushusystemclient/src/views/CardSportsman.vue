<!-- TODO: Перенести из папки views в компоненты всё-->
<template>
    <div>
        <!-- TODO: сделать ездящую шапку при скроле страницы вверх и вниз-->
        <!-- TODO: Сделать кнопку перехода назад к предыдущей странице -->
        <!--  -->
        <!-- TODO: Для полей без фоток прописать условие, а то ссылки есть, а фоток нет -->
        <div v-if="this.sportsmanMap.error === false">
            <div v-if="isEditable === false" class="container py-4">
                <div>
                    <div class="pb-3 mb-4 d-flex justify-content-between">
                        <span class="fs-4">
                            <strong>
                                {{ FullName }}
                            </strong>
                        </span>
                        <div class="pb-3 mb-3 buttons__delete-edit">
                            <button
                                type="button"
                                @click="isEditable = true"
                                class="btn btn-secondary edit-button"
                            >
                                Редактировать
                            </button>
                            <button
                                type="button"
                                @click="isConfirmModalVisible = true"
                                class="btn btn-danger"
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
                <div class="p-5 mb-4 bg-light rounded-3">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <h5 class="card-header">Информация о спортсмене:</h5>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            ФИО: <strong>{{ FullName }}</strong>
                                        </li>
                                        <li class="list-group-item">
                                            <span>Пол: </span>
                                            <span v-if="Gender">
                                                <strong>{{ Gender }}</strong></span
                                            >
                                            <span
                                                v-else
                                                class="alert alert-danger nodata-message"
                                                role="alert"
                                            >
                                                Информация отсутствует</span
                                            >
                                        </li>
                                        <li class="list-group-item">
                                            <span>Дата рождения: </span>
                                            <span v-if="DateOfBirth">
                                                <strong>{{ DateOfBirth }}</strong></span
                                            >
                                            <span
                                                v-else
                                                class="alert alert-danger nodata-message"
                                                role="alert"
                                            >
                                                Информация отсутствует</span
                                            >
                                        </li>
                                        <li class="list-group-item">
                                            <span>Разряд: </span>
                                            <span v-if="Rank">
                                                <strong>{{ Rank }}</strong></span
                                            >
                                            <span
                                                v-else
                                                class="alert alert-danger nodata-message"
                                                role="alert"
                                            >
                                                Информация отсутствует</span
                                            >
                                        </li>
                                        <li class="list-group-item">
                                            <span>Дуань/Цзи: </span>
                                            <span v-if="DuanCzi">
                                                <strong>{{ DuanCzi }}</strong></span
                                            >
                                            <span
                                                v-else
                                                class="alert alert-danger nodata-message"
                                                role="alert"
                                            >
                                                Информация отсутствует</span
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="personal__sportsman-photo" v-if="SportsmanPhoto">
                                    <img
                                        class="documents"
                                        :src="SportsmanPhoto"
                                        alt="Card image cap"
                                        tabindex="0"
                                    />
                                </div>
                                <div
                                    v-else
                                    class="
                                        alert alert-danger
                                        nodata-message__photo__sportsman-trainer
                                    "
                                    role="alert"
                                >
                                    <span class="danger-message__no-photo">Фото отсутствует</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <h5 class="card-header">Принадлежность:</h5>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <span>Страна: </span>
                                    <span v-if="NameOfCountry">
                                        <strong>{{ NameOfCountry }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <p>
                                        <span>Федеральный округ: </span>
                                        <span v-if="NameOfFederalRegion">
                                            <strong>{{ NameOfFederalRegion }}</strong>
                                        </span>
                                        <span
                                            v-else
                                            class="alert alert-danger nodata-message"
                                            role="alert"
                                        >
                                            Информация отсутствует</span
                                        >
                                    </p>
                                    <p>
                                        <span>Аббревиатура ФО: </span>
                                        <span v-if="AbbrOfFederalRegion">
                                            <strong>{{ AbbrOfFederalRegion }}</strong>
                                        </span>
                                        <span
                                            v-else
                                            class="alert alert-danger nodata-message"
                                            role="alert"
                                        >
                                            Информация отсутствует</span
                                        >
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <span>Край/Республика: </span>
                                    <span v-if="NameOfRegion">
                                        <strong>{{ NameOfRegion }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <span>Город: </span>
                                    <span v-if="NameOfCity">
                                        <strong>{{ NameOfCity }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <span>Адрес прописки: </span>
                                    <span v-if="Address">
                                        <strong>{{ Address }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
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
                                            <p><strong>Данные паспорта РФ</strong></p>
                                            <p>
                                                <span>Серия и номер паспорта: </span>
                                                <span v-if="PassportNumber"
                                                    ><strong>{{ PassportNumber }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                            <p>
                                                <span>Кем выдан: </span>
                                                <span v-if="PassportIssue"
                                                    ><strong>{{ PassportIssue }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                            <p>
                                                <span>Дата выдачи: </span>
                                                <span v-if="PassportDateStart"
                                                    ><strong>{{ PassportDateStart }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                            <p>
                                                <span>Код подразделения: </span>
                                                <span v-if="PassportCode"
                                                    ><strong>{{ PassportCode }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="PassportScan">
                                                <img
                                                    class="documents"
                                                    :src="PassportScan"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong
                                                    >Справка о регистрации по месту
                                                    жительства</strong
                                                >
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div
                                                class="documents__scan-photo"
                                                v-if="ConfirmAddress"
                                            >
                                                <img
                                                    class="documents"
                                                    :src="ConfirmAddress"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p><strong>Свидетельство о рождении</strong></p>
                                            <p>
                                                <span>Номер: </span>
                                                <span v-if="BirthCertificateNumber">
                                                    <strong>{{ BirthCertificateNumber }}</strong>
                                                </span>
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div
                                                class="documents__scan-photo"
                                                v-if="ConfirmAddress"
                                            >
                                                <img
                                                    class="documents"
                                                    :src="BirthCertificateDoc"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong>Заверенная копия паспорта</strong>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="ProxyPassport">
                                                <img
                                                    class="documents"
                                                    :src="ProxyPassport"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong
                                                    >Заверенная копия свидетельства о
                                                    рождении:</strong
                                                >
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div
                                                class="documents__scan-photo"
                                                v-if="ProxyBirthCert"
                                            >
                                                <img
                                                    class="documents"
                                                    :src="ProxyBirthCert"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p><strong>Доверенность</strong></p>
                                            <p>
                                                <span>Дата окончания действия доверенности: </span>
                                                <span v-if="ProxyDateEnd">
                                                    <strong>{{ ProxyDateEnd }}</strong>
                                                </span>
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="ProxyScan">
                                                <img
                                                    class="documents"
                                                    :src="ProxyScan"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong>Сертификат РУСАДА</strong>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="Rusada">
                                                <img
                                                    class="documents"
                                                    :src="Rusada"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
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
                                            <div class="documents__scan-photo" v-if="CovidContact">
                                                <img
                                                    class="documents"
                                                    :src="CovidContact"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong>ПЦР-тест COVID-19</strong>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="CovidTest">
                                                <img
                                                    class="documents"
                                                    :src="CovidTest"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong
                                                    >Согласие родителя на заселение в
                                                    гостиницу</strong
                                                >
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="ParentDoc">
                                                <img
                                                    class="documents"
                                                    :src="ParentDoc"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p>
                                                <strong>Справка из школы</strong>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="SchoolDoc">
                                                <img
                                                    class="documents"
                                                    :src="SchoolDoc"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p><strong>Страховка</strong></p>
                                            <p>
                                                <span>Дата начала: </span>
                                                <span v-if="InsuranceDateStart">
                                                    <strong> {{ InsuranceDateStart }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует
                                                </span>
                                            </p>
                                            <p>
                                                <span>Дата окончания: </span>
                                                <span v-if="InsuranceDateEnd">
                                                    <strong> {{ InsuranceDateEnd }}</strong>
                                                </span>
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="InsuranceDoc">
                                                <img
                                                    class="documents"
                                                    :src="InsuranceDoc"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <p><strong>Полис ОМС</strong></p>
                                            <p>
                                                <span>Номер: </span>
                                                <span v-if="OMSNumber"
                                                    ><strong>{{ OMSNumber }}</strong>
                                                </span>
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует
                                                </span>
                                            </p>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="documents__scan-photo" v-if="OMSDoc">
                                                <img
                                                    class="documents"
                                                    :src="OMSDoc"
                                                    alt="Card image cap"
                                                    tabindex="0"
                                                />
                                            </div>
                                            <div
                                                v-else
                                                class="alert alert-danger nodata-message__photo"
                                                role="alert"
                                            >
                                                <span class="danger-message"
                                                    >Скан/фото отсутствует</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Информация о тренере спортсмена:</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <p>
                                                <span>Фамилия: </span>
                                                <span v-if="TrainerSurname"
                                                    ><strong> {{ TrainerSurname }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                            <p>
                                                <span>Имя: </span>
                                                <span v-if="TrainerName"
                                                    ><strong>
                                                        {{ TrainerName }}
                                                    </strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                            <p>
                                                <span>Отчество: </span>
                                                <span v-if="TrainerPatronymic"
                                                    ><strong> {{ TrainerPatronymic }}</strong></span
                                                >
                                                <span
                                                    v-else
                                                    class="alert alert-danger nodata-message"
                                                    role="alert"
                                                >
                                                    Информация отсутствует</span
                                                >
                                            </p>
                                        </li>
                                        <li class="list-group-item">
                                            <span>Пол: </span>
                                            <span v-if="TrainerGender">
                                                <strong>{{ TrainerGender }}</strong></span
                                            >
                                            <span
                                                v-else
                                                class="alert alert-danger nodata-message"
                                                role="alert"
                                            >
                                                Информация отсутствует</span
                                            >
                                        </li>
                                        <li class="list-group-item">
                                            <span>Дата рождения тренера: </span>
                                            <span v-if="TrainerDateOfBirth">
                                                <strong>{{ TrainerDateOfBirth }}</strong></span
                                            >
                                            <span
                                                v-else
                                                class="alert alert-danger nodata-message"
                                                role="alert"
                                            >
                                                Информация отсутствует</span
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="personal__trainer-photo" v-if="TrainerPhoto">
                                    <img
                                        class="documents"
                                        :src="TrainerPhoto"
                                        alt="Card image cap"
                                        tabindex="0"
                                    />
                                </div>
                                <div
                                    v-else
                                    class="
                                        alert alert-danger
                                        nodata-message__photo__sportsman-trainer
                                    "
                                    role="alert"
                                >
                                    <span class="danger-message__no-photo">Фото отсутствует</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Информация о клубе:</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <span>Название: </span>
                                    <span v-if="NameOfClub"
                                        ><strong>{{ NameOfClub }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <span>Адрес: </span>
                                    <span v-if="AddressOfClub">
                                        <strong>{{ AddressOfClub }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <span>Владелец: </span>
                                    <span v-if="NameOfClubOwner">
                                        <strong>{{ NameOfClubOwner }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <span>Принадлежность к федерации ушу: </span>
                                    <span v-if="ClubFederation">
                                        <strong>{{ ClubFederation }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <span>Регион: </span>
                                    <span v-if="ClubRegion">
                                        <strong>{{ ClubRegion }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                                <li class="list-group-item">
                                    <p>
                                        <span>Федеральный округ: </span>
                                        <span v-if="ClubFederalRegion">
                                            <strong>{{ ClubFederalRegion }}</strong></span
                                        >
                                        <span
                                            v-else
                                            class="alert alert-danger nodata-message"
                                            role="alert"
                                        >
                                            Информация отсутствует</span
                                        >
                                    </p>
                                    <p>
                                        <span>Аббревиатура ФО: </span>
                                        <span v-if="ClubAbbrFederalRegion">
                                            <strong> {{ ClubAbbrFederalRegion }}</strong></span
                                        >
                                        <span
                                            v-else
                                            class="alert alert-danger nodata-message"
                                            role="alert"
                                        >
                                            Информация отсутствует</span
                                        >
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <span>Страна: </span>
                                    <span v-if="ClubNameOfCountry">
                                        <strong>{{ ClubNameOfCountry }}</strong></span
                                    >
                                    <span
                                        v-else
                                        class="alert alert-danger nodata-message"
                                        role="alert"
                                    >
                                        Информация отсутствует</span
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <EditCardSportsman />
            </div>
        </div>
        <div v-else>
            <PageNotFound />
        </div>
    </div>
    <ConfirmationModal
        v-if="isConfirmModalVisible"
        @closeModal="isConfirmModalVisible = false"
        @confirmModal="deleteSportsmanMethod"
    >
        <span> Вы уверены, что собираетесь удалить спортсмена?</span>
    </ConfirmationModal>
</template>

<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* STATE */
import { ISportsmanState } from '../store/modules/sportsman/types';

/* COMPONENTS */
import ConfirmationModal from '../components/Modal/ConfirmationModal.vue';
import EditCardSportsman from '../components/EditCardSportsman/EditCardSportsman.vue';
import PageNotFound from '../components/NotFound/PageNotFound.vue';
const namespace = 'sportsman';
@Options({
    name: 'CardSportsman',
    components: {
        ConfirmationModal,
        EditCardSportsman,
        PageNotFound,
    },
    methods: {},
})
export default class CardSportsman extends Vue {
    isConfirmModalVisible = false;
    isEditable = false;

    /* STATE */
    @State('sportsman')
    sportsmanMap!: ISportsmanState;

    /* ACTION */
    @Action('getSportsman', { namespace })
    getSportsman: any;
    @Action('deleteSportsman', { namespace })
    deleteSportsman: any;

    /* GETTER */
    @Getter('FullName', { namespace })
    FullName: string | undefined;
    @Getter('Gender', { namespace })
    Gender: string | undefined;
    @Getter('SportsmanPhoto', { namespace })
    SportsmanPhoto: string | undefined;
    @Getter('DateOfBirth', { namespace })
    DateOfBirth: string | undefined;
    @Getter('Address', { namespace })
    Address: string | undefined;
    @Getter('PassportNumber', { namespace })
    PassportNumber: string | undefined;
    @Getter('PassportDateStart', { namespace })
    PassportDateStart: string | undefined;
    @Getter('PassportIssue', { namespace })
    PassportIssue: string | undefined;
    @Getter('PassportCode', { namespace })
    PassportCode: string | undefined;
    @Getter('PassportScan', { namespace })
    PassportScan: string | undefined;
    @Getter('ProxyScan', { namespace })
    ProxyScan: string | undefined;
    @Getter('ProxyPassport', { namespace })
    ProxyPassport: string | undefined;
    @Getter('ProxyBirthCert', { namespace })
    ProxyBirthCert: string | undefined;
    @Getter('ProxyDateEnd', { namespace })
    ProxyDateEnd: string | undefined;
    @Getter('Rusada', { namespace })
    Rusada: string | undefined;
    @Getter('Rank', { namespace })
    Rank: string | undefined;
    @Getter('DuanCzi', { namespace })
    DuanCzi: string | undefined;
    @Getter('NameOfCity', { namespace })
    NameOfCity: string | undefined;
    @Getter('NameOfRegion', { namespace })
    NameOfRegion: string | undefined;
    @Getter('NameOfFederalRegion', { namespace })
    NameOfFederalRegion: string | undefined;
    @Getter('AbbrOfFederalRegion', { namespace })
    AbbrOfFederalRegion: string | undefined;
    @Getter('NameOfCountry', { namespace })
    NameOfCountry: string | undefined;
    @Getter('ConfirmAddress', { namespace })
    ConfirmAddress: string | undefined;
    @Getter('CovidTest', { namespace })
    CovidTest: string | undefined;
    @Getter('CovidContact', { namespace })
    CovidContact: string | undefined;
    @Getter('ParentDoc', { namespace })
    ParentDoc: string | undefined;
    @Getter('SchoolDoc', { namespace })
    SchoolDoc: string | undefined;
    @Getter('InsuranceDoc', { namespace })
    InsuranceDoc: string | undefined;
    @Getter('InsuranceDateStart', { namespace })
    InsuranceDateStart: string | undefined;
    @Getter('InsuranceDateEnd', { namespace })
    InsuranceDateEnd: string | undefined;
    @Getter('BirthCertificateDoc', { namespace })
    BirthCertificateDoc: string | undefined;
    @Getter('BirthCertificateNumber', { namespace })
    BirthCertificateNumber: string | undefined;
    @Getter('OMSDoc', { namespace })
    OMSDoc: string | undefined;
    @Getter('OMSNumber', { namespace })
    OMSNumber: string | undefined;
    @Getter('TrainerName', { namespace })
    TrainerName: string | undefined;
    @Getter('TrainerSurname', { namespace })
    TrainerSurname: string | undefined;
    @Getter('TrainerPatronymic', { namespace })
    TrainerPatronymic: string | undefined;
    @Getter('TrainerPhoto', { namespace })
    TrainerPhoto: string | undefined;
    @Getter('TrainerDateOfBirth', { namespace })
    TrainerDateOfBirth: string | undefined;
    @Getter('TrainerGender', { namespace })
    TrainerGender: string | undefined;
    @Getter('NameOfClub', { namespace })
    NameOfClub: string | undefined;
    @Getter('NameOfClubOwner', { namespace })
    NameOfClubOwner: string | undefined;
    @Getter('AddressOfClub', { namespace })
    AddressOfClub: string | undefined;
    @Getter('ClubFederation', { namespace })
    ClubFederation: string | undefined;
    @Getter('ClubRegion', { namespace })
    ClubRegion: string | undefined;
    @Getter('ClubFederalRegion', { namespace })
    ClubFederalRegion: string | undefined;
    @Getter('ClubAbbrFederalRegion', { namespace })
    ClubAbbrFederalRegion: string | undefined;
    @Getter('ClubNameOfCountry', { namespace })
    ClubNameOfCountry: string | undefined;
    mounted(): void {
        this.getSportsman(this.$route.params.id);
        // if (this.sportsmanMap.error === true) this.$router.push('/:NotFound(.*)*');
    }
    deleteSportsmanMethod(): void {
        this.deleteSportsman(this.$route.params.id);
        this.isConfirmModalVisible = false;
        // TODO: нужно перерендерить таблицу спортсменов после редиректа
    }
}
</script>

<style>
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
.card-mb-3 {
    max-width: 1920px;
}
.col-md-4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
.documents__scan-photo {
    position: relative;
    width: 150px;
    height: 150px;
    padding-left: 20px;
}
.personal__sportsman-photo {
    position: relative;
    width: 250px;
    height: 250px;
    padding-left: 25px;
    padding-top: 5px;
    overflow: hidden;
}
.personal__trainer-photo {
    position: relative;
    width: 150px;
    height: 150px;
    padding-bottom: 170px;
}
.documents {
    position: absolute;
    width: 16rem;
    display: block;
    height: auto;
    max-width: 70%;
    margin-top: 5px;
    margin-left: 2px;
    margin-right: auto;
}
.nodata-message {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 3px 30px 3px 30px;
}
div.nodata-message__photo {
    position: relative;
    margin-top: 15px;
    width: 150px;
    height: 150px;
}
div.nodata-message__photo__sportsman-trainer {
    position: relative;
    margin-right: 40px;
    margin-top: 15px;
    width: 150px;
    height: 150px;
}
span.danger-message {
    position: absolute;
    padding: 35px 70px 60px 20px;
}
span.danger-message__no-photo {
    text-align: center;
    position: absolute;
    padding: 35px 70px 60px 17px;
}
.buttons__delete-edit {
    width: 250px;
}
.edit-button {
    margin-right: 5px;
}
</style>

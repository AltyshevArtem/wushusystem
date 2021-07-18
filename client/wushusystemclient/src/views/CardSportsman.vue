<template>
    <div>
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
                        <div class="pb-3 mb-3">
                            <button
                                type="button"
                                @click="isEditable = true"
                                class="btn btn-primary"
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
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Информация о спортсмене:</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            ФИО: <strong>{{ FullName }}</strong>
                                        </li>
                                        <li class="list-group-item">
                                            Пол: <strong>{{ Gender }}</strong>
                                        </li>
                                        <li class="list-group-item">
                                            Дата рождения: <strong> {{ DateOfBirth }}</strong>
                                        </li>
                                        <li class="list-group-item">
                                            Разряд: <strong> {{ Rank }} </strong>
                                        </li>
                                        <li class="list-group-item">
                                            Дуань/Цзи: <strong>{{ DuanCzi }}</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img class="photo" :src="SportsmanPhoto" alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Принадлежность:</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    Страна: <strong>{{ NameOfCountry }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Федеральный округ:
                                    <strong
                                        >{{ NameOfFederalRegion }} ({{
                                            AbbrOfFederalRegion
                                        }})</strong
                                    >
                                </li>
                                <li class="list-group-item">
                                    Край/Республика: <strong>{{ NameOfRegion }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Город: <strong>{{ NameOfCity }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Адрес прописки: <strong>{{ Address }}</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Документы:</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <p>
                                        Фотография паспорта:
                                        <a :href="SportsmanPhoto" class="card-link">Просмотр</a>
                                    </p>
                                    <p>
                                        Скан паспорта:
                                        <a :href="PassportScan" class="card-link">Просмотр</a>
                                    </p>
                                    <p>
                                        Серия и номер паспорта:
                                        <strong>{{ PassportNumber }}</strong>
                                    </p>
                                    <p>
                                        Кем выдан: <strong>{{ PassportIssue }}</strong>
                                    </p>
                                    <p>
                                        Дата выдачи: <strong>{{ PassportDateStart }}</strong>
                                    </p>
                                    <p>
                                        Код подразделения: <strong>{{ PassportCode }}</strong>
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    Справка о регистрации по месту жительства:
                                    <a :href="ConfirmAddress" class="card-link">Просмотр</a>
                                </li>
                                <li class="list-group-item">
                                    Сведительство о рождении:
                                    <a :href="BirthCertificateDoc" class="card-link">Просмотр</a>
                                    Номер: <strong>{{ BirthCertificateNumber }}</strong>
                                </li>
                                <li class="list-group-item">
                                    <p>
                                        Заверенная копия паспорта:
                                        <a :href="ProxyPassport" class="card-link">Просмотр</a>
                                    </p>
                                    <p>
                                        Заверенная копия свидительства о рождении:
                                        <a :href="ProxyBirthCert" class="card-link">Просмотр</a>
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    <p>
                                        Доверенность:
                                        <a :href="ProxyScan" class="card-link">Просмотр</a>
                                        Дата окончания действия доверенности:
                                        <strong>{{ PassportCode }}</strong>
                                    </p>
                                </li>
                                <li class="list-group-item">
                                    Сертификат РУСАДА:
                                    <a :href="Rusada" class="card-link">Просмотр</a>
                                </li>
                                <li class="list-group-item">
                                    Справка об отсутствии контактов с инфекционными больными:
                                    <a :href="CovidContact" class="card-link">Просмотр</a>
                                </li>
                                <li class="list-group-item">
                                    ПЦР-тест COVID-19:
                                    <a :href="CovidTest" class="card-link">Просмотр</a>
                                </li>
                                <li class="list-group-item">
                                    Согласие родителя:
                                    <a :href="ParentDoc" class="card-link">Просмотр</a>
                                </li>
                                <li class="list-group-item">
                                    Справка из школы:
                                    <a :href="SchoolDoc" class="card-link">Просмотр</a>
                                </li>
                                <li class="list-group-item">
                                    Страховка:
                                    <a :href="InsuranceDoc" class="card-link">Просмотр</a>
                                    Срок действия: с
                                    <strong>{{ InsuranceDateStart }}</strong>
                                    по
                                    <strong>{{ InsuranceDateEnd }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Полис ОМС:
                                    <a :href="OMSDoc" class="card-link">Просмотр</a>
                                    Номер: <strong>{{ OMSNumber }}</strong>
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
                                            ФИО тренера: <strong>{{ TrainerFullName }}</strong>
                                        </li>
                                        <li class="list-group-item">
                                            Пол:
                                            <strong>{{ TrainerGender }}</strong>
                                        </li>
                                        <li class="list-group-item">
                                            Дата рождения тренера:
                                            <strong>{{ TrainerDateOfBirth }}</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img class="photo" :src="TrainerPhoto" alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Информация о клубе:</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    Название: <strong>{{ NameOfClub }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Адрес: <strong>{{ AddressOfClub }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Владелец:
                                    <strong> {{ NameOfClubOwner }} </strong>
                                </li>
                                <li class="list-group-item">
                                    Принадлежность к федерации ушу:
                                    <strong>{{ ClubFederation }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Регион: <strong>{{ ClubRegion }}</strong>
                                </li>
                                <li class="list-group-item">
                                    Федеральный округ:
                                    <strong
                                        >{{ ClubFederalRegion }} ({{
                                            ClubAbbrFederalRegion
                                        }})</strong
                                    >
                                </li>
                                <li class="list-group-item">
                                    Страна: <strong>{{ ClubNameOfCountry }}</strong>
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
    <confirmationModal
        v-if="isConfirmModalVisible"
        @closeModal="isConfirmModalVisible = false"
        @confirmModal="deleteSportsmanMethod"
    >
        <span> Вы уверены, что собираетесь удалить спортсмена?</span>
    </confirmationModal>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ISportsmanState } from '../store/modules/sportsman/types';
import confirmationModal from '../components/Modal/confirmationModal.vue';
import EditCardSportsman from '../components/EditCardSportsman/EditCardSportsman.vue';
import PageNotFound from '../components/NotFound/PageNotFound.vue';
const namespace = 'sportsman';

@Options({
    name: 'CardSportsman',
    components: {
        confirmationModal,
        EditCardSportsman,
        PageNotFound,
    },
    methods: {},
})
export default class Sportsman extends Vue {
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

    // TODO: Вынести GETTTER-ы, если это возможно

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
    @Getter('TrainerFullName', { namespace })
    TrainerFullName: string | undefined;
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
        this.$router.push('/sportsmans');
    }
}
</script>
<style>
.photo {
    padding-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
    width: 16rem;
    display: block;
    height: auto;
    max-width: 100%;
    /* дополнительно их выровняем по центру */
    margin-left: auto;
    margin-right: auto;
    /* и добавим внешний нижний отступ */
    margin-bottom: 50px;
}
.card-mb-3 {
    max-width: 1920px;
}
</style>

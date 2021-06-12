<template>
    <div class="container-sm">
        <br />
        <div class="listSportsman">
            <input placeholder="Поиск" class="form-control" v-model="search" />
        </div>
        <!-- TODO: я бы вынес в отдельный компонент все селекты -->
        <div class="select">
            <div class="row">
                <div class="col-1">
                    <Multiselect
                        v-model="listGenderMap.value"
                        :options="arrValueGender"
                        mode="multiple"
                        placeholder="Пол"
                    >
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-single-label">
                                <div v-for="(value, idx) in values" :key="value">
                                    <div v-if="idx !== values.length - 1">
                                        <span>{{ value.label }}</span>
                                        <span>,&nbsp;</span>
                                    </div>
                                    <div v-else>
                                        <span>{{ value.label }}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Multiselect>
                </div>
                <div class="col-5">
                    <Multiselect
                        v-model="listRankMap.value"
                        :options="arrValueRank"
                        mode="multiple"
                        placeholder="Разряд"
                        :searchable="true"
                    >
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} опций выбрано из {{ arrValueRank.length }}
                            </div>
                        </template>
                    </Multiselect>
                </div>
                <div class="col-3">
                    <Multiselect
                        v-model="listDuanCziMap.value"
                        :options="arrValueDuanCzi"
                        mode="multiple"
                        placeholder="Дуань Цзин"
                        :searchable="true"
                    >
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} опций выбрано из {{ arrValueDuanCzi.length }}
                            </div>
                        </template>
                    </Multiselect>
                </div>
                <div class="col-3">
                    <Multiselect
                        v-model="listClubMap.value"
                        :options="arrValueClub"
                        mode="multiple"
                        placeholder="Клуб"
                        :searchable="true"
                    >
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} опций выбрано из {{ arrValueClub.length }}
                            </div>
                        </template>
                    </Multiselect>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <Multiselect
                        v-model="listCityMap.valueCity"
                        :options="arrValueCity"
                        mode="multiple"
                        placeholder="Город"
                    >
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} опций выбрано из {{ arrValueCity.length }}
                            </div>
                        </template>
                    </Multiselect>
                </div>
                <!-- <div class="col-3">
                    <Multiselect
                        v-model="listCityMap.valueFo"
                        :options="arrValueCity"
                        mode="multiple"
                        placeholder="ФО"
                    >
                        <template v-slot:multiplelabel="{ values }">
                            <div class="multiselect-multiple-label">
                                {{ values.length }} опций выбрано из {{ arrValueCity.length }}
                            </div>
                        </template>
                    </Multiselect>
                </div> -->
            </div>
        </div>
        <table class="table table-hover table-bordered table-sm table-responsive">
            <thead>
                <tr>
                    <th scope="col">Полное имя</th>
                    <th scope="col">Пол</th>
                    <th scope="col">ФО</th>
                    <th scope="col">Город</th>
                    <th scope="col">Клуб</th>
                    <th scope="col">Полное имя тренера</th>
                    <th scope="col">Разряд</th>
                    <th scope="col">Дуань</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sportsman in listSportsmanMap.listSportsmans" :key="sportsman.key">
                    <!-- Полное имя -->
                    <td v-if="sportsman.patronymic">
                        <router-link :to="'/sportsman/' + sportsman.id">
                            {{ sportsman.surname }} {{ sportsman.name }} {{ sportsman.patronymic }}
                        </router-link>
                    </td>
                    <td v-else>
                        <router-link :to="'/sportsman/' + sportsman.id">
                            {{ sportsman.surname }} {{ sportsman.name }}
                        </router-link>
                    </td>
                    <!-- Пол -->
                    <td>{{ sportsman.gender }}</td>
                    <!-- ФО -->
                    <td v-if="sportsman.city">
                        {{
                            sportsman.city.name_of_region.name_of_federal_region
                                .abbr_of_federal_region
                        }}
                    </td>
                    <td v-else>Не указан</td>
                    <!-- Город -->
                    <td v-if="sportsman.city">
                        {{ sportsman.city.name_of_city }}
                    </td>
                    <td v-else>Не указан</td>
                    <!-- Клуб -->
                    <td v-if="sportsman.club">{{ sportsman.club.name_of_club }}</td>
                    <td v-else>Не указан</td>
                    <!-- Тренер -->
                    <td v-if="sportsman.trainer">
                        {{ sportsman.trainer.surname }} {{ sportsman.trainer.name }}
                        {{ sportsman.trainer.patronymic }}
                    </td>
                    <td v-else>Не указан</td>
                    <!-- Ранк -->
                    <td v-if="sportsman.rank">{{ sportsman.rank }}</td>
                    <td v-else>Не указан</td>
                    <!-- Дуань -->
                    <td v-if="sportsman.duan_czi">{{ sportsman.duan_czi }}</td>
                    <td v-else>Не указан</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

/* VUEX */
import { State, Action, Getter, Mutation } from 'vuex-class';

/* STATE */
import { IListSportsmansState } from '../store/modules/listSportsmans/types';
import { IRankList } from '../store/modules/rank/types';
import { IDuanCziList } from '../store/modules/duan_czi/types';
import { IGenderList } from '../store/modules/gender/types';
import { IClubList } from '../store/modules/club/types';
import { ICityList } from '../store/modules/city/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespaceListSportsmans = 'listSportsmans';
const namespaceRank = 'rank';
const namespaceDuanCzi = 'duan_czi';
const namespaceGender = 'gender';
const namespaceClub = 'club';
const namespaceCity = 'city';

@Options({
    name: 'TableSportsman',
    components: {
        Multiselect,
    },
})
export default class TableSportsman extends Vue {
    search = '';

    /* STATE */
    @State('listSportsmans')
    listSportsmanMap!: IListSportsmansState;
    @State('rank')
    listRankMap!: IRankList;
    @State('duan_czi')
    listDuanCziMap!: IDuanCziList;
    @State('gender')
    listGenderMap!: IGenderList;
    @State('club')
    listClubMap!: IClubList;
    @State('city')
    listCityMap!: ICityList;

    /* ACTION */
    @Action('getSportsmanList', { namespace: namespaceListSportsmans })
    getSportsmanList: any;
    @Action('getSportsmanSearchList', { namespace: namespaceListSportsmans })
    getSportsmanSearchList: any;
    @Action('getRankList', { namespace: namespaceRank })
    getRankList: any;
    @Action('getDuanCziList', { namespace: namespaceDuanCzi })
    getDuanCziList: any;
    @Action('getGenderList', { namespace: namespaceGender })
    getGenderList: any;
    @Action('getClubList', { namespace: namespaceClub })
    getClubList: any;
    @Action('getCityList', { namespace: namespaceCity })
    getCityList: any;

    /* MUTATIONS */
    @Mutation('setSearch', { namespace: namespaceListSportsmans })
    setSearch: any;

    /* GETTERS */
    @Getter('arrValueRank', { namespace: namespaceRank })
    arrValueRank: Array<string> | undefined;
    @Getter('arrValueDuanCzi', { namespace: namespaceDuanCzi })
    arrValueDuanCzi: Array<string> | undefined;
    @Getter('arrValueGender', { namespace: namespaceGender })
    arrValueGender: Array<string> | undefined;
    @Getter('arrValueClub', { namespace: namespaceClub })
    arrValueClub: Array<string> | undefined;
    @Getter('arrValueCity', { namespace: namespaceCity })
    arrValueCity: Array<string> | undefined;

    mounted(): void {
        // TODO: loading (вейтер)
        this.getSportsmanList();
        // TODO: не надо при отрисовке компонента получать ниже данные
        this.getRankList();
        this.getDuanCziList();
        this.getGenderList();
        this.getClubList();
        this.getCityList();
    }

    watchSetSearch(): void {
        this.setSearch([
            this.search,
            this.listGenderMap.value,
            this.listRankMap.value,
            this.listDuanCziMap.value,
            this.listClubMap.value,
            this.listCityMap.valueCity,
        ]);
        this.getSportsmanSearchList();
    }

    @Watch('search')
    changeDataSearch(): void {
        this.watchSetSearch();
    }

    @Watch('listGenderMap.value')
    changeDataGender(): void {
        this.watchSetSearch();
    }

    @Watch('listRankMap.value')
    changeDataRank(): void {
        this.watchSetSearch();
    }

    @Watch('listDuanCziMap.value')
    changeDataDuanCzi(): void {
        this.watchSetSearch();
    }

    @Watch('listClubMap.value')
    changeDataClub(): void {
        this.watchSetSearch();
    }

    @Watch('listCityMap.valueCity')
    changeDataCity(): void {
        this.watchSetSearch();
    }
}
</script>

<style scoped>
.listSportsman {
    padding-top: 30px;
    padding-bottom: 30px;
}
table {
    margin-top: 30px;
}
</style>

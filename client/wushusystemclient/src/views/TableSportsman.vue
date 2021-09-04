<template>
    <div class="container-sm">
        <br />
        <router-link :to="'/sportsmans/new'">
            <button type="button" class="btn btn-dark">Добавить нового</button>
        </router-link>
        <div class="listSportsman">
            <input placeholder="Поиск" class="form-control" v-model="search" />
        </div>
        <div class="select">
            <div class="row">
                <div class="col-1">
                    <SelectGender mode="multiple" v-model="SelectGender" />
                </div>
                <div class="col-5">
                    <SelectRank mode="multiple" v-model="SelectRank" />
                </div>
                <div class="col-3">
                    <SelectDuanCzi mode="multiple" v-model="SelectDuanCzi" />
                </div>
                <div class="col-3">
                    <SelectClub mode="multiple" v-model="SelectClub" />
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <SelectCity mode="multiple" v-model="SelectCity" />
                </div>
                <div class="col-6">
                    <SelectTrainer mode="multiple" v-model="SelectTrainer" />
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <SelectFederalRegion mode="multiple" v-model="SelectFederalRegion" />
                </div>
                <div class="col-6">
                    <SelectRegion mode="multiple" v-model="SelectRegion" />
                </div>
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
                <tr v-for="sportsman in sportsmansMap.sportsmans" :key="sportsman.key">
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
        <nav aria-label="..." v-if="pageCount > 1">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: sportsmansMap.page === 1 }">
                    <a class="page-link" @click="prevPage" tabindex="-1" aria-disabled="true">
                        Previous
                    </a>
                </li>
                <template v-if="pageCount > limitPage">
                    <li
                        class="page-item"
                        v-for="page in limitPage"
                        :key="page"
                        :class="{ disabled: isDisabledPage(page) }"
                    >
                        <a class="page-link" @click="currentPage(page)">{{ page }}</a>
                    </li>
                    <li class="page-item disabled">
                        <a class="page-link">...</a>
                    </li>
                </template>
                <template v-else>
                    <li
                        class="page-item"
                        v-for="page in pageCount"
                        :key="page"
                        :class="{ disabled: isDisabledPage(page) }"
                    >
                        <a class="page-link" @click="currentPage(page)">{{ page }}</a>
                    </li>
                </template>
                <!-- TODO: Если страниц больше limitPage, то мы не видим страницы больше
                этого значения. Нужно либо использовать скролл,
                либо при нажатии в списке менять нумерацию -->
                <!-- TODO: При переходе на страницу всегда отображать первую страницу -->
                <li class="page-item" :class="{ disabled: sportsmansMap.page === pageCount }">
                    <a class="page-link" @click="nextPage"> Next </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

/* VUEX */
import { State, Action, Mutation } from 'vuex-class';

/* STATE */
import { ISportsmansState } from '../store/modules/sportsmans/types';

/* COMPONENTS */
import SelectGender from '../components/Select/SelectGender.vue';
import SelectRank from '../components/Select/SelectRank.vue';
import SelectCity from '../components/Select/SelectCity.vue';
import SelectDuanCzi from '../components/Select/SelectDuanCzi.vue';
import SelectClub from '../components/Select/SelectClub.vue';
import SelectTrainer from '../components/Select/SelectTrainer.vue';
import SelectFederalRegion from '../components/Select/SelectFederalRegion.vue';
import SelectRegion from '../components/Select/SelectRegion.vue';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'sportsmans';

@Options({
    name: 'TableSportsman',
    components: {
        Multiselect,
        SelectGender,
        SelectRank,
        SelectCity,
        SelectDuanCzi,
        SelectClub,
        SelectTrainer,
        SelectFederalRegion,
        SelectRegion,
    },
    computed: {
        pageCount(): number {
            return Math.ceil(this.sportsmansMap.count / this.sportsmansMap.page_size);
        },
    },
    methods: {
        isDisabledPage(page: number): boolean {
            return page === this.sportsmansMap.page;
        },
    },
})
export default class TableSportsman extends Vue {
    search = '';
    limitPage = 25;

    /* SELECT VALUE */
    SelectGender = null;
    SelectRank = null;
    SelectDuanCzi = null;
    SelectClub = null;
    SelectCity = null;
    SelectTrainer = null;
    SelectFederalRegion = null;
    SelectRegion = null;

    /* STATE */
    @State('sportsmans')
    sportsmansMap!: ISportsmansState;

    @Action('getSportsmanList', { namespace })
    getSportsmanList: any;

    /* MUTATIONS */
    @Mutation('setSearch', { namespace })
    setSearch: any;
    @Mutation('prevPage', { namespace })
    prevPage: any;
    @Mutation('currentPage', { namespace })
    currentPage: any;
    @Mutation('nextPage', { namespace })
    nextPage: any;

    mounted(): void {
        // TODO: loading (вейтер)
        this.getSportsmanList();
    }

    watchSetSearch(): void {
        this.setSearch([
            this.search,
            this.SelectGender,
            this.SelectRank,
            this.SelectDuanCzi,
            this.SelectClub,
            this.SelectCity,
            this.SelectTrainer,
        ]);
        this.getSportsmanList();
    }

    /* WATCH */

    @Watch('search')
    changeDataSearch(): void {
        this.watchSetSearch();
    }

    @Watch('SelectGender')
    changeDataGender(): void {
        this.watchSetSearch();
    }

    @Watch('SelectRank')
    changeDataRank(): void {
        this.watchSetSearch();
    }

    @Watch('SelectDuanCzi')
    changeDataDuanCzi(): void {
        this.watchSetSearch();
    }

    @Watch('SelectClub')
    changeDataClub(): void {
        this.watchSetSearch();
    }

    @Watch('SelectCity')
    changeDataCity(): void {
        this.watchSetSearch();
    }

    @Watch('SelectTrainer')
    changeDataTrainer(): void {
        this.watchSetSearch();
    }

    @Watch('sportsmansMap.page')
    changeSportsmanList(): void {
        this.getSportsmanList(this.sportsmansMap.page);
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
li > a {
    cursor: pointer;
}
</style>

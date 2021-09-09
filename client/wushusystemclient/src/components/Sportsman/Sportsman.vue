<template>
    <!-- Научиться правильно использовать svg icon -->
    <img v-if="!loading" src="@/assets/spin.svg" />
    <div v-else class="container-sm">
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
        <TableSportsman />
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
import { ISportsmansState } from '@/store/modules/sportsmans/types';

/* COMPONENTS */
import SelectGender from '@/components/Select/SelectGender.vue';
import SelectRank from '@/components/Select/SelectRank.vue';
import SelectCity from '@/components/Select/SelectCity.vue';
import SelectDuanCzi from '@/components/Select/SelectDuanCzi.vue';
import SelectClub from '@/components/Select/SelectClub.vue';
import SelectTrainer from '@/components/Select/SelectTrainer.vue';
import SelectFederalRegion from '@/components/Select/SelectFederalRegion.vue';
import SelectRegion from '@/components/Select/SelectRegion.vue';

/* TABLE SPORTSMAN */
import TableSportsman from '@/components/Sportsman/TableSportsmans/TableSportsmans.vue';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'sportsmans';

@Options({
    name: 'Sportsman',
    components: {
        Multiselect,
        TableSportsman,
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
            return Math.ceil(this.sportsmansMap.count / this.sportsmansMap.pageSize);
        },
    },
    methods: {
        isDisabledPage(page: number): boolean {
            return page === this.sportsmansMap.page;
        },
    },
})
export default class Sportsman extends Vue {
    /* LOADING */
    loading = false;

    /* SEARCH */
    search = '';

    /* PAGINATION LIMIT */
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

    /* ACTION */
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
        this.loading = false;
        this.currentPage(1);
        this.getSportsmanList();
        this.loading = true;
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
            this.SelectFederalRegion,
            this.SelectRegion,
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
    @Watch('SelectFederalRegion')
    changeDataFederalRegion(): void {
        this.watchSetSearch();
    }
    @Watch('SelectRegion')
    changeDataRegion(): void {
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

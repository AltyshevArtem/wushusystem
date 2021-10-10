<template>
    <!-- TODO: Научиться правильно использовать svg icon -->
    <img v-if="!loading" src="@/assets/spin.svg" />
    <div v-else class="container-sm">
        <br />
        <router-link :to="'/sportsmans/new'">
            <button type="button" class="btn btn-dark">Добавить нового</button>
        </router-link>
        <div class="listSportsman">
            <input placeholder="Поиск" class="form-control" v-model="search" />
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="leftList">
                    <div class="leftList__upper-row">
                        <div class="row">
                            <div class="col-6">
                                <SelectGender mode="multiple" v-model="SelectGender" />
                            </div>
                            <div class="col-6">
                                <SelectRank mode="multiple" v-model="SelectRank" />
                            </div>
                        </div>
                    </div>
                    <div class="leftList__middle-row">
                        <div class="row">
                            <SelectTrainer mode="multiple" v-model="SelectTrainer" />
                        </div>
                    </div>
                    <div class="leftList__lower-row">
                        <div class="row">
                            <div class="col-6">
                                <SelectDuanCzi mode="multiple" v-model="SelectDuanCzi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="rightList">
                    <div class="rightList__upper-row">
                        <div class="row">
                            <div class="col-6">
                                <SelectCity mode="multiple" v-model="SelectCity" />
                            </div>
                            <div class="col-6">
                                <SelectRegion mode="multiple" v-model="SelectRegion" />
                            </div>
                        </div>
                    </div>
                    <div class="rightList__middle-row">
                        <div class="row">
                            <SelectClub mode="multiple" v-model="SelectClub" />
                        </div>
                    </div>
                    <div class="rightList__lower-row">
                        <div class="col-6">
                            <SelectFederalRegion mode="multiple" v-model="SelectFederalRegion" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TableSportsman />
        <Pagination />
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

/* PAGINATION */
import Pagination from '@/components/Pagination/Pagination.vue';

/* NAMESPACE */
const namespace = 'sportsmans';

@Options({
    name: 'Sportsman',
    components: {
        Pagination,
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
})
export default class Sportsman extends Vue {
    /* LOADING */
    loading = false;

    /* SEARCH */
    search = '';

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

    mounted(): void {
        this.loading = false;
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
        this.loading = false;
        this.getSportsmanList();
        this.loading = true;
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
.leftList__lower-row {
    padding-top: 15px;
}
.leftList__middle-row {
    padding-top: 15px;
}
.rightList__lower-row {
    padding-top: 15px;
}
.rightList__middle-row {
    padding-top: 15px;
}
</style>

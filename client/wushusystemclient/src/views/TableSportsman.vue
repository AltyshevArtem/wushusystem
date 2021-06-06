<template>
    <div class="container-sm">
        <br>
        <div class="listSportsman">
            <input placeholder="Поиск" class="form-control" v-model="search" />
        </div>
        <!-- TODO: я бы вынес в отдельный компонент все селекты -->
        <div class="select">
            <div class="row">
                <div class="col-2">
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
                <div class="col-2">
                    <Multiselect
                        v-model="listRankMap.value"
                        :options="arrValueRank"
                        mode="multiple"
                        placeholder="Ранк"
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
                <div class="col-3">
                    <Multiselect
                        v-model="listDuanCziMap.value"
                        :options="arrValueDuanCzi"
                        mode="multiple"
                        placeholder="Дуань Цзин"
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
                <div class="col-3">
                    <Multiselect
                        v-model="listClubMap.value"
                        :options="arrValueClub"
                        mode="multiple"
                        placeholder="Клуб"
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
                <div class="col-2">
                    <Multiselect
                        v-model="listCityMap.value"
                        :options="arrValueCity"
                        mode="multiple"
                        placeholder="Округ"
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
            </div>
        </div>
        <table class="table table-hover table-bordered table-sm table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Пол</th>
                    <th scope="col">Федеральный округ/Республика</th>
                    <th scope="col">Город</th>
                    <th scope="col">Разряд</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sportsman in listSportsmanMap.listSportsmans" :key="sportsman.key">
                    <th scope="row">{{ sportsman.id }}</th>
                    <td>
                        <router-link :to="'/sportsman/' + sportsman.id">
                            {{ sportsman.surname }} {{ sportsman.name }} {{ sportsman.patronymic }}
                        </router-link>
                    </td>
                    <td>{{ sportsman.gender }}</td>
                    <td>{{ sportsman.city.name_of_region.name_of_federal_region }}</td>
                    <td>{{ sportsman.city.name_of_city }}</td>
                    <td>{{ sportsman.rank }}</td>
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
import { State, Action, Getter } from 'vuex-class';

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

    @Watch('search')
    changeData(): void {
        this.getSportsmanSearchList(this.search);
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

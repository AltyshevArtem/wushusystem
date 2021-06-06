<template>
    <div class="container-sm">
        <br>
        <div class="listSportsman">
            <input placeholder="Поиск" class="form-control" v-model="search" />
        </div>
        <br>
        <table class="table table-hover table-bordered table-sm table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Фамилия Имя Отчетство</th>
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
                    <td>{{ sportsman.name }}</td>
                    <td>{{ sportsman.patronymic }}</td>
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
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { IListSportsmansState } from '../store/modules/listSportsmans/types';

const namespace = 'listSportsmans';

export default class TableSportsman extends Vue {
    search = '';

    @State('listSportsmans')
    listSportsmanMap!: IListSportsmansState;
    @Action('getSportsmanList', { namespace })
    getSportsmanList: any;
    @Action('getSportsmanSearchList', { namespace })
    getSportsmanSearchList: any;

    mounted(): void {
        // TODO: loading
        this.getSportsmanList();
    }

    @Watch('search')
    changeData(): void {
        this.getSportsmanSearchList(this.search);
    }
}
</script>

<style scoped></style>

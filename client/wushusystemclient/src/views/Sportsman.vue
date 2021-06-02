<template>
    <div class="container-sm">
        <div class="sportsman">
            <input placeholder="Поиск" class="form-control" v-model="search" />
            <!-- <div v-for="sportsman in sportsmans" :key="sportsman.key">{{ sportsman }}</div> -->
        </div>
        <table class="table table-hover table-bordered table-sm table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Отчество</th>
                    <th scope="col">Пол</th>
                    <th scope="col">Федеральный округ/Республика</th>
                    <th scope="col">Город</th>
                    <th scope="col">Разряд</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sportsman in sportsmans.sportsmans" :key="sportsman.key">
                    <th scope="row">{{ sportsman.id }}</th>
                    <td>{{ sportsman.surname }}</td>
                    <td>{{ sportsman.name }}</td>
                    <td>{{ sportsman.patronymic }}</td>
                    <td>{{ sportsman.gender.name_of_gender }}</td>
                    <td>{{ sportsman.city.name_of_region }}</td>
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
import { SportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

export default class Sportsman extends Vue {
    search = '';

    @State('sportsman')
    sportsmans!: SportsmanState;
    @Action('fetchData', { namespace })
    fetchData: any;
    @Action('searchData', { namespace })
    searchData: any;

    mounted(): void {
        this.fetchData();
    }

    @Watch('search')
    changeData(): void {
        this.searchData(this.search);
    }
}
</script>

<style scoped></style>

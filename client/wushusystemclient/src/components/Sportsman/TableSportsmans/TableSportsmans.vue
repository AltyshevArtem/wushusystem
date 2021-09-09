<template>
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
                <td>{{ sportsman.gender }}</td>
                <td v-if="sportsman.city">
                    {{
                        sportsman.city.name_of_region.name_of_federal_region.abbr_of_federal_region
                    }}
                </td>
                <td v-else>Не указан</td>
                <td v-if="sportsman.city">
                    {{ sportsman.city.name_of_city }}
                </td>
                <td v-else>Не указан</td>
                <td v-if="sportsman.club">{{ sportsman.club.name_of_club }}</td>
                <td v-else>Не указан</td>
                <td v-if="sportsman.trainer">
                    {{ sportsman.trainer.surname }} {{ sportsman.trainer.name }}
                    {{ sportsman.trainer.patronymic }}
                </td>
                <td v-else>Не указан</td>
                <td v-if="sportsman.rank">{{ sportsman.rank }}</td>
                <td v-else>Не указан</td>
                <td v-if="sportsman.duan_czi">{{ sportsman.duan_czi }}</td>
                <td v-else>Не указан</td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Action } from 'vuex-class';

/* STATE */
import { ISportsmansState } from '@/store/modules/sportsmans/types';

/* NAMESPACE */
const namespace = 'sportsmans';

@Options({
    name: 'TableSportsman',
})
export default class TableSportsman extends Vue {
    /* STATE */
    @State('sportsmans')
    sportsmansMap!: ISportsmansState;

    /* ACTION */
    @Action('getSportsmanList', { namespace })
    getSportsmanList: any;

    mounted(): void {
        this.getSportsmanList();
    }
}
</script>

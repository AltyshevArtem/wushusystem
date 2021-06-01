<template>
    <div class="sportsman">
        <input placeholder="Поиск" class="form-control" v-model="search" />
        <div v-for="sportsman in sportsmans" :key="sportsman.key">{{ sportsman }}</div>
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

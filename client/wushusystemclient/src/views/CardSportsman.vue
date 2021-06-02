<template>
   <h1>wsvwe</h1>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { listSportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

export default class Sportsman extends Vue {
    search = '';

    @State('sportsman')
    listSportsmanMap!: listSportsmanState;
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

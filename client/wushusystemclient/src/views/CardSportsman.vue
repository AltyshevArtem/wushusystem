<template>
    <div>{this.$router.params}</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
// import { Watch } from 'vue-property-decorator';
// import { State, Action } from 'vuex-class';
// import { listSportsmansState } from '../store/modules/listSportsmans/types';

// const namespace = 'listSportsmans';

// export default class Sportsman extends Vue {
//     search = '';

//     @State('listSportsmans')
//     listSportsmanMap!: listSportsmansState;
//     @Action('fetchData', { namespace })
//     fetchData: any;
//     @Action('searchData', { namespace })
//     searchData: any;

//     mounted(): void {
//         this.fetchData();
//     }

//     @Watch('search')
//     changeData(): void {
//         this.searchData(this.search);
//     }
// }
</script>

<style scoped></style>

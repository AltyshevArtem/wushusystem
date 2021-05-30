<template>
    <div class="sportsman">
        <div v-for="sportsman in sportsmans" :key="sportsman.key">{{ sportsman }}</div>
    </div>
</template>

<script lang="ts">
import { State, Action } from 'vuex-class';
import { Vue } from 'vue-class-component';
import { SportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

export default class Sportsman extends Vue {
    @State('sportsman')
    sportsmans!: SportsmanState;
    @Action('fetchData', { namespace })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchData: any;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    mounted() {
        this.fetchData();
    }
}
</script>

<style scoped></style>

<template>
    <div class="sportsman">
        {{ sportsmanMap.sportsman }}
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { State, Action } from 'vuex-class';
import { ISportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

export default class Sportsman extends Vue {
    @State('sportsman')
    sportsmanMap!: ISportsmanState;
    @Action('getSportsman', { namespace })
    getSportsman: any;

    mounted(): void {
        this.getSportsman(this.$route.params.id);
    }
}
</script>

<style scoped></style>

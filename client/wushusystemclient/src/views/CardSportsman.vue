<template>
    <main>
        {{ fullName }}
    </main>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ISportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

@Options({
    name: 'CardSportsman',
})
export default class Sportsman extends Vue {
    @State('sportsman')
    sportsmanMap!: ISportsmanState;
    @Action('getSportsman', { namespace })
    getSportsman: any;
    @Getter('fullName', { namespace })
    fullName: string | undefined;

    mounted(): void {
        this.getSportsman(this.$route.params.id);
    }
}
</script>

<style scoped></style>

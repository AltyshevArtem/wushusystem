<template>
    <Multiselect
        v-model="listTrainerMap.valueTrainer"
        :options="arrValueTrainer"
        :mode="mode"
        placeholder="Тренер"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueTrainer.length }}
            </div>
        </template>
    </Multiselect>
</template>

<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* STATE */
import { ITrainerState } from '../../store/modules/trainer/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'trainer';

@Options({
    name: 'SelectTrainer',
    components: {
        Multiselect,
    },
})
export default class SelectRank extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('trainer')
    listTrainerMap!: ITrainerState;

    /* ACTION */
    @Action('getTrainerList', { namespace })
    getTrainerList: any;

    /* GETTER */
    @Getter('arrValueTrainer', { namespace })
    arrValueTrainer: Array<string> | undefined;

    mounted(): void {
        this.getTrainerList();
    }
}
</script>

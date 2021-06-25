<template>
    <Multiselect
        v-model="listGenderMap.valueGender"
        :options="arrValueGender"
        :mode="mode"
        placeholder="Пол"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-single-label">
                <div v-for="(value, idx) in values" :key="value">
                    <div v-if="idx !== values.length - 1">
                        <span>{{ value.label }}</span>
                        <span>,&nbsp;</span>
                    </div>
                    <div v-else>
                        <span>{{ value.label }}</span>
                    </div>
                </div>
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
import { IGenderList } from '../../store/modules/gender/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'gender';

@Options({
    name: 'SelectGender',
    components: {
        Multiselect,
    },
})
export default class SelectGender extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('gender')
    listGenderMap!: IGenderList;

    /* ACTION */
    @Action('getGenderList', { namespace })
    getGenderList: any;

    /* GETTER */
    @Getter('arrValueGender', { namespace })
    arrValueGender: Array<string> | undefined;

    mounted(): void {
        this.getGenderList();
    }
}
</script>

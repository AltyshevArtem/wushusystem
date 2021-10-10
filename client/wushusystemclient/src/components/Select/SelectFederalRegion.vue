<template>
    <Multiselect
        v-model="listFederalRegionMap.selectedFederalRegion"
        :options="arrValueFederalRegion"
        :mode="mode"
        placeholder="ФО"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueFederalRegion.length }}
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
import { IFederalRegionState } from '@/store/modules/federal_region/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'federal_region';

@Options({
    name: 'SelectFederalRegion',
    components: {
        Multiselect,
    },
})
export default class SelectFederalRegion extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('federal_region')
    listFederalRegionMap!: IFederalRegionState;

    /* ACTION */
    @Action('getFederalRegionList', { namespace })
    getFederalRegionList: any;

    /* GETTER */
    @Getter('arrValueFederalRegion', { namespace })
    arrValueFederalRegion: Array<string> | undefined;

    mounted(): void {
        this.getFederalRegionList();
    }
}
</script>

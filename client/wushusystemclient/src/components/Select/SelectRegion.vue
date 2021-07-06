<template>
    <Multiselect
        v-model="listRegionMap.selectedRegion"
        :options="arrValueRegion"
        :mode="mode"
        placeholder="Регион"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueRegion.length }}
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
import { IRegionState } from '../../store/modules/region/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'region';

@Options({
    name: 'SelectRegion',
    components: {
        Multiselect,
    },
})
export default class SelectFederalRegion extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('region')
    listRegionMap!: IRegionState;

    /* ACTION */
    @Action('getRegionList', { namespace })
    getRegionList: any;

    /* GETTER */
    @Getter('arrValueRegion', { namespace })
    arrValueRegion: Array<string> | undefined;

    mounted(): void {
        this.getRegionList();
    }
}
</script>

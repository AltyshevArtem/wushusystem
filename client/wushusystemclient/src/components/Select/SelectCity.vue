<template>
    <Multiselect
        v-model="listCityMap.valueCity"
        :options="arrValueCity"
        :mode="mode"
        placeholder="Город"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueCity.length }}
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
import { ICityState } from '../../store/modules/city/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'city';

@Options({
    name: 'SelectCity',
    components: {
        Multiselect,
    },
})
export default class SelectCity extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('city')
    listCityMap!: ICityState;

    /* ACTION */
    @Action('getCityList', { namespace })
    getCityList: any;

    /* GETTER */
    @Getter('arrValueCity', { namespace })
    arrValueCity: Array<string> | undefined;

    mounted(): void {
        this.getCityList();
    }
}
</script>

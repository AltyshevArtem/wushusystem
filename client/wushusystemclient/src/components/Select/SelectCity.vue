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
import { ICityList } from '../../store/modules/city/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'city';

@Options({
    name: 'SelectCity',
    props: {
        mode: String,
    },
    components: {
        Multiselect,
    },
})
export default class genderMultiSelect extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('city')
    listCityMap!: ICityList;

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

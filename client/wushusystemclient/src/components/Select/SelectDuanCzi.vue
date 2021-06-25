<template>
    <Multiselect
        v-model="listDuanCziMap.valueDuanCzi"
        :options="arrValueDuanCzi"
        :mode="mode"
        placeholder="Дуань Цзин"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueDuanCzi.length }}
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
import { IDuanCziList } from '../../store/modules/duan_czi/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'duan_czi';

@Options({
    name: 'SelectDuanCzi',
    components: {
        Multiselect,
    },
})
export default class SelectDuanCzi extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('duan_czi')
    listDuanCziMap!: IDuanCziList;

    /* ACTION */
    @Action('getDuanCziList', { namespace })
    getDuanCziList: any;

    /* GETTER */
    @Getter('arrValueDuanCzi', { namespace })
    arrValueDuanCzi: Array<string> | undefined;

    mounted(): void {
        this.getDuanCziList();
    }
}
</script>

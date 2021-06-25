<template>
    <Multiselect
        v-model="listRankMap.valueRank"
        :options="arrValueRank"
        :mode="mode"
        placeholder="Разряд"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueRank.length }}
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
import { IRankList } from '../../store/modules/rank/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'rank';

@Options({
    name: 'SelectRank',
    components: {
        Multiselect,
    },
})
export default class SelectRank extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('rank')
    listRankMap!: IRankList;

    /* ACTION */
    @Action('getRankList', { namespace })
    getRankList: any;

    /* GETTER */
    @Getter('arrValueRank', { namespace })
    arrValueRank: Array<string> | undefined;

    mounted(): void {
        this.getRankList();
    }
}
</script>

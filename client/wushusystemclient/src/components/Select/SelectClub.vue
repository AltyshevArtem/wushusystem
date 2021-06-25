<template>
    <Multiselect
        v-model="listClubMap.valueClub"
        :options="arrValueClub"
        :mode="mode"
        placeholder="Клуб"
        :searchable="true"
    >
        <template v-slot:multiplelabel="{ values }">
            <div class="multiselect-multiple-label">
                {{ values.length }} опций выбрано из {{ arrValueClub.length }}
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
import { IClubList } from '../../store/modules/club/types';

/* VUE FORM */
import Multiselect from '@vueform/multiselect';

/* NAMESPACE */
const namespace = 'club';

@Options({
    name: 'SelectClub',
    components: {
        Multiselect,
    },
})
export default class SelectClub extends Vue {
    /* PROP */
    @Prop({ type: String, default: 'multiple' }) mode!: string;

    /* STATE */
    @State('club')
    listClubMap!: IClubList;

    /* ACTION */
    @Action('getClubList', { namespace })
    getClubList: any;

    /* GETTER */
    @Getter('arrValueClub', { namespace })
    arrValueClub: Array<string> | undefined;

    mounted(): void {
        this.getClubList();
    }
}
</script>

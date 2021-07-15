<template>
    <div class="modal fade show" @click.self="closeModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Страховой полис</h5>
                    <button type="button" class="close close_btn" @click="closeModal">
                        <img src="../../../assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Дата начала страхования</h6>
                        <Datepicker
                            v-model="insurance['date_start']"
                            :locale="locale"
                            :upperLimit="to"
                            :lowerLimit="from"
                        />
                    </div>
                    <div>
                        <h6>Дата окончания страхования</h6>
                        <Datepicker
                            v-model="insurance['date_end']"
                            :locale="locale"
                            :upperLimit="to"
                            :lowerLimit="from"
                        />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <a :href="insurance['file_insurance']" class="card-link">Просмотр</a>
                        <!-- <input
                            type="file"
                            id="file_insurance"
                            ref="insurance['file_insurance']"
                            v-on:change="InsuranseFileUpload()"
                        /> -->
                    </div>
                </div>
                <div v-else class="modal-body">
                    <div>
                        <h6>Дата начала страхования</h6>
                        <Datepicker
                            v-model="DateStart"
                            :locale="locale"
                            :upperLimit="to"
                            :lowerLimit="from"
                        />
                    </div>
                    <div>
                        <h6>Дата окончания страхования</h6>
                        <Datepicker
                            v-model="DateEnd"
                            :locale="locale"
                            :upperLimit="to"
                            :lowerLimit="from"
                        />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <input type="file" id="file" ref="file" @change="InsuranseFileUpload()" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        @click="closeModal"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Закрыть
                    </button>
                    <div v-if="!mode">
                        <button type="button" @click="AddInsurance" class="btn btn-danger">
                            Добавить
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="SaveInsurance" class="btn btn-danger">
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade show"></div>
</template>

<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/* VUEX */
import { State, Action } from 'vuex-class';

/* COMPONENT */
import Datepicker from 'vue3-datepicker';

/* STATE */
import { IInsuranceState } from '@/store/modules/insurance/types';
import { ISportsmanState } from '@/store/modules/sportsman/types';

/* MODELS */
import { IInsurance } from '@/models/sportsman';

/* NAMESPACE */
const namespaceInsurance = 'insurance';
const namespaceSportsman = 'sportsman';

@Options({
    name: 'CreateInsurance',
    components: {
        Datepicker,
    },
    data() {
        return {
            DateStart: '',
            DateEnd: '',
            File: '',
        };
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        AddInsurance() {
            const insurance = {
                //TODO: формат даты вынести
                date_start: new Date(this.DateStart).toISOString().slice(0, 10),
                date_end: new Date(this.DateEnd).toISOString().slice(0, 10),
                file_insurance: this.File,
            };
            this.postInsurance(insurance);

            this.sportsmanMap.sportsman.insurance = insurance;

            // this.putSportsman(this.sportsmanMap.sportsman);

            this.$emit('AddInsurance');
        },
        SaveInsurance() {
            this.$emit('saveInsurance');
        },
        InsuranseFileUpload() {
            this.File = this.$refs.file.files[0];
        },
    },
})
export default class CreateInsurance extends Vue {
    @Prop({ default: undefined }) insurance!: IInsurance;
    @Prop({ default: true }) mode!: boolean;

    /* STATE */
    @State('insurance')
    insuranceMap!: IInsuranceState;
    @State('sportsman')
    sportsmanMap!: ISportsmanState;

    /* ACTION */
    @Action('postInsurance', { namespace: namespaceInsurance })
    postInsurance: any;
    @Action('putSportsman', { namespace: namespaceSportsman })
    putSportsman: any;


    // @Action('putInsurance', { namespace: namespaceInsurance })
    // putInsurance: any;
    // @Action('deleteInsurance', { namespace: namespaceInsurance })
    // deleteInsurance: any;
    // @Action('getInsurance', { namespace: namespaceInsurance })
    // getInsurance: any;
}
</script>

<style scoped>
.modal {
    display: block;
}
.close_btn {
    border: 0;
    background: #ffffff;
}
</style>

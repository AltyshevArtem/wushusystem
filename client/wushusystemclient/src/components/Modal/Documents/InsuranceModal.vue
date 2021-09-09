<template>
    <div class="modal fade show" @click.stop="hideDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" @click.stop role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Страховой полис</h5>
                    <button type="button" class="close close_btn" @click.stop="hideDialog">
                        <img src="@/assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Дата начала страхования</h6>
                        <input placeholder="YYYY-MM-DD" v-model="insurance.date_start" required />
                    </div>
                    <div>
                        <h6>Дата окончания страхования</h6>
                        <input placeholder="YYYY-MM-DD" v-model="insurance.date_end" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <!-- Выводить маленькую фотку в самой модалке -->
                        <div v-if="insurance.file_insurance">
                            <a :href="insurance.file_insurance" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="insurance.file_insurance = null">
                                Удалить
                            </button>
                        </div>
                        <div v-else>
                            <input
                                type="file"
                                id="file"
                                ref="file"
                                @change="InsuranseFileUpload()"
                            />
                        </div>
                    </div>
                </div>
                <div v-else class="modal-body">
                    <div>
                        <h6>Дата начала страхования</h6>
                        <input placeholder="YYYY-MM-DD" v-model="DateStart" required />
                    </div>
                    <div>
                        <h6>Дата окончания страхования</h6>
                        <input placeholder="YYYY-MM-DD" v-model="DateEnd" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <input type="file" id="file" ref="file" @change="InsuranseFileUpload()" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        @click.stop="hideDialog"
                        type="button"
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
/* eslint-disable camelcase */
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

/* VUEX */
import { Mutation, State } from 'vuex-class';

/* STATE */
import { IInsuranceState } from '@/store/modules/insurance/types';

/* MODELS */
import { IInsurance } from '@/models/sportsman';

/* SCRIPT */
import formatDateToString from '@/scripts/formatDateToString';

/* NAMESPACE */
const namespace = 'insurance';

@Options({
    name: 'InsuranceModal',
    components: {},
    data() {
        return {
            DateStart: '',
            DateEnd: '',
            File: '',
        };
    },
    methods: {
        AddInsurance() {
            const insurance = {
                date_start: formatDateToString(this.DateStart),
                date_end: formatDateToString(this.DateEnd),
                file_insurance: this.File,
            };
            this.postInsurance(insurance);

            this.hideDialog();
        },
        SaveInsurance() {
            this.putInsurance(this.insurance);

            this.hideDialog();
        },
        InsuranseFileUpload() {
            if (this.mode) {
                this.insurance.file_insurance = this.$refs.file.files[0];
            } else {
                this.File = this.$refs.file.files[0];
            }
        },
    },
})
export default class InsuranceModal extends Vue {
    @Prop({ default: undefined }) insurance!: IInsurance;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* STATE */
    @State('insurance')
    insuranceMap!: IInsuranceState;

    /* MUTATION */
    @Mutation('postInsurance', { namespace })
    postInsurance: any;
    @Mutation('putInsurance', { namespace })
    putInsurance: any;
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

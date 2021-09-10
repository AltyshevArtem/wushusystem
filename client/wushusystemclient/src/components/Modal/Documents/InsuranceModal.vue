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
                        <input placeholder="YYYY-MM-DD" v-model="insurance.dateStart" required />
                    </div>
                    <div>
                        <h6>Дата окончания страхования</h6>
                        <input placeholder="YYYY-MM-DD" v-model="insurance.dateEnd" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <div v-if="insurance.fileInsurance">
                            <a :href="insurance.fileInsurance" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="insurance.fileInsurance = null">
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
                        <input placeholder="YYYY-MM-DD" v-model="dateStart" required />
                    </div>
                    <div>
                        <h6>Дата окончания страхования</h6>
                        <input placeholder="YYYY-MM-DD" v-model="dateEnd" required />
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
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

/* VUEX */
import { Mutation } from 'vuex-class';

/* MODELS */
import { IInsurance } from '@/models/sportsman';

/* SCRIPT */
import formatDateToString from '@/scripts/formatDateToString';

/* NAMESPACE */
const namespace = 'insurance';

@Options({
    name: 'InsuranceModal',
})
export default class InsuranceModal extends Vue {
    /* PROP */
    @Prop({ default: undefined }) insurance!: IInsurance;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    /* EMIT */
    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* DATA */
    dateStart: Date | null | string = '';
    dateEnd: Date | null | string = '';
    file: string | File | null | undefined = '';

    /* METHOD */

    public AddInsurance(): void {
        const insurance = {
            dateStart: formatDateToString(this.dateStart),
            dateEnd: formatDateToString(this.dateEnd),
            fileInsurance: this.file,
        };
        this.setInsurance(insurance);

        this.hideDialog();
    }

    public SaveInsurance(): void {
        this.setInsurance(this.insurance);

        this.hideDialog();
    }

    public InsuranseFileUpload(): void {
        if (this.mode) {
            const fileList: FileList | null = (this.$refs['file'] as HTMLInputElement).files;
            fileList?.length !== 0
                ? (this.insurance.file_insurance = String(fileList?.item(0)))
                : (this.file = '');
        } else {
            const fileList: FileList | null = (this.$refs['file'] as HTMLInputElement).files;
            fileList?.length !== 0 ? (this.file = fileList?.item(0)) : (this.file = ' ');
        }
    }

    /* MUTATION */
    @Mutation('setInsurance', { namespace })
    setInsurance: any;
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

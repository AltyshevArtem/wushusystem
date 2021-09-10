<template>
    <div class="modal fade show" @click.stop="hideDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" @click.stop role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Паспорт</h5>
                    <button type="button" class="close close_btn" @click.stop="hideDialog">
                        <img src="@/assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Серия и номер паспорта</h6>
                        <input v-model="passport.number" required />
                    </div>
                    <div>
                        <h6>Дата выдачи паспорта</h6>
                        <input placeholder="YYYY-MM-DD" v-model="passport.date_start" required />
                    </div>
                    <div>
                        <h6>Кем выдан паспорт</h6>
                        <input v-model="passport.issue" required />
                    </div>
                    <div>
                        <h6>Код подразделения</h6>
                        <input v-model="passport.code" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <div v-if="passport.scan">
                            <a :href="passport.scan" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="passport.scan = null">
                                Удалить
                            </button>
                        </div>
                        <div v-else>
                            <input
                                type="file"
                                id="file"
                                ref="file"
                                @change="PassportFileUpload()"
                            />
                        </div>
                    </div>
                </div>
                <div v-else class="modal-body">
                    <div>
                        <h6>Номер</h6>
                        <input v-model="number" required />
                    </div>
                    <div>
                        <h6>Дата выдачи паспорта</h6>
                        <input placeholder="YYYY-MM-DD" v-model="dateStart" required />
                    </div>
                    <div>
                        <h6>Кем выдан паспорт</h6>
                        <input v-model="issue" required />
                    </div>
                    <div>
                        <h6>Код подразделения</h6>
                        <input v-model="code" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <input
                            type="file"
                            id="file"
                            ref="file"
                            @change="PassportFileUpload()"
                            required
                        />
                    </div>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        @click.stop="hideDialog"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                    >
                        Закрыть
                    </button>
                    <div v-if="!mode">
                        <button type="button" @click="AddPassport" class="btn btn-danger">
                            Добавить
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="SavePassport" class="btn btn-danger">
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
import { IPassport } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'passport';

@Options({
    name: 'PassportModal',
})
export default class PassportModal extends Vue {
    /* PROP */
    @Prop({ default: undefined }) passport!: IPassport;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    /* EMIT */
    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* DATA */
    number: string | number | null = '';
    file: string | File | null | undefined = '';
    dateStart: string | number | null = '';
    issue: string | number | null = '';
    code: string | number | null = '';

    /* METHOD */
    public AddPassport(): void {
        const passport = {
            number: this.number,
            scan: this.file,
            // eslint-disable-next-line camelcase
            date_start: this.dateStart,
            issue: this.issue,
            code: this.code,
        };
        this.setPassport(passport);

        this.hideDialog();
    }
    public SavePassport(): void {
        this.setPassport(this.passport);

        this.hideDialog();
    }
    public PassportFileUpload(): void {
        if (this.mode) {
            const fileList: FileList | null = (this.$refs['file'] as HTMLInputElement).files;
            fileList?.length !== 0
                ? (this.passport.scan = String(fileList?.item(0)))
                : (this.file = '');
        } else {
            const fileList: FileList | null = (this.$refs['file'] as HTMLInputElement).files;
            fileList?.length !== 0 ? (this.file = fileList?.item(0)) : (this.file = ' ');
        }
    }

    /* ACTION */
    @Mutation('setPassport', { namespace })
    setPassport: any;
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

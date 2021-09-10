<template>
    <div class="modal fade show" @click.stop="hideDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" @click.stop role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Свидетельство о рождении</h5>
                    <button type="button" class="close close_btn" @click.stop="hideDialog">
                        <img src="@/assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Номер</h6>
                        <input v-model="birthCertificate.number" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <div v-if="birthCertificate.scan">
                            <!-- TODO: Сделать просмотр только что
                            добавленной картинки(во всех модалках) -->
                            <a :href="birthCertificate.scan" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="birthCertificate.scan = null">
                                Удалить
                            </button>
                        </div>
                        <div v-else>
                            <input
                                type="file"
                                id="file"
                                ref="file"
                                @change="BirthCertificateFileUpload()"
                                required
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
                        <h6>Скан фото:</h6>
                        <input
                            type="file"
                            id="file"
                            ref="file"
                            @change="BirthCertificateFileUpload()"
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
                        <button type="button" @click="AddBirthCertificate" class="btn btn-danger">
                            Добавить
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="SaveBirthCertificate" class="btn btn-danger">
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
import { State, Mutation } from 'vuex-class';

/* STATE */
import { IBirthCertificateState } from '@/store/modules/birth_certificate/types';

/* MODELS */
import { IBirthCertificate } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'birth_certificate';

@Options({
    name: 'birthCertificateModal',
    // data() {
    //     return {
    //         number: '',
    //         File: '',
    //     };
    // },
    // methods: {
    //     AddBirthCertificate() {
    //         const birthCertificate = {
    //             number: this.number,
    //             scan: this.File,
    //         };
    //         this.postBirthCertificate(birthCertificate);

    //         this.hideDialog();
    //     },
    //     SaveBirthCertificate() {
    //         this.putBirthCertificate(this.birthCertificate);

    //         this.hideDialog();
    //     },
    //     BirthCertificateFileUpload() {
    //         if (this.mode) {
    //             this.birthCertificate.scan = this.$refs.file.files[0];
    //         } else {
    //             this.File = this.$refs.file.files[0];
    //         }
    //     },
    // },
})
export default class BirthCertificateModal extends Vue {
    /* PROP */
    @Prop({ default: undefined }) birthCertificate!: IBirthCertificate;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    /* EMIT */
    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* DATA */
    number: number | null = 0;
    file: string | File | null | undefined = '';

    /* METHOD */
    public AddBirthCertificate(): void {
        const birthCertificate = {
            number: this.number,
            scan: this.file,
        };

        this.setBirthCertificate(birthCertificate);

        this.hideDialog();
    }
    public SaveBirthCertificate(): void {
        this.setBirthCertificate(this.birthCertificate);

        this.hideDialog();
    }
    public BirthCertificateFileUpload(): void {
        if (this.mode) {
            const fileList: FileList | null = (this.$refs['file'] as HTMLInputElement).files;
            fileList?.length !== 0
                ? (this.birthCertificate.scan = fileList?.item(0))
                : (this.file = '');
        } else {
            const fileList: FileList | null = (this.$refs['file'] as HTMLInputElement).files;
            fileList?.length !== 0 ? (this.file = fileList?.item(0)) : (this.file = ' ');
        }
    }

    /* STATE */
    @State('birth_certificate')
    birthCertificateMap!: IBirthCertificateState;

    /* MUTATIONS */
    @Mutation('setBirthCertificate', { namespace })
    setBirthCertificate: any;
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

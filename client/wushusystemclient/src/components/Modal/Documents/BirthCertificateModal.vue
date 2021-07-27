<template>
    <div class="modal fade show" @click.self="closeModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Свидетельство о рождении</h5>
                    <button type="button" class="close close_btn" @click="closeModal">
                        <img src="../../../assets/x.svg" alt="close" />
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
                            <a :href="birthCertificate.scan" class="card-link">Просмотр</a>
                            <button @click="birthCertificate.scan = null">Удалить</button>
                        </div>
                        <div v-else>
                            <input
                                type="file"
                                id="file"
                                ref="file"
                                @change="BirthCertificateFileUpload()"
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
                        @click="closeModal"
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
/* eslint-disable camelcase */
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/* VUEX */
import { State, Action } from 'vuex-class';

/* STATE */
import { IBirthCertificateState } from '@/store/modules/birth_certificate/types';

/* MODELS */
import { IBirthCertificate } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'birth_certificate';

@Options({
    name: 'birthCertificateModal',
    components: {},
    data() {
        return {
            number: '',
            File: '',
        };
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        AddBirthCertificate() {
            const birthCertificate = {
                number: this.number,
                scan: this.File,
            };
            this.postBirthCertificate(birthCertificate);

            this.closeModal();
        },
        SaveBirthCertificate() {
            this.putBirthCertificate(this.birthCertificate);

            this.closeModal();
        },
        BirthCertificateFileUpload() {
            if (this.mode) {
                this.birthCertificate.scan = this.$refs.file.files[0];
            } else {
                this.File = this.$refs.file.files[0];
            }
        },
    },
})
export default class BirthCertificateModal extends Vue {
    @Prop({ default: undefined }) birthCertificate!: IBirthCertificate;
    @Prop({ default: true }) mode!: boolean;

    /* ACTION */
    @Action('postBirthCertificate', { namespace })
    postBirthCertificate: any;
    @Action('putBirthCertificate', { namespace })
    putBirthCertificate: any;
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

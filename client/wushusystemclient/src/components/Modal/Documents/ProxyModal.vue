<template>
    <div class="modal fade show" @click.self="closeModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Паспорт</h5>
                    <button type="button" class="close close_btn" @click="closeModal">
                        <img src="../../../assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Дата окончания доверенности</h6>
                        <input placeholder="YYYY-MM-DD" v-model="proxy.date_end" required />
                    </div>
                    <div>
                        <h6>Оригинал паспорта</h6>
                        <button
                            @click="
                                {
                                    isModalPassport = true;
                                    isEdit = true;
                                }
                            "
                        >
                            Редактировать паспорт
                        </button>
                    </div>
                    <div>
                        <h6>Оригинал свидетельство о рождении</h6>
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <div v-if="proxy.scan">
                            <a :href="proxy.scan" class="card-link">Просмотр</a>
                            <button @click="proxy.scan = null">Удалить</button>
                        </div>
                        <div v-else>
                            <input type="file" id="file" ref="file" @change="proxyFileUpload()" />
                        </div>
                    </div>
                </div>
                <div v-else class="modal-body">
                    <div>
                        <h6>Дата окончания доверенности</h6>
                        <input v-model="DateEnd" required />
                    </div>
                    <div>
                        <h6>Оригинал паспорта</h6>
                        <button
                            @click="
                                {
                                    isModalPassport = true;
                                    isEdit = false;
                                }
                            "
                        >
                            Добавить новый паспорт
                        </button>
                    </div>
                    <div>
                        <h6>Оригинал свидетельство о рождении</h6>
                        <button
                            @click="
                                {
                                    isModalBirthCertificate = true;
                                    isEdit = false;
                                }
                            "
                        >
                            Добавить новое свидетельство о рождении
                        </button>
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <input
                            type="file"
                            id="file"
                            ref="file"
                            @change="proxyFileUpload()"
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
                        <button type="button" @click="AddProxy" class="btn btn-danger">
                            Добавить
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="SaveProxy" class="btn btn-danger">
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PassportModal
        v-if="isModalPassport"
        :mode="isEdit"
        :passport="proxyMap.proxy.original_passport"
        @closeModal="isModalPassport = false"
    />
    <BirthCertificateModal
        v-if="isModalBirthCertificate"
        :mode="isEdit"
        :birthCertificate="proxyMap.proxy.original_birth_certificate"
        @closeModal="isModalBirthCertificate = false"
    />
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
import { IProxyDocState } from '@/store/modules/proxy/types';

/* MODELS */
import { IProxyDoc } from '@/models/sportsman';

/* COMPONENTS */
import PassportModal from './PassportModal.vue';
import BirthCertificateModal from './BirthCertificateModal.vue';

/* NAMESPACE */
const namespace = 'proxy';

@Options({
    name: 'ProxyModal',
    components: { PassportModal, BirthCertificateModal },
    data() {
        return {
            DateEnd: '',
            File: '',
        };
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        AddProxy() {
            const proxy = {
                number: this.number,
                scan: this.File,
                date_start: this.DateStart,
                issue: this.issue,
                code: this.code,
            };
            this.postProxy(proxy);

            this.closeModal();
        },
        SaveProxy() {
            this.putProxy(this.proxy);

            this.closeModal();
        },
        proxyFileUpload() {
            if (this.mode) {
                this.proxy.scan = this.$refs.file.files[0];
            } else {
                this.File = this.$refs.file.files[0];
            }
        },
    },
})
export default class proxyModal extends Vue {
    @Prop({ default: undefined }) proxy!: IProxyDoc;
    @Prop({ default: true }) mode!: boolean;

    /* MODAL */
    isEdit = false;
    isModalBirthCertificate = false;
    isModalPassport = false;

    /* STATE */
    @State('proxy')
    proxyMap!: IProxyDocState;

    /* ACTION */
    @Action('postProxy', { namespace })
    postProxy: any;
    @Action('putProxy', { namespace })
    putProxy: any;
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

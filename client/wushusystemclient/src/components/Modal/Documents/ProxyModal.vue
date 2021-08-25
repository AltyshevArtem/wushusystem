<template>
    <div class="modal fade show" @click.stop="hideDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" @click.stop role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Прокси</h5>
                    <button type="button" class="close close_btn" @click.stop="hideDialog">
                        <img src="../../../assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Дата окончания доверенности</h6>
                        <input placeholder="YYYY-MM-DD" v-model="proxy.date_end" required />
                    </div>
                    <div>
                        <h6>Скан оригинального паспорта:</h6>
                        <div v-if="proxy.original_passport">
                            <a :href="proxy.original_passport" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="proxy.original_passport = null">
                                Удалить
                            </button>
                        </div>
                        <div v-else>
                            <input
                                type="file"
                                id="passport"
                                ref="passport"
                                @change="proxyPassportUpload()"
                            />
                        </div>
                    </div>
                    <div>
                        <h6>Скан оригинального свидетельства о рождении:</h6>
                        <div v-if="proxy.original_birth_certificate">
                            <a :href="proxy.original_birth_certificate" class="card-link">
                                Просмотр
                            </a>
                            <button
                                class="btn btn-danger"
                                @click="proxy.original_birth_certificate = null"
                            >
                                Удалить
                            </button>
                        </div>
                        <div v-else>
                            <input
                                type="file"
                                id="birth"
                                ref="birth"
                                @change="proxyBirthUpload()"
                            />
                        </div>
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <div v-if="proxy.scan">
                            <a :href="proxy.scan" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="proxy.scan = null">
                                Удалить
                            </button>
                        </div>
                        <div v-else>
                            <input type="file" id="file" ref="file" @change="proxyFileUpload()" />
                        </div>
                    </div>
                </div>
                <div v-else class="modal-body">
                    <div>
                        <h6>Дата окончания доверенности</h6>
                        <input placeholder="YYYY-MM-DD" v-model="DateEnd" required />
                    </div>
                    <div>
                        <h6>Скан оригинального паспорта:</h6>
                        <input
                            type="file"
                            id="passport"
                            ref="passport"
                            @change="proxyPassportUpload()"
                            required
                        />
                    </div>
                    <div>
                        <h6>Скан оригинального свидетельства о рождении:</h6>
                        <input
                            type="file"
                            id="birth"
                            ref="birth"
                            @change="proxyBirthUpload()"
                            required
                        />
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
                        @click.stop="hideDialog"
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
    <div class="modal-backdrop fade show"></div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

/* VUEX */
import { State, Mutation } from 'vuex-class';

/* STATE */
import { IProxyDocState } from '@/store/modules/proxy/types';

/* MODELS */
import { IProxyDoc } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'proxy';

@Options({
    name: 'ProxyModal',
    components: {},
    data() {
        return {
            DateEnd: '',
            PassportFile: '',
            BirthFile: '',
            File: '',
        };
    },
    methods: {
        AddProxy() {
            const proxy = {
                number: this.number,
                scan: this.File,
                date_end: this.DateEnd,
                original_passport: this.PassportFile,
                original_birth_certificate: this.BirthFile,
            };
            this.postProxy(proxy);

            this.hideDialog();
        },
        SaveProxy() {
            this.putProxy(this.proxy);

            this.hideDialog();
        },
        proxyFileUpload() {
            if (this.mode) {
                this.proxy.scan = this.$refs.file.files[0];
            } else {
                this.File = this.$refs.file.files[0];
            }
        },
        proxyPassportUpload() {
            if (this.mode) {
                this.proxy.passport = this.$refs.passport.files[0];
            } else {
                this.PassportFile = this.$refs.passport.files[0];
            }
        },
        proxyBirthUpload() {
            if (this.mode) {
                this.proxy.birth = this.$refs.birth.files[0];
            } else {
                this.BirthFile = this.$refs.birth.files[0];
            }
        },
    },
})
export default class ProxyModal extends Vue {
    @Prop({ default: undefined }) proxy!: IProxyDoc;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* STATE */
    @State('proxy')
    proxyMap!: IProxyDocState;

    /* ACTION */
    @Mutation('postProxy', { namespace })
    postProxy: any;
    @Mutation('putProxy', { namespace })
    putProxy: any;
}
</script>

<style scoped>
.modal {
    display: block;
}
.modal-dialog {
    max-width: 700px;
}
.close_btn {
    border: 0;
    background: #ffffff;
}
</style>

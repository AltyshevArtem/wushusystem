<template>
    <div class="modal fade show" @click.stop="hideDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" @click.stop role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Прокси</h5>
                    <button type="button" class="close close_btn" @click.stop="hideDialog">
                        <img src="@/assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Дата окончания доверенности</h6>
                        <input placeholder="YYYY-MM-DD" v-model="proxy.dateEnd" required />
                    </div>
                    <div>
                        <h6>Скан оригинального паспорта:</h6>
                        <div v-if="proxy.originalPassport">
                            <a :href="proxy.originalPassport" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="proxy.originalPassport = null">
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
                        <div v-if="proxy.originalBirthCertificate">
                            <a :href="proxy.originalBirthCertificate" class="card-link">
                                Просмотр
                            </a>
                            <button
                                class="btn btn-danger"
                                @click="proxy.originalBirthCertificate = null"
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
                            <input type="file" id="scan" ref="scan" @change="proxyFileUpload()" />
                        </div>
                    </div>
                </div>
                <div v-else class="modal-body">
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
                        <h6>Скан доверенности:</h6>
                        <input
                            type="file"
                            id="scan"
                            ref="scan"
                            @change="proxyFileUpload()"
                            required
                        />
                    </div>
                    <div>
                        <h6>Дата окончания доверенности</h6>
                        <input placeholder="YYYY-MM-DD" v-model="dateEnd" required />
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
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

/* VUEX */
import { Mutation } from 'vuex-class';

/* MODELS */
import { IProxyDoc } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'proxy';

@Options({
    name: 'ProxyModal',
})
export default class ProxyModal extends Vue {
    /* PROP */
    @Prop({ default: undefined }) proxy!: IProxyDoc;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    /* EMIT */
    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* DATA */
    dateEnd: string | number | null = '';
    filePassport: string | File | null | undefined = '';
    fileBirth: string | File | null | undefined = '';
    file: string | File | null | undefined = '';

    /* METHOD */
    public AddProxy(): void {
        const proxy = {
            scan: this.file,
            dateEnd: this.dateEnd,
            originalPassport: this.filePassport,
            originalBirthCertificate: this.fileBirth,
        };
        this.setProxy(proxy);

        this.hideDialog();
    }
    SaveProxy(): void {
        this.setProxy(this.proxy);

        this.hideDialog();
    }
    public proxyFileUpload(): void {
        if (this.mode) {
            const fileList: FileList | null = (this.$refs['scan'] as HTMLInputElement).files;
            fileList?.length !== 0
                ? (this.proxy.scan = String(fileList?.item(0)))
                : (this.file = '');
        } else {
            const fileList: FileList | null = (this.$refs['scan'] as HTMLInputElement).files;
            fileList?.length !== 0 ? (this.file = fileList?.item(0)) : (this.file = ' ');
        }
    }
    proxyPassportUpload(): void {
        if (this.mode) {
            const fileList: FileList | null = (this.$refs['passport'] as HTMLInputElement).files;
            fileList?.length !== 0
                ? (this.proxy.original_passport = String(fileList?.item(0)))
                : (this.file = '');
        } else {
            const fileList: FileList | null = (this.$refs['passport'] as HTMLInputElement).files;
            fileList?.length !== 0 ? (this.filePassport = fileList?.item(0)) : (this.file = ' ');
        }
    }
    proxyBirthUpload(): void {
        if (this.mode) {
            const fileList: FileList | null = (this.$refs['birth'] as HTMLInputElement).files;
            fileList?.length !== 0
                ? (this.proxy.original_birth_certificate = String(fileList?.item(0)))
                : (this.file = '');
        } else {
            const fileList: FileList | null = (this.$refs['birth'] as HTMLInputElement).files;
            fileList?.length !== 0 ? (this.fileBirth = fileList?.item(0)) : (this.file = ' ');
        }
    }

    /* ACTION */
    @Mutation('setProxy', { namespace })
    setProxy: any;
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

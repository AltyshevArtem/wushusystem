<template>
    <div class="modal fade show" @click.stop="hideDialog" tabindex="-1" role="dialog">
        <div class="modal-dialog" @click.stop role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Полис ОМС</h5>
                    <button type="button" class="close close_btn" @click.stop="hideDialog">
                        <img src="../../../assets/x.svg" alt="close" />
                    </button>
                </div>
                <div class="modal-body" v-if="mode">
                    <div>
                        <h6>Номер</h6>
                        <input v-model="oms.number" required />
                    </div>
                    <div>
                        <h6>Скан фото:</h6>
                        <div v-if="oms.scan">
                            <a :href="oms.scan" class="card-link">Просмотр</a>
                            <button class="btn btn-danger" @click="oms.scan = null">Удалить</button>
                        </div>
                        <div v-else>
                            <input type="file" id="file" ref="file" @change="OmsFileUpload()" />
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
                            @change="OmsFileUpload()"
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
                        <button type="button" @click="AddOms" class="btn btn-danger">
                            Добавить
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" @click="SaveOms" class="btn btn-danger">
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
import { IOmsState } from '@/store/modules/oms/types';

/* MODELS */
import { IOms } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'oms';

@Options({
    name: 'OmsModal',
    components: {},
    data() {
        return {
            number: '',
            File: '',
        };
    },
    methods: {
        AddOms() {
            const oms = {
                number: this.number,
                scan: this.File,
            };
            this.postOMS(oms);

            this.hideDialog();
        },
        SaveOms() {
            this.putOMS(this.oms);

            this.hideDialog();
        },
        OmsFileUpload() {
            if (this.mode) {
                this.oms.scan = this.$refs.file.files[0];
            } else {
                this.File = this.$refs.file.files[0];
            }
        },
    },
})
export default class OmsModal extends Vue {
    @Prop({ default: undefined }) oms!: IOms;
    @Prop({ default: true }) mode!: boolean;
    @Prop({ default: false }) show!: boolean;

    @Emit('update:show')
    hideDialog(): boolean {
        return false;
    }

    /* STATE */
    @State('oms')
    omsMap!: IOmsState;

    /* MUTATION */
    @Mutation('postOMS', { namespace })
    postOMS: any;
    @Mutation('putOMS', { namespace })
    putOMS: any;
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

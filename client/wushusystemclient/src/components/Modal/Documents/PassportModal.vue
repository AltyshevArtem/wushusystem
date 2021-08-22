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
                        <input placeholder="YYYY-MM-DD" v-model="DateStart" required />
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
                        @click="closeModal"
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
/* eslint-disable camelcase */
/* VUE */
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/* VUEX */
import { State, Mutation } from 'vuex-class';

/* STATE */
import { IPassportState } from '@/store/modules/passport/types';

/* MODELS */
import { IPassport } from '@/models/sportsman';

/* NAMESPACE */
const namespace = 'passport';

@Options({
    name: 'PassportModal',
    components: {},
    data() {
        return {
            number: '',
            File: '',
            DateStart: '',
            issue: '',
            code: '',
        };
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        AddPassport() {
            const passport = {
                number: this.number,
                scan: this.File,
                date_start: this.DateStart,
                issue: this.issue,
                code: this.code,
            };
            this.postPassport(passport);

            this.closeModal();
        },
        SavePassport() {
            this.putPassport(this.passport);

            this.closeModal();
        },
        PassportFileUpload() {
            if (this.mode) {
                this.passport.scan = this.$refs.file.files[0];
            } else {
                this.File = this.$refs.file.files[0];
            }
        },
    },
})
export default class PassportModal extends Vue {
    @Prop({ default: undefined }) passport!: IPassport;
    @Prop({ default: true }) mode!: boolean;

    /* STATE */
    @State('passport')
    passportMap!: IPassportState;

    /* ACTION */
    @Mutation('postPassport', { namespace })
    postPassport: any;
    @Mutation('putPassport', { namespace })
    putPassport: any;
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

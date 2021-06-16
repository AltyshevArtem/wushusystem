<template>
    <div>
        <div class="container py-4">
            <div>
                <div class="pb-3 mb-4 d-flex justify-content-between">
                    <span class="fs-4"
                        >Информация о спортсмене:
                        <br />
                        <strong>
                            {{ FullName }}
                        </strong>
                    </span>
                    <div class="pb-3 mb-3">
                        <button
                            type="button"
                            @click="isConfirmModalVisible = true"
                            class="btn btn-danger"
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="card-group">
                    <div>
                        <img
                            class="card-img-top"
                            style="width: 15rem"
                            :src="SportsmanPhoto"
                            alt="Card image cap"
                        />
                    </div>
                    <div class="card mb-3" style="width: 18rem">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                ФИО: <strong>{{ FullName }}</strong>
                            </li>
                            <li class="list-group-item">
                                Пол: <strong>{{ Gender }}</strong>
                            </li>
                            <li class="list-group-item">
                                Дата рождения: <strong>{{ DateOfBirth }}</strong>
                            </li>
                            <li class="list-group-item">
                                Разряд: <strong>{{ Rank }}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Адрес прописки: <strong>{{ Address }}</strong>
                            </li>
                            <li class="list-group-item">
                                Фотография паспорта:
                                <a :href="SportsmanPhoto" class="card-link">Просмотр</a>
                            </li>
                            <li class="list-group-item">
                                РУСАДА:
                                <a :href="Rusada" class="card-link">Просмотр</a>
                            </li>
                            <li class="list-group-item">
                                Дуань/Цзи: <strong>{{ DuanCzi }}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Информация о регионе</h5>
                        <ul>
                            <li class="list-group-item">
                                Город: <strong>{{ RegionInfo }}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <confirmationModal
        v-if="isConfirmModalVisible"
        @closeModal="isConfirmModalVisible = false"
        @confirmModal="deleteSportsmanMethod"
    >
        <span> Вы уверены, что собираетесь удалить спортсмена?</span>
    </confirmationModal>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ISportsmanState } from '../store/modules/sportsman/types';
import confirmationModal from '../components/Modal/confirmationModal.vue';

const namespace = 'sportsman';

@Options({
    name: 'CardSportsman',
    components: {
        confirmationModal,
    },
    methods: {},
})
export default class Sportsman extends Vue {
    isConfirmModalVisible = false;

    /* STATE */
    @State('sportsman')
    sportsmanMap!: ISportsmanState;

    /* ACTION */
    @Action('getSportsman', { namespace })
    getSportsman: any;
    @Action('deleteSportsman', { namespace })
    deleteSportsman: any;

    /* GETTER */
    @Getter('FullName', { namespace })
    FullName: string | undefined;
    @Getter('Gender', { namespace })
    Gender: string | undefined;
    @Getter('SportsmanPhoto', { namespace })
    SportsmanPhoto: string | undefined;
    @Getter('DateOfBirth', { namespace })
    DateOfBirth: string | undefined;
    @Getter('Address', { namespace })
    Address: string | undefined;
    @Getter('FileMainDocument', { namespace })
    FileMainDocument: string | undefined;
    @Getter('Rusada', { namespace })
    Rusada: string | undefined;
    @Getter('Rank', { namespace })
    Rank: string | undefined;
    @Getter('DuanCzi', { namespace })
    DuanCzi: string | undefined;
    @Getter('RegionInfo', { namespace })
    RegionInfo: string | undefined;

    mounted(): void {
        this.getSportsman(this.$route.params.id);
    }

    deleteSportsmanMethod(): void {
        this.deleteSportsman(this.$route.params.id);
        this.isConfirmModalVisible = false;
        // TODO: нужно перерендерить таблицу спортсменов после редиректа
        this.$router.push('/sportsmans');
    }
}
</script>

<style scoped></style>

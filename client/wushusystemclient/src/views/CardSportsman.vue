<template>
    <main>
        <div class="container py-4">
            <header class="pb-3 mb-4 border-bottom">
                <span class="fs-4">{{ FullName }}</span>
            </header>
            <div class="p-5 mb-4 bg-light rounded-3">
                <div class="card mb-3" style="max-width: 1920px">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Информация спортсмене:</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        ФИО: <strong>{{ FullName }}</strong>
                                    </li>
                                    <li class="list-group-item">
                                        Пол: <strong>{{ Gender }}</strong>
                                    </li>
                                    <li class="list-group-item">
                                        Дата рождения: <strong> {{ DateOfBirth }}</strong>
                                    </li>
                                    <li class="list-group-item">
                                        Разряд: <strong> {{ Rank }} </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img
                                class="card-img-top"
                                style="width: 16rem"
                                :src="SportsmanPhoto"
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <!-- <h5 class="card-title">Информация о регионе:</h5> -->
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Город: <strong>{{ NameOfCity }}</strong>
                            </li>
                            <li class="list-group-item">
                                Край/Республика: <strong>{{ NameOfRegion }}</strong>
                            </li>
                            <li class="list-group-item">
                                Федеральный округ: <strong>{{ NameOfFederalRegion }}</strong>
                            </li>
                            <li class="list-group-item">
                                Адрес прописки: <strong>{{ Address }}</strong>
                            </li>
                            <li class="list-group-item">
                                Справка о регистрации по месту жительства:
                                <a :href="ConfirmAddress" class="card-link">Просмотр</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <!-- <h5 class="card-title">Документы:</h5> -->
                        <ul class="list-group list-group-flush">
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
                            <li class="list-group-item">
                                Справка об отсутствии контактов с инфекционными больными:
                                <a :href="CovidContact" class="card-link">Просмотр</a>
                            </li>
                            <li class="list-group-item">
                                ПЦР-тест COVID-19:
                                <a :href="CovidTest" class="card-link">Просмотр</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { State, Action, Getter } from 'vuex-class';
import { ISportsmanState } from '../store/modules/sportsman/types';

const namespace = 'sportsman';

@Options({
    name: 'CardSportsman',
})
export default class Sportsman extends Vue {
    @State('sportsman')
    sportsmanMap!: ISportsmanState;
    @Action('getSportsman', { namespace })
    getSportsman: any;
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
    @Getter('NameOfCity', { namespace })
    NameOfCity: string | undefined;
    @Getter('NameOfRegion', { namespace })
    NameOfRegion: string | undefined;
    @Getter('NameOfFederalRegion', { namespace })
    NameOfFederalRegion: string | undefined;
    @Getter('ConfirmAddress', { namespace })
    ConfirmAddress: string | undefined;
    @Getter('CovidTest', { namespace })
    CovidTest: string | undefined;
    @Getter('CovidContact', { namespace })
    CovidContact: string | undefined;

    mounted(): void {
        this.getSportsman(this.$route.params.id);
    }
}
</script>

<style scoped></style>

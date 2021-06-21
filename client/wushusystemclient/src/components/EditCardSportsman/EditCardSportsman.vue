<template>
    <ul>
        <li>
            Фамилия: <input v-model="Name">
        </li>
        <li>
            Имя: <input v-model="Surname">
        </li>
        <li>
            Отчество: <input v-model="Patronymic">
        </li>
        <!-- Селектор для пола -->
        <li>
            Пол: <input v-model="Gender">
        </li>
        <!-- Как сделать выбор даты? -->
        <li>
            Дата рождения: <input v-model="DateOfBirth">
        </li>
        <!-- Селектор для рангов -->
        <li>
            Разряд: <input v-model="Rank">
        </li>
        <!-- Селектор для ФО -->
        <li>
            Федеральный округ: <input v-model="NameOfFederalRegion">
        </li>
        <!-- Селектор для краёв/республик -->
        <li>
            Край/Республика: <input v-model="NameOfRegion">
        </li>
        <!-- Селектор для городов с учетом фильтров краёв/республик-->
        <li>
            Город: <input v-model="NameOfCity">
        </li>
        <li>
            Адрес прописки: <input v-model="Address">
        </li>
        <!-- Как сделать загрузку фотки паспорта?  -->
        <li>
            Фотография паспорта:
            <a :href="SportsmanPhoto">Просмотр</a>
        </li>
        <!-- Как сделать загрузку дока РУСАДА -->
        <li>
            РУСАДА:
            <a :href="Rusada">Просмотр</a>
        </li>
        <!-- Селектор для дуаней -->
        <li>
            Дуань/Цзи: <input v-model="DuanCzi">
        </li>
        <!-- Загрузка справки -->
        <li>
            Справка об отсутствии контактов с инфекционными больными:
            <a :href="CovidContact">Просмотр</a>
        </li>
        <!-- Загрузка дока -->
        <li>
            ПЦР-тест COVID-19:
            <a :href="CovidTest">Просмотр</a>
        </li>
        <!-- А также поля
            Фото спортсмена
            Док с пропиской
            Доверенность на паспорт/свидетельство
            Полис омс
            Тренер
            Клуб
            Страховки
            Ранга
            ПЦР теста
            Доверенность родителей
            Справка о школе
        -->
    </ul>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Getter } from 'vuex-class';

const namespace = 'sportsman';

@Options({
    name: 'EditCardSportsman',
    methods: {},
})


export default class Sportsman extends Vue {
    /* GETTER */
    @Getter('Name', { namespace })
    Name: string | undefined;
    @Getter('Surname', { namespace })
    Surname: string | undefined;
    @Getter('Patronymic', { namespace })
    Patronymic: string | undefined;
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
}
</script>

<style scoped>

</style>

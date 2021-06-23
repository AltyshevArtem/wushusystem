<template>
    <ul>
        <li>Фамилия: <input v-model="Name" /></li>
        <li>Имя: <input v-model="Surname" /></li>
        <li>Отчество: <input v-model="Patronymic" /></li>
        <li>Пол: <input v-model="Gender" /></li>
        <li>
            Дата рождения:
            <Datepicker
                v-model="SelectedDate"
                :locale="locale"
                :upperLimit="to"
                :lowerLimit="from"
            />
        </li>
        <li>Разряд: <input v-model="Rank" /></li>
        <li>Федеральный округ: <input v-model="NameOfFederalRegion" /></li>
        <li>Край/Республика: <input v-model="NameOfRegion" /></li>
        <li>Город: <input v-model="NameOfCity" /></li>
        <li>Адрес прописки: <input v-model="Address" /></li>
        <li>
            Фотография паспорта:
            <input
                type="file"
                id="PassportFile"
                ref="PassportFile"
                v-on:change="PassportFileUpload()"
            />
        </li>
        <li>
            РУСАДА:
            <input
                type="file"
                id="RusadaFile"
                ref="RusadaFile"
                v-on:change="RusadaFileUpload()" />
        </li>
        <li>Дуань/Цзи: <input v-model="DuanCzi" /></li>
        <li>
            Справка об отсутствии контактов с инфекционными больными:
            <input
                type="file"
                id="CovidContactFile"
                ref="CovidContactFile"
                v-on:change="CovidContactFileUpload()"
            />
        </li>
        <li>
            ПЦР-тест COVID-19:
            <input
                type="file"
                id="CovidTestFile"
                ref="CovidTestFile"
                v-on:change="CovidTestFileUpload()"
            />
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
            Доверенность родителей
            Справка о школе
        -->
    </ul>
</template>

<script lang="ts">
import Datepicker from 'vue3-datepicker';
import { Vue, Options } from 'vue-class-component';
import { Getter } from 'vuex-class';
const namespace = 'sportsman';
@Options({
    name: 'EditCardSportsman',
    components: { Datepicker },
    methods: {
        PassportFileUpload() {
            this.passportFile = this.$refs.PassportFile.files[0];
        },
        RusadaFileUpload() {
            this.RusadaFile = this.$refs.RusadaFile.files[0];
        },
        CovidContactFileUpload() {
            this.CovidContactFile = this.$refs.CovidContactFile.files[0];
        },
        CovidTestFileUpload() {
            this.CovidTestFile = this.$refs.CovidTestFile.files[0];
        },
    },
    data() {
        return {
            PassportFile: '',
            RusadaFile: '',
            CovidContactFile: '',
            CovidTestFile: '',
            SelectedDate: '',
        };
    },
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

<style scoped></style>

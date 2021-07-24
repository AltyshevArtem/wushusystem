<template>
    <ul>
        <li>Фамилия: <input /></li>
        <li>Имя: <input /></li>
        <li>Отчество: <input /></li>
        <li>
            Фото спортсмена
            <input type="file" id="PhotoFile" v-on:change="PhotoFileUpload()" />
        </li>
        <li>Пол: <SelectGender mode="single" /></li>
        <li>
            Дата рождения:
            <Datepicker
                v-model="SelectedDate"
                :locale="locale"
                :upperLimit="to"
                :lowerLimit="from"
            />
        </li>
        <!-- Селектор тренеров -->
        <li>Тренер: <input v-model="Trainer" /></li>
        <li>Разряд: <SelectRank mode="single" /></li>
        <!-- Селектор дуаней -->
        <li>Дуань/Цзи: <input v-model="DuanCzi" /></li>

        <!-- Новый блок -->
        <!-- Селектор стран -->
        <li>Страна: <input /></li>
        <!-- Селектор Фо -->
        <li>Федеральный округ: <input /></li>
        <!-- Селектор краёв -->
        <li>Край/Республика: <input /></li>
        <!-- Селектор городов -->
        <li>Город: <input /></li>
        <!-- Селектор клубов -->
        <li>Клуб: <input v-model="DuanCzi" /></li>
        <li>Адрес прописки: <input /></li>

        <!-- Модалка паспорта -->
        <li>Паспорт <button>Добавить</button></li>
        <!-- Модалка паспорта -->
        <li>Свидетельство о рождении <button>Добавить</button></li>
        <!-- Модалка доверенности паспорта -->
        <li>Доверенность на паспорт <button>Добавить</button></li>
        <li>
            Подтверждение прописки
            <input
                type="file"
                id="ConfirmAddressFile"
                ref="ConfirmAddressFile"
                v-on:change="ConfirmAddressFileUpload()"
            />
        </li>
        <!-- Модалка полиса ОМС -->
        <li>Полис ОМС<button>Добавить</button></li>
        <!-- Модалка страховки ОМС -->
        <li>Страховка<button>Добавить</button></li>
        <li>
            Сертификат РУСАДА:
            <input type="file" id="RusadaFile" ref="RusadaFile" v-on:change="RusadaFileUpload()" />
        </li>
        <li>
            Справка об обучении в школе:
            <input type="file" id="SchoolFile" ref="SchoolFile" v-on:change="SchoolFileUpload()" />
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
            Доверенность родителя:
            <input
                type="file"
                id="CovidContactFile"
                ref="CovidContactFile"
                v-on:change="CovidContactFileUpload()"
            />
        </li>
    </ul>
</template>

<script lang="ts">
import Datepicker from 'vue3-datepicker';
import { Vue, Options } from 'vue-class-component';

/* COMPONENTS */
import SelectGender from '../Select/SelectGender.vue';
import SelectRank from '../Select/SelectRank.vue';

//const namespace = 'sportsman';
@Options({
    name: 'AddCardSportsman',
    methods: {
        ConfirmAddressFileUpload() {
            this.ConfirmAddress = this.$refs.ConfirmAddress.files[0];
        },
        RusadaFileUpload() {
            this.RusadaFile = this.$refs.RusadaFile.files[0];
        },
        SchoolFileUpload() {
            this.SchoolFile = this.$refs.SchoolFile.files[0];
        },
        CovidTestFileUpload() {
            this.CovidTestFile = this.$refs.CovidTestFile.files[0];
        },
        CovidContactFileUpload() {
            this.CovidContactFile = this.$refs.CovidContactFile.files[0];
        },
    },
    data() {
        return {
            ConfirmAddress: '',
            RusadaFile: '',
            SchoolFile: '',
            CovidTestFile: '',
            CovidContactFile: '',
            SelectedDate: '',
        };
    },
    components: {
        SelectGender,
        SelectRank,
        Datepicker,
    },
})
export default class Sportsman extends Vue {}
</script>

<style scoped></style>

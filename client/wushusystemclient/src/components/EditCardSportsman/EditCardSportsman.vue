<template>
    <ul>
        <li>Фамилия: <input v-model="Name" /></li>
        <li>Имя: <input v-model="Surname" /></li>
        <li>Отчество: <input v-model="Patronymic" /></li>
        <li>
            Фото спортсмена
            <input type="file" id="PhotoFile" ref="PhotoFile" v-on:change="PhotoFileUpload()" />
        </li>
        <li>Пол: <SelectGender mode="single" /></li>
        <!-- Селектор нужен-->
        <li>Тренер: <input v-model="Trainer" /></li>
        <li>
            Дата рождения:
            <Datepicker v-model="SelectedDate" />
        </li>
        <li>Разряд: <SelectRank mode="single" /></li>
        <!-- Селектор для ФО -->
        <li>Федеральный округ: <input v-model="NameOfFederalRegion" /></li>
        <!-- Селектор для краёв/республик -->
        <li>Край/Республика: <input v-model="NameOfRegion" /></li>
        <!-- Селектор для городов с учетом фильтров краёв/республик-->
        <li>Город: <input v-model="NameOfCity" /></li>
        <li>Адрес прописки: <input v-model="Address" /></li>
        <!-- Как сделать загрузку фотки паспорта?  -->
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
            <input type="file" id="RusadaFile" ref="RusadaFile" v-on:change="RusadaFileUpload()" />
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
        <li>
            <template v-if="!insuranceMap.insurance">
                Страховой полис:
                <button
                    @click="
                        {
                            isModalInsurance = true;
                            isEdit = false;
                        }
                    "
                >
                    Добавить новый страховой полис
                </button>
            </template>
            <template v-else>
                Страховой полис:
                <button
                    @click="
                        {
                            isModalInsurance = true;
                            isEdit = true;
                        }
                    "
                >
                    Редактировать страховой полис
                </button>
            </template>
            {{ insuranceMap.insurance }}
            <InsuranceModal
                v-if="isModalInsurance"
                :mode="isEdit"
                :insurance="insuranceMap.insurance"
                @closeModal="isModalInsurance = false"
            />
        </li>
        <li>
            <template v-if="!birthCertificateMap.birthCertificate">
                Свидетельство о рождении:
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
            </template>
            <template v-else>
                Свидетельство о рождении:
                <button
                    @click="
                        {
                            isModalBirthCertificate = true;
                            isEdit = true;
                        }
                    "
                >
                    Редактировать свидетельство о рождении
                </button>
            </template>
            {{ birthCertificateMap.birthCertificate }}
            <BirthCertificateModal
                v-if="isModalBirthCertificate"
                :mode="isEdit"
                :birthCertificate="birthCertificateMap.birthCertificate"
                @closeModal="isModalBirthCertificate = false"
            />
        </li>
        <li>
            <template v-if="!omsMap.oms">
                Полис ОМС:
                <button
                    @click="
                        {
                            isModalOms = true;
                            isEdit = false;
                        }
                    "
                >
                    Добавить новый полис ОМС
                </button>
            </template>
            <template v-else>
                Полис ОМС:
                <button
                    @click="
                        {
                            isModalOms = true;
                            isEdit = true;
                        }
                    "
                >
                    Редактировать полис ОМС
                </button>
            </template>
            {{ omsMap.oms }}
            <OmsModal
                v-if="isModalOms"
                :mode="isEdit"
                :oms="omsMap.oms"
                @closeModal="isModalOms = false"
            />
        </li>
        <li>
            <template v-if="!passportMap.passport">
                Паспорт:
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
            </template>
            <template v-else>
                Паспорт:
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
            </template>
            {{ passportMap.passport }}
            <PassportModal
                v-if="isModalPassport"
                :mode="isEdit"
                :passport="passportMap.passport"
                @closeModal="isModalPassport = false"
            />
        </li>
        <li>
            <template v-if="!proxyMap.proxy">
                Прокси:
                <button
                    @click="
                        {
                            isModalProxy = true;
                            isEdit = false;
                        }
                    "
                >
                    Добавить новый прокси
                </button>
            </template>
            <template v-else>
                Прокси:
                <button
                    @click="
                        {
                            isModalProxy = true;
                            isEdit = true;
                        }
                    "
                >
                    Редактировать прокси
                </button>
            </template>
            {{ proxyMap.proxy }}
            <ProxyModal
                v-if="isModalProxy"
                :mode="isEdit"
                :passport="proxyMap.proxy"
                @closeModal="isModalProxy = false"
            />
        </li>
        <!-- А также поля
            Док с пропиской -> ещё нету в спортсменах
            Доверенность на паспорт/свидетельство -> ещё нету в спортсменах
            Полис омс -> ещё нету в спортсменах
            Клуб
            Страховки
            Ранга
            Доверенность родителей
            Справка о школе
        -->
    </ul>
</template>

<script lang="ts">
/* VUE */
import { Vue, Options } from 'vue-class-component';

/* VUEX */
import { State, Action, Getter } from 'vuex-class';

/* STATE */
import { ISportsmanState } from '@/store/modules/sportsman/types';
import { IInsuranceState } from '@/store/modules/insurance/types';
import { IBirthCertificateState } from '@/store/modules/birth_certificate/types';
import { IOmsState } from '@/store/modules/oms/types';
import { IPassportState } from '@/store/modules/passport/types';
import { IProxyDocState } from '@/store/modules/proxy/types';

/* COMPONENTS */
import Datepicker from 'vue3-datepicker';
import SelectGender from '../Select/SelectGender.vue';
import SelectRank from '../Select/SelectRank.vue';
import InsuranceModal from '../Modal/Documents/InsuranceModal.vue';
import BirthCertificateModal from '../Modal/Documents/BirthCertificateModal.vue';
import OmsModal from '../Modal/Documents/OmsModal.vue';
import PassportModal from '../Modal/Documents/PassportModal.vue';
import ProxyModal from '../Modal/Documents/ProxyModal.vue';

/* NAMESPACE */
const namespace = 'sportsman';

@Options({
    name: 'EditCardSportsman',
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
        PhotoFileUpload() {
            this.PassportFile = this.$refs.PhotoFile.files[0];
        },
    },
    data() {
        return {
            PhotoFile: '',
            PassportFile: '',
            RusadaFile: '',
            CovidContactFile: '',
            CovidTestFile: '',
            SelectedDate: '',
        };
    },
    components: {
        SelectGender,
        SelectRank,
        Datepicker,
        InsuranceModal,
        BirthCertificateModal,
        OmsModal,
        PassportModal,
        ProxyModal,
    },
})
export default class EditCardSportsman extends Vue {
    /* MODAL */
    isEdit = false;
    isModalInsurance = false;
    isModalBirthCertificate = false;
    isModalOms = false;
    isModalPassport = false;
    isModalProxy = false;

    /* STATE */
    @State('sportsman')
    sportsmanMap!: ISportsmanState;
    @State('insurance')
    insuranceMap!: IInsuranceState;
    @State('birth_certificate')
    birthCertificateMap!: IBirthCertificateState;
    @State('oms')
    omsMap!: IOmsState;
    @State('passport')
    passportMap!: IPassportState;
    @State('proxy')
    proxyMap!: IProxyDocState;

    /* ACTION */
    @Action('getSportsman', { namespace })
    getSportsman: any;

    /* GETTER */
    @Getter('Name', { namespace })
    Name: string | undefined;
    @Getter('Surname', { namespace })
    Surname: string | undefined;
    @Getter('Patronymic', { namespace })
    Patronymic: string | undefined;
    @Getter('Gender', { namespace })
    Gender: string | undefined;
    @Getter('Trainer', { namespace })
    Trainer: string | undefined;
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

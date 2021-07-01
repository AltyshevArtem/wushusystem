import { GetterTree } from 'vuex';
import { ISportsmanState } from './types';

export const getters: GetterTree<ISportsmanState, null> = {
    Name(state): string {
        const { sportsman } = state;
        const name = (sportsman && sportsman.name) || ''
        return `${name}`;
    },
    Surname(state): string {
        const { sportsman } = state;
        const surname = (sportsman && sportsman.surname) || ''
        return `${surname}`;
    },
    Patronymic(state): string {
        const { sportsman } = state;
        const patronymic = (sportsman && sportsman.patronymic) || '';
        return `${patronymic}`;
    },
    FullName(state): string {
        const { sportsman } = state;
        const name = (sportsman && sportsman.name) || '';
        const surname = (sportsman && sportsman.surname) || '';
        const patronymic = (sportsman && sportsman.patronymic) || '';
        return `${surname} ${name} ${patronymic}`;
    },
    Gender(state): string {
        const { sportsman } = state;
        const gender = (sportsman && sportsman.gender) || '';
        return `${gender}`;
    },
    SportsmanPhoto(state): string {
        const { sportsman } = state;
        const src = (sportsman && sportsman.photo) || '';
        return `${src}`;
    },
    DateOfBirth(state): string {
        const { sportsman } = state;
        const date_of_birth = (sportsman && sportsman.date_of_birth) || '';
        return `${date_of_birth}`;
    },
    Trainer(state): string {
        const { sportsman } = state;
        const trainer_name = (sportsman && sportsman.trainer?.name) || '';
        const trainer_surname = (sportsman && sportsman.trainer?.surname) || '';
        const trainer_patronymic = (sportsman && sportsman.trainer?.patronymic) || '';
        return `${trainer_name} ${trainer_surname} ${trainer_patronymic}`;
    },
    Address(state): string {
        const { sportsman } = state;
        const address = (sportsman && sportsman.address) || '';
        return `${address}`;
    },
    FileMainDocument(state): string {
        const { sportsman } = state;
        const file_main_document = (sportsman && sportsman.file_main_document) || '';
        return `${file_main_document}`;
    },
    Rusada(state): string {
        const { sportsman } = state;
        const rusada = (sportsman && sportsman.rusada) || '';
        return `${rusada}`;
    },
    Rank(state): string {
        const { sportsman } = state;
        const rank = (sportsman && sportsman.rank) || '';
        return `${rank}`;
    },
    DuanCzi(state): string {
        const { sportsman } = state;
        const duan_czi = (sportsman && sportsman.duan_czi) || '';
        return `${duan_czi}`;
    },
    NameOfCity(state): string {
        const { sportsman } = state;
        const city = (sportsman && sportsman.city?.name_of_city) || '';

        return `${city}`;
    },
    NameOfRegion(state): string {
        const { sportsman } = state;
        const name_of_region = (sportsman && sportsman.city?.name_of_region?.name_of_region) || '';

        return `${name_of_region}`;
    },
    NameOfFederalRegion(state): string {
        const { sportsman } = state;
        const name_of_federal_region =
            (sportsman &&
                sportsman.city?.name_of_region?.name_of_federal_region?.name_of_federal_region) ||
            '';

        return `${name_of_federal_region}`;
    },
    ConfirmAddress(state): string {
        const { sportsman } = state;
        const confirm_address = (sportsman && sportsman.confirm_address) || '';
        return `${confirm_address}`;
    },
    CovidTest(state): string {
        const { sportsman } = state;
        const covid_test = (sportsman && sportsman.covid_test) || '';
        return `${covid_test}`;
    },
    CovidContact(state): string {
        const { sportsman } = state;
        const covid_contact = (sportsman && sportsman.covid_contact) || '';
        return `${covid_contact}`;
    },
};

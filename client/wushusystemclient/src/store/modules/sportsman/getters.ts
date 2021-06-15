import { sportsman } from './index';
import { GetterTree } from 'vuex';
import { ISportsmanState } from './types';

export const getters: GetterTree<ISportsmanState, null> = {
    fullName(state): string {
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
        // const sportsman_photo = (sportsman && sportsman.photo) || '';
        return `${src}`;
    },
    DateOfBirth(state): string {
        const { sportsman } = state;
        const date_of_birth = (sportsman && sportsman.date_of_birth) || '';
        return `${date_of_birth}`;
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
    RegionInfo(state): string {
        const { sportsman } = state;
        const city = (sportsman && sportsman.city?.name_of_city) || '';
        const name_of_region = (sportsman && sportsman.city?.name_of_region?.name_of_region) || '';

        return `${city} ${name_of_region}`;
    },
};

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
};

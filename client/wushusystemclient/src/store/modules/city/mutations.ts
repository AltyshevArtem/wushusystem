import { MutationTree } from 'vuex';
import { ICity } from './types';

export const mutations: MutationTree<ICity> = {
    getCity(state, payload: Array<string>) {
        state.error = false;
        state.listCity = payload;
    },
    getCityError(state) {
        state.error = true;
        state.listCity = [];
    },
};

import { MutationTree } from 'vuex';
import { ICityClub } from './types';

export const mutations: MutationTree<ICityClub> = {
    getCity(state, payload: Array<string>) {
        state.error = false;
        state.listCity = payload;
    },
    getCityError(state) {
        state.error = true;
        state.listCity = [];
    },
};

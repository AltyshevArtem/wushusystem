import { MutationTree } from 'vuex';
import { ICityList } from './types';

export const mutations: MutationTree<ICityList> = {
    getCity(state, payload: Array<string>) {
        state.error = false;
        state.listCity = payload;
    },
    getCityError(state) {
        state.error = true;
        state.listCity = [];
    },
};

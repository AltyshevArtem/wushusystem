import { MutationTree } from 'vuex';
import { IDuanCzi } from './types';

export const mutations: MutationTree<IDuanCzi> = {
    getDuanCzi(state, payload: Array<string>) {
        state.error = false;
        state.listDuanCzi = payload;
    },
    getDuanCziError(state) {
        state.error = true;
        state.listDuanCzi = [];
    },
};

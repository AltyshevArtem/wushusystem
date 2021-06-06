import { MutationTree } from 'vuex';
import { IDuanCziList } from './types';

export const mutations: MutationTree<IDuanCziList> = {
    getDuanCzi(state, payload: Array<string>) {
        state.error = false;
        state.listDuanCzi = payload;
    },
    getDuanCziError(state) {
        state.error = true;
        state.listDuanCzi = [];
    },
};

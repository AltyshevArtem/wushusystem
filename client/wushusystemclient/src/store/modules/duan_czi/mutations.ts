import { MutationTree } from 'vuex';
import { IDuanCziState } from './types';
import { IDuanCzi } from '@/models/duan_czi';

export const mutations: MutationTree<IDuanCziState> = {
    getDuanCzi(state, payload: Array<IDuanCzi>) {
        state.error = false;
        state.duan_czi_list = payload;
    },
    getDuanCziError(state) {
        state.error = true;
        state.duan_czi_list = [];
    },
};

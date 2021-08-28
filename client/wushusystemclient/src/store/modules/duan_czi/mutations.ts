/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IDuanCziState } from './types';

/* MODELS */
import { IDuanCzi } from '@/models/duan_czi';

export const mutations: MutationTree<IDuanCziState> = {
    setDuanCzi(state, payload: Array<IDuanCzi>) {
        state.error = false;
        state.duan_czi_list = payload;
    },
    errorDuanCzi(state) {
        state.error = true;
        state.duan_czi_list = [];
    },
};

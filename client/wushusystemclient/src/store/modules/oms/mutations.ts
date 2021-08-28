/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IOmsState } from './types';

/* MODELS */
import { IOms } from '@/models/sportsman';

export const mutations: MutationTree<IOmsState> = {
    setOMS(state, payload: IOms) {
        state.oms = payload;
        state.error = false;
    },
    errorOMS(state) {
        state.oms = undefined;
        state.error = true;
    },
    deleteOMS(state) {
        state.oms = undefined;
        state.error = false;
    },
};

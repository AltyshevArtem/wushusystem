/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IRegionState } from './types';

/* MODELS */
import { IRegion } from '@/models/city';

export const mutations: MutationTree<IRegionState> = {
    setRegion(state, payload: Array<IRegion>) {
        state.error = false;
        state.regions = payload;
    },
    errorRegion(state) {
        state.error = true;
        state.regions = [];
    },
};

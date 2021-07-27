import { MutationTree } from 'vuex';
import { IRegionState } from './types';
import { IRegion } from '@/models/city';

export const mutations: MutationTree<IRegionState> = {
    /* GET */
    getRegion(state, payload: Array<IRegion>) {
        state.error = false;
        state.region_list = payload;
    },
    getRegionError(state) {
        state.error = true;
        state.region_list = [];
    },
};

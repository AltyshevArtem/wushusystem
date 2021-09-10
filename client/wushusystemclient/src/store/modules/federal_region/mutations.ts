/* eslint-disable camelcase */
/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IFederalRegionState } from './types';

/* MODELS */
import { IFederalRegion } from '@/models/city';

export const mutations: MutationTree<IFederalRegionState> = {
    setFederalRegion(state, payload: Array<IFederalRegion>) {
        state.error = false;
        state.federal_region_list = payload;
    },
    errorFederalRegion(state) {
        state.error = true;
        state.federal_region_list = [];
    },
};

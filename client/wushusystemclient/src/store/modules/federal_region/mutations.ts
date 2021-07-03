import { MutationTree } from 'vuex';
import { IFederalRegionState } from './types';
import { IFederalRegion } from "@/models/city";

export const mutations: MutationTree<IFederalRegionState> = {
    getFederalRegion(state, payload: Array<IFederalRegion>) {
        state.error = false;
        state.federal_region_list = payload;
    },
    getFederalRegionError(state) {
        state.error = true;
        state.federal_region_list = [];
    },
};

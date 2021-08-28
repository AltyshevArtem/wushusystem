/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IFederalRegionState } from './types';

export const state: IFederalRegionState = {
    federal_region_list: [],
    selectedFederalRegion: undefined,
    error: false,
};

export const federal_region: Module<IFederalRegionState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

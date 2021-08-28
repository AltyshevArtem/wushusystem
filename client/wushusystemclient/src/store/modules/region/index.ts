/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IRegionState } from './types';

export const state: IRegionState = {
    regions: [],
    selectedRegion: undefined,
    error: false,
};

export const region: Module<IRegionState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
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

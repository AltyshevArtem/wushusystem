import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IRegionState } from './types';

export const state: IRegionState = {
    region_list: [],
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

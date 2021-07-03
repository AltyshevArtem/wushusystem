import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IRankState } from './types';

export const state: IRankState = {
    ranks: [],
    selectedRank: undefined,
    error: false,
};

export const rank: Module<IRankState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

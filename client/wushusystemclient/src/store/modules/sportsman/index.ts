import { Module } from 'vuex';
// import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { SportsmanState } from './types';

export const state: SportsmanState = {
    sportsmans: '',
    error: false,
};

export const sportsman: Module<SportsmanState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

import { Module } from 'vuex';
// import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { SportsmanState } from './types';

export const state: SportsmanState = {
    sportsmans: '',
    error: false,
};

const namespaced = true;

export const Sportsman: Module<SportsmanState, null> = {
    namespaced,
    state,
    actions,
    mutations,
};

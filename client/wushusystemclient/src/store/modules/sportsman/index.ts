import { Module } from 'vuex';
// import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { listSportsmanState } from './types';

export const state: listSportsmanState = {
    listSportsmans: '',
    error: false,
};

export const sportsman: Module<listSportsmanState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

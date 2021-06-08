import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ISportsmanState } from './types';

export const state: ISportsmanState = {
    sportsman: undefined,
    error: false,
};

export const sportsman: Module<ISportsmanState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

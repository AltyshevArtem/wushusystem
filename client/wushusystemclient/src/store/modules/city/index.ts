import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ICityState } from './types';

export const state: ICityState = {
    cities: [],
    selectedCity: undefined,
    error: false,
};

export const city: Module<ICityState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

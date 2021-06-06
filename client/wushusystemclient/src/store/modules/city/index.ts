import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ICityClub } from './types';

export const state: ICityClub = {
    listCity: [],
    value: undefined,
    error: false,
};

export const city: Module<ICityClub, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

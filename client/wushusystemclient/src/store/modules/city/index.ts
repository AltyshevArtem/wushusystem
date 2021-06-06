import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ICity } from './types';

export const state: ICity = {
    listCity: [],
    value: undefined,
    error: false,
};

export const city: Module<ICity, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

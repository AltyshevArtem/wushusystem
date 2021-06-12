import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ICityList } from './types';

export const state: ICityList = {
    listCity: [],
    valueCity: undefined,
    valueFo: undefined,
    error: false,
};

export const city: Module<ICityList, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

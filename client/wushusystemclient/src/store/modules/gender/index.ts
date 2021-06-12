import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IGenderList } from './types';

export const state: IGenderList = {
    listGender: [],
    valueGender: undefined,
    error: false,
};

export const gender: Module<IGenderList, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

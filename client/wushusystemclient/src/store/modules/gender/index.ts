import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IGenderState } from './types';

export const state: IGenderState = {
    genders: [],
    selectedGender: undefined,
    error: false,
};

export const gender: Module<IGenderState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IClub } from './types';

export const state: IClub = {
    listClub: [],
    value: undefined,
    error: false,
};

export const club: Module<IClub, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

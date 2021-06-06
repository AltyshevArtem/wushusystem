import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IDuanCzi } from './types';

export const state: IDuanCzi = {
    listDuanCzi: [],
    value: undefined,
    error: false,
};

export const duan_czi: Module<IDuanCzi, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IDuanCziState } from './types';

export const state: IDuanCziState = {
    duan_czi_list: [],
    selectedDuanCzi: undefined,
    error: false,
};

export const duan_czi: Module<IDuanCziState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

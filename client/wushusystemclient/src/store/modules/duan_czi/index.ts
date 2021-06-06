import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IDuanCziList } from './types';

export const state: IDuanCziList = {
    listDuanCzi: [],
    value: undefined,
    error: false,
};

export const duan_czi: Module<IDuanCziList, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

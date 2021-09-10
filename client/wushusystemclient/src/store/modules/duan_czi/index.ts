/* eslint-disable camelcase */
/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
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

/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { ISportsmanState } from './types';

export const state: ISportsmanState = {
    sportsman: undefined,
    error: false,
};

export const sportsman: Module<ISportsmanState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

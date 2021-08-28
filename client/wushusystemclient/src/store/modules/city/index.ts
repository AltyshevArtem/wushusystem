/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { ICityState } from './types';

export const state: ICityState = {
    cities: [],
    selectedCity: undefined,
    error: false,
};

export const city: Module<ICityState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

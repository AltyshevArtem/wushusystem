/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IRankState } from './types';

export const state: IRankState = {
    ranks: [],
    selectedRank: undefined,
    error: false,
};

export const rank: Module<IRankState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

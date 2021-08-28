/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
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

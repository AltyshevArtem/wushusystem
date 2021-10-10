/* VUEX */
import { Module } from 'vuex';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IPassportState } from './types';

export const state: IPassportState = {
    passport: undefined,
    error: false,
};

export const passport: Module<IPassportState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

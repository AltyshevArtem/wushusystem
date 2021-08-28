/* VUEX */
import { Module } from 'vuex';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IInsuranceState } from './types';

export const state: IInsuranceState = {
    insurance: undefined,
    error: false,
};

export const insurance: Module<IInsuranceState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

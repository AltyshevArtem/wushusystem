import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
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

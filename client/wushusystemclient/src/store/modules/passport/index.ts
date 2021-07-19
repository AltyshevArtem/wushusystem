import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
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

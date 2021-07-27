import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { IOmsState } from './types';

export const state: IOmsState = {
    oms: undefined,
    error: false,
};

export const oms: Module<IOmsState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

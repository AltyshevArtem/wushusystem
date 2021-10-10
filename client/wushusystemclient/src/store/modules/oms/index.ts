/* VUEX */
import { Module } from 'vuex';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
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

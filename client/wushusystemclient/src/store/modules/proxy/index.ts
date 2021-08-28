/* VUEX */
import { Module } from 'vuex';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IProxyDocState } from './types';

export const state: IProxyDocState = {
    proxy: undefined,
    error: false,
};

export const proxy: Module<IProxyDocState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

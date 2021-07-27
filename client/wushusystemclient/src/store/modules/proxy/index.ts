import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
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

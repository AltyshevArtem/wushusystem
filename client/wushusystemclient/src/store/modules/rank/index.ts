import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IRankList } from './types';

export const state: IRankList = {
    listRank: [],
    value: undefined,
    error: false,
};

export const rank: Module<IRankList, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

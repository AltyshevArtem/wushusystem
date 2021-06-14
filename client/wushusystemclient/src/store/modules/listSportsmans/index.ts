import { Module } from 'vuex';
// import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IListSportsmansState } from './types';

export const state: IListSportsmansState = {
    listSportsmans: '',
    page: 1,
    search: '',
    error: false,
};

export const listSportsmans: Module<IListSportsmansState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};


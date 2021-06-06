import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IClubList } from './types';

export const state: IClubList = {
    listClub: [],
    value: undefined,
    error: false,
};

export const club: Module<IClubList, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

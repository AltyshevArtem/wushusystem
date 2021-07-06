import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IClubState } from './types';

export const state: IClubState = {
    clubs: [],
    selectedClub: undefined,
    error: false,
};

export const club: Module<IClubState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

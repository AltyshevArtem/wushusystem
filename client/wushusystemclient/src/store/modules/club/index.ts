/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
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

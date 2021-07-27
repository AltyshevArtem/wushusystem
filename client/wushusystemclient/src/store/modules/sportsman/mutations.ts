import { sportsman } from './index';
import { MutationTree } from 'vuex';
import { ISportsmanState } from './types';
import { ISportsman } from '@/models/sportsman';

export const mutations: MutationTree<ISportsmanState> = {
    /* PUT */
    putSportsman(state, payload: ISportsman) {
        state.sportsman = payload;
        state.error = false;
    },
    putSportsmanError(state) {
        state.error = true;
    },
    /* DELETE */
    deleteSportsman(state) {
        state.error = false;
    },
    deleteSportsmanError(state) {
        state.error = true;
    },
    /* GET */
    getSportsman(state, payload: ISportsman) {
        state.error = false;
        state.sportsman = payload;
    },
    getSportsmanError(state) {
        state.error = true;
        state.sportsman = undefined;
    },
};

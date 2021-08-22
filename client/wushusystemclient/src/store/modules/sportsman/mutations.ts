import { MutationTree } from 'vuex';
import { ISportsmanState } from './types';
import { ISportsman } from '@/models/sportsman';

export const mutations: MutationTree<ISportsmanState> = {
    //TODO: Мутации это не запросы, а действия со стейтом(нужно все переделать)
    /* POST */
    postSportsman(state, payload: ISportsman) {
        state.sportsman = payload;
        state.error = false;
    },
    postSportsmanError(state) {
        state.sportsman = undefined;
        state.error = true;
    },
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

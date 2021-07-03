import { MutationTree } from 'vuex';
import { ISportsmanState } from './types';
import { ISportsman } from '@/models/sportsman';

export const mutations: MutationTree<ISportsmanState> = {
    getSportsman(state, payload: ISportsman) {
        state.error = false;
        state.sportsman = payload;
    },
    getSportsmanError(state) {
        state.error = true;
        state.sportsman = undefined;
    },
    deleteSportsman(state) {
        state.error = false;
    },
    deleteSportsmanError(state) {
        state.error = true;
    }
};

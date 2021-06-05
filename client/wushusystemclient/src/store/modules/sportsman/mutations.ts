import { MutationTree } from 'vuex';
import { ISportsmanState, ISportsman } from './types';

export const mutations: MutationTree<ISportsmanState> = {
    getSportsman(state, payload: ISportsman) {
        state.error = false;
        state.sportsman = payload;
    },
    getSportsmanError(state) {
        state.error = true;
        state.sportsman = undefined;
    },
};

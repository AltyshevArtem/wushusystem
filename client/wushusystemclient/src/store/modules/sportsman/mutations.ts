import { MutationTree } from 'vuex';
import { listSportsmanState } from './types';

export const mutations: MutationTree<listSportsmanState> = {
    getSportsmans(state, payload: string) {
        state.error = false;
        state.listSportsmans = payload;
    },
    getSportsmansError(state) {
        state.error = true;
        state.listSportsmans = '';
    },
};

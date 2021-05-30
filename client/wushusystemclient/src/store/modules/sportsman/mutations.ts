import { MutationTree } from 'vuex';
import { SportsmanState } from './types';

export const mutations: MutationTree<SportsmanState> = {
    getSportsmans(state, payload: string) {
        state.error = false;
        state.sportsmans = payload;
    },
    getSportsmansError(state) {
        state.error = true;
        state.sportsmans = '';
    }
}

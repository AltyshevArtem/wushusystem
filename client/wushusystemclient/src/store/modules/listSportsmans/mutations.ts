import { MutationTree } from 'vuex';
import { IListSportsmansState } from './types';

export const mutations: MutationTree<IListSportsmansState> = {
    getSportsmans(state, payload: string) {
        state.error = false;
        state.listSportsmans = payload;
    },
    getSportsmansError(state) {
        state.error = true;
        state.listSportsmans = '';
    },
};

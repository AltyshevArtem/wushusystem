import { MutationTree } from 'vuex';
import { IRankList } from './types';

export const mutations: MutationTree<IRankList> = {
    getRank(state, payload: Array<string>) {
        state.error = false;
        state.listRank = payload;
    },
    getRankError(state) {
        state.error = true;
        state.listRank = [];
    },
};

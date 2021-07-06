import { MutationTree } from 'vuex';
import { IRankState } from './types';
import { IRank } from "@/models/rank";

export const mutations: MutationTree<IRankState> = {
    getRank(state, payload: Array<IRank>) {
        state.error = false;
        state.ranks = payload;
    },
    getRankError(state) {
        state.error = true;
        state.ranks = [];
    },
};

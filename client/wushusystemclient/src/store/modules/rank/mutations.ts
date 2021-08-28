/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IRankState } from './types';

/* MODELS */
import { IRank } from '@/models/rank';

export const mutations: MutationTree<IRankState> = {
    setRank(state, payload: Array<IRank>) {
        state.error = false;
        state.ranks = payload;
    },
    errorRank(state) {
        state.error = true;
        state.ranks = [];
    },
};

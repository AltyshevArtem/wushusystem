/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { ISportsmanState } from './types';

/* MODELS */
import { ISportsman } from '@/models/sportsman';

export const mutations: MutationTree<ISportsmanState> = {
    setSportsman(state, payload: ISportsman) {
        state.sportsman = payload;
        state.error = false;
    },
    errorSportsman(state) {
        state.sportsman = undefined;
        state.error = true;
    },
    deleteSportsman(state) {
        state.sportsman = undefined;
        state.error = false;
    },
};

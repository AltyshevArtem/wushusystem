/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IClubState } from './types';

/* MODELS */
import { IClub } from '@/models/club';

export const mutations: MutationTree<IClubState> = {
    setClub(state, payload: Array<IClub>) {
        state.error = false;
        state.clubs = payload;
    },
    errorClub(state) {
        state.error = true;
        state.clubs = [];
    },
};

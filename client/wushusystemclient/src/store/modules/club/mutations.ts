import { MutationTree } from 'vuex';
import { IClubState } from './types';
import { IClub } from '@/models/club';

export const mutations: MutationTree<IClubState> = {
    /* GET */
    getClub(state, payload: Array<IClub>) {
        state.error = false;
        state.clubs = payload;
    },
    getClubError(state) {
        state.error = true;
        state.clubs = [];
    },
};

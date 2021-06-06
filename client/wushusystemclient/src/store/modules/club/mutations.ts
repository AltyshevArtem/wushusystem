import { MutationTree } from 'vuex';
import { IClub } from './types';

export const mutations: MutationTree<IClub> = {
    getClub(state, payload: Array<string>) {
        state.error = false;
        state.listClub = payload;
    },
    getClubError(state) {
        state.error = true;
        state.listClub = [];
    },
};

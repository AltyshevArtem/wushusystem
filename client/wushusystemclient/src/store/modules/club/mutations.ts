import { MutationTree } from 'vuex';
import { IClubList } from './types';

export const mutations: MutationTree<IClubList> = {
    getClub(state, payload: Array<string>) {
        state.error = false;
        state.listClub = payload;
    },
    getClubError(state) {
        state.error = true;
        state.listClub = [];
    },
};

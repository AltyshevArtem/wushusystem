import { MutationTree } from 'vuex';
import { IGenderList } from './types';

export const mutations: MutationTree<IGenderList> = {
    getGender(state, payload: Array<string>) {
        state.error = false;
        state.listGender = payload;
    },
    getGenderError(state) {
        state.error = true;
        state.listGender = [];
    },
};

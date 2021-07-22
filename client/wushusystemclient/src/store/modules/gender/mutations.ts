import { MutationTree } from 'vuex';
import { IGenderState } from './types';
import { IGender } from '@/models/gender';

export const mutations: MutationTree<IGenderState> = {
    getGender(state, payload: Array<IGender>) {
        state.error = false;
        state.genders = payload;
    },
    getGenderError(state) {
        state.error = true;
        state.genders = [];
    },
};

/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IGenderState } from './types';

/* MODELS */
import { IGender } from '@/models/gender';

export const mutations: MutationTree<IGenderState> = {
    setGender(state, payload: Array<IGender>) {
        state.error = false;
        state.genders = payload;
    },
    errorGender(state) {
        state.error = true;
        state.genders = [];
    },
};

/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IBirthCertificateState } from './types';

/* MODELS */
import { IBirthCertificate } from '@/models/sportsman';

export const mutations: MutationTree<IBirthCertificateState> = {
    setBirthCertificate(state, payload: IBirthCertificate) {
        state.birthCertificate = payload;
        state.error = false;
    },
    errorBirthCertificate(state) {
        state.birthCertificate = undefined;
        state.error = true;
    },
    deleteBirthCertificate(state) {
        state.birthCertificate = undefined;
        state.error = false;
    },
};

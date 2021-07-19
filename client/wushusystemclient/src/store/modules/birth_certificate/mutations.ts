import { MutationTree } from 'vuex';
import { IBirthCertificateState } from './types';
import { IBirthCertificate } from '@/models/sportsman';

export const mutations: MutationTree<IBirthCertificateState> = {
    /* POST */
    postBirthCertificate(state, payload: IBirthCertificate) {
        state.birthCertificate = payload;
        state.error = false;
    },
    postBirthCertificateError(state) {
        state.birthCertificate = undefined;
        state.error = true;
    },
    /* PUT */
    putBirthCertificate(state, payload: IBirthCertificate) {
        state.birthCertificate = payload;
        state.error = false;
    },
    putBirthCertificateError(state) {
        state.birthCertificate = undefined;
        state.error = true;
    },
    /* DELETE */
    deleteBirthCertificate(state) {
        state.birthCertificate = undefined;
        state.error = false;
    },
    deleteBirthCertificateError(state) {
        state.error = true;
    },
    /* GET */
    getBirthCertificate(state, payload: IBirthCertificate) {
        state.birthCertificate = payload;
        state.error = false;
    },
    getBirthCertificateError(state) {
        state.birthCertificate = undefined;
        state.error = true;
    },
};

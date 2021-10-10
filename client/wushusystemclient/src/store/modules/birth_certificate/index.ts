/* VUEX */
import { Module } from 'vuex';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { IBirthCertificateState } from './types';

export const state: IBirthCertificateState = {
    birthCertificate: undefined,
    error: false,
};

// eslint-disable-next-line camelcase
export const birth_certificate: Module<IBirthCertificateState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

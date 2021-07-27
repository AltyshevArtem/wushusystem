import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { IBirthCertificateState } from './types';

export const state: IBirthCertificateState = {
    birthCertificate: undefined,
    error: false,
};

export const birth_certificate: Module<IBirthCertificateState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

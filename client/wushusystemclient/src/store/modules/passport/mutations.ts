import { MutationTree } from 'vuex';
import { IPassportState } from './types';
import { IPassport } from '@/models/sportsman';

export const mutations: MutationTree<IPassportState> = {
    /* POST */
    postPassport(state, payload: IPassport) {
        state.passport = payload;
        state.error = false;
    },
    postPassportError(state) {
        state.passport = undefined;
        state.error = true;
    },
    /* PUT */
    putPassport(state, payload: IPassport) {
        state.passport = payload;
        state.error = false;
    },
    putPassportError(state) {
        state.passport = undefined;
        state.error = true;
    },
    /* DELETE */
    deletePassport(state) {
        state.passport = undefined;
        state.error = false;
    },
    deletePassportError(state) {
        state.error = true;
    },
    /* GET */
    getPassport(state, payload: IPassport) {
        state.passport = payload;
        state.error = false;
    },
    getPassportError(state) {
        state.passport = undefined;
        state.error = true;
    },
};

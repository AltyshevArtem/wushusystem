/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IPassportState } from './types';

/* MODELS */
import { IPassport } from '@/models/sportsman';

export const mutations: MutationTree<IPassportState> = {
    setPassport(state, payload: IPassport) {
        state.passport = payload;
        state.error = false;
    },
    errorPassport(state) {
        state.passport = undefined;
        state.error = true;
    },
    deletePassport(state) {
        state.passport = undefined;
        state.error = false;
    },
};

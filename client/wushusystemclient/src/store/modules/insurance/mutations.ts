/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IInsuranceState } from './types';

/* MODELS */
import { IInsurance } from '@/models/sportsman';

export const mutations: MutationTree<IInsuranceState> = {
    setInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    errorInsurance(state) {
        state.insurance = undefined;
        state.error = true;
    },
    deleteInsurance(state) {
        state.insurance = undefined;
        state.error = false;
    },
};

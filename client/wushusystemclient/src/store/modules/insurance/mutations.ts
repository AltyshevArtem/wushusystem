import { MutationTree } from 'vuex';
import { IInsuranceState } from './types';
import { IInsurance } from '@/models/sportsman';

export const mutations: MutationTree<IInsuranceState> = {
    /* POST */
    postInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    postInsuranceError(state) {
        state.insurance = undefined;
        state.error = true;
    },
    /* PUT */
    putInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    putInsuranceError(state) {
        state.insurance = undefined;
        state.error = true;
    },
    /* DELETE */
    deleteInsurance(state) {
        state.insurance = undefined;
        state.error = false;
    },
    deleteInsuranceError(state) {
        state.error = true;
    },
    /* GET */
    getInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    getInsuranceError(state) {
        state.insurance = undefined;
        state.error = true;
    },
};

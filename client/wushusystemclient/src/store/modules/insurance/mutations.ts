import { MutationTree } from 'vuex';
import { IInsuranceState } from './types';
import { IInsurance } from '@/models/sportsman';

export const mutations: MutationTree<IInsuranceState> = {
    postInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    postInsuranceError(state) {
        state.insurance = undefined;
        state.error = true;
    },
    putInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    putInsuranceError(state) {
        state.error = true;
    },
    deleteInsurance(state) {
        state.insurance = undefined;
        state.error = false;
    },
    deleteInsuranceError(state) {
        state.error = true;
    },
    getInsurance(state, payload: IInsurance) {
        state.insurance = payload;
        state.error = false;
    },
    getInsuranceError(state) {
        state.insurance = undefined;
        state.error = true;
    },
};

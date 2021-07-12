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
    }
};

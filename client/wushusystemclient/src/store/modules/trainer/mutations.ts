import { MutationTree } from 'vuex';
import { ITrainerList } from './types';

export const mutations: MutationTree<ITrainerList> = {
    getTrainer(state, payload: Array<string>) {
        state.error = false;
        state.listTrainer = payload;
    },
    getTrainerError(state) {
        state.error = true;
        state.listTrainer = [];
    },
};

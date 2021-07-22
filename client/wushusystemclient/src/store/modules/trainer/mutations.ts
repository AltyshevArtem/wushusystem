import { MutationTree } from 'vuex';
import { ITrainerState } from './types';
import { ITrainer } from '@/models/trainer';

export const mutations: MutationTree<ITrainerState> = {
    getTrainer(state, payload: Array<ITrainer>) {
        state.error = false;
        state.trainers = payload;
    },
    getTrainerError(state) {
        state.error = true;
        state.trainers = [];
    },
};

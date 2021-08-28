/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { ITrainerState } from './types';

/* MODELS */
import { ITrainer } from '@/models/trainer';

export const mutations: MutationTree<ITrainerState> = {
    setTrainer(state, payload: Array<ITrainer>) {
        state.error = false;
        state.trainers = payload;
    },
    errorTrainer(state) {
        state.error = true;
        state.trainers = [];
    },
};

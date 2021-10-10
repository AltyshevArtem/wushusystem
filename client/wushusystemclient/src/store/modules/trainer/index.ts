/* VUEX */
import { Module } from 'vuex';

/* GETTERS */
import { getters } from './getters';

/* ACTIONS */
import { actions } from './actions';

/* MUTATIONS */
import { mutations } from './mutations';

/* TYPES */
import { ITrainerState } from './types';

export const state: ITrainerState = {
    trainers: [],
    selectedTrainer: undefined,
    error: false,
};

export const trainer: Module<ITrainerState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

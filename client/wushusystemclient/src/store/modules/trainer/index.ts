import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
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

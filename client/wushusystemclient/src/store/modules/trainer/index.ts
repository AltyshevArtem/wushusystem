import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ITrainerList } from './types';

export const state: ITrainerList = {
    listTrainer: [],
    valueTrainer: undefined,
    error: false,
};

export const trainer: Module<ITrainerList, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};

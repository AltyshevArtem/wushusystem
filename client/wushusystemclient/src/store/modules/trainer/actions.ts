import { ActionTree } from 'vuex';
import axios from 'axios';
import { ITrainerState } from './types';

export const actions: ActionTree<ITrainerState, null> = {
    getTrainerList({ commit }): any {
        axios
            .get('/api/trainer/')
            .then((response) => {
                const payload: ITrainerState = response && response.data;
                commit('getTrainer', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getTrainerError');
            });
    },
};

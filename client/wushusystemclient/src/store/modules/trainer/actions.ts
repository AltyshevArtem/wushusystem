import { ActionTree } from 'vuex';
import axios from 'axios';
import { ITrainerList } from './types';

export const actions: ActionTree<ITrainerList, null> = {
    getTrainerList({ commit }): any {
        axios
            .get('/api/trainer/')
            .then((response) => {
                const payload: ITrainerList = response && response.data;
                commit('getTrainer', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getTrainerError');
            });
    },
};

/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { ITrainerState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<ITrainerState, null> = {
    getTrainerList({ commit }): any {
        http
            .get('/trainer/')
            .then((response) => {
                const payload: ITrainerState = response && response.data;
                commit('setTrainer', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorTrainer');
            });
    },
};

/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IGenderState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IGenderState, null> = {
    getGenderList({ commit }): any {
        http.get('/gender/')
            .then((response) => {
                const payload: IGenderState = response && response.data;
                commit('setGender', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorGender');
            });
    },
};

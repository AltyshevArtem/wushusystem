/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { ICityState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<ICityState, null> = {
    getCityList({ commit }): any {
        http.get('/city/')
            .then((response) => {
                const payload: ICityState = response && response.data;
                commit('setCity', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorCity');
            });
    },
};

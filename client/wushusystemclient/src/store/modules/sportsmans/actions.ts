/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { ISportsmansState } from './types';

/* STATE */
import { state } from './index';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<ISportsmansState, null> = {
    getSportsmanList({ commit }, page = 1): any {
        http.get(`/sportsmans/${state.search}&page=${page}`)
            .then((response) => {
                const payload: ISportsmansState = response && response.data;
                commit('setSportsmanList', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorSportsmanList');
            });
    },
};

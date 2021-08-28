/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IRankState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IRankState, null> = {
    getRankList({ commit }): any {
        http
            .get('/rank/')
            .then((response) => {
                const payload: IRankState = response && response.data;
                commit('setRank', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorRank');
            });
    },
};

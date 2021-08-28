/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IClubState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IClubState, null> = {
    getClubList({ commit }): any {
        http
            .get('/club/')
            .then((response) => {
                const payload: IClubState = response && response.data;
                commit('setClub', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorClub');
            });
    },
};

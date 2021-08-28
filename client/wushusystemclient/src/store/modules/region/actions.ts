/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IRegionState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IRegionState, null> = {
    getRegionList({ commit }): any {
        http
            .get('/region/')
            .then((response) => {
                const payload: IRegionState = response && response.data;
                commit('setRegion', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorRegion');
            });
    },
};

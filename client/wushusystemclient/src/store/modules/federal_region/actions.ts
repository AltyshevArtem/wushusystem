/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IFederalRegionState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IFederalRegionState, null> = {
    getFederalRegionList({ commit }): any {
        http
            .get('/federal_region/')
            .then((response) => {
                const payload: IFederalRegionState = response && response.data;
                commit('setFederalRegion', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorFederalRegion');
            });
    },
};

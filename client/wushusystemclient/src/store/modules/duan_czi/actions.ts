/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IDuanCziState } from './types';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IDuanCziState, null> = {
    getDuanCziList({ commit }): any {
        http.get('/duan_czi/')
            .then((response) => {
                const payload: IDuanCziState = response && response.data;
                commit('setDuanCzi', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorDuanCzi');
            });
    },
};

import { ActionTree } from 'vuex';
import axios from 'axios';
import { IDuanCziState } from './types';

export const actions: ActionTree<IDuanCziState, null> = {
    getDuanCziList({ commit }): any {
        axios
            .get('/api/duan_czi/')
            .then((response) => {
                const payload: IDuanCziState = response && response.data;
                commit('getDuanCzi', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getDuanCziError');
            });
    },
};

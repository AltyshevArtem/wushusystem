import { ActionTree } from 'vuex';
import axios from 'axios';
import { IDuanCziList } from './types';

export const actions: ActionTree<IDuanCziList, null> = {
    getDuanCziList({ commit }): any {
        axios
            .get('/api/duan_czi/')
            .then((response) => {
                const payload: IDuanCziList = response && response.data;
                commit('getDuanCzi', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getDuanCziError');
            });
    },
};

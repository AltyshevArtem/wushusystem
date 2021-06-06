import { ActionTree } from 'vuex';
import axios from 'axios';
import { IDuanCzi } from './types';

export const actions: ActionTree<IDuanCzi, null> = {
    getDuanCziList({ commit }): any {
        axios
            .get('/api/duan_czi/')
            .then((response) => {
                const payload: IDuanCzi = response && response.data;
                commit('getDuanCzi', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getDuanCziError');
            });
    }
};

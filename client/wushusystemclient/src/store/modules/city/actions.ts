import { ActionTree } from 'vuex';
import axios from 'axios';
import { ICityList } from './types';

export const actions: ActionTree<ICityList, null> = {
    getCityList({ commit }): any {
        axios
            .get('/api/city/')
            .then((response) => {
                const payload: ICityList = response && response.data;
                commit('getCity', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getCityError');
            });
    },
};

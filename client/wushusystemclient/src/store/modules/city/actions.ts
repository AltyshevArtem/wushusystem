import { ActionTree } from 'vuex';
import axios from 'axios';
import { ICityState } from './types';

export const actions: ActionTree<ICityState, null> = {
    getCityList({ commit }): any {
        axios
            .get('/api/city/')
            .then((response) => {
                const payload: ICityState = response && response.data;
                commit('getCity', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getCityError');
            });
    },
};

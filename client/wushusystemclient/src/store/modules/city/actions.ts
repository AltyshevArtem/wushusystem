import { ActionTree } from 'vuex';
import axios from 'axios';
import { ICityClub } from './types';

export const actions: ActionTree<ICityClub, null> = {
    getCityList({ commit }): any {
        axios
            .get('/api/city/')
            .then((response) => {
                const payload: ICityClub = response && response.data;
                commit('getCity', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getCityError');
            });
    }
};

import { ActionTree } from 'vuex';
import axios from 'axios';
import { ICity } from './types';

export const actions: ActionTree<ICity, null> = {
    getCityList({ commit }): any {
        axios
            .get('/api/city/')
            .then((response) => {
                const payload: ICity = response && response.data;
                commit('getCity', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getCityError');
            });
    }
};

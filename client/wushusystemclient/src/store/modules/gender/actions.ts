import { ActionTree } from 'vuex';
import axios from 'axios';
import { IGenderList } from './types';

export const actions: ActionTree<IGenderList, null> = {
    getGenderList({ commit }): any {
        axios
            .get('/api/gender/')
            .then((response) => {
                const payload: IGenderList = response && response.data;
                commit('getGender', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getGenderError');
            });
    },
};

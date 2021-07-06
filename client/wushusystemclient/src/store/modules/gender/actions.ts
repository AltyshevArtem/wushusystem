import { ActionTree } from 'vuex';
import axios from 'axios';
import { IGenderState } from './types';

export const actions: ActionTree<IGenderState, null> = {
    getGenderList({ commit }): any {
        axios
            .get('/api/gender/')
            .then((response) => {
                const payload: IGenderState = response && response.data;
                commit('getGender', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getGenderError');
            });
    },
};

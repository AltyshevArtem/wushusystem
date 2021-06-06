import { ActionTree } from 'vuex';
import axios from 'axios';
import { IClub } from './types';

export const actions: ActionTree<IClub, null> = {
    getClubList({ commit }): any {
        axios
            .get('/api/club/')
            .then((response) => {
                const payload: IClub = response && response.data;
                commit('getClub', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getClubError');
            });
    }
};

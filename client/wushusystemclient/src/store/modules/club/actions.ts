import { ActionTree } from 'vuex';
import axios from 'axios';
import { IClubList } from './types';

export const actions: ActionTree<IClubList, null> = {
    getClubList({ commit }): any {
        axios
            .get('/api/club/')
            .then((response) => {
                const payload: IClubList = response && response.data;
                commit('getClub', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getClubError');
            });
    }
};

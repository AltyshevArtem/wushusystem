import { ActionTree } from 'vuex';
import axios from 'axios';
import { IClubState } from './types';

export const actions: ActionTree<IClubState, null> = {
    getClubList({ commit }): any {
        axios
            .get('/api/club/')
            .then((response) => {
                const payload: IClubState = response && response.data;
                commit('getClub', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getClubError');
            });
    },
};

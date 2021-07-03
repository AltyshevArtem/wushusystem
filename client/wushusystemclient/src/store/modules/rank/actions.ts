import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRankState } from './types';

export const actions: ActionTree<IRankState, null> = {
    getRankList({ commit }): any {
        axios
            .get('/api/rank/')
            .then((response) => {
                const payload: IRankState = response && response.data;
                commit('getRank', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getRankError');
            });
    },
};

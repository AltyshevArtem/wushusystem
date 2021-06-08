import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRankList } from './types';

export const actions: ActionTree<IRankList, null> = {
    getRankList({ commit }): any {
        axios
            .get('/api/rank/')
            .then((response) => {
                const payload: IRankList = response && response.data;
                commit('getRank', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getRankError');
            });
    },
};

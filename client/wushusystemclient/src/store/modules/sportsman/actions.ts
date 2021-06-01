import { ActionTree } from 'vuex';
import axios from 'axios';
import { SportsmanState } from './types';

export const actions: ActionTree<SportsmanState, null> = {
    fetchData({ commit }): any {
        axios
            .get('/api/sportsmans/')
            .then((response) => {
                const payload: SportsmanState = response && response.data.results;
                commit('getSportsmans', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getSportsmansError');
            });
    },
    searchData({commit}, search): any {
        axios
                .get('/api/sportsmans/', { params: { search: search } })
                .then((response) => {
                    const payload: SportsmanState = response && response.data.results;
                    commit('getSportsmans', payload);
                })
                .catch((error) => {
                    console.log(error);
                    commit('getSportsmansError');
                });

    }
};

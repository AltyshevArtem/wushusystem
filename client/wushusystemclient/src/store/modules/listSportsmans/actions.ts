import { ActionTree } from 'vuex';
import axios from 'axios';
import { IListSportsmansState } from './types';

export const actions: ActionTree<IListSportsmansState, null> = {
    fetchData({ commit }): any {
        axios
            .get('/api/sportsmans/')
            .then((response) => {
                const payload: IListSportsmansState = response && response.data.results;
                commit('getSportsmans', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getSportsmansError');
            });
    },
    searchData({commit}, search: string): any {
        axios
                .get('/api/sportsmans/', { params: { search: search } })
                .then((response) => {
                    const payload: IListSportsmansState = response && response.data.results;
                    commit('getSportsmans', payload);
                })
                .catch((error) => {
                    console.log(error);
                    commit('getSportsmansError');
                });

    }
};

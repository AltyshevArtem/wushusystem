import { ActionTree } from 'vuex';
import axios from 'axios';
import { IListSportsmansState } from './types';
import { state } from '.';

export const actions: ActionTree<IListSportsmansState, null> = {
    getSportsmanList({ commit }): any {
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
    getSportsmanSearchList({ commit }): any {
        axios
            .get(`/api/sportsmans/${state.search}`,)
            .then((response) => {
                const payload: IListSportsmansState = response && response.data.results;
                commit('getSportsmans', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getSportsmansError');
            });
    },
};

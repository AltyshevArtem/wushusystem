import { ActionTree } from 'vuex';
import axios from 'axios';
import { IListSportsmansState } from './types';

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
    getSportsmanSearchList({ commit }, search: Array<Array<string>>): any {
        axios
            .get('/api/sportsmans/', {
                params: {
                    name: search[0],
                    gender: search[1],
                    rank: search[2],
                    duan_czi: search[3],
                    club: search[4],
                },
            })
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

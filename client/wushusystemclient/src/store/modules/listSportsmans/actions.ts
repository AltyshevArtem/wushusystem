import { ActionTree } from 'vuex';
import axios from 'axios';
import { IListSportsmansState } from './types';
//TODO: странный код, но без него не работает))
import { state } from '.';

export const actions: ActionTree<IListSportsmansState, null> = {
    getSportsmanList({ commit }, page = 1): any {
        axios
        .get(`/api/sportsmans/${state.search}&page=${page}`)
        .then((response) => {
            const payload: IListSportsmansState = response && response.data;
            commit('getSportsmanList', payload);
        })
        .catch((error) => {
            console.log(error);
            commit('getSportsmanListError');
        });
    },
};

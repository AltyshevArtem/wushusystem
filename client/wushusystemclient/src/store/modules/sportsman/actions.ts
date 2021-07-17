import { ActionTree } from 'vuex';
import axios from 'axios';
import { ISportsmanState } from './types';

export const actions: ActionTree<ISportsmanState, null> = {
    async getSportsman({ commit }, id: number): Promise<any> {
        await axios
            .get(`/api/sportsmans/${id}`)
            .then((response) => {
                const payload: ISportsmanState = response && response.data;
                commit('getSportsman', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getSportsmanError');
            });

    },
    deleteSportsman({ commit }, id:number): any {
        axios
            .delete(`/api/sportsmans/${id}`)
            .then((response) => {
                commit('deleteSportsman');
            })
            .catch((error) => {
                console.log(error);
                commit('deleteSportsmanError');
            });
    }
};

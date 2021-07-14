import { trainer } from './../trainer/index';
import { sportsman } from './index';
import { ISportsman } from '@/models/sportsman';
import { ActionTree } from 'vuex';
import axios from 'axios';
import { ISportsmanState } from './types';

export const actions: ActionTree<ISportsmanState, null> = {
    getSportsman({ commit }, id: number): any {
        axios
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
    },
    putSportsmanOfInsurance({ commit }, sportsman:ISportsman): any {
        axios
            .put(`/api/sportsmans/${sportsman.id}/`, sportsman, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxk'
                },
            })
            .then((response) => {
                commit('putSportsman', sportsman);
            })
            .catch((error) => {
                console.log(error);
                commit('putSportsmanError');
            });
    }
};

import { insurance } from './../insurance/index';
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
                const payload: ISportsman = response && response.data;
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
    putSportsman({ commit }, sportsman:ISportsman): any {
        axios
            .patch(`/api/sportsmans/${sportsman.id}/`, sportsman, {
                // name: sportsman.name,
                // surname: sportsman.name,
                // gender: sportsman.gender,
                // insurance: sportsman.insurance,
                // patronymic: sportsman.patronymic,
                // photo: sportsman.photo,
                // date_of_birth: sportsman.date_of_birth,
                // address: sportsman.address,
                // confirm_address: sportsman.confirm_address,
                // gender: sportsman.gender,
                // passport: sportsman.passport,
                // birth_certificate: sportsman.birth_certificate,
                // proxy: sportsman.proxy,
                // oms: sportsman.oms,
                // city: sportsman.city,
                // trainer: sportsman.trainer,
                // club: sportsman.club,
                // insurance: sportsman.insurance,
                // rank: sportsman.rank,
                // rusada: sportsman.rusada,
                // covid_test: sportsman.covid_test,
                // covid_contact: sportsman.covid_contact,
                // parent_doc: sportsman.parent_doc,
                // school_doc: sportsman.school_doc,
                // duan_czi: sportsman.duan_czi,
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

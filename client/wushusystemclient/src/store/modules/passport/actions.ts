/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IPassportState } from './types';

/* MODELS */
import { IPassport } from '@/models/sportsman';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IPassportState, null> = {
    postPassport({ commit }, passport: IPassport): any {
        const data = new FormData();
        data.append('number', String(passport.number));
        data.append('scan', passport.scan);
        data.append('date_start', String(passport.date_start));
        data.append('issue', String(passport.issue));
        data.append('code', String(passport.code));
        http.post('/passport/', data, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----something',
            },
        })
            .then((response) => {
                const payload: IPassport = response && response.data;
                commit('setPassport', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorPassport');
            });
    },
    putPassport({ commit }, passport: IPassport): any {
        const data = new FormData();
        data.append('number', String(passport.number));
        data.append('scan', passport.scan);
        data.append('date_start', String(passport.date_start));
        data.append('issue', String(passport.issue));
        data.append('code', String(passport.code));
        http.put(`/passport/${passport.id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----something',
            },
        })
            .then((response) => {
                const payload: IPassport = response && response.data;
                commit('setPassport', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorPassport');
            });
    },
    deletePassport({ commit }, id: number): any {
        http.delete(`/passport/${id}`)
            .then(() => {
                commit('deletePassport');
            })
            .catch((error) => {
                console.log(error);
                commit('errorPassport');
            });
    },
    getPassport({ commit }, id: number): any {
        http.get(`/passport/${id}`)
            .then((response) => {
                const payload: IPassport = response && response.data;
                commit('setPassport', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorPassport');
            });
    },
};

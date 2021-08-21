import { ActionTree } from 'vuex';
import axios from 'axios';
import { IPassportState } from './types';
import { IPassport } from '@/models/sportsman';

export const actions: ActionTree<IPassportState, null> = {
    postPassport({ commit }, passport: IPassport): any {
        const data = new FormData();
        data.append('number', String(passport.number));
        data.append('scan', passport.scan);
        data.append('date_start', String(passport.date_start));
        data.append('issue', String(passport.issue));
        data.append('code', String(passport.code));
        axios
            .post('/api/passport/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IPassport = response && response.data;
                commit('postPassport', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('postPassportError');
            });
    },
    putPassport({ commit }, passport: IPassport): any {
        const data = new FormData();

        data.append('number', String(passport.number));
        if (passport.scan['name'] !== undefined) {
            data.append('scan', passport.scan);
        }
        if (passport.date_start !== undefined) {
            data.append('date_start', String(passport.date_start));
        }
        if (passport.issue !== undefined) {
            data.append('issue', String(passport.issue));
        }
        if (passport.code !== undefined) {
            data.append('code', String(passport.code));
        }
        axios
            .put(`/api/passport/${passport.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IPassport = response && response.data;
                commit('putPassport', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('putPassportError');
            });
    },
    deletePassport({ commit }, id: number): any {
        axios
            .delete(`/api/passport/${id}`)
            .then((response) => {
                commit('deletePassport');
            })
            .catch((error) => {
                console.log(error);
                commit('deletePassportError');
            });
    },
    getPassport({ commit }, id: number): any {
        axios
            .get(`/api/passport/${id}`)
            .then((response) => {
                const payload: IPassport = response && response.data;
                commit('getPassport', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getPassportError');
            });
    },
};

/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IBirthCertificateState } from './types';

/* MODELS */
import { IBirthCertificate } from '@/models/sportsman';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IBirthCertificateState, null> = {
    postBirthCertificate({ commit }, birthCertificate: IBirthCertificate): any {
        const data = new FormData();
        data.append('number', String(birthCertificate.number));
        data.append('scan', birthCertificate.scan);
        http
            .post('/birth_certificate/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IBirthCertificate = response && response.data;
                commit('setBirthCertificate', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorBirthCertificate');
            });
    },
    putBirthCertificate({ commit }, birthCertificate: IBirthCertificate): any {
        const data = new FormData();
        data.append('number', String(birthCertificate.number));
        if (birthCertificate.scan['name'] !== undefined) {
            data.append('scan', birthCertificate.scan);
        }
        http
            .put(`/birth_certificate/${birthCertificate.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IBirthCertificate = response && response.data;
                commit('setBirthCertificate', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorBirthCertificate');
            });
    },
    deleteBirthCertificate({ commit }, id: number): any {
        http
            .delete(`/birth_certificate/${id}`)
            .then((response) => {
                commit('deleteBirthCertificate');
            })
            .catch((error) => {
                console.log(error);
                commit('errorBirthCertificate');
            });
    },
    getBirthCertificate({ commit }, id: number): any {
        http
            .get(`/birth_certificate/${id}`)
            .then((response) => {
                const payload: IBirthCertificate = response && response.data;
                commit('setBirthCertificate', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorBirthCertificate');
            });
    },
};

import { ActionTree } from 'vuex';
import axios from 'axios';
import { IBirthCertificateState } from './types';
import { IBirthCertificate } from '@/models/sportsman';

export const actions: ActionTree<IBirthCertificateState, null> = {
    postBirthCertificate({ commit }, birthCertificate: IBirthCertificate): any {
        const data = new FormData();
        data.append('number', String(birthCertificate.number));
        data.append('scan', birthCertificate.scan);
        axios
            .post('/api/birth_certificate/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IBirthCertificate = response && response.data;
                commit('postBirthCertificate', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('postBirthCertificateError');
            });
    },
    putBirthCertificate({ commit }, birthCertificate: IBirthCertificate): any {
        const data = new FormData();
        data.append('number', String(birthCertificate.number));
        if (birthCertificate.scan['name'] !== undefined) {
            data.append('scan', birthCertificate.scan);
        }
        axios
            .put(`/api/birth_certificate/${birthCertificate.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IBirthCertificate = response && response.data;
                commit('putBirthCertificate', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('putBirthCertificateError');
            });
    },
    deleteBirthCertificate({ commit }, id: number): any {
        axios
            .delete(`/api/birth_certificate/${id}`)
            .then((response) => {
                commit('deleteBirthCertificate');
            })
            .catch((error) => {
                console.log(error);
                commit('deleteBirthCertificateError');
            });
    },
    getBirthCertificate({ commit }, id: number): any {
        axios
            .get(`/api/birth_certificate/${id}`)
            .then((response) => {
                const payload: IBirthCertificate = response && response.data;
                commit('getBirthCertificate', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getBirthCertificateError');
            });
    },
};

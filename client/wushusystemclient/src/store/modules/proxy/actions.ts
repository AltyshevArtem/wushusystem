/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IProxyDocState } from './types';

/* MODELS */
import { IProxyDoc } from '@/models/sportsman';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IProxyDocState, null> = {
    postProxy({ commit }, proxy: IProxyDoc): any {
        const data = new FormData();
        data.append('scan', proxy.scan);
        data.append('date_end', String(proxy.date_end));
        data.append('original_passport', proxy.original_passport);
        data.append('original_birth_certificate', proxy.original_birth_certificate);
        http.post('/proxy/', data, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----something',
            },
        })
            .then((response) => {
                const payload: IProxyDoc = response && response.data;
                commit('setProxy', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorProxy');
            });
    },
    putProxy({ commit }, proxy: IProxyDoc): any {
        const data = new FormData();
        data.append('date_end', String(proxy.date_end));
        data.append('scan', proxy.scan);
        data.append('original_passport', proxy.original_passport);
        data.append('original_birth_certificate', proxy.original_birth_certificate);
        http.put(`/proxy/${proxy.id}/`, data, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----something',
            },
        })
            .then((response) => {
                const payload: IProxyDoc = response && response.data;
                commit('setProxy', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorProxy');
            });
    },
    deleteProxy({ commit }, id: number): any {
        http.delete(`/proxy/${id}`)
            .then(() => {
                commit('deleteProxy');
            })
            .catch((error) => {
                console.log(error);
                commit('errorProxy');
            });
    },
    getProxy({ commit }, id: number): any {
        http.get(`/proxy/${id}`)
            .then((response) => {
                const payload: IProxyDoc = response && response.data;
                commit('setProxy', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorProxy');
            });
    },
};

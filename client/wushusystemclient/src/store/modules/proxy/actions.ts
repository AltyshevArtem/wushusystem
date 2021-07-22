import { ActionTree } from 'vuex';
import axios from 'axios';
import { IProxyDocState } from './types';
import { IProxyDoc } from '@/models/sportsman';

export const actions: ActionTree<IProxyDocState, null> = {
    postProxy({ commit }, proxy: IProxyDoc): any {
        const data = new FormData();
        data.append('scan', proxy.scan);
        data.append('date_end', String(proxy.date_end));
        /* PASSPORT */
        data.append(`original_passport['number']`, String(proxy['original_passport'].number));
        data.append(`original_passport['scan']`, proxy['original_passport'].scan);
        data.append(
            `original_passport['date_start']`,
            String(proxy['original_passport'].date_start),
        );
        data.append(`original_passport['issue']`, String(proxy['original_passport'].issue));
        data.append(`original_passport['code']`, String(proxy['original_passport'].code));
        /* BIRTH_CERTIFICATE */
        data.append(
            `original_birth_certificate['number']`,
            String(proxy['original_birth_certificate'].number),
        );
        data.append(`original_birth_certificate['scan']`, proxy['original_birth_certificate'].scan);
        axios
            .post('/api/passport/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IProxyDoc = response && response.data;
                commit('postProxy', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('postProxyError');
            });
    },
    putProxy({ commit }, proxy: IProxyDoc): any {
        const data = new FormData();
        data.append('date_end', String(proxy.date_end));
        if (proxy.scan['name'] !== undefined) {
            data.append('scan', proxy.scan);
        }
        axios
            .put(`/api/passport/${proxy.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IProxyDoc = response && response.data;
                commit('putProxy', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('putProxyError');
            });
    },
    deleteProxy({ commit }, id: number): any {
        axios
            .delete(`/api/passport/${id}`)
            .then((response) => {
                commit('deleteProxy');
            })
            .catch((error) => {
                console.log(error);
                commit('deleteProxyError');
            });
    },
    getProxy({ commit }, id: number): any {
        axios
            .get(`/api/passport/${id}`)
            .then((response) => {
                const payload: IProxyDoc = response && response.data;
                commit('getProxy', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getProxyError');
            });
    },
};

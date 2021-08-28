/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IOmsState } from './types';

/* MODELS */
import { IOms } from '@/models/sportsman';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IOmsState, null> = {
    postOMS({ commit }, oms: IOms): any {
        const data = new FormData();
        data.append('number', String(oms.number));
        data.append('scan', oms.scan);
        http
            .post('/oms/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IOms = response && response.data;
                commit('setOMS', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorOMS');
            });
    },
    putOMS({ commit }, oms: IOms): any {
        const data = new FormData();
        data.append('number', String(oms.number));
        if (oms.scan['name'] !== undefined) {
            data.append('scan', oms.scan);
        }
        http
            .put(`/oms/${oms.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IOms = response && response.data;
                commit('setOMS', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorOMS');
            });
    },
    deleteOMS({ commit }, id: number): any {
        http
            .delete(`/oms/${id}`)
            .then((response) => {
                commit('deleteOMS');
            })
            .catch((error) => {
                console.log(error);
                commit('errorOMS');
            });
    },
    getOMS({ commit }, id: number): any {
        http
            .get(`/oms/${id}`)
            .then((response) => {
                const payload: IOms = response && response.data;
                commit('setOMS', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorOMS');
            });
    },
};

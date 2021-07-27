import { ActionTree } from 'vuex';
import axios from 'axios';
import { IOmsState } from './types';
import { IOms } from '@/models/sportsman';

export const actions: ActionTree<IOmsState, null> = {
    postOMS({ commit }, oms: IOms): any {
        const data = new FormData();
        data.append('number', String(oms.number));
        data.append('scan', oms.scan);
        axios
            .post('/api/oms/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IOms = response && response.data;
                commit('postOMS', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('postOMSError');
            });
    },
    putOMS({ commit }, oms: IOms): any {
        const data = new FormData();
        data.append('number', String(oms.number));
        if (oms.scan['name'] !== undefined) {
            data.append('scan', oms.scan);
        }
        axios
            .put(`/api/oms/${oms.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IOms = response && response.data;
                commit('putOMS', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('putOMSError');
            });
    },
    deleteOMS({ commit }, id: number): any {
        axios
            .delete(`/api/oms/${id}`)
            .then((response) => {
                commit('deleteOMS');
            })
            .catch((error) => {
                console.log(error);
                commit('deleteOMSError');
            });
    },
    getOMS({ commit }, id: number): any {
        axios
            .get(`/api/oms/${id}`)
            .then((response) => {
                const payload: IOms = response && response.data;
                commit('getOMS', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getOMSError');
            });
    },
};

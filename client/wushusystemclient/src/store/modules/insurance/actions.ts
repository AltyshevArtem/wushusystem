/* VUEX */
import { ActionTree } from 'vuex';

/* TYPES */
import { IInsuranceState } from './types';

/* MODELS */
import { IInsurance } from '@/models/sportsman';

/* HTTP */
import http from '@/http-common';

export const actions: ActionTree<IInsuranceState, null> = {
    postInsurance({ commit }, insurance: IInsurance): any {
        const data = new FormData();
        data.append('date_start', String(insurance.date_start));
        data.append('date_end', String(insurance.date_end));
        data.append('file_insurance', insurance.file_insurance);
        http
            .post('/insurance/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IInsurance = response && response.data;
                commit('setInsurance', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorInsurance');
            });
    },
    putInsurance({ commit }, insurance: IInsurance): any {
        const data = new FormData();
        data.append('date_start', String(insurance.date_start));
        data.append('date_end', String(insurance.date_end));
        if (insurance.file_insurance['name'] !== undefined) {
            data.append('file_insurance', insurance.file_insurance);
        }
        http
            .put(`/insurance/${insurance.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: IInsurance = response && response.data;
                commit('setInsurance', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorInsurance');
            });
    },
    deleteInsurance({ commit }, id: number): any {
        http
            .delete(`/insurance/${id}`)
            .then((response) => {
                commit('deleteInsurance');
            })
            .catch((error) => {
                console.log(error);
                commit('errorInsurance');
            });
    },
    getInsurance({ commit }, id: number): any {
        http
            .get(`/insurance/${id}`)
            .then((response) => {
                const payload: IInsurance = response && response.data;
                commit('setInsurance', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('errorInsurance');
            });
    },
};

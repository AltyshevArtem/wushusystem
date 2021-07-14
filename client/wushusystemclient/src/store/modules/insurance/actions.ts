import { ActionTree } from 'vuex';
import axios from 'axios';
import { IInsuranceState } from './types';
import { IInsurance } from '@/models/sportsman';

export const actions: ActionTree<IInsuranceState, null> = {
    postInsurance({ commit }, insurance: IInsurance): any {
        const data = new FormData();
        data.append('date_start', String(insurance.date_start));
        data.append('date_end', String(insurance.date_end));
        data.append('file_insurance', insurance.file_insurance);
        axios
            .post('/api/insurance/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                commit('postInsurance', insurance);
            })
            .catch((error) => {
                console.log(error);
                commit('postInsuranceError');
            });
    },
    putInsurance({ commit }, insurance: IInsurance): any {
        axios
            .put(`/api/insurance/${insurance.id}`, insurance)
            .then((response) => {
                commit('putInsurance', insurance);
            })
            .catch((error) => {
                console.log(error);
                commit('putInsuranceError');
            });
    },
    deleteInsurance({ commit }, id: number): any {
        axios
            .delete(`/api/insurance/${id}`)
            .then((response) => {
                commit('deleteInsurance');
            })
            .catch((error) => {
                console.log(error);
                commit('deleteInsuranceError');
            });
    },
    getInsurance({ commit }, id: number): any {
        axios
            .get(`/api/insurance/${id}`)
            .then((response) => {
                const payload: IInsurance = response && response.data;
                commit('getInsurance', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getInsuranceError');
            });
    }
};

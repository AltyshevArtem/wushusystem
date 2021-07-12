import { ActionTree } from 'vuex';
import axios from 'axios';
import { IInsuranceState } from './types';
import { IInsurance } from '@/models/sportsman';

export const actions: ActionTree<IInsuranceState, null> = {
    postInsurance({ commit }, insurance: IInsurance): any {
        //FormData
        axios
            .post('/api/insurance/', insurance)
            .then((response) => {
                commit('postInsurance', insurance);
            })
            .catch((error) => {
                console.log(error);
                commit('postInsuranceError');
            });
    },
};

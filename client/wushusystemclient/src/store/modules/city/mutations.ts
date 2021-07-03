import { MutationTree } from 'vuex';
import { ICityState } from './types';
import { ICity } from '@/models/city';


export const mutations: MutationTree<ICityState> = {
    getCity(state, payload: Array<ICity>) {
        state.error = false;
        state.cities = payload;
    },
    getCityError(state) {
        state.error = true;
        state.cities = [];
    },
};

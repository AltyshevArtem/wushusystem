/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { ICityState } from './types';

/* MODELS */
import { ICity } from '@/models/city';

export const mutations: MutationTree<ICityState> = {
    setCity(state, payload: Array<ICity>) {
        state.error = false;
        state.cities = payload;
    },
    errorCity(state) {
        state.error = true;
        state.cities = [];
    },
};

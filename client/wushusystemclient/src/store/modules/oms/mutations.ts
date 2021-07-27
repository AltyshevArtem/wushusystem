import { MutationTree } from 'vuex';
import { IOmsState } from './types';
import { IOms } from '@/models/sportsman';

export const mutations: MutationTree<IOmsState> = {
    /* POST */
    postOMS(state, payload: IOms) {
        state.oms = payload;
        state.error = false;
    },
    postOMSError(state) {
        state.oms = undefined;
        state.error = true;
    },
    /* PUT */
    putOMS(state, payload: IOms) {
        state.oms = payload;
        state.error = false;
    },
    putOMSError(state) {
        state.oms = undefined;
        state.error = true;
    },
    /* DELETE */
    deleteOMS(state) {
        state.oms = undefined;
        state.error = false;
    },
    deleteOMSError(state) {
        state.error = true;
    },
    /* GET */
    getOMS(state, payload: IOms) {
        state.oms = payload;
        state.error = false;
    },
    getOMSError(state) {
        state.oms = undefined;
        state.error = true;
    },
};

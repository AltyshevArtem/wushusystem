import { MutationTree } from 'vuex';
import { IProxyDocState } from './types';
import { IProxyDoc } from '@/models/sportsman';

export const mutations: MutationTree<IProxyDocState> = {
    /* POST */
    postProxy(state, payload: IProxyDoc) {
        state.proxy = payload;
        state.error = false;
    },
    postProxyError(state) {
        state.proxy = undefined;
        state.error = true;
    },
    /* PUT */
    putProxy(state, payload: IProxyDoc) {
        state.proxy = payload;
        state.error = false;
    },
    putProxyError(state) {
        state.proxy = undefined;
        state.error = true;
    },
    /* DELETE */
    deleteProxy(state) {
        state.proxy = undefined;
        state.error = false;
    },
    deleteProxyError(state) {
        state.error = true;
    },
    /* GET */
    getProxy(state, payload: IProxyDoc) {
        state.proxy = payload;
        state.error = false;
    },
    getProxyError(state) {
        state.proxy = undefined;
        state.error = true;
    },
};

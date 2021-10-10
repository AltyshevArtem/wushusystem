/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { IProxyDocState } from './types';

/* MODELS */
import { IProxyDoc } from '@/models/sportsman';

export const mutations: MutationTree<IProxyDocState> = {
    setProxy(state, payload: IProxyDoc) {
        state.proxy = payload;
        state.error = false;
    },
    errorProxy(state) {
        state.proxy = undefined;
        state.error = true;
    },
    deleteProxy(state) {
        state.proxy = undefined;
        state.error = false;
    },
};

import { GetterTree } from 'vuex';
import { ICityClub } from './types';

export const getters: GetterTree<ICityClub, null> = {
    arrValueCity(state): any {
        const { listCity } = state;
        const arr: Array<string> = [];
        for(const proxyObj of Object.entries(listCity)) {
            const proxyRegion = Object.values(proxyObj[1])[1];
            arr.push(Object.values(proxyRegion)[0]);
        }
        return arr;
    },
};

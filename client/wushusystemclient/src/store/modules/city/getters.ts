import { GetterTree } from 'vuex';
import { ICityList } from './types';

export const getters: GetterTree<ICityList, null> = {
    arrValueCity(state): any {
        const { listCity } = state;
        const arr: Array<string> = [];
        for (const proxyObj of Object.entries(listCity)) {
            const proxyRegion = Object.values(proxyObj[1])[0];
            arr.push(proxyRegion);
        }
        return arr;
    },
    arrValueFO(state): any {
        const { listCity } = state;
        const arr: Array<string> = [];
        for (const proxyObj of Object.entries(listCity)) {
            const proxyRegion = Object.values(proxyObj[1])[1];
            console.log(proxyRegion);
            arr.push(Object.values(proxyRegion)[0]);
        }
        return arr;
    }
};

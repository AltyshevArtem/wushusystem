import { GetterTree } from 'vuex';
import { IClubList } from './types';

export const getters: GetterTree<IClubList, null> = {
    arrValueClub(state): any {
        const { listClub } = state;
        const arr: Array<string> = [];
        for (const proxyObj of Object.entries(listClub)) {
            arr.push(Object.values(proxyObj[1])[2]);
        }
        return arr;
    },
};

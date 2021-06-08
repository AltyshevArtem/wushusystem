import { GetterTree } from 'vuex';
import { IRankList } from './types';

export const getters: GetterTree<IRankList, null> = {
    arrValueRank(state): any {
        const { listRank } = state;
        const arr: Array<string> = [];
        for (const valueObj of Object.values(listRank)) {
            const [value] = Object.entries(valueObj);
            arr.push(value[1]);
        }
        return arr;
    },
};

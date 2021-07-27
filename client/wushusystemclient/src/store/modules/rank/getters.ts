import { GetterTree } from 'vuex';
import { IRankState } from './types';

export const getters: GetterTree<IRankState, null> = {
    arrValueRank(state): string[] {
        const { ranks } = state;
        const arr: Array<string> = [];
        ranks.forEach((rank) => {
            arr.push(rank.name_of_rank);
        });
        return arr;
    },
};

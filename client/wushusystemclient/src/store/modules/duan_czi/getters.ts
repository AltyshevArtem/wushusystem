import { GetterTree } from 'vuex';
import { IDuanCziState } from './types';

export const getters: GetterTree<IDuanCziState, null> = {
    arrValueDuanCzi(state): string[] {
        const { duan_czi_list } = state;
        const arr: Array<string> = [];
        duan_czi_list.forEach((duan_czi) => {
            arr.push(duan_czi.name_of_rank);
        });
        return arr;
    },
};

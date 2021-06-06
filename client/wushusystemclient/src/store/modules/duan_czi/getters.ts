import { GetterTree } from 'vuex';
import { IDuanCzi } from './types';

export const getters: GetterTree<IDuanCzi, null> = {
    arrValueDuanCzi(state): any {
        const { listDuanCzi } = state;
        const arr: Array<string> = [];
        for(const valueObj of Object.values(listDuanCzi)) {
            const [ value ] = Object.entries(valueObj);
            arr.push(value[1]);
        }
        return arr;
    },
};

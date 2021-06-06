import { GetterTree } from 'vuex';
import { IGenderList } from './types';

export const getters: GetterTree<IGenderList, null> = {
    arrValueGender(state): any {
        const { listGender } = state;
        const arr: Array<string> = [];
        for(const valueObj of Object.values(listGender)) {
            const [ value ] = Object.entries(valueObj);
            arr.push(value[1]);
        }
        return arr;
    },
};

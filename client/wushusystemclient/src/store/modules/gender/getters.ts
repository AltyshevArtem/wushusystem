import { GetterTree } from 'vuex';
import { IGenderState } from './types';

export const getters: GetterTree<IGenderState, null> = {
    arrValueGender(state): string[] {
        const { genders } = state;
        const arr: Array<string> = [];
        genders.forEach((duan_czi) => {
            arr.push(duan_czi.name_of_gender);
        });
        return arr;
    },
};

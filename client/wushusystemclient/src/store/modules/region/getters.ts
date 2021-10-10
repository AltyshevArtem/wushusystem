/* VUEX */
import { GetterTree } from 'vuex';

/* TYPES */
import { IRegionState } from './types';

export const getters: GetterTree<IRegionState, null> = {
    arrValueRegion(state): string[] {
        const { regions } = state;
        const arr: Array<string> = [];
        regions.forEach((region) => {
            arr.push(region.name_of_region);
        });
        return arr;
    },
};

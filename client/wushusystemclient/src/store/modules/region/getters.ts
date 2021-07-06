import { GetterTree } from 'vuex';
import { IRegionState } from './types';

export const getters: GetterTree<IRegionState, null> = {
    arrValueRegion(state): string[] {
        const { region_list } = state;
        const arr: Array<string> = [];
        region_list.forEach((region) => {
            arr.push(region.name_of_region);
        })
        return arr;
    },
};

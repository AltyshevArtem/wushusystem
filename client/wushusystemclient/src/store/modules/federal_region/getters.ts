/* eslint-disable camelcase */
/* VUEX */
import { GetterTree } from 'vuex';

/* TYPES */
import { IFederalRegionState } from './types';

export const getters: GetterTree<IFederalRegionState, null> = {
    arrValueFederalRegion(state): string[] {
        const { federal_region_list } = state;
        const arr: Array<string> = [];
        federal_region_list.forEach((federal_region) => {
            arr.push(federal_region.abbr_of_federal_region);
        });
        return arr;
    },
};

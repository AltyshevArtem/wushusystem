/* MODELS */
import { IFederalRegion } from '@/models/city';

export interface IFederalRegionState {
    // eslint-disable-next-line camelcase
    federal_region_list: Array<IFederalRegion>;
    selectedFederalRegion?: Array<string>;
    error: boolean;
}

import { IFederalRegion } from '@/models/city';

export interface IFederalRegionState {
    federal_region_list: Array<IFederalRegion>;
    selectedFederalRegion?: Array<string>;
    error: boolean;
}

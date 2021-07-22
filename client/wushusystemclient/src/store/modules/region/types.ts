import { IRegion } from '@/models/city';

export interface IRegionState {
    region_list: Array<IRegion>;
    selectedRegion?: Array<string>;
    error: boolean;
}

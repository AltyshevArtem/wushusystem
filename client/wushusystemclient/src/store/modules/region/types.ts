/* MODELS */
import { IRegion } from '@/models/city';

export interface IRegionState {
    regions: Array<IRegion>;
    selectedRegion?: Array<string>;
    error: boolean;
}

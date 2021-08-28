/* MODELS */
import { ICity } from '@/models/city';

export interface ICityState {
    cities: Array<ICity>;
    selectedCity?: Array<string>;
    error: boolean;
}

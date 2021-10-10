/* eslint-disable camelcase */
import { IRegion } from '@/models/city';

interface IFederation {
    id: number;
    name_of_federation: string;
    name_of_region: IRegion;
}
export interface IClub {
    id: number;
    name_of_club: string;
    name_of_owner?: string;
    address?: string;
    federation?: IFederation;
}

import { IRegion } from '@/models/city';

interface IFederation {
    name_of_federation: string;
    region: IRegion;
}
export interface IClub {
    name_of_club: string;
    name_of_owner?: string;
    federation: IFederation;
    address?: string;
}

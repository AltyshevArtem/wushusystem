import { IClub } from '@/models/club';

export interface IClubState {
    clubs: Array<IClub>;
    selectedClub?: Array<string>;
    error: boolean;
}

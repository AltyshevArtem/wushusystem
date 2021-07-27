import { IRank } from '@/models/rank';
export interface IRankState {
    ranks: Array<IRank>;
    selectedRank?: Array<string>;
    error: boolean;
}

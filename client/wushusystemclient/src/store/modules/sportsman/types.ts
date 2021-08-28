/* MODELS */
import { ISportsman } from '@/models/sportsman';

export interface ISportsmanState {
    sportsman?: ISportsman;
    error: boolean;
}

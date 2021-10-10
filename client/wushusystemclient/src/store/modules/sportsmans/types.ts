/* MODELS */
import { ISportsman } from '@/models/sportsman';

export interface ISportsmansState {
    sportsmans: Array<ISportsman>;
    count: number;
    pageSize: number;
    page: number;
    search: string;
    error: boolean;
}

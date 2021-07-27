import { ISportsman } from '@/models/sportsman';

export interface ISportsmansState {
    sportsmans: Array<ISportsman>;
    page: number;
    search: string;
    error: boolean;
}

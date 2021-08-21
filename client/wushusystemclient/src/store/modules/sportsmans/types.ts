import { ISportsman } from '@/models/sportsman';

export interface ISportsmansState {
    sportsmans: Array<ISportsman>;
    count: number;
    page_size: number;
    page: number;
    search: string;
    error: boolean;
}

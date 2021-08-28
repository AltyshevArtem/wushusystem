/* MODELS */
import { IDuanCzi } from '@/models/duan_czi';

export interface IDuanCziState {
    duan_czi_list: Array<IDuanCzi>;
    selectedDuanCzi?: Array<string>;
    error: boolean;
}

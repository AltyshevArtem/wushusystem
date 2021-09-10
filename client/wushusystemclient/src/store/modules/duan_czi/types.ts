/* MODELS */
import { IDuanCzi } from '@/models/duan_czi';

export interface IDuanCziState {
    // eslint-disable-next-line camelcase
    duan_czi_list: Array<IDuanCzi>;
    selectedDuanCzi?: Array<string>;
    error: boolean;
}

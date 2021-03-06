/* VUEX */
import { MutationTree } from 'vuex';

/* TYPES */
import { ISportsmansState } from './types';

/* MODELS */
import { ISportsman } from '@/models/sportsman';

export const mutations: MutationTree<ISportsmansState> = {
    setSportsmanList(state, payload: Array<ISportsman>) {
        state.error = false;
        state.sportsmans = payload['results'];
        state.pageSize = payload['page_size'];
        state.count = payload['count'];
    },
    errorSportsmanList(state) {
        state.error = true;
    },
    setSearch(state, payload: Array<string>) {
        state.search =
            `?name=${payload[0] || ''}` +
            `&gender=${payload[1] || ''}` +
            `&rank=${payload[2] || ''}` +
            `&duan_czi=${payload[3] || ''}` +
            `&club=${payload[4] || ''}` +
            `&city=${payload[5] || ''}` +
            `&trainer=${payload[6] || ''}` +
            `&federal_region=${payload[7] || ''}` +
            `&region=${payload[8] || ''}`;
    },
    prevPage(state) {
        state.page--;
    },
    nextPage(state) {
        state.page++;
    },
    currentPage(state, payload: number) {
        state.page = payload;
    },
};

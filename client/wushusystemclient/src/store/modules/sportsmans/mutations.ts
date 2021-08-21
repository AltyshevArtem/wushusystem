import { MutationTree } from 'vuex';
import { ISportsmansState } from './types';
import { ISportsman } from '@/models/sportsman';

export const mutations: MutationTree<ISportsmansState> = {
    /* GET */
    getSportsmanList(state, payload: Array<ISportsman>) {
        state.error = false;
        state.sportsmans = payload['results'];
        state.page_size = payload['page_size'];
        state.count = payload['count'];
    },
    getSportsmanListError(state) {
        state.error = true;
        state.sportsmans = [];
    },
    /* SET */
    setSearch(state, payload: Array<string>) {
        // eslint-disable-next-line max-len
        state.search = `?name=${payload[0] || ''}&gender=${payload[1] || ''}&rank=${payload[2] || ''}&duan_czi=${payload[3] || ''}&club=${payload[4] || ''}&city=${payload[5] || ''}&trainer=${payload[6] || ''}`;
    },
    /* PAGINATION */
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

import { MutationTree } from 'vuex';
import { IListSportsmansState } from './types';

export const mutations: MutationTree<IListSportsmansState> = {
    getSportsmanList(state, payload: string) {
        state.error = false;
        state.listSportsmans = payload;
    },
    getSportsmanListError(state) {
        state.error = true;
        state.listSportsmans = '';
    },
    setSearch(state, payload: Array<string>){
        // eslint-disable-next-line max-len
        state.search = `?name=${payload[0]||''}&gender=${payload[1]||''}&rank=${payload[2]||''}&duan_czi=${payload[3]||''}&club=${payload[4]||''}&city=${payload[5]||''}&trainer=${payload[6]||''}`
    },
    prevPage(state){
        state.page--;
    },
    nextPage(state){
        state.page++;
    },
    currentPage(state, payload: number){
        state.page = payload;
    }

};

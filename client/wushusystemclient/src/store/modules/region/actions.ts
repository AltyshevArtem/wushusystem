import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRegionState } from './types';

export const actions: ActionTree<IRegionState, null> = {
    getRegionList({ commit }): any {
        axios
            .get('/api/region/')
            .then((response) => {
                const payload: IRegionState = response && response.data;
                commit('getRegion', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getRegionError');
            });
    },
};

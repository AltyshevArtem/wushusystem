import { ActionTree } from 'vuex';
import axios from 'axios';
import { IFederalRegionState } from './types';

export const actions: ActionTree<IFederalRegionState, null> = {
    getFederalRegionList({ commit }): any {
        axios
            .get('/api/federal_region/')
            .then((response) => {
                const payload: IFederalRegionState = response && response.data;
                commit('getFederalRegion', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getFederalRegionError');
            });
    },
};

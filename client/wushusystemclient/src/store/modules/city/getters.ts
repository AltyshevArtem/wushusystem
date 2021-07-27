import { GetterTree } from 'vuex';
import { ICityState } from './types';

export const getters: GetterTree<ICityState, null> = {
    arrValueCity(state): string[] {
        const { cities } = state;
        const arr: Array<string> = [];
        cities.forEach((city) => {
            arr.push(city.name_of_city);
        });
        return arr;
    },
};

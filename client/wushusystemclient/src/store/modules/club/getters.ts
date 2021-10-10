/* VUEX */
import { GetterTree } from 'vuex';

/* TYPES */
import { IClubState } from './types';

export const getters: GetterTree<IClubState, null> = {
    arrValueClub(state): string[] {
        const { clubs } = state;
        const arr: Array<string> = [];
        clubs.forEach((club) => {
            arr.push(club.name_of_club);
        });
        return arr;
    },
};

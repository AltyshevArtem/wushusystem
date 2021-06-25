import { GetterTree } from 'vuex';
import { ITrainerList } from './types';

export const getters: GetterTree<ITrainerList, null> = {
    arrValueTrainer(state): any {
        const { listTrainer } = state;
        const arr: Array<string> = [];
        for (const valueObj of Object.values(listTrainer)) {
            const name = Object.values(valueObj)[1];
            const surname = Object.values(valueObj)[2];
            const patronymic = Object.values(valueObj)[3];
            arr.push(`${surname} ${patronymic} ${name}`);
        }
        return arr;
    },
};

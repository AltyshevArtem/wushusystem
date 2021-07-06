import { trainer } from './index';
import { GetterTree } from 'vuex';
import { ITrainerState } from './types';

export const getters: GetterTree<ITrainerState, null> = {
    arrValueTrainer(state): any {
        const { trainers } = state;
        const arr: Array<string> = [];
        trainers.forEach((trainer) => {
            arr.push(`${trainer.surname} ${trainer.name} ${trainer.patronymic}`)
        });
        return arr;
    },
};

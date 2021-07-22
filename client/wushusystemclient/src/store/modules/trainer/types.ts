import { ITrainer } from '@/models/trainer';
export interface ITrainerState {
    trainers: Array<ITrainer>;
    selectedTrainer?: Array<string>;
    error: boolean;
}

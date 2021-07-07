import { IGender } from '@/models/gender';
export interface ITrainer {
    name: string;
    surname: string;
    patronymic: string;
    photo?: string;
    gender?: IGender;
    date_of_birth?: Date;
}

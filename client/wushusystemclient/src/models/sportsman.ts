import { ICity } from '@/models/city';
import { IClub } from '@/models/club';
import { ITrainer } from '@/models/trainer';
import { IDuanCzi } from '@/models/duan_czi';
import { IRank } from '@/models/rank';
import { IGender } from '@/models/gender';

interface IInsurance {
    date_start?: Date;
    date_end: Date;
    file_insurance: string;
}

export interface ISportsman {
    name: string;
    surname: string;
    patronymic?: string;
    date_of_birth: Date;
    address?: string;
    gender: IGender;
    trainer?: ITrainer;
    city?: ICity;
    club?: IClub;
    insurance?: IInsurance;
    photo?: string;
    file_main_document?: string;
    rusada?: string;
    rank?: IRank;
    duan_czi?: IDuanCzi;
    confirm_address?: string;
    covid_test?: string;
    covid_contact?: string;
    parent_doc?: string;
    school_doc?: string
}

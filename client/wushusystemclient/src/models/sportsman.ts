import { ICity } from '@/models/city';
import { IClub } from '@/models/club';
import { ITrainer } from '@/models/trainer';
import { IDuanCzi } from '@/models/duan_czi';
import { IRank } from '@/models/rank';
import { IGender } from '@/models/gender';

export interface IInsurance {
    id: number;
    date_start: Date;
    date_end: Date;
    file_insurance: string;
}

export interface IPassport {
    id: number;
    number: number;
    scan: string;
    date_start?: Date;
    issue?: string;
    code?: number;
}

export interface IBirthCertificate {
    id: number;
    number: number;
    scan: string;
}

export interface IProxyDoc {
    id: number;
    scan: string;
    original_passport: string;
    original_birth_certificate: string;
    date_end: Date;
}

//TODO: Поля number и scan повторяются во многих интерфейсах
//Можно сделать отдельно интерфейс IDocument например
export interface IOms {
    id: number;
    number: number;
    scan: string;
}

export interface ISportsman {
    id: number;
    name: string;
    surname: string;
    patronymic?: string;
    photo?: string;
    date_of_birth: Date;
    address?: string;
    confirm_address?: string;
    gender: IGender;
    passport?: IPassport;
    birth_certificate?: IBirthCertificate;
    proxy?: IProxyDoc;
    oms?: IOms;
    city?: ICity;
    trainer?: ITrainer;
    club?: IClub;
    insurance?: IInsurance;
    rank?: IRank;
    rusada?: string;
    covid_test?: string;
    covid_contact?: string;
    parent_doc?: string;
    school_doc?: string;
    duan_czi?: IDuanCzi;
}

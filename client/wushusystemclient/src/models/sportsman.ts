/* eslint-disable camelcase */
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
    file_insurance: File | string;
}

export interface IPassport {
    id: number;
    number: number;
    scan: File | string;
    date_start?: Date;
    issue?: string;
    code?: number;
}

export interface IBirthCertificate {
    id: number;
    number: number;
    scan: File | string;
}

export interface IProxyDoc {
    id: number;
    scan: File | string;
    original_passport: File | string;
    original_birth_certificate: File | string;
    date_end: Date;
}

export interface IOms {
    id: number;
    number: number;
    scan: File | string;
}

export interface ISportsman {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    photo: string | File;
    date_of_birth: Date;
    address?: string;
    confirm_address: string;
    gender: IGender;
    insurance: IInsurance;
    birth_certificate: IBirthCertificate;
    passport: IPassport;
    proxy: IProxyDoc;
    oms: IOms;
    city?: ICity;
    trainer?: ITrainer;
    club?: IClub;
    rank?: IRank;
    rusada: string | File;
    covid_test: string | File;
    covid_contact: string | File;
    parent_doc: string | File;
    school_doc: string | File;
    duan_czi?: IDuanCzi;
}

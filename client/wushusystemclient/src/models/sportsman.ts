import { ICity } from '@/models/city';
import { IClub } from '@/models/club';
import { ITrainer } from '@/models/trainer';
import { IDuanCzi } from '@/models/duan_czi';
import { IRank } from '@/models/rank';
import { IGender } from '@/models/gender';

interface IInsurance {
    date_start: Date;
    date_end: Date;
    file_insurance: string;
}

interface IPassport {
    number: number;
    scan?: string;
    date_start?: Date;
    issue?: string;
    code?: number;
}

interface IBirthCeritifcate {
    number: number;
    scan?: string;
}

interface IProxyDoc {
    scan?: string;
    original_passport?: IPassport;
    original_birth_certificate?: IBirthCeritifcate;
    date_end: Date;
}

//TODO: Поля number и scan повторяются во многих интерфейсах
//Можно сделать отдельно интерфейс IDocument например
interface IOms{
    number: number;
    scan?: string;
}

export interface ISportsman {
    name: string;
    surname: string;
    patronymic?: string;
    photo?: string;
    date_of_birth: Date;
    address?: string;
    confirm_address?: string;
    gender: IGender;
    passport?: IPassport;
    birth_certificate?: IBirthCeritifcate;
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

    // TODO: хз откуда это
    //file_main_document?: string;
}

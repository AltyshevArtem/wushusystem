interface IRegion {
    name_of_region: string;
    name_of_federal_region: string;
    name_of_country: string;
}
interface IFederation {
    name_of_federation: string;
    region: IRegion;
}
interface IClub {
    name_of_club: string;
    name_of_owner?: string;
    federation: IFederation;
    address?: string;

}
interface IInsurance {
    date_start?: Date;
    date_end: Date;
    file_insurance: string;
}
interface ICity {
    name_of_city: string;
    name_of_region: string;
}
interface ITrainer {
    name: string;
    surname?: string;
    patronymic: string;
    photo?: string;
    date_of_birth?: Date;
    gender: string;
}

export interface ISportsman {
    name: string;
    surname: string;
    patronymic?: string;
    date_of_birth: Date;
    address?: string;
    gender: string;
    trainer?: ITrainer;
    city?: ICity;
    club?: IClub;
    insurance?: IInsurance;
    photo?: string;
    file_main_document?: string;
    rusada?: string;
    rank?: string;
    duan_czi?: string;
}

export interface ISportsmanState {
    sportsman?: ISportsman;
    error: boolean;
}

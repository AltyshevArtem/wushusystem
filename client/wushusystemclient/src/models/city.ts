export interface IFederalRegion {
    id: number;
    name_of_federal_region: string;
    abbr_of_federal_region: string;
}

export interface IRegion {
    name_of_region: string;
    name_of_federal_region: IFederalRegion;
    name_of_country: string;
}

export interface ICity {
    name_of_city: string;
    name_of_region: IRegion;
}

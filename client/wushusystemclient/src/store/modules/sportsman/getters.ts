import { GetterTree } from 'vuex';
import { ISportsmanState } from './types';

export const getters: GetterTree<ISportsmanState, null> = {
    Name(state): string {
        const { sportsman } = state;
        const name = (sportsman && sportsman.name) || '';
        return `${name}`;
    },
    Surname(state): string {
        const { sportsman } = state;
        const surname = (sportsman && sportsman.surname) || '';
        return `${surname}`;
    },
    Patronymic(state): string {
        const { sportsman } = state;
        const patronymic = (sportsman && sportsman.patronymic) || '';
        return `${patronymic}`;
    },
    FullName(state): string {
        const { sportsman } = state;
        const name = (sportsman && sportsman.name) || '';
        const surname = (sportsman && sportsman.surname) || '';
        const patronymic = (sportsman && sportsman.patronymic) || '';
        return `${surname} ${name} ${patronymic}`;
    },
    Gender(state): string {
        const { sportsman } = state;
        const gender = (sportsman && sportsman.gender) || '';
        return `${gender}`;
    },
    SportsmanPhoto(state): string {
        const { sportsman } = state;
        const src = (sportsman && sportsman.photo) || '';
        return `${src}`;
    },
    DateOfBirth(state): string {
        const { sportsman } = state;
        const date_of_birth = (sportsman && sportsman.date_of_birth) || '';
        return `${date_of_birth}`;
    },
    Address(state): string {
        const { sportsman } = state;
        const address = (sportsman && sportsman.address) || '';
        return `${address}`;
    },
    Rusada(state): string {
        const { sportsman } = state;
        const rusada = (sportsman && sportsman.rusada) || '';
        return `${rusada}`;
    },
    Rank(state): string {
        const { sportsman } = state;
        const rank = (sportsman && sportsman.rank) || '';
        return `${rank}`;
    },
    DuanCzi(state): string {
        const { sportsman } = state;
        const duan_czi = (sportsman && sportsman.duan_czi) || '';
        return `${duan_czi}`;
    },
    NameOfCity(state): string {
        const { sportsman } = state;
        const city = (sportsman && sportsman.city?.name_of_city) || '';

        return `${city}`;
    },
    NameOfRegion(state): string {
        const { sportsman } = state;
        const name_of_region = (sportsman && sportsman.city?.name_of_region?.name_of_region) || '';

        return `${name_of_region}`;
    },
    NameOfFederalRegion(state): string {
        const { sportsman } = state;
        const name_of_federal_region =
            (sportsman &&
                sportsman.city?.name_of_region?.name_of_federal_region?.name_of_federal_region) ||
            '';

        return `${name_of_federal_region}`;
    },
    AbbrOfFederalRegion(state): string {
        const { sportsman } = state;
        const abbr_of_federal_region =
            (sportsman &&
                sportsman.city?.name_of_region?.name_of_federal_region?.abbr_of_federal_region) ||
            '';

        return `${abbr_of_federal_region}`;
    },
    NameOfCountry(state): string {
        const { sportsman } = state;
        const name_of_country =
            (sportsman && sportsman.city?.name_of_region?.name_of_country) || '';

        return `${name_of_country}`;
    },
    ConfirmAddress(state): string {
        const { sportsman } = state;
        const confirm_address = (sportsman && sportsman.confirm_address) || '';
        return `${confirm_address}`;
    },
    CovidTest(state): string {
        const { sportsman } = state;
        const covid_test = (sportsman && sportsman.covid_test) || '';
        return `${covid_test}`;
    },
    CovidContact(state): string {
        const { sportsman } = state;
        const covid_contact = (sportsman && sportsman.covid_contact) || '';
        return `${covid_contact}`;
    },
    ParentDoc(state): string {
        const { sportsman } = state;
        const parent_doc = (sportsman && sportsman.parent_doc) || '';
        return `${parent_doc}`;
    },
    SchoolDoc(state): string {
        const { sportsman } = state;
        const school_doc = (sportsman && sportsman.school_doc) || '';
        return `${school_doc}`;
    },
    InsuranceDoc(state): string {
        const { sportsman } = state;
        const insurance_file_doc = (sportsman && sportsman.insurance?.file_insurance) || '';
        return `${insurance_file_doc}`;
    },
    InsuranceDateStart(state): string {
        const { sportsman } = state;
        const insurance_date_start = (sportsman && sportsman.insurance?.date_start) || '';
        return `${insurance_date_start}`;
    },
    InsuranceDateEnd(state): string {
        const { sportsman } = state;
        const insurance_date_end = (sportsman && sportsman.insurance?.date_end) || '';
        return `${insurance_date_end}`;
    },
    BirthCertificateDoc(state): string {
        const { sportsman } = state;
        const birth_certificate = (sportsman && sportsman.birth_certificate?.scan) || '';
        return `${birth_certificate}`;
    },
    BirthCertificateNumber(state): string {
        const { sportsman } = state;
        const birth_certificate_number = (sportsman && sportsman.birth_certificate?.number) || '';
        return `${birth_certificate_number}`;
    },
    OMSDoc(state): string {
        const { sportsman } = state;
        const oms_doc = (sportsman && sportsman.oms?.scan) || '';
        return `${oms_doc}`;
    },
    OMSNumber(state): string {
        const { sportsman } = state;
        const oms_number = (sportsman && sportsman.oms?.number) || '';
        return `${oms_number}`;
    },
    TrainerFullName(state): string {
        const { sportsman } = state;
        const trainer_name = (sportsman && sportsman.trainer?.name) || '';
        const trainer_surname = (sportsman && sportsman.trainer?.surname) || '';
        const trainer_patronymic = (sportsman && sportsman.trainer?.patronymic) || '';
        return `${trainer_surname} ${trainer_name} ${trainer_patronymic}`;
    },
    TrainerPhoto(state): string {
        const { sportsman } = state;
        const trainer_photo = (sportsman && sportsman.trainer?.photo) || '';
        return `${trainer_photo}`;
    },
    TrainerDateOfBirth(state): string {
        const { sportsman } = state;
        const trainer_date_of_birth = (sportsman && sportsman.trainer?.date_of_birth) || '';
        return `${trainer_date_of_birth}`;
    },
    TrainerGender(state): string {
        const { sportsman } = state;
        const trainer_gender = (sportsman && sportsman.trainer?.gender) || '';
        return `${trainer_gender}`;
    },
    NameOfClub(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club = (sportsman && sportsman.club?.name_of_club) || '';
        return `${sportsman_name_of_club}`;
    },
    NameOfClubOwner(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club_owner = (sportsman && sportsman.club?.name_of_owner) || '';
        return `${sportsman_name_of_club_owner}`;
    },
    AddressOfClub(state): string {
        const { sportsman } = state;
        const sportsman_address_of_club = (sportsman && sportsman.club?.address) || '';
        return `${sportsman_address_of_club}`;
    },
    ClubFederation(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club_federation =
            (sportsman && sportsman.club?.federation?.name_of_federation) || '';
        return `${sportsman_name_of_club_federation}`;
    },
    ClubRegion(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club_region =
            (sportsman && sportsman.club?.federation?.name_of_region.name_of_region) || '';
        return `${sportsman_name_of_club_region}`;
    },
    ClubFederalRegion(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club_federal_region =
            (sportsman &&
                sportsman.club?.federation?.name_of_region.name_of_federal_region
                    .name_of_federal_region) ||
            '';
        return `${sportsman_name_of_club_federal_region}`;
    },
    ClubAbbrFederalRegion(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club_abbrfederal_region =
            (sportsman &&
                sportsman.club?.federation?.name_of_region.name_of_federal_region
                    .abbr_of_federal_region) ||
            '';
        return `${sportsman_name_of_club_abbrfederal_region}`;
    },
    ClubNameOfCountry(state): string {
        const { sportsman } = state;
        const sportsman_name_of_club_name_of_country =
            (sportsman &&
                sportsman.club?.federation?.name_of_region.name_of_country) ||
            '';
        return `${sportsman_name_of_club_name_of_country}`;
    },
};

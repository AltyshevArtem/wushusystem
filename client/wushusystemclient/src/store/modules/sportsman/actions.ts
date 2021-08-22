import { ISportsman } from '@/models/sportsman';
import { ActionTree } from 'vuex';
import axios from 'axios';
import { ISportsmanState } from './types';
import isEmpty from '@/scripts/isEmpty';

export const actions: ActionTree<ISportsmanState, null> = {
    getSportsman({ commit }, id: number): any {
        axios
            .get(`/api/sportsmans/${id}`)
            .then((response) => {
                const payload: ISportsman = response && response.data;
                commit('getSportsman', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('getSportsmanError');
            });
    },
    deleteSportsman({ commit }, id: number): any {
        axios
            .delete(`/api/sportsmans/${id}`)
            .then((response) => {
                commit('deleteSportsman');
            })
            .catch((error) => {
                console.log(error);
                commit('deleteSportsmanError');
            });
    },
    postSportsman({ commit }, sportsman: ISportsman): any {
        const data = new FormData();
        if (!isEmpty(sportsman.name)) {
            data.append('name', sportsman.name);
        }
        if (!isEmpty(sportsman.surname)) {
            data.append('surname', sportsman.surname);
        }
        if (!isEmpty(sportsman.patronymic)) {
            data.append('patronymic', sportsman.patronymic);
        }
        if (!isEmpty(sportsman.photo) && typeof sportsman.photo !== 'string') {
            data.append('photo', sportsman.photo);
        }
        if (!isEmpty(sportsman.date_of_birth)) {
            data.append('date_of_birth', String(sportsman.date_of_birth));
        }
        if (!isEmpty(sportsman.address)) {
            data.append('address', String(sportsman.address));
        }
        if (
            !isEmpty(sportsman.confirm_address) &&
            typeof sportsman.confirm_address !== 'string'
        ) {
            data.append('confirm_address', sportsman.confirm_address);
        }
        if (
            !isEmpty(sportsman.rusada) &&
            typeof sportsman.rusada !== 'string'
        ) {
            data.append('rusada', sportsman.rusada);
        }
        if (
            !isEmpty(sportsman.covid_test) &&
            typeof sportsman.covid_test !== 'string'
        ) {
            data.append('covid_test', sportsman.covid_test);
        }
        if (
            !isEmpty(sportsman.covid_contact) &&
            typeof sportsman.covid_contact !== 'string'
        ) {
            data.append('covid_contact', sportsman.covid_contact);
        }
        if (
            !isEmpty(sportsman.parent_doc) &&
            typeof sportsman.parent_doc !== 'string'
        ) {
            data.append('parent_doc', sportsman.parent_doc);
        }
        if (
            !isEmpty(sportsman.school_doc) &&
            typeof sportsman.school_doc !== 'string'
        ) {
            data.append('school_doc', sportsman.school_doc);
        }
        if (!isEmpty(sportsman.gender)) {
            data.append('gender', String(sportsman.gender));
        }
        if (!isEmpty(sportsman.rank)) {
            data.append('rank', String(sportsman.rank));
        }
        if (!isEmpty(sportsman.duan_czi)) {
            data.append('duan_czi', String(sportsman.duan_czi));
        }
        if (!isEmpty(sportsman.insurance)) {
            if (!isEmpty(sportsman.insurance.date_start)) {
                data.append('insurance.date_start', String(sportsman.insurance.date_start));
            }
            if (!isEmpty(sportsman.insurance.date_end)) {
                data.append('insurance.date_end', String(sportsman.insurance.date_end));
            }
            if (
                !isEmpty(sportsman.insurance.file_insurance) &&
                typeof sportsman.insurance.file_insurance !== 'string'
            ) {
                data.append('insurance.file_insurance', sportsman.insurance.file_insurance);
            }
        }
        if (!isEmpty(sportsman.birth_certificate)) {
            if (!isEmpty(sportsman.birth_certificate.number)) {
                data.append('birth_certificate.number', String(sportsman.birth_certificate.number));
            }
            if (!isEmpty(sportsman.birth_certificate.scan) &&
                typeof sportsman.birth_certificate.scan !== 'string'
            ) {
                data.append('birth_certificate.scan', sportsman.birth_certificate?.scan);
            }
        }
        if (!isEmpty(sportsman.proxy)) {
            if (!isEmpty(sportsman.proxy.scan) &&
                typeof sportsman.proxy.scan !== 'string'
            ) {
                data.append('proxy.scan', sportsman.proxy.scan);
            }
            if (!isEmpty(sportsman.proxy.original_passport) &&
                typeof sportsman.proxy.original_passport !== 'string'
            ) {
                data.append('proxy.original_passport', sportsman.proxy.original_passport);
            }
            if (!isEmpty(sportsman.proxy.original_birth_certificate) &&
                typeof sportsman.proxy.original_birth_certificate !== 'string'
            ) {
                data.append(
                    'proxy.original_birth_certificate',
                    sportsman.proxy.original_birth_certificate,
                );
            }
            if (!isEmpty(sportsman.proxy.date_end)) {
                data.append('proxy.date_end', String(sportsman.proxy.date_end));
            }
        }
        if (!isEmpty(sportsman.oms)) {
            if (!isEmpty(sportsman.oms.number)) {
                data.append('oms.number', String(sportsman.oms.number));
            }
            if (!isEmpty(sportsman.oms.scan) &&
                typeof sportsman.oms.scan !== 'string'
            ) {
                data.append('oms.scan', sportsman.oms.scan);
            }
        }
        if (!isEmpty(sportsman.passport)) {
            if (!isEmpty(sportsman.passport.number)) {
                data.append('passport.number', String(sportsman.passport.number));
            }
            if (!isEmpty(sportsman.passport.scan) &&
                typeof sportsman.passport.scan !== 'string'
            ) {
                data.append('passport.scan', sportsman.passport.scan);
            }
            if (!isEmpty(sportsman.passport.date_start)) {
                data.append('passport.date_start', String(sportsman.passport.date_start));
            }
            if (!isEmpty(sportsman.passport.issue)) {
                data.append('passport.issue', String(sportsman.passport.issue));
            }
            if (!isEmpty(sportsman.passport.code)) {
                data.append('passport.code', String(sportsman.passport.code));
            }
        }
        if (!isEmpty(sportsman.city)) {
            data.append('city.id', String(sportsman.city?.id));
        }
        if (!isEmpty(sportsman.club)) {
            data.append('club.id', String(sportsman.club?.id));
        }
        if (!isEmpty(sportsman.trainer)) {
            data.append('trainer.id', String(sportsman.trainer?.id));
        }
        axios
            .post('/api/sportsmans/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----something',
                },
            })
            .then((response) => {
                const payload: ISportsman = response && response.data;
                commit('postSportsman', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('postSportsmanError');
            });
    },
    putSportsman({ commit }, sportsman: ISportsman): any {
        const data = new FormData();
        if (!isEmpty(sportsman.name)) {
            data.append('name', sportsman.name);
        }
        if (!isEmpty(sportsman.surname)) {
            data.append('surname', sportsman.surname);
        }
        if (!isEmpty(sportsman.patronymic)) {
            data.append('patronymic', sportsman.patronymic);
        }
        if (!isEmpty(sportsman.photo) && typeof sportsman.photo !== 'string') {
            data.append('photo', sportsman.photo);
        }
        if (!isEmpty(sportsman.date_of_birth)) {
            data.append('date_of_birth', String(sportsman.date_of_birth));
        }
        if (!isEmpty(sportsman.address)) {
            data.append('address', String(sportsman.address));
        }
        if (!isEmpty(sportsman.confirm_address) &&
            typeof sportsman.confirm_address !== 'string'
        ) {
            data.append('confirm_address', sportsman.confirm_address);
        }
        if (!isEmpty(sportsman.rusada) &&
            typeof sportsman.rusada !== 'string'
        ) {
            data.append('rusada', sportsman.rusada);
        }
        if (!isEmpty(sportsman.covid_test) &&
            typeof sportsman.covid_test !== 'string'
        ) {
            data.append('covid_test', sportsman.covid_test);
        }
        if (!isEmpty(sportsman.covid_contact) &&
            typeof sportsman.covid_contact !== 'string'
        ) {
            data.append('covid_contact', sportsman.covid_contact);
        }
        if (!isEmpty(sportsman.parent_doc) &&
            typeof sportsman.parent_doc !== 'string'
        ) {
            data.append('parent_doc', sportsman.parent_doc);
        }
        if (!isEmpty(sportsman.school_doc) &&
            typeof sportsman.school_doc !== 'string'
        ) {
            data.append('school_doc', sportsman.school_doc);
        }
        if (!isEmpty(sportsman.gender)) {
            data.append('gender', String(sportsman.gender));
        }
        if (!isEmpty(sportsman.rank)) {
            data.append('rank', String(sportsman.rank));
        }
        if (!isEmpty(sportsman.duan_czi)) {
            data.append('duan_czi', String(sportsman.duan_czi));
        }
        if (!isEmpty(sportsman.insurance)) {
            if (!isEmpty(sportsman.insurance.id)) {
                data.append('insurance.id', String(sportsman.insurance.id));
            }
            if (!isEmpty(sportsman.insurance.date_start)) {
                data.append('insurance.date_start', String(sportsman.insurance.date_start));
            }
            if (!isEmpty(sportsman.insurance.date_end)) {
                data.append('insurance.date_end', String(sportsman.insurance.date_end));
            }
            if (!isEmpty(sportsman.insurance.file_insurance) &&
                typeof sportsman.insurance.file_insurance !== 'string'
            ) {
                data.append('insurance.file_insurance', sportsman.insurance.file_insurance);
            }
        }
        if (!isEmpty(sportsman.birth_certificate)) {
            if (!isEmpty(sportsman.birth_certificate.id)) {
                data.append('birth_certificate.id', String(sportsman.birth_certificate.id));
            }
            if (!isEmpty(sportsman.birth_certificate.number)) {
                data.append('birth_certificate.number', String(sportsman.birth_certificate.number));
            }
            if (!isEmpty(sportsman.birth_certificate.scan) &&
                typeof sportsman.birth_certificate.scan !== 'string'
            ) {
                data.append('birth_certificate.scan', sportsman.birth_certificate?.scan);
            }
        }
        if (!isEmpty(sportsman.proxy)) {
            if (!isEmpty(sportsman.proxy.id)) {
                data.append('proxy.id', String(sportsman.proxy.id));
            }
            if (!isEmpty(sportsman.proxy.scan) &&
                typeof sportsman.proxy.scan !== 'string'
            ) {
                data.append('proxy.scan', sportsman.proxy.scan);
            }
            if (!isEmpty(sportsman.proxy.original_passport) &&
                typeof sportsman.proxy.original_passport !== 'string'
            ) {
                data.append('proxy.original_passport', sportsman.proxy.original_passport);
            }
            if (!isEmpty(sportsman.proxy.original_birth_certificate) &&
                typeof sportsman.proxy.original_birth_certificate !== 'string'
            ) {
                data.append(
                    'proxy.original_birth_certificate',
                    sportsman.proxy.original_birth_certificate,
                );
            }
            if (!isEmpty(sportsman.proxy.date_end)) {
                data.append('proxy.date_end', String(sportsman.proxy.date_end));
            }
        }
        if (!isEmpty(sportsman.oms)) {
            if (!isEmpty(sportsman.oms.id)) {
                data.append('oms.id', String(sportsman.oms.id));
            }
            if (!isEmpty(sportsman.oms.number)) {
                data.append('oms.number', String(sportsman.oms.number));
            }
            if (!isEmpty(sportsman.oms.scan) &&
                typeof sportsman.oms.scan !== 'string'
            ) {
                data.append('oms.scan', sportsman.oms.scan);
            }
        }
        if (!isEmpty(sportsman.passport)) {
            if (!isEmpty(sportsman.passport.id)) {
                data.append('passport.id', String(sportsman.passport.id));
            }
            if (!isEmpty(sportsman.passport.number)) {
                data.append('passport.number', String(sportsman.passport.number));
            }
            if (!isEmpty(sportsman.passport.scan) &&
                typeof sportsman.passport.scan !== 'string'
            ) {
                data.append('passport.scan', sportsman.passport.scan);
            }
            if (!isEmpty(sportsman.passport.date_start)) {
                data.append('passport.date_start', String(sportsman.passport.date_start));
            }
            if (!isEmpty(sportsman.passport.issue)) {
                data.append('passport.issue', String(sportsman.passport.issue));
            }
            if (!isEmpty(sportsman.passport.code)) {
                data.append('passport.code', String(sportsman.passport.code));
            }
        }
        if (!isEmpty(sportsman.city)) {
            data.append('city.id', String(sportsman.city?.id));
        }
        if (!isEmpty(sportsman.club)) {
            data.append('club.id', String(sportsman.club?.id));
        }
        if (!isEmpty(sportsman.trainer)) {
            data.append('trainer.id', String(sportsman.trainer?.id));
        }
        axios
            .put(`/api/sportsmans/${sportsman.id}/`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxk',
                },
            })
            .then((response) => {
                const payload: ISportsman = response && response.data;
                commit('putSportsman', payload);
            })
            .catch((error) => {
                console.log(error);
                commit('putSportsmanError');
            });
    },
};

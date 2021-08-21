import { insurance } from './../insurance/index';
import { trainer } from './../trainer/index';
import { sportsman } from './index';
import { ISportsman } from '@/models/sportsman';
import { ActionTree } from 'vuex';
import axios from 'axios';
import { ISportsmanState } from './types';

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
        data.append('name', sportsman.name);
        data.append('surname', sportsman.surname);
        data.append('patronymic', String(sportsman.patronymic));
        data.append('photo', sportsman.photo);
        data.append('date_of_birth', String(sportsman.date_of_birth));
        data.append('address', String(sportsman.address));
        data.append('confirm_address', sportsman.confirm_address);
        data.append('rusada', sportsman.rusada);
        data.append('covid_test', sportsman.covid_test);
        data.append('covid_contact', sportsman.covid_contact);
        data.append('parent_doc', sportsman.parent_doc);
        data.append('school_doc', sportsman.school_doc);
        data.append('gender', String(sportsman.gender));
        data.append('rank', String(sportsman.rank));
        data.append('duan_czi', String(sportsman.duan_czi));

        data.append('insurance.date_start', String(sportsman.insurance?.date_start));
        data.append('insurance.date_end', String(sportsman.insurance?.date_end));
        data.append('insurance.file_insurance', sportsman.insurance?.file_insurance);

        data.append('birth_certificate.number', String(sportsman.birth_certificate?.number));
        data.append('birth_certificate.scan', sportsman.birth_certificate?.scan);

        data.append('proxy.scan', sportsman.proxy?.scan);
        data.append('proxy.original_passport', sportsman.proxy?.original_passport);
        data.append(
            'proxy.original_birth_certificate',
            sportsman.proxy?.original_birth_certificate,
        );
        data.append('proxy.date_end', String(sportsman.proxy?.date_end));

        data.append('oms.number', String(sportsman.oms?.number));
        data.append('oms.scan', sportsman.oms?.scan);

        data.append('passport.number', String(sportsman.passport?.number));
        data.append('passport.scan', sportsman.passport?.scan);
        data.append('passport.date_start', String(sportsman.passport?.date_start));
        data.append('passport.issue', String(sportsman.passport?.issue));
        data.append('passport.code', String(sportsman.passport?.code));

        data.append('city.id', String(sportsman.city?.id));
        data.append('club.id', String(sportsman.club?.id));
        data.append('trainer.id', String(sportsman.trainer?.id));

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
        if (sportsman.name !== (null && '')) {
            data.append('name', sportsman.name);
        }
        if (sportsman.surname !== (null && '')) {
            data.append('surname', sportsman.surname);
        }
        if (sportsman.patronymic !== (null && '')) {
            data.append('patronymic', sportsman.patronymic);
        }
        if (sportsman.photo !== (null && '') && typeof sportsman.photo !== 'string') {
            data.append('photo', sportsman.photo);
        }
        if (sportsman.date_of_birth !== (null && '')) {
            data.append('date_of_birth', String(sportsman.date_of_birth));
        }
        if (sportsman.address !== (null && '')) {
            data.append('address', String(sportsman.address));
        }
        if (
            sportsman.confirm_address !== (null && '') &&
            typeof sportsman.confirm_address !== 'string'
        ) {
            data.append('confirm_address', sportsman.confirm_address);
        }
        if (sportsman.rusada !== (null && '') && typeof sportsman.rusada !== 'string') {
            data.append('rusada', sportsman.rusada);
        }
        if (sportsman.covid_test !== (null && '') && typeof sportsman.covid_test !== 'string') {
            data.append('covid_test', sportsman.covid_test);
        }
        if (
            sportsman.covid_contact !== (null && '') &&
            typeof sportsman.covid_contact !== 'string'
        ) {
            data.append('covid_contact', sportsman.covid_contact);
        }
        if (sportsman.parent_doc !== (null && '') && typeof sportsman.parent_doc !== 'string') {
            data.append('parent_doc', sportsman.parent_doc);
        }
        if (sportsman.school_doc !== (null && '') && typeof sportsman.school_doc !== 'string') {
            data.append('school_doc', sportsman.school_doc);
        }
        if (sportsman.gender !== (null && '')) {
            data.append('gender', String(sportsman.gender));
        }
        if (sportsman.rank !== (null && '')) {
            data.append('rank', String(sportsman.rank));
        }
        if (sportsman.duan_czi !== (null && '')) {
            data.append('duan_czi', String(sportsman.duan_czi));
        }
        if (sportsman.insurance !== (null && '')) {
            if (sportsman.insurance.id !== (null && '')) {
                data.append('insurance.id', String(sportsman.insurance.id));
            }
            if (sportsman.insurance.date_start !== (null && '')) {
                data.append('insurance.date_start', String(sportsman.insurance.date_start));
            }
            if (sportsman.insurance.date_end !== (null && '')) {
                data.append('insurance.date_end', String(sportsman.insurance.date_end));
            }
            if (
                sportsman.insurance.file_insurance !== (null && '') &&
                typeof sportsman.insurance.file_insurance !== 'string'
            ) {
                data.append('insurance.file_insurance', sportsman.insurance.file_insurance);
            }
        }
        if (sportsman.birth_certificate !== (null && '')) {
            if (sportsman.birth_certificate.id !== (null && '')) {
                data.append('birth_certificate.id', String(sportsman.birth_certificate.id));
            }
            if (sportsman.birth_certificate.number !== (null && '')) {
                data.append('birth_certificate.number', String(sportsman.birth_certificate.number));
            }
            if (
                sportsman.birth_certificate.scan !== (null && '') &&
                typeof sportsman.birth_certificate.scan !== 'string'
            ) {
                data.append('birth_certificate.scan', sportsman.birth_certificate?.scan);
            }
        }
        if (sportsman.proxy !== (null && '')) {
            if (sportsman.proxy.id !== (null && '')) {
                data.append('proxy.id', String(sportsman.proxy.id));
            }
            if (sportsman.proxy.scan !== (null && '') && typeof sportsman.proxy.scan !== 'string') {
                data.append('proxy.scan', sportsman.proxy.scan);
            }
            if (
                sportsman.proxy.original_passport !== (null && '') &&
                typeof sportsman.proxy.original_passport !== 'string'
            ) {
                data.append('proxy.original_passport', sportsman.proxy.original_passport);
            }
            if (
                sportsman.proxy.original_birth_certificate !== (null && '') &&
                typeof sportsman.proxy.original_birth_certificate !== 'string'
            ) {
                data.append(
                    'proxy.original_birth_certificate',
                    sportsman.proxy.original_birth_certificate,
                );
            }
            if (sportsman.proxy.date_end !== (null && '')) {
                data.append('proxy.date_end', String(sportsman.proxy.date_end));
            }
        }
        if (sportsman.oms !== (null && '')) {
            if (sportsman.oms.id !== (null && '')) {
                data.append('oms.id', String(sportsman.oms.id));
            }
            if (sportsman.oms.number !== (null && '')) {
                data.append('oms.number', String(sportsman.oms.number));
            }
            if (sportsman.oms.scan !== (null && '') && typeof sportsman.oms.scan !== 'string') {
                data.append('oms.scan', sportsman.oms.scan);
            }
        }
        if (sportsman.passport !== (null && '')) {
            if (sportsman.passport.id !== (null && '')) {
                data.append('passport.id', String(sportsman.passport.id));
            }
            if (sportsman.passport.number !== (null && '')) {
                data.append('passport.number', String(sportsman.passport.number));
            }
            if (
                sportsman.passport.scan !== (null && '') &&
                typeof sportsman.passport.scan !== 'string'
            ) {
                data.append('passport.scan', sportsman.passport.scan);
            }
            if (sportsman.passport.date_start !== (null && '')) {
                data.append('passport.date_start', String(sportsman.passport.date_start));
            }
            if (sportsman.passport.issue !== (null && '')) {
                data.append('passport.issue', String(sportsman.passport.issue));
            }
            if (sportsman.passport.code !== (null && '')) {
                data.append('passport.code', String(sportsman.passport.code));
            }
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

import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { IListSportsmansState } from './types';

export const state: IListSportsmansState = {
    listSportsmans: '',
    page: 1,
    search: '?name=&gender=&club=&city=&trainer=&rank=&duan_czi=',
    error: false,
};

export const listSportsmans: Module<IListSportsmansState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};


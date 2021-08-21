import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { ISportsmansState } from './types';

export const state: ISportsmansState = {
    sportsmans: [],
    page: 1,
    page_size: 0,
    count: 0,
    search: '?name=&gender=&club=&city=&rank=&duan_czi=&trainer=',
    error: false,
};

export const sportsmans: Module<ISportsmansState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

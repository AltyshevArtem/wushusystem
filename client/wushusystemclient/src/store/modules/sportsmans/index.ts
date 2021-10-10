/* VUEX */
import { Module } from 'vuex';

/* ACTION */
import { actions } from './actions';

/* MUTATION */
import { mutations } from './mutations';

/* TYPES */
import { ISportsmansState } from './types';

export const state: ISportsmansState = {
    sportsmans: [],
    page: 1,
    pageSize: 0,
    count: 0,
    search: '?name=&gender=&club=&city=&rank=&duan_czi=&trainer=&federal_region=&region=',
    error: false,
};

export const sportsmans: Module<ISportsmansState, null> = {
    namespaced: true,
    state,
    actions,
    mutations,
};

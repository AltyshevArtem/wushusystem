/* eslint-disable camelcase */
import { createStore } from 'vuex';
import { sportsmans } from './modules/sportsmans/index';
import { sportsman } from './modules/sportsman/index';
import { rank } from './modules/rank/index';
import { duan_czi } from './modules/duan_czi/index';
import { gender } from './modules/gender/index';
import { club } from './modules/club/index';
import { city } from './modules/city/index';
import { trainer } from './modules/trainer/index';
import { federal_region } from './modules/federal_region/index';
import { region } from './modules/region/index';
import { insurance } from './modules/insurance/index';
import { birth_certificate } from './modules/birth_certificate/index';
import { oms } from './modules/oms/index';
import { passport } from './modules/passport/index';
import { proxy } from './modules/proxy/index';

export default createStore({
    modules: {
        sportsmans,
        sportsman,
        rank,
        duan_czi,
        gender,
        club,
        city,
        trainer,
        federal_region,
        region,
        insurance,
        birth_certificate,
        oms,
        passport,
        proxy,
    },
});

import { createStore } from 'vuex';
import { listSportsmans } from './modules/listSportsmans/index';
import { sportsman } from './modules/sportsman/index';
import { rank } from './modules/rank/index';
import { duan_czi } from './modules/duan_czi/index';
import { gender } from './modules/gender/index';
import { club } from './modules/club/index';
import { city } from './modules/city/index';

export default createStore({
    modules: {
        listSportsmans,
        sportsman,
        rank,
        duan_czi,
        gender,
        club,
        city,
    },
});

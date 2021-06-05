import { createStore } from 'vuex';
import { listSportsmans } from './modules/listSportsmans/index';
import { sportsman } from './modules/sportsman/index';

export default createStore({
    modules: {
        listSportsmans,
        sportsman,
    },
});

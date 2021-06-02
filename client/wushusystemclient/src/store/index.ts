import { createStore } from 'vuex';
import { listSportsmans } from './modules/listSportsmans/index';

export default createStore({
    modules: {
        listSportsmans,
    },
});

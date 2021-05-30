import { createStore } from 'vuex';
import { sportsman } from './modules/sportsman/index';

export default createStore({
    modules: {
        sportsman,
    },
});

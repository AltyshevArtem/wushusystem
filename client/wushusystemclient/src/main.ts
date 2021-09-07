/* VUE */
import { createApp } from 'vue';
import App from './App.vue';

/* DEVTOOLS */
import { devtools } from './devtools';

/* ROUTER */
import router from './router';

/* STORE */
import store from './store';

/* LOCAL STYLES */
import '@/styles.css';

/* BOOTSTRAP STYLES */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* VUE FORM STYLES */
import '@vueform/multiselect/themes/default.css';

/* NOTIFICATIONS */


//TODO: убрать declare global
declare global {
    interface Window {
        __VUE_DEVTOOLS_GLOBAL_HOOK__?: any;
    }
}

createApp(App).use(devtools).use(store).use(router).mount('#app');

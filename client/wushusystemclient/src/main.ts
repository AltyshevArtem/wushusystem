import { createApp } from 'vue';
import App from './App.vue';
import { devtools } from './devtools';
import router from './router';
import store from './store';
import '@/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

declare global{
    interface Window {
        __VUE_DEVTOOLS_GLOBAL_HOOK__?: any;
    }
}

createApp(App).use(devtools).use(store).use(router).mount('#app');




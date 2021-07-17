import store from '@/store';
import { sportsman } from '@/store/modules/sportsman';
import { createRouter, createWebHistory, onBeforeRouteUpdate, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/sportsmans',
        name: 'Sportsmans',
        component: () => import('../views/TableSportsman.vue'),
    },
    {
        //TODO: Если спортсмена по такому ID не существует делать редирект
        path: '/sportsman/:id',
        name: 'Sportsman',
        component: () => import('../views/CardSportsman.vue'),
    },
    {
        //TODO: Сделать так, чтобы на домашней странице не было 404
        path: '/:NotFound(.*)*',
        name: 'NotFound',
        component: () => import('../components/NotFound/PageNotFound.vue'),
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

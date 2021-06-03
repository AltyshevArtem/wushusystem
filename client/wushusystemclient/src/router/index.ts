import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/sportsmans',
        name: 'Sportsmans',
        component: () => import('../views/TableSportsman.vue'),
    },
    {
        path: '/sportsmans/:id',
        name: 'Sportsman',
        component: () => import('../views/CardSportsman.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

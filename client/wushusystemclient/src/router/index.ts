import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
        path: '/sportsman/add_new',
        name:'SportsmanAdd',
        component: () => import('../components/AddCardSportsman/AddCardSportsman.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

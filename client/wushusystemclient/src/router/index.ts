import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/sportsmans',
        name: 'Sportsmans',
        component: () => import('@/components/Sportsman/Sportsman.vue'),
    },
    {
        path: '/sportsman/:id',
        name: 'Sportsman',
        component: () => import('@/components/Sportsman/CardSportsman/CardSportsman.vue'),
    },
    {
        path: '/sportsmans/new',
        name: 'CreateSportsman',
        component: () => import('@/components/Sportsman/AddCardSportsman/AddCardSportsman.vue'),
    },
    {
        path: '/sportsman/edit/:id',
        name: 'EditSportsman',
        component: () => import('@/components/Sportsman/EditCardSportsman/EditCardSportsman.vue'),
    },
    {
        //TODO: Сделать так, чтобы на домашней странице не было 404(добавь главную страницу лол)
        path: '/:NotFound(.*)*',
        name: 'NotFound',
        component: () => import('@/components/NotFound/PageNotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

import {RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CounterViewVue from '../views/CounterView.vue';

const routes : RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/counter',
        name: 'counter',
        component: CounterViewVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Page from '../views/Page.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Page',
        name: 'Page',
        component: Page
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

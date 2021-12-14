import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Page from '../views/Page.vue';
import Page2 from '../views/Page2.vue';

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
    },
    {
        path: '/Page2',
        name: 'Page2',
        component: Page2
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

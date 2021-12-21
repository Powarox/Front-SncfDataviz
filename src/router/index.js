import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Page from '../views/Page.vue';
import Page2 from '../views/Page2.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Accueil',
        }
    },
    {
        path: '/About',
        name: 'About',
        component: About,
        meta: {
            title: 'About',
        }
    },
    {
        path: '/Page',
        name: 'Page',
        component: Page,
        meta: {
            title: 'Page 1',
        }
    },
    {
        path: '/Page2',
        name: 'Page2',
        component: Page2,
        meta: {
            title: 'Page 2',
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found',
        }
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to, from) => {
    console.log(from, to);
    document.title = to.meta.title;
})

export default router;

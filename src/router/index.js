import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Analytics from '../views/Analytics.vue';
import Map from '../views/Map.vue';
import About from '../views/About.vue';

import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';

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
        path: '/Analytics',
        name: 'Analytics',
        component: Analytics,
        meta: {
            title: 'Analytics',
        }
    },
    {
        path: '/Map',
        name: 'Map',
        component: Map,
        meta: {
            title: 'Map',
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
        path: '/Page2',
        name: 'Page2',
        component: Page2,
        meta: {
            title: 'Page 2',
        }
    },
    {
        path: '/Page3',
        name: 'Page3',
        component: Page3,
        meta: {
            title: 'Page 3',
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

router.afterEach((to) => {  // (to, from)
    // console.log(from, to);
    document.title = to.meta.title;
})

export default router;

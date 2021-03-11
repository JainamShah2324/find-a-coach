import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/couches'
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: null,
            children: [
                {
                    path: '/:id',
                    name: 'coach',
                    component: null,
                    children: [
                        {
                            path: '/contact',
                            name: 'coach.contact',
                            component: null
                        }
                    ]
                }
            ]
        },
        {
            path: '/register',
            name: 'register-couch',
            component: null
        },
        {
            path: '/request',
            name: 'request',
            component: null
        },
        {
            path: '/:not-found(.*)',
            component: null
        }
    ]
});

export default router;
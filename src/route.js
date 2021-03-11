import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList';
import CoachDetail from './pages/coaches/CoachDetail';
import CoachRegistration from './pages/coaches/CoachRegistration';
import ContactCoach from './pages/request/ContactCoach';
import RequestReceived from './pages/request/RequestReceived';
import NotFound from './pages/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            name: 'coaches',
            component: CoachesList
        },
        {
            path: '/coach/:id',
            name: 'coach',
            component: CoachDetail,
            children: [{
                path: 'contact',
                name: 'coach.contact',
                component: ContactCoach
            }]
        },
        {
            path: '/register',
            name: 'register-couch',
            component: CoachRegistration
        },
        {
            path: '/requests',
            name: 'requests',
            component: RequestReceived
        },
        {
            path: '/:not-found(.*)',
            component: NotFound
        }
    ]
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails';
import CoachList from './pages/coaches/CoachList';
import CoachRegistration from './pages/coaches/CoachRegistration';
import ContactCoach from './pages/request/ContactCoach';
import RequestReceived from './pages/request/RequestReceived';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth';
import Store from './store/index';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
          path: '/coaches',
          component: CoachList
        },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            props: true,
            children: [
                { 
                    path: 'contact',
                    component: ContactCoach
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegistration,
            meta: { requiresAuth: true }
        },
        {
            path: '/requests',
            component: RequestReceived,
            meta: { requiresAuth: true }
        },
        {
            path: '/auth',
            component: UserAuth,
            meta: { requiresUnauth: true }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        },
    ]
});

router.beforeEach(function(to, _, next){
 if (to.meta.requiresAuth && !Store.getters.isAuthenticated) {
     next('/auth');
 } else if (to.meta.requiresUnauth && Store.getters.isAuthenticated) {
     next('/coaches');
 } else{
     next();
 }
})
export default router;
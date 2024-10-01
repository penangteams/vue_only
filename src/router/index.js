import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/views/HomeView.vue')
                },
                {
                    path: '/jobs',
                    name: 'jobs',
                    component: () => import('@/views/JobsView.vue')
                },
                {
                    path: '/jobs/:id',
                    name: 'job',
                    component: () => import('@/views/JobView.vue')
                },
                {
                    path: '/jobs/add',
                    name: 'add-job',
                    component: () => import('@/views/AddJobView.vue')
                },
                {
                    path: '/jobs/edit/:id',
                    name: 'edit-job',
                    component: () => import('@/views/EditJobView.vue')
                },
                {
                    path: '/:catchAll(.*)',
                    name: 'not-found',
                    component: () => import('@/views/NotFoundView.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;

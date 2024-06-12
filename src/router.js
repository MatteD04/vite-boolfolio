import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import project from './pages/project.vue';
import ProjectInfo from './pages/ProjectInfo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/project',
            name: 'project',
            component: project
        },
        {
            path: '/project/:slug',
            name: 'project-info',
            component: ProjectInfo
        }
    ]
});

export { router };
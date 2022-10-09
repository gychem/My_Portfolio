import Projects from '../pages/Projects.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/About',
        component: About
    },
    {
        path: '/',
        component: Projects
    },
    {
        path: '/contact',
        component: Contact
    }
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
})

export default router;
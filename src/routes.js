import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Education from './components/Education.vue'
import Homee from './components/Homee.vue'
import Skill from './components/Skill.vue'
import Page from './components/Page.vue'
const routes = [
    {
        name: 'Home',
        path: '/',
        component:Home
    },
    {
        name: 'Profile',
        path: '/profile',
        component:Profile
    },
    {
        name: 'Education',
        path: '/education',
        component:Education
    },
    {
        name: 'Homee',
        path: '/homee',
        component:Homee
    },
    {
        name: 'Skill',
        path: '/skill',
        component:Skill
    },
    {
        name: 'Page',
        path: '/:pathMatch(.*)*',
        component:Page
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
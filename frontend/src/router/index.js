import {createRouter, createWebHistory} from "vue-router";
import Join from '../components/Join.vue';
import Meeting from '../components/Meeting.vue';

const routes = [
    {
        path: '/',
        name: 'join',
        component: Join
    },
    {
        path: '/meeting',
        name: 'meeting',
        component: Meeting
    }
]

export default createRouter({
    routes, 
    history: createWebHistory(),
})
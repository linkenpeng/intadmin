import {createRouter, createWebHashHistory} from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')

const routes = [
    {name: 'home', path: '/home', component: Home},
    {name: 'about', path: '/about', component: About},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

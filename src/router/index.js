import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserCenter from "../views/user-center/index.vue";

const UserProfile = () => import("../views/user-center/Profile.vue");
const UserSettings = () => import("../views/user-center/Settings.vue");
const ActivityIndex = () => import("../views/activity/index.vue");
const NotFound = () => import("../views/404.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/activity/index",
    name: "ActivityIndex",
    component: ActivityIndex
  },
  {
    path: "/user",
    name: "UserCenter",
    component: UserCenter,
    redirect: "/user/profile",
    children: [
      {
        name: "profile",
        path: "profile",
        component: UserProfile
      },
      {
        name: "settings",
        path: "settings",
        component: UserSettings
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;




/*
import {createRouter, createWebHashHistory} from 'vue-router'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Header1 = () => import('../components/Header1.vue')
const Header2 = () => import('../components/Header2.vue')

const routes = [
    {name: 'home', path: '/home', components: {default:Home, top:Header1}},
    {name: 'about', path: '/about', components: {default:About, top:Header2}},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
*/

import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/Home/home' 
import about from './views/History/history'
import profile from './views/Profile/profile'
import login from './views/login/login'

Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "home",
        component: home,
    },
    {
        path: "/",
        name: "login",
        component: login,
    },
    {
        path: "/history",
        name: "history",
        component: about,
    },
    {
        path: "/profile",
        name: "profile",
        component: profile,
    },
    {
        path: "/name",
        name: "name",
        component: name
    },
    {
        path: "/update",
        name: "update",
        component: update
    },
    {
        path: "/price",
        name: "price",
        component: price
    },
    {
        path: "/search",
        name: "search",
        component: search
    },
]

const mainRouter = new VueRouter({
    mode: 'history',
    routes,
})

export default  mainRouter
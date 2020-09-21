import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/Home/home' 
import name from './views/Home/name'
import update from './views/Home/update'
import price from './views/Home/price'
import search from './views/Home/search'
import about from './views/History/history'
import profile from './views/Profile/profile'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
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
],

const mainRouter = new VueRouter({
    mode: 'history',
    routes,
})

export default  mainRouter
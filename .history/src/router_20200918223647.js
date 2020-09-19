import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/Home/home' 
import name from './views/Home/name'
import search from './views/Home/search'
import about from './views/History/history'
import profile from './views/Profile/profile'

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    mode:'history',
    routes: [
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
            component: name
        },
        {
            path: "/price",
            name: "price",
            component: name
        },
        {
            path: "/search",
            name: "search",
            component: search
        },
    ],
})

export default  mainRouter
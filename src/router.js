import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/Home/home' 
import about from './views/History/history'
import register from './views/register/register'
import login2 from './views/login/login2'

Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "home",
        component: home,
    },
    {
        path: "/",
        name: "login2",
        component: login2,
    },
    {
        path: "/history",
        name: "history",
        component: about,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
]

const mainRouter = new VueRouter({
    mode: 'history',
    routes,
})

export default  mainRouter
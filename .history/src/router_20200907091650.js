import Vue from "vue"
import VueRouter from "vue-router"
import home  from  './views/Home/home' 
import about from './views/History/history'
import profile from './views/Profile/profile'

Vue.use(VueRouter)

const mainRouter = new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: home,
        },{
            path: "/history",
            name: "history",
            component: about,
        },
        {
            path: "/profile",
            name: "profile",
            component: profile,
        }
    ],
})

export default  mainRouter
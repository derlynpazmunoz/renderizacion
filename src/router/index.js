import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplos from '../views/Ejemplos.vue'
import Ejemplo2 from '../views/Ejemplo2.vue'
import Vfor from '../views/Vfor.vue'
import Vif from '../views/Vif.vue'




Vue.use(VueRouter)

const routes = [
{
path: '/',
name: 'home',
component: HomeView
},
{
path:'/Ejemplos',
name:'Ejemplos',
component: Ejemplos
},
{
path: '/Ejemplo2',
name: 'Ejemplo2',
component:Ejemplo2,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
},
{
path: '/Vfor',
name: 'Vfor',
component: Vfor
},
{
path: '/Vif',
name: 'Vif',
component: Vif
},
{
path: '/Vnodel',
name: 'Vnodel',
component: Vnodel
},
{
path: '/Von',
name: 'Von',
component: Von
}
]

const router = new VueRouter({
  routes
})

export default router

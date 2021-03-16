import Vue from 'vue'
import Router from 'vue-router'

//push 
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/click',
    name: 'click',
    component: () => import('../views/click'),
  }, {
    path: '/hover',
    name: 'hover',
    component: () => import('../views/hover'),
  }, {
    path: '/404',
    name: '404',
    component: () => import('../views/404'),
  }, {
    path: '/in',
    name: 'in',
    component: () => import('../views/in'),
  }, ]
})
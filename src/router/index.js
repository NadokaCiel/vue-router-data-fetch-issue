import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Tab from '../components/Tab.vue'
const Tab = resolve => require(['../components/Tab.vue'], resolve)
let router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: {name:'tab',params:{id:1}} },
    { path: '/tab/:id', name:'tab',component: Tab },
  ]
})

export default router
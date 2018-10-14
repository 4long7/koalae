import Vue from 'vue/dist/vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Main',
      component: require('../components/Main.vue')
    }, {
      path: '/foo',
      name: 'foo',
      component: require('../components/Hello.vue')
    }, {
      path: '/article',
      name: 'article',
      component: () => import('../components/Article.vue')
    }, {
      path: '/liuyan',
      name: 'liuyan',
      component: require('../components/Liuyan.vue')
    }, {
      path: '/about',
      name: 'about',
      component: require('../components/about.vue')
    }, {
      path: '/lable',
      name: 'lable',
      component: require('../components/Type.vue')
    }
  ]
})

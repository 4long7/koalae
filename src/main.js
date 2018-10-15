// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import axios from 'axios'
NProgress.start()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
NProgress.done()

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})

axios.interceptors.request.use((config) => {
  // 请求开始，蓝色过渡滚动条开始出现
  NProgress.start()
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加一个返回拦截器
axios.interceptors.response.use((response) => {
  // 请求结束，蓝色过渡滚动条消失
  NProgress.done()
  return response
}, (error) => {
  // 请求结束，蓝色过渡滚动条消失
  // 即使出现异常，也要调用关闭方法，否则一直处于加载状态很奇怪
  return Promise.reject(error)
})

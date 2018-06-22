// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './vuex/store'
import VeeValidate from 'vee-validate'
import AttachFastClick from 'fastclick'
//移动端H5组件库
// import Vimo from 'vimo'
import VueMoment from 'vue-moment'
//国际化
import VueI18n from 'vue-i18n'
import langCN from './lang/cn'
import langEN from './lang/en'
import router from './router/index'
import routesEach from './router/routes-each'

//old style
import './assets/css/main.css'

import './assets/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

//element-ui插件
Vue.use(ElementUI);

//使用vuex
Vue.use(Vuex);

//表单验证插件
Vue.use(VeeValidate,{
  classes: true
})

// fastclick init
new AttachFastClick(document.body)

//时间格式化插件
Vue.use(VueMoment)

//国际化
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn',
  fallbackLocale: 'cn',
  message: {
    cn: langCN,
    en: langEN
  }
})

//路由拦截器
router.beforeEach(routesEach.beforeEach)
router.afterEach(routesEach.afterEach)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',
  store
})

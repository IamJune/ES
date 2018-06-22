/**
 * Created by raytine on 2018/6/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import storage from '@/service/storage-service'

const tabRoutes = [
  '/tab/question-manage',
  '/tab/paper-manage',
  '/tab/paper-score',
  '/tab/score-analyze'
]

//跳转前
const beforeEach = (toRoute, fromRoute, next) => {
  const to = toRoute.path
  const from = fromRoute.path
  var scrollTop = 0;

  let savedTo = storage.get(to)
  if(savedTo && savedTo.history){
    // back
    savedTo.history = false
    storage.set(to, savedTo)
  }else{
    storage.set(from || '/login',{
      history: true,
      scrolltop: scrollTop
    })
    // forward
  }

  if(from && tabRoutes.indexOf(from) > -1){
    storage.set(from,{
      history: false,
      scrollTop: scrollTop
    })
  }
  // 某些页面定制 page transition direction
  if(
    (from.indexOf('/login') > -1) || (tabRoutes.indexOf(from) > -1 && tabRoutes.indexOf(to) == -1)
  ){
    // forward
  }

  if(
    (to == '/login') || (tabRoutes.indexOf(to) > -1 && from.indexOf('/login') == -1)
  ){
    // back
  }
  next();
}

//跳转后
const afterEach = (toRoute, fromRoute) => {
  const to = toRoute.path
  const from = fromRoute.path

  if(from.indexOf('/login') > -1 && tabRoutes.indexOf(to) > -1) return

  const h =storage.get(to)
  if(h && h.scrollTop){
    Vue.nextTick(() => {
      // Vonic.app.pageContentScrollTop(h.scrollTop)
    })
  }
}

const routesEach = {
  beforeEach: beforeEach,
  afterEach: afterEach
}

export default routesEach

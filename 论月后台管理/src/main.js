import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
//路由守卫
import '@/permission' // permission control
// 引入echarts 5.0 及以上版本查找不到
import echarts from "echarts"
//懒加载
import VueLazyLoad from 'vue-lazyload'
//导入移动端的适配文件
import './assets/css/reset.css'
import "./assets/js/remScale"
//导入移动端框架MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 动态创建组件 全局挂载
import toastRegistry from './utils/toast_index.js'//用这个方法注册组件，所有vue页面都可以使用，不用再import
//定义全局组件生成的有2个种方法，一种myPlugin={install(){...}},一种function myPlugin(){....}
//vue.use方法内部，会判断toastRegistry，如果是函数就直接执行，如果是object则执行它的install对象
//导为导入的toastRegistry是一个函数，所以也可以直接执行toastRegistry()
Vue.use(toastRegistry)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueLazyLoad,{
    error:'./static/error.png',                        //报错需要的图片
    loading:'./static/loading.png'					// 替换需要的图片
})
Vue.prototype.$echarts = echarts;
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale },MintUI)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

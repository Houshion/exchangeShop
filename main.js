import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// 引入vuex仓储管理工具
import store from '@/store'

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)

// 全局引入request封装方法
import request from '@/tools/request'
Vue.prototype.request = request

// 全局引入公共函数
import hc_base from '@/tools'
Vue.prototype.base = hc_base

const app = new Vue({
	store,
	...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/tools/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/api'
Vue.use(httpApi, app)

app.$mount()

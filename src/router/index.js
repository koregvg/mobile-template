/**
 * @file router/index
 * @author wangpai(wangpai@xiaomi.com)
 */

import Vue from 'vue'
import Router from 'vue-router'
import routerObj from './routerfy'

Vue.use(Router)

const router = new Router(routerObj)

export default router

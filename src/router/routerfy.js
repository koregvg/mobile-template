/**
 * @file routerfy
 * @author wangpai(wangpai@xiaomi.com)
 */

import routerList from './routerList'

let routerObj = {
    routes: []
}

Object.keys(routerList).forEach(key => {
    let routerItem = Object.create(null),
        itemObj = routerList[key],
        baseDir = itemObj.baseDir,
        tplName = itemObj.tplName

    routerItem.path = `/${baseDir}`
    routerItem.name = tplName
    routerItem.component = () => import(`@/pages/${baseDir}/${tplName}.vue`)
    routerObj.routes.push(routerItem)
})

//初始页面路由
routerObj.routes.push({
    path: '/',
    component: () => import(`@/pages/home/home.vue`),
    name: 'home',
    meta: {
        title: '首页'
    }
})
// default路由
routerObj.routes.push({
    path: '*',
    component: () => import(`@/pages/notFound/notFound.vue`),
    name: 'notFound',
    meta: {
        title: '页面不存在'
    }
})

export default routerObj

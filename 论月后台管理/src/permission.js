import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
//   meta: { title: '球类',
//   role: ['shopify_operation', 'shopify_develop', 'amazon_operation', 'amazon_develop',
//   'ebay_operation', 'ebay_develop', 'shuke_operation', 'shuke_develop', 'administrator', 'atom_develop', 'atom_operation','flow_operation', 'flow_develop']

// }/
  document.title = getPageTitle(to.meta.title)//获取页面标题

  // determine whether the user has logged in
  const hasToken = getToken()//查看是否已经有了token值
//有则继续
  if (hasToken) {
    //判断用户是不是去登录页面
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      //是的话就重定向去首页
      next({ path: '/' })
      //到此则进度条结束无需下面的操作
      NProgress.done()
    } else {//导如果不是去登录页面去其他页面
      //在里面判断是不是能不能拿到用户信息
      if (store.getters.roles.length !== 0) {
        //能够拿到就直接跳转到用户自己想去的页面
        next()
      } else { //拿不到的话
        try {
          //派遣任务去仓库那拿取从登录页面传送的用户信息
          store.dispatch('user/getInfo').then((res) => {// 拉取info
            store.dispatch('GenerateRoutes', res.roles).then(() => { // 生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record设置replace: true，这样导航就不会留下历史记录
            })
          }).catch(err => {
            console.log(err,"1111111111111")
          })

        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // 白名单，在白名单当中的路由可以免登录，直接进入。
//比较常见的使用场景是进入登陆界面或者是进入扫码下载界面

router.beforeEach(async(to, from, next) => {  //全局前置守卫,当有路由进行跳转时就会进入这个守卫，
//这个守卫方法接收三个参数：
//to: Route: 即将要进入的目标 路由对象
//from: Route: 当前导航正要离开的路由
//next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  NProgress.start() // 开始加载进度条

  document.title = getPageTitle(to.meta.title)//设置页面标题
  
  const hasToken = getToken() //判断用户是否登录，也就是是否能获得token值，
  //在实际开发当中有token值就意味着已经登录了
  
  if (hasToken) {  //如果有token值（用户登录了！）
    if (to.path === '/login')  {  //如果路由要跳转到登录页面
      
      next({ path: '/' })  //界面会重定向到首页，
      //这种场景不是应用于退出登录的，一般是用于因为有人在路径当中直接输入/login来进行路由跳转，
      //然后就会重定向回首页
      
      NProgress.done() //进度条结束
    } else {  // 否则路由要跳转到其他界面，比如首页
      // const hasGetUserInfo = store.getters.name // 去vuex仓库拿取用户名字
      if (store.getters.roles.length !==0) {  // 如果拿取到了用户的名字信息就直接让它跳转到下一个路由
        next()   // 跳转到下一个路由
      } else {   //否则
        try {   
          store.dispatch("/user/getInfo").then((res)=>{//拉取info
            console.log(res)  
            store.dispatch("GenerateRouters",res.roles).then(()=>{//生成可访问的路由表
              router.addRoutes(store.getters.addRoutes)//动态添加可访问路由表
              next({...to,replace:true})
            })
          }).catch((err)=>{
            console.log(err)
          })
          // await store.dispatch('user/getInfo')  //  触发vux仓库的获取用户信息的事件，获取用户信息
          // next()   // 成功获取到用户信息，跳转到下一个路由
        } catch (error) { // 获取用户信息失败，进入以下一级
          await store.dispatch('user/resetToken')  // 获取用户信息失败后，就删除token
          Message.error(error || 'Has Error')   //提示相应的错误
          next(`/login?redirect=${to.path}`)  //并跳转回登录界面，重新登录
          NProgress.done()   // 进度条结束
        }
      }
    }
  } else {  // 进入这一级就意味着没有获得token,也就是没有登录
    if (whiteList.indexOf(to.path) !== -1) {  //进行遍历如果要去往的路由在白名单内
      next()  // 就允许直接跳转
    } else {  //否则，说明要去往的路由不在白名单内而且用户也没登录
      next(`/login?redirect=${to.path}`)  // 那么，哦里给，滚回登录页去吧,或者只能留在登录页
      NProgress.done()  //结束了，bor
    }
  }
})

router.afterEach(() => {  //全局后置钩子
  NProgress.done()
})
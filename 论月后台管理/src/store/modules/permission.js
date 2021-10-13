import { asyncRouterMap, constantRouterMap } from '@/router'

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

const permission = {
  state: {
    permission_routes: constantRouterMap,//与layout文件夹中的index.vue匹配
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, accessedRouters) => {
      state.addRouters = accessedRouters
      state.permission_routes = constantRouterMap.concat(accessedRouters)//将两个数组拼接并返回一个新的数组
    }
  },
  actions: {
    //data就是permission.js中的res.roles
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const roles = data
        const accessedRouters = asyncRouterMap.filter(v => {
          if (roles.indexOf(1) >= 0) return true
          if (hasPermission(roles, v)) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter(child => {
                if (hasPermission(roles, child)) {
                  return child
                }
                return false
              })
              return v
            } else {
              return v
            }
          }
          return false
        })
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission

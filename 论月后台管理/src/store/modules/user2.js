import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, getId, setId, removeId } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: '',
    id: getId(),
    num: '',
  }
}
const state = getDefaultState()
const mutations = {
  //mutations是唯一改变状态机的数据的地方
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, role) => {
    state.roles = role//路由出不来
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_NUM: (state, num) => {
    state.num = num
  }
}
const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      // login({ username: username.trim(), password: password }).then(response => {
      //调取登录接口将令牌和ID存入cookie
      login(userInfo).then(response => {
        const data = response.data
        //actions行动发送数据data.token，data.id给mutations以便于更改getDefaultState中默认数据
        commit('SET_TOKEN', data.access_token)
        commit('SET_NAME', data.username)
        setToken(data.access_token)
        setId(data.id)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      // 获取用户信息接口
      getInfo(state.token.getId()).then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { username, type, id, roles } = data
        //actions行动发送数据data.token，data.id给mutations以便于更改getDefaultState中默认数据
        //将后台返回的的数据   const { username,type,id, roles } = data发送给mutations，第一个参数为标记 第二个参数为数据
        //登录需要将令牌和id以及用户输入规则等等存入状态机
        commit('SET_TOKEN',getToken())
        commit('SET_ID',type)
        commit('SET_NAME',username)
        commit('SET_ROLES',roles)
        commit('SET_NUM',id)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      //登出接口则需要将令牌和id删除掉清空输入规则
      logout().then(() => {
        removeToken() // must remove  token  first
        removeId() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        commit('RESET_ROLES', [])
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
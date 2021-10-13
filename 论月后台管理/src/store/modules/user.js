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
    num: ''
  }
}

const state = getDefaultState()

const mutations = {
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
    state.roles = role
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
      login(userInfo).then(response => {
        const data = response.data
        commit('SET_TOKEN', data.access_token)
        commit('SET_NAME', data.username)
        setToken(data.access_token)
        setId(data.id)
        // console.log(response,"dddddddddddddddddddd")
        // window.location.reload()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit }) {
    
    return new Promise((resolve, reject) => {
      getInfo(state.token,getId()).then(response => {
        const { data } = response

        console.log(data)
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { username, type, id, roles } = data
        commit('SET_TOKEN', getToken())
        commit('SET_ID', type)
        commit('SET_NAME', username)
        commit('SET_ROLES', roles)
        commit('SET_NUM', id)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        removeToken() // must remove  token  first
        removeId()
        // removeUser()
        resetRouter()
        commit('RESET_STATE')
        commit('SET_ROLES', [])
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

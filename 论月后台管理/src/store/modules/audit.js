import { httpProductPendingNumber } from '@/api/management'



const getDefaultState = () => {
  return {
    aduit_num: ''
  }
}

const state = getDefaultState

const mutations = {
  SET_ADUIT_NUM: (state, aduit_num) => {
    state.aduit_num = aduit_num
  }
}

const actions = {
  // user login
  aduit({commit}) {
    return new Promise((resolve, reject) => {
    httpProductPendingNumber().then(res=>{
      console.log(res,'resresres')
        const data = res.data
        commit('SET_ADUIT_NUM',data)
        resolve(data)
    })
  })
  },


}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 20000 // request timeout
})
service.interceptors.request.use(
  config => {
    // return config
    if (store.state.user.token) {
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(

  response => {
    // // return response
    const res = response.data
    return res
    // // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //     return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    // }
  },
  error => {

    // Message.error({
    //   message: response.data.data || "出现错误，请稍后再试"
    // })
    // Message({
    //   type: 'error',
    //   message: response.data.data || "出现错误，请稍后再试"
    // })
    if (error.response.data.error.status == 401) {
      //用户信息失效
    }
    //判断error.response.data.error是否是数组是的话就转化成字符串否正常输出
    if (error.response.data.error instanceof Array) {
      let Msg = ""
      error.response.data.error.map((items) => {
        Msg += items.message.toString()
      })
      Message({
        message: Msg|| "出现错误，请稍后再试",
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: error.response.data.error.message|| "出现错误，请稍后再试",
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service

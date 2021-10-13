import store from '../store'
import axios from 'axios'
const baseUrl = process.env.VUE_APP_BASE_API
// 待审核商品总数
export function httpProductPendingNumber(data) {
    const url = `${baseUrl}/index.php/api/product/check-log/product-recommend-pending-number?access_token=${store.state.user.token}`
    return axios({
      url: url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      data
    })
  }
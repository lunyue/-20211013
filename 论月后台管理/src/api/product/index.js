import request from '@/utils/request'
const baseUrl = process.env.VUE_APP_BASE_API
import axios from 'axios'
import {
  getToken
} from '@/utils/auth'
let accessToken = getToken()
// export function HttpProduct(params) {
//   return request({
//     url: `index.php/api/product/default/index?sort=-created_at&access_token=${accessToken}&expand=last_check_log`,
//     method: 'get',
//     params
//   })
// }

// //GET /api/product/default/view?id=:id&accessToken=:accessToken
// export function HttpProductDesc(params) {
//   return request({
//     url: `index.php/api/product/default/view?access_token=${accessToken}`,
//     method: 'get',
//     params

//   })
// }
// //添加收藏  POST http://{{host}}/api/tiangong/collect/create?access_token={{accessToken}}
// export function HttpAddtoFavorites(params) {
//   return request({
//     url: `index.php/api/tiangong/collect/create?access_token=${accessToken}`,
//     method: 'POST',
//     data:params

//   })
// }

// //取消收藏
// export function HttpCanceltoFavorites(params) {
//   return request({
//     url: `index.php/api/tiangong/collect/cancel?access_token=${accessToken}&productId=${params.product_id}`,
//     method: 'delete',

//   })
// }
// //团队产品上传公共产品库  POST /api/product/default/set-public?access_token=:accessToken
// export function HttpSetpublic(params) {
//   return request({
//     url: `index.php/api/product/default/set-public?access_token=${accessToken}`,
//     method: 'post',
//     data:params

//   })
// }
// //公共库产品撤销上传  POST /api/product/default/set-private?
// export function HttpCancelpublic(params) {
//   return request({
//     url: `index.php/api/product/default/set-private?access_token=${accessToken}`,
//     method: 'put',
//     data:params
  
//   })
// }

// //公共库产品撤销上传  PUT/PATCH /api/ check-log/cancel?access_token={{accessToken}}&id=:id
// export function HttpCancelpublic1(params) {
//   return request({
//     url: `index.php/api/product/check-log/cancel?access_token=${accessToken}&id=${params.product_id}`,
//     method: 'put',
//     data:params
  
//   })
// }
//  //收藏页面获取

// export function HttpGetcollect(params) {
//   return request({
//     url: `index.php/api/tiangong/collect/index?access_token=${accessToken}`,
//     method: 'get',
//     params
   
  
//   })
// }


// //加入购物车  POST /api/tiangong/cart/add?access_token=:accessToken
// export function HttpAddCart(params) {
//   return request({
//     url: `index.php/api/tiangong/cart/add?access_token=${accessToken}`,
//     method: 'post',
//     data:params

//   })
// }
// //购物车列表  GET /api/tiangong/cart/index?access_token=:accessToken

// export function HttpGetCartList(params) {
//   return request({
//     url: `index.php/api/tiangong/cart/index?access_token=${accessToken}&expand=product,variant`,
//     method: 'get',
//     params
  
//   })
// }
// export function HttpGetCartList_order(params) {
//   return request({
//     url: `index.php/api/tiangong/cart/index?access_token=${accessToken}`,
//     method: 'get',
//     params
  
//   })
// }
// //购物车单个产品删除  DELETE /api/tiangong/cart/delete?access_token=:accessToken&id=:id
// export function HttpClearCartsingle(params) {
//   return request({
//     url: `index.php/api/tiangong/cart/delete?access_token=${accessToken}&id=${params.id}`,
//     method: 'delete',
//   })
// }
// //购物车批量删除 DELETE /api/tiangong/cart/batch-delete?access_token=:accessToken
// export function Httpbatchdelete(params) {
//   return request({
//     url: `index.php/api/tiangong/cart/batch-delete?access_token=${accessToken}`,
//     method: 'delete',
//     data:params
//   })
// }

// //清空购物车  清空购物车  DELETE /api/tiangong/cart/clear?access_token=:accessToken&productId=:productId
// export function HttpClearCart(params) {
//   return request({
//     url: `index.php/api/tiangong/cart/clear?access_token=${accessToken}`,
//     method: 'delete',
   

//   })
// }
// export function HttpTobuy(data) {
//   const url = `${baseUrl}/index.php/api/tiangong/buy?access_token=${accessToken}`
//   return axios({
//     url: url,
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     data: data
//   })
// }
// //查单品id 的详细信息  http://{{host}}/api/product/variant/index?access_token={{accessToken}}&id=6

// export function HttpSingleproduct(params) {
//   return request({
//     url: `index.php/api/product/variant/index?access_token=${accessToken}`,
//     method: 'get',
//     params
//   })
// }

// //获取收益列表  GET /api/tiangong/earning/index?access_token=:accessToken
// export function HttpGetearning(params) {
//   return request({
//     url: `index.php/api/tiangong/earning/index?access_token=${accessToken}`,
//     method: 'get',
//     params
//   })
// }
// //获取收益导出excel  
// export function HttpgetToExcel() {
//   return request({
//     url: `index.php/api/tiangong/earning/to-excel?access_token=${accessToken}`,
//     method: 'get',
//   })
// }


// //付款记录列表  /api/tiangong/order/index

// export function HttpGetorderPayment(params) {
//   return request({
//     url: `index.php/api/tiangong/order/pay-record?access_token=${accessToken}`,
//     method: 'get',
//     params
//   })
// }

// //分类接口
// export function HttpGetcategory() {
//   return request({
//     url: `/index.php/api/category/index?access_token=${accessToken}&flat=1&sign=spfl&t=${new Date().getTime()}`,
//     method: 'get',
//   })
// }
// //分类接口
// export function HttpGetcategory2() {
//   let date =new Date()
//   return request({
//     url: `/index.php/api/category/index?access_token=${accessToken}&flat=1&sign=spfl&${date}`,
//     method: 'get',
//   })
// }


// //一键更新
// export function Onekeyupdate(data) {
//   return request({
//     url: `index.php/api/product/default/one-click-update?access_token=${accessToken}`,
//     method: 'post',
//     data
//   })
// }
// //获取国家 /api/tiangong/country/update-currency?access_token=:accessToken
// export function Getcountry(params) {
//   return request({
//     url: `index.php/api/tiangong/country/list?access_token=${accessToken}`,
//     method: 'GET',  
//     params
//   })
// }


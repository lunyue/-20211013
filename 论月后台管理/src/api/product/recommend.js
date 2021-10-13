import http from "@/utils/request";
import { getToken } from "@/utils/auth";
let datatest = new Date().getTime()
let accessToken = getToken()
export function Httprecommendt(params) {
  return http({
    url: `index.php/api/product/default/index?access_token=${accessToken}&is_public=1`,
    method: 'get',
    params
   
  })
}
//封装轮播图接口
export function HttpGetbannerList(params) {
  return http({
    url: `/index.php/api/slide/default/list?access_token=${accessToken}&sort=ordering`,
    method: "get",
    params
  })
}
//分类 获取分类数据  GET /api/category
export function HttpGetcategoryList() {
  return http({
    url: `/index.php/api/category?access_token=${accessToken}&sign=cplx&expand=new-product&time=${new Date().getTime()}`,
    method: 'get',


  })
}
//销售榜
export function HttpGetTopList_sale() {
  return http({
    // url:`/index.php/api/product/default/sales-rank?access_token=${accessToken}& pageSize=5&expand=new-product `,
    url: `index.php/api/tiangong/order/top?access_token=${accessToken}&pageSize=10&expand=new-product`,
    method: "get",
  })
}
//index.php/api/product/default/add-click  点击的接口
export function HttpSetclick_list(params) {
  return http({
    url: `index.php/api/product/default/add-click?access_token=${accessToken}&productId=${params.id}`,
    method: 'get',
  })
}

//index.php/api/product/index?sort=-click   获取优选榜

export function HttpGetlist_good() {
  return http({
    url: `index.php/api/product/default/index?sort=-click&access_token=${accessToken}&per-page=5&expand=new-product`,
    method: 'get',


  })
}
//新品榜
export function HttpGetTopList_new() {
  return http({
    url: `index.php/api/product/default/sales-rank?access_token=${accessToken}& pageSize=5&expand=new-product `,
    method: 'get',


  })
}
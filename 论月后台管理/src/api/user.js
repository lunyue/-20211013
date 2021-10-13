import http from "@/utils/request";
// 获取令牌
import {getToken} from "@/utils/auth"
const accessToken =getToken();
// let getData={}

//登录接口
export function login(data){
  return http({
    url:`index.php/api/passport/login`,
    method:"post",
    data
  })
}
//获取用户信息接口
export function getInfo(access_token,id){
  return http({
    url: `index.php/api/member/view?expand=permissions,roles&id=${id}`,
    method:"get",
    params:{access_token},
  })
}
//登出接口
export function logout(){
  return http({
    url:`index.php/api/passport/logout`,
    method:"get",
  })
}
// getData.Login=((data)=>{
//     return http.post(baseUrl+"/index.php/api/passport/login",data)
// })
// // 封装轮播图接口
// getData.bannerList=(()=>{
//     return http.get(baseUrl+"/index.php/api/slide/default/list?sort=ordering")
// })
// // 封装新品上市接口
// getData.getNewProduct=((params)=>{
//     return http.get(baseUrl+`/index.php/api/product/default/update?access_token=${accessToken}&id=${params.id}`,params)
// })
// // 销售榜
// getData.getTopList=(()=>{
//     return http.get(baseUrl+`/index.php/api/product/default/sales-rank?access_token=${accessToken}& pageSize=5&expand=new-product `)
// })
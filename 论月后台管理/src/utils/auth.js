import Cookies from "js-cookie"
// const TokenKey ="vue-admin-template-token"
const TokenKey = 'vue_admin_template_token'
const Idkey = "account_number"
// 获取token令牌
export function getToken(){
    return Cookies.get(TokenKey)
}
// 设置token令牌
export function setToken(token){
    return Cookies.set(TokenKey,token)
}
// 删除token令牌
export function removeToken(){
    return Cookies.remove(TokenKey)
}
// 获取秘银
export function getId(){
    return Cookies.get(Idkey)
}
// 获取token令牌
export function setId(id){
    return Cookies.set(Idkey,id)
}
// 获取token令牌
export function removeId(){
    return Cookies.remove(Idkey)
}
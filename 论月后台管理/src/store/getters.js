const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  id: state => state.user.id,
  num: state => state.user.num,
  aduit_num: state => state.aduit_num,
  addRouters: state => state.permission.addRouters,
  permission_routes: state => state.permission.permission_routes,

}
export default getters

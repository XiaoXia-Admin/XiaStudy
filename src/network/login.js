import request from './request'

export default {
  //登录的方法
  accountGetUserInfo(account) {
    return request({
      url: `/api/ulogin/account/userInfo`,
      method: 'post',
      params: {
        "account": account
      }
    })
  },

  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: '/api/ulogin/wx/getMemberInfo',
      method: 'get'
    })
  }

}

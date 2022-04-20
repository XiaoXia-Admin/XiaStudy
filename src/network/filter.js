import axios from 'axios'
import cookie from 'js-cookie'

export const filter = axios.create({
  baseURL: 'http://1.15.188.107:8160',
  timeout: 2000
})
// 第三步http request 拦截器
filter.interceptors.request.use(
  config => {
    //debugger
    //判断cookie里面guli_token是否有值
    if (cookie.get('wx_token')) {
      //吧获取的token放在头部headers中
      config.headers['token'] = cookie.get('wx_token');
    } else {
      window.location = 'http://localhost:8081'

      // this.$router.push('/')
    }
    return config
  },
  err => {
    return Promise.reject(err);
  })

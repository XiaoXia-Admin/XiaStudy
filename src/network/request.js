import axios from 'axios'
import cookie from 'js-cookie'
import {layuiOpen} from "../common/utils";
//创建axios实例
const instance1 = axios.create({
  baseURL: 'http://localhost:8160',
  timeout: 2000
})
// 第三步http request 拦截器
instance1.interceptors.request.use(
  config => {
  //debugger
  //判断cookie里面guli_token是否有值
  if (cookie.get('wx_token')) {
    //吧获取的token放在头部headers中
    config.headers['token'] = cookie.get('wx_token');
  }
    return config
  },
  err => {
  return Promise.reject(err);
})

export default instance1;

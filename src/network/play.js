import axios from "axios";
import cookie from "js-cookie";

export const oos = axios.create({
  baseURL: 'http://localhost:8160',
  timeout: 2000
})
// 第三步http request 拦截器
oos.interceptors.request.use(
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

export default {
  //获取视频凭证
  findEvidence(videoId) {
    return oos({
      url: '/vod/video/getPlayAuth',
      method: 'get',
      params: {
        'videoId': videoId
      }

    })
  }
}

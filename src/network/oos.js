import axios from "axios";
import cookie from "js-cookie";

export const oos = axios.create({
  baseURL: 'http://1.15.188.107:8160',
  timeout: 300000
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
  //上传图片接口
  uploadPicture(picture) {
    return oos({
      url: '/oss/picture/uploadPicture',
      method: 'post',
      params: {
        'picture': picture
      }

    })
  },

  //文件下载
  fileDownload(params) {
    return oos({
      url: '/oss/file/downloadFile',
      method: 'post',
      data: params,
      responseType: "blob",
    })
  }
}

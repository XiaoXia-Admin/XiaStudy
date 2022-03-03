import axios from 'axios'
import cookie from 'js-cookie'

export const download = axios.create({
  baseURL: 'http://localhost:8004',
  timeout: 2000
})
// 第三步http request 拦截器
download.interceptors.request.use(
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
  //查询所有文件分类
  findFileCategory() {
    return download({
      url: '/dtm/category/findAllCategory',
      method: 'get'
    })
  },

  //查询文件接口，这里实现了两种查询
  findFile(categoryId, fileName) {
    return download({
      url: '/dtm/file/findFileCondition',
      method: 'get',
      params: {
        'categoryId': categoryId,
        'fileName': fileName
      }
    })
  }
}

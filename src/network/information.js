import axios from "axios";
import cookie from "js-cookie";

export const information = axios.create({
  baseURL: 'http://1.15.188.107:8160',
  timeout: 2000
})
// 第三步http request 拦截器
information.interceptors.request.use(
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
  //查询用户各种未读消息数量
  findUserUnreadInfo() {
    return information({
      url: '/message/index/findAllNumber',
      method: 'get'
    })
  },

  //查询用户我的消息
  findMyselfInfo(current, limit) {
    return information({
      url: '/message/mynews/findAll',
      method: 'post',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //删除用户我的消息
  deleteMyselfInfo(id) {
    return information({
      url: '/message/mynews/delete',
      method: 'post',
      params: {
        'id': id
      }
    })
  },
  //查询用户好友动态信息
  friendInfo(params) {
    return information({
      url: '/message/friendsFeed/findAll',
      method: 'post',
      data: params
    })
  },
  //查询他人回复用户消息
  findOtherPeopleInfo(current, limit) {
    return information({
      url: '/message/reply/findAll',
      method: 'post',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //删除他人回复消息
  deleteReplay(id) {
    return information({
      url: '/message/reply/delete',
      method: 'post',
      params: {
        'id': id
      }
    })
  },
  //回复他人消息
  replayUserInfo(id, content) {
    return information({
      url: '/message/reply/addreply',
      method: 'post',
      params: {
        'id': id,
        'content': content
      }
    })
  },
  //查询系统消息
  findSystemInfo(current, limit) {
    return information({
      url: '/message/system/findAll',
      method: 'post',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //查询系统消息
  findCourseInfo(current, limit) {
    return information({
      url: '/message/course/findAll',
      method: 'post',
      params: {
        'current': current,
        'limit': limit
      }
    })
  }

}

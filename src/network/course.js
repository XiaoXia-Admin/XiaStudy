import axios from 'axios'
import cookie from 'js-cookie'

export const course = axios.create({
  baseURL: 'http://localhost:8001',
  timeout: 2000
})
// 第三步http request 拦截器
course.interceptors.request.use(
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
  //查询所有一级分类
  findFirstCategory() {
    return course({
      url: '/cms/category/findAllFirstLevel',
      method: 'get'
    })
  },

  //查询一级分类下面二级分类和课程
  findSecondCourse(firstLevelId) {
    return course({
      url: '/cms/index/findSecondLevelAndCourse',
      method: 'get',
      params: {
        'firstLevelId': firstLevelId
      }
    })
  },
  //查询课程详细内容
  findCourseDetail(courseId) {
    return course({
      url: '/cms/course/findCourseDetail',
      method: 'get',
      params: {
        'courseId': courseId
      }
    })
  },
  //查询课程章节和小节
  findCourseChapter(courseId) {
    return course({
      url: '/cms/chapter/findChapterAndVideo',
      method: 'get',
      params: {
        'courseId': courseId
      }

    })
  }
}






















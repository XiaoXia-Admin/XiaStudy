import axios from 'axios'
import cookie from 'js-cookie'

export const bbs = axios.create({
  baseURL: 'http://localhost:8003',
  timeout: 2000
})
// 第三步http request 拦截器
bbs.interceptors.request.use(
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
  //查询付费课程和系统中用户、文章、评论数量
  getCourseList() {
    return bbs({
      url: '/bbs/index/getPayCourseAndUACNumber',
      method: 'get'
    })
  },

  //查询文章接口，这里实现了三种类型查询
  getArticleList(categoryId, isExcellentArticle, articleNameOrLabelName, current, limit) {
    return bbs({
      url: '/bbs/index/pageArticleCondition',
      method: 'get',
      params: {
        'categoryId': categoryId,
        'isExcellentArticle': isExcellentArticle,
        'articleNameOrLabelName': articleNameOrLabelName,
        'current': current,
        'limit': limit
      }
    })
  },
  //查询文章详细数据
  getArticle(articleId) {
    return bbs({
      url: '/bbs/article/detail',
      method: 'get',
      params: {
        'articleId': articleId
      }
    })
  },
  //文章的发布（这里指江湖文章的创建和发布）
  bbsArticlePublish(title, description, categoryId, content, labelList, isRelease) {
    return bbs({
      url: '/bbs/article/create',
      method: 'post',
      params: {
        'title': title,
        'description': description,
        'categoryId': categoryId,
        'content': content,
        'labelList': labelList,
        'isRelease': isRelease,
      }
    })
  },
  //文章的修改
  articleModify(title, description, categoryId, content, labelList, isRelease) {
    return bbs({
      url: '/bbs/article/update',
      method: 'post',
      params: {
        'title': title,
        'description': description,
        'categoryId': categoryId,
        'content': content,
        'labelList': labelList,
        'isRelease': isRelease,
      }
    })
  },
  //文章的查询（配合文章的修改）
  articleFind(articleId) {
    return bbs({
      url: '/bbs/article/find',
      method: 'get',
      params: {
        'articleId': articleId
      }
    })
  },
  //删除文章（专栏文章同样适用）
  deleteArticle(id) {
    return bbs({
      url: '/article/delete',
      method: 'post',
      params: {
        'id': id
      }
    })
  },
  //增加专栏文章
  addSpecialArticle(columnid, title, description, categoryId, content, labelList, isBbs) {
    return bbs({
      url: '/bbs/column/addArticle',
      method: 'post',
      params: {
        'columnid': columnid,
        'title': title,
        'description': description,
        'categoryId': categoryId,
        'content': content,
        'labelList': labelList,
        'isBbs': isBbs,
      }
    })
  },
  //查询专栏文章详细数据
  findSpecialArticleDetail(columnId, articleId) {
    return bbs({
      url: '/bbs/column/findArticleDetail',
      method: 'get',
      params: {
        'columnId': columnId,
        'articleId': articleId
      }
    })
  },
  //查询专栏文章（配合专栏文章的修改）
  findSpecialArticle(articleId) {
    return bbs({
      url: '/bbs/column/findcolumnArticle',
      method: 'get',
      params: {
        'articleId': articleId
      }
    })
  },
  //修改专栏文章
  modifySpecialArticle(articleId, title, description, categoryId, content, labelList, isBbs) {
    return bbs({
      url: '/bbs/column/updateArticle',
      method: 'post',
      params: {
        'articleId': articleId,
        'title': title,
        'description': description,
        'categoryId': categoryId,
        'content': content,
        'labelList': labelList,
        'isBbs': isBbs,
      }
    })
  },
  //举报文章接口
  accusationArticle(articleId) {
    return bbs({
      url: '/bbs/article/report',
      method: 'get',
      params: {
        'articleId': articleId
      }
    })
  },
  //查询所有分类
  findCategory(articleId) {
    return bbs({
      url: '/bbs/category/findAllCategory',
      method: 'get',
      params: {
        'articleId': articleId
      }
    })
  },
  //一级评论增加功能
  firstReview(articleId, content) {
    return bbs({
      url: '/bbs/comment/createFirst',
      method: 'post',
      params: {
        'articleId': articleId,
        'content': content
      }
    })
  },


  //删除评论（这个指用户删除自己的评论）
  deleteReview(commentId) {
    return bbs({
      url: '/bbs/comment/delete',
      method: 'post',
      params: {
        'commentId': commentId
      }
    })
  },
  //查询评论（查询文章下属评论）
  findReview(articleId) {
    return bbs({
      url: '/bbs/comment/findArticleComment',
      method: 'get',
      params: {
        'articleId': articleId
      }
    })
  },
  //查询文章缓存（这里指查询用户文章的缓存）
  findArticleCache() {
    return bbs({
      url: '/bbs/cache/findArticleCache',
      method: 'get'
    })
  },
  //缓存文章（向后台用户缓存文章数据）
  cacheArticle(title, description, categoryId, content, labelList) {
    return bbs({
      url: '/bbs/cache/setArticleCache',
      method: 'post',
      params: {
        'title': title,
        'description': description,
        'categoryId': categoryId,
        'content': content,
        'labelList': labelList
      }
    })
  }
}






















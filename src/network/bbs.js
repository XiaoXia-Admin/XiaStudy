import axios from 'axios'
import cookie from 'js-cookie'

export const bbs = axios.create({
  baseURL: 'http://1.15.188.107:8160',
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
  //举报文章接口
  reportArticle(articleId, content) {
    return bbs({
      url: '/bbs/article/report',
      method: 'post',
      params: {
        'articleId': articleId,
        'content': content
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
  //文章的发布
  bbsArticlePublish(title, description, categoryId, content, labelList, isRelease, avatar, nickname) {
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
        'avatar': avatar,
        'nickname': nickname
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
  //文章的修改
  articleModify(id, title, description, categoryId, content, labelList, isRelease) {
    return bbs({
      url: '/bbs/article/update',
      method: 'post',
      params: {
        'id': id,
        'title': title,
        'description': description,
        'content': content,
        'labelList': labelList,
        'isRelease': isRelease,
        'categoryId': categoryId
      }
    })
  },
  //删除文章（专栏文章同样适用）
  deleteArticle(articleId) {
    return bbs({
      url: '/bbs/article/delete',
      method: 'post',
      params: {
        'articleId': articleId
      }
    })
  },
  //文章缓存，期限是30分钟
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
  },
  //查询文章缓存（这里指查询用户文章的缓存）
  findArticleCache() {
    return bbs({
      url: '/bbs/cache/findArticleCache',
      method: 'get'
    })
  },
  //查询所有分类
  findCategory() {
    return bbs({
      url: '/bbs/category/findAllCategory',
      method: 'get'
    })
  },
  //删除评论
  deleteReview(commentId) {
    return bbs({
      url: '/bbs/comment/delete',
      method: 'post',
      params: {
        'commentId': commentId
      }
    })
  },
  //一级评论增加功能
  firstReview(articleId, content, nickname, avatar) {
    return bbs({
      url: '/bbs/comment/createFirst',
      method: 'post',
      params: {
        'articleId': articleId,
        'content': content,
        'userNickname': nickname,
        'userAvatar': avatar
      }
    })
  },
  //二级评论增加功能
  secondReview(articleId, content, fatherId, replyUserId, replyUserNickname, nickname, avatar) {
    return bbs({
      url: '/bbs/comment/createSecond',
      method: 'post',
      params: {
        'articleId': articleId,
        'content': content,
        'fatherId': fatherId,
        'replyUserId': replyUserId,
        'replyUserNickname': replyUserNickname,
        'userNickname': nickname,
        'userAvatar': avatar
      }
    })
  },
  //查找文章评论,分页查找
  findArticleReview(articleId, current, limit) {
    return bbs({
      url: '/bbs/comment/findArticleComment',
      method: 'get',
      params: {
        'articleId': articleId,
        'current': current,
        'limit': limit
      }
    })
  },
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
  //查询用户标签
  findUserSpan(userId) {
    return bbs({
      url: '/bbs/label/findUserLabel',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //增加用户收藏文章
  addCollectArticle(articleId) {
    return bbs({
      url: '/bbs/collect/addUserCollectArticle',
      method: 'post',
      params: {
        'articleId': articleId
      }
    })
  },
  //删除用户收藏文章
  cancelCollectArticle(articleId) {
    return bbs({
      url: '/bbs/collect/deleteUserCollectArticle',
      method: 'post',
      params: {
        'articleId': articleId
      }
    })
  },
  //查询用户收藏文章
  findCollectArticle(current, limit) {
    return bbs({
      url: '/bbs/collect/findUserCollectArticle',
      method: 'get',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //查找用户在江湖的所有文章
  findUserArticle(current, limit) {
    return bbs({
      url: '/bbs/article/findUserArticle',
      method: 'get',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //查询他人在江湖发布的文章
  findOtherUserArticle(current, limit, userId) {
    return bbs({
      url: '/bbs/article/findOtherUserArticle',
      method: 'get',
      params: {
        'current': current,
        'limit': limit,
        'userId': userId
      }
    })
  },
  //用户专栏的接口

  //创建专栏
  createSpecial(title, nickname, avatar) {
    return bbs({
      url: '/bbs/column/addUserColumn',
      method: 'post',
      params: {
        'title': title,
        'nickname': nickname,
        'avatar': avatar
      }
    })
  },
  //查询用户专栏文章，以作修改
  findZlArticle(columnId, articleId) {
    return bbs({
      url: '/bbs/carticle/findUserColumnArticle',
      method: 'get',
      params: {
        'columnId': columnId,
        'articleId': articleId
      }
    })
  },
  //修改专栏文章
  modifyZlArticle(params) {
    return bbs({
      url: '/bbs/carticle/updateCloumArticle',
      method: 'post',
      data: params
    })
  },
  //查询专栏文章详细数据
  findZlArticleDetail(columnId, articleId) {
    return bbs({
      url: '/bbs/carticle/findColunmArticleDetail',
      method: 'get',
      params: {
        'columnId': columnId,
        'articleId': articleId
      }
    })
  },
  //修改专栏文章的排序
  modifyZlSort(sort, articleId) {
    return bbs({
      url: '/bbs/carticle/updateArticleSort',
      method: 'post',
      params: {
        'sort': sort,
        'articleId': articleId
      }
    })
  },
  //删除专栏
  deleteSpecial(columnId) {
    return bbs({
      url: '/bbs/column/deleteColumn',
      method: 'post',
      params: {
        'columnId': columnId
      }
    })
  },
  //修改专栏数据
  modifySpecialData(columnId, title, description, color, vsibility, isRelease) {
    return bbs({
      url: '/bbs/column/updateColumn',
      method: 'post',
      params: {
        'columnId': columnId,
        'title': title,
        'description': description,
        'vsibility': vsibility,
        'isRelease': isRelease,
      }
    })
  },
  //删除专栏文章
  deleteZlArticle(articleId, columnId) {
    return bbs({
      url: '/bbs/carticle/deleteArticle',
      method: 'post',
      params: {
        'articleId': articleId,
        'cloumnId': columnId
      }
    })
  },
  //查询用户专栏
  findUserSpecial() {
    return bbs({
      url: '/bbs/column/findUserColumn',
      method: 'get'
    })
  },
  //查询他人专栏
  findOtherSpecial(userId) {
    return bbs({
      url: '/bbs/column/findOtherUserColumn',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //查询专栏具体数据
  findSpecialData(columnId) {
    return bbs({
      url: '/bbs/column/findColumnDetail',
      method: 'get',
      params: {
        'columnId': columnId
      }
    })
  },
  //发布专栏文章
  publishZlArticle(params) {
    return bbs({
      url: '/bbs/carticle/publishArticle',
      method: 'post',
      data: params
      // data: {
      //   'conlumnId': columnId,
      //   'avatar': avatar,
      //   'nickname': nickname,
      //   'title': title,
      //   'description': description,
      //   'categoryId': categoryId,
      //   'content': content,
      //   'isBbs': isBbs,
      //   'labelList': labelList,
      // }
    })
  },
}






















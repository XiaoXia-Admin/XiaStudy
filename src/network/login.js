import axios from "axios";
import cookie from "js-cookie";

const login = axios.create({
  baseURL: 'http://localhost:8160',
  timeout: 2000
})
// 第三步http request 拦截器
login.interceptors.request.use(
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
  //用户账号登录
  accountGetUserInfo(loginAct, loginPwd) {
      return login({
        url: `/user/account/login`,
        method: 'post',
        params: {
          "loginAct": loginAct,
          'loginPwd': loginPwd
        }
      })
    },

  //根据token获取用户基本信息（登录界面的信息)
  getLoginUserInfo() {
    return login({
      url: '/user/account/userInfo',
      method: 'get'
    })
  },
  //查询他人用户信息
  getOtherUserInfo(userId) {
    return login({
      url: '/user/other/detail',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //查询用户详细信息(根据token)
  getOtherUserDetail() {
    return login({
      url: '/user/account/detail',
      method: 'get'
    })
  },
  //用户签到接口
  userSignIn() {
    return login({
      url: '/user/signIn/toSignIn',
      method: 'post'
    })
  },
  //修改背景图片
  modifyBgImg(bgImg) {
    return login({
      url: '/user/bgimg/setBgImg',
      method: 'post',
      params: {
        'bgImg': bgImg
      }
    })
  },
  //查询所有背景图片
  findAllBgImg() {
    return login({
      url: '/user/bgimg/findAll',
      method: 'get'
    })
  },
  //查询本账号所有文章
  findUserArticle(current, limit) {
    return login({
      url: '/user/article/findOneSelfAllArticle',
      method: 'get',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //查询本其他人的文章
  findOtherUserArticle(userId, current, limit) {
    return login({
      url: '/user/article/findOtherarticle',
      method: 'get',
      params: {
        'userId': userId,
        'current': current,
        'limit': limit
      }
    })
  },
  //查询用户收藏文章
  findUserCollectArticle(current, limit) {
    return login({
      url: '/user/collection/findCollectionArticle',
      method: 'get',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //添加用户收藏文章
  addCollectArticle(articleId) {
    return login({
      url: '/user/collection/addCollectionArticle',
      method: 'post',
      params: {
        'articleId': articleId
      }
    })
  },
  //取消收藏文章
  cancelCollectArticle(articleId) {
    return login({
      url: '/user/collection/deleteCollectionArticle',
      method: 'post',
      params: {
        'articleId': articleId
      }
    })
  },
  //查询购买的课程
  findPurchaseCourse(current, limit) {
    return login({
      url: '/user/course/findbuyCourse',
      method: 'get',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //查询用户专栏
  findUserSpecial(userId) {
    return login({
      url: '/user/collection/findCollectionArticle',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //创建专栏
  addSpecial(title) {
    return login({
      url: '/user/column/add',
      method: 'post',
      params: {
        'title': title
      }
    })
  },
  //删除专栏
  deleteSpecial(id) {
    return login({
      url: '/user/column/delete',
      method: 'get',
      params: {
        'id': id
      }
    })
  },
  //专栏基本内容查询
  findSpecialDetail(id) {
    return login({
      url: '/user/column/findColumnDetail',
      method: 'get',
      params: {
        'id': id
      }
    })
  },
  //专栏修改
  modifySpecial(id, title, description, color, visibility, isRelease) {
    return login({
      url: '/user/column/update',
      method: 'post',
      params: {
        'id': id,
        'title': title,
        'description': description,
        'color': color,
        'visibility': visibility,
        'isRelease': isRelease
      }
    })
  },
  //专栏内文章排序字段的修改
  modifySpecialSort(id, sort) {
    return login({
      url: '/user/column/updateArticleSort',
      method: 'post',
      params: {
        'id': id,
        'sort': sort
      }
    })
  },
  //修改说说是否公开
  modifyTalkVisibility(id, isPublic) {
    return login({
      url: '/user/talk/updateTalk',
      method: 'post',
      params: {
        'id': id,
        'isPublic': isPublic
      }
    })
  },
  //删除说说
  deleteTalk(id) {
    return login({
      url: '/user/talk/deleteTalk',
      method: 'post',
      params: {
        'id': id
      }

    })
  },
  //添加说说
  addTalk(content) {
    return login({
      url: '/user/talk/addTalk',
      method: 'post',
      params: {
        'content': content
      }
    })
  },
  //查询说说
  findTalk(userId, current, limit) {
    return login({
      url: '/user/talk/findtalk',
      method: 'get',
      params: {
        'userId': userId,
        'current': current,
        'limit': limit
      }
    })
  },
  //查询用户账号资料
  findUserAccountInfo() {
    return login({
      url: '/user/data/find',
      method: 'get'
    })
  },
  //修改用户账号资料
  modifyUserAccountInfo(nickname, sex, address, sign) {
    return login({
      url: '/user/data/update',
      method: 'post',
      params: {
        'nickname': nickname,
        'sex': sex,
        'address': address,
        'sign': sign
      }
    })
  },
  //查询用户主页内容
  findUserHome(userId) {
    return login({
      url: '/user/homepage/find',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //修改用户主页内容
  modifyUserHome(content) {
    return login({
      url: '/user/homepage/update',
      method: 'post',
      params: {
        'content': content
      }
    })
  },
  //查询所有头像
  findAvatar() {
    return login({
      url: '/user/avatar/findAll',
      method: 'get'
    })
  },
  //用户安全设置
  userSetSecurity() {
    return login({
      url: '/user/security/findAWEP',
      method: 'get'
    })
  },
  //用户安全设置修改（邮箱，密码）
  userModifyPwdOrEmail(email, password) {
    return login({
      url: '/user/security/setEP',
      method: 'post',
      params: {
        'email': email,
        'password': password

      }
    })
  },
  //查询历史足迹
  findHistory(userId, current, limit) {
    return login({
      url: '/user/historical/findAll',
      method: 'get',
      params: {
        'userId': userId,
        'current': current,
        'limit': limit,
      }
    })
  },
  //查询用户标签
  findUserSpan(userId) {
    return login({
      url: '/user/label/findAll',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //增加关注
  addFollow(userId) {
    return login({
      url: '/user/aaf/addAttention',
      method: 'post',
      params: {
        'userId': userId
      }
    })
  },
  //查询用户关注或者粉丝
  findFollowOrFans(userId, isAttention, current, limit) {
    return login({
      url: '/user/homepage/find',
      method: 'get',
      params: {
        'userId': userId,
        'isAttention': isAttention,
        'current': current,
        'limit': limit,
      }
    })
  },
  //全站搜索用户，根据账号或者昵称
  findUserByAccountOrName(accountOrNickname, current, limit) {
    return login({
      url: '/user/public/findUser',
      method: 'get',
      params: {
        'accountOrNickname': accountOrNickname,
        'current': current,
        'limit': limit,
      }
    })
  }
}

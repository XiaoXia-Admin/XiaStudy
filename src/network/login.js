import axios from "axios";
import cookie from "js-cookie";

const login = axios.create({
  baseURL: 'http://1.15.188.107:8160',
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
  //用户账号密码登录
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

  //根据token获取用户基本信息（登录方框)
  getLoginUserInfo() {
    return login({
      url: '/user/account/findUserSmallBoxContent',
      method: 'get'
    })
  },
  //用户签到
  userSignIn() {
    return login({
      url: '/user/account/userSignIn',
      method: 'post'
    })
  },
  //查询用户主页的内容,这里查自己
  getUserDetail() {
    return login({
      url: '/user/account/findUserHomePage',
      method: 'get'
    })
  },
  //查看所有背景图像
  findAllImg() {
    return login({
      url: '/user/bgimg/findAllBgimg',
      method: 'get'
    })
  },

  //修改背景图片
  modifyBgImg(bgImg) {
    return login({
      url: '/user/bgimg/setUserBgimg',
      method: 'post',
      params: {
        'url': bgImg
      }
    })
  },
  //查询关注用户
  findFollow(current, limit, userId) {
    return login({
      url: '/user/attention/findUserFollow',
      method: 'get',
      params: {
        'current': current,
        'limit': limit,
        'userId': userId
      }
    })
  },
  //全站查找用户
  findUserByAccountOrName(current, limit, accountOrNickname) {
    return login({
      url: '/user/search/findUserByAccountOrNickname',
      method: 'get',
      params: {
        'current': current,
        'limit': limit,
        'accountOrNickname': accountOrNickname,
      }
    })
  },
  //查询用户粉丝
  findFans(current, limit, userId) {
    return login({
      url: '/user/attention/findUserFans',
      method: 'get',
      params: {
        'current': current,
        'limit': limit,
        'userId': userId
      }
    })
  },
  //查询用户简介
  findUserIntroduce(userId) {
    return login({
      url: '/user/introduce/findUserIntroduce',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //修改用户主页内容
  modifyUserIntroduce(content) {
    return login({
      url: '/user/introduce/setUserIntroduce',
      method: 'get',
      params: {
        'content': content
      }
    })
  },
  //查询用户安全信息
  findSecurityInfo(){
    return login({
      url: '/user/security/findUserSecurityData',
      method: 'get'
    })
  },
  //修改用户安全信息
  modifySecurityInfo(email, password) {
    return login({
      url: '/user/security/setUserSecurityData',
      method: 'post',
      params: {
        'email': email,
        'password': password
      }
    })
  },
  //查询出用户资料
  findUserInfo() {
    return login({
      url: '/user/account/findUserData',
      method: 'get'
    })
  },
  //查询出所有头像
  findAvatar() {
    return login({
      url: '/user/avatar/findAllAvatar',
      method: 'get'
    })
  },
  //修改用户资料
  modifyUserAccountInfo(avatar, nickname, sex, address, sign) {
    return login({
      url: '/user/account/setUserData',
      method: 'post',
      params: {
        'avatar': avatar,
        'nickname': nickname,
        'sex': sex,
        'address': address,
        'sign': sign
      }
    })
  },
  //用户发表说说
  addTalk(content) {
    return login({
      url: '/user/talk/publishTalk',
      method: 'post',
      params: {
        'content': content
      }
    })
  },
  //查找用户说说
  findTalk(current, limit) {
    return login({
      url: '/user/talk/findUserTalk',
      method: 'get',
      params: {
        'current': current,
        'limit': limit
      }
    })
  },
  //删除用户说说
  deleteTalk(id) {
    return login({
      url: '/user/talk/deleteUserTalk',
      method: 'post',
      params: {
        'id': id
      }
    })
  },
  //修改用户说说是否可以公开
  modifyTalkVisibility(id, isPublic) {
    return login({
      url: '/user/talk/updateUserTalkIsPublic',
      method: 'post',
      params: {
        'id': id,
        'isPublic': isPublic
      }
    })
  },
  //查询其他用户主页内容
  findOtherUserContent(userId) {
    return login({
      url: '/user/other/findUserHomePage',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  },
  //增加用户关注
  followUser(otherUserId) {
    return login({
      url: '/user/attention/addUserAttention',
      method: 'post',
      params: {
        'otherUserId': otherUserId
      }
    })
  },
  //取消用户关注
  cancelFollowUser(otherUserId) {
    return login({
      url: '/user/attention/deleteUserAttention',
      method: 'post',
      params: {
        'otherUserId': otherUserId
      }
    })
  },
  //查询他人用户说说
  findOtherUserTalk(current, limit, userId) {
    return login({
      url: '/user/talk/findOtherUserTalk',
      method: 'get',
      params: {
        'current': current,
        'limit': limit,
        'userId': userId
      }
    })
  },
  //查找用户主页侧边栏信息
  findUserHome(userId) {
    return login({
      url: '/user/account/findLowerRightBox',
      method: 'get',
      params: {
        'userId': userId
      }
    })
  }

}
// function() {
//   var that = this;
//   var opid = $(this).data("opid");
//   layer.confirm('删除说说将彻底丢失,请慎重选择？', {
//     btn: ['就要删除', '我点错了'] //按钮
//   }, function() {
//     layer.msg('正在删除说说', {
//       icon: 1
//     });
//     KsdLogin.goLogin(function() {
//       $.post("/u/say/del/" + opid, function(res) {
//         layer.msg('删除成功', {
//           icon: 1
//         });
//         var num = $(".ksd-say-numc").eq(0).text() * 1;
//         num--;
//         $(".ksd-say-numc").text(num <= 0 ? 0 : num);
//         if (res.code == 20000) {
//           layer.closeAll();
//           $(that).parents(".ksd-say-items")
//             .removeClass("animated fadeInUpBig")
//             .addClass("animated fadeOutLeftBig")
//             .fadeOut(1000, function() {
//               $(this).remove();
//               var len = $("#ksd-say-ullist").children().length;
//               if (len == 0) {
//                 $(".ksd-noempty").show();
//                 $(".ksd-pages-box").hide();
//                 $(".ksd-pages-nodata").hide();
//               }
//             })
//         }
//       })
//     })
//   }, function() {
//     layer.msg('已取消删除');
//   });
// }

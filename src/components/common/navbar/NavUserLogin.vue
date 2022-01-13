<template>
  <div class="ksd-logindrop" :class="{userlogin:flag,show:!flag,'xjy-header-items': after}" data-vip="1"
       :style="userLoginBg" @click="userLogin" @mouseleave="exchangeGrade">
    <a href="/user" class="ksd-home pr tp2" :style="userHead"><i
        class="iconfont icon-home pr pr-1"></i>进入主页</a>
    <a class="ksd-user-info" href="javascript:void(0);"
       :class="{'dropdown-toggle':after,'dropdown-toggle-other':!after}" :title="this.loginInfo.nickname" data-vip="1"
       id="navbarDropdown">
            <span class="pr">
                <img class="ksd-avatar2 ksd-avatar-img"
                     :src="this.loginInfo.avatar"
                     alt="">
            </span>
      &nbsp;
      <span class="ksd-text" :style="userTextColor">{{ this.loginInfo.nickname }}</span>
    </a>
    <div class="ksd-login-items">
      <div class="ksd-header-items mt-3" :class="{'xjy-header-items': after}">
        <ul>
          <li class="ksd-num-items">
            <a href="/u#topic">
              <span class="num ksd-num-count6">0</span>
              <span class="ktext">文章</span>
            </a>
          </li>
          <li class="ksd-num-items">
            <a href="/u#fans">
              <span class="num ksd-num-count1">0</span>
              <span class="ktext">关注</span>
            </a>
          </li>
          <li class="ksd-num-items">
            <a href="/u#follow">
              <span class="num ksd-num-count2">0</span>
              <span class="ktext">粉丝</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div class="citems ksd-sign-items" :class="{'xjy-header-items': after}">
          <a href="javascript:void(0);" data-num="904489" class=" ksd-uqtext ksd-user-qiandao"><i
              class="iconfont icon-zhifeiji pr-2 pr tp1"></i>签到</a>
        </div>
      </div>
    </div>
    <div class="ksd-login-items" :class="{'xjy-login-items': after}">
      <ul>
        <li class="items">
          <a href="/user" style="width:126px;text-align:left" title="点击前往个人中心" class="fl flitems"><i
              class="iconfont icon-home"></i>个人中心</a>
          <a href="/vip/pay" title="点击前往订购和续费" class="fr fritems pr">会员已过期</a>
        </li>
        <li class="items ksdcopylinknum" title="点击复制数字账号" data-clipboard-text="904489">
          <a href="/user/settings" style="width:160px;text-align:left" class="fl ksd-settings2 flitems"><i
              class="iconfont icon-zhanghao"></i>账号</a>
          <a href="javascript:void(0);" class="fr ksd-settings2 fritems">904489</a>
        </li>
        <li class="items ksd-exp-itemboxs">
          <a href="javascript:void(0);" class="fl flitems"><i class="iconfont icon-dengji tp1 pr"></i>等级</a>
          <a href="javascript:void(0);" class="fr fritems show2 ksd-coin-exp ksd-coin-exp-text" data-exp="2155">Lv1</a>
          <a href="javascript:void(0);" class="fr fritems ksd-coin-exp show1" data-exp="2155"><span
              class="ksd-num-exp">2155</span>exp</a>
        </li>
        <li class="items">
          <a href="javascript:void(0);" class="fl flitems"><i class="iconfont icon-jinbi"></i>K币</a>
          <a href="javascript:void(0);" class="fr fritems ksd-coin-coin" data-coin="5291"><span
              class="ksd-coin-cointext ksd-num-coin">5291</span><span class="pr ftp2">币</span></a>
        </li>
        <li class="items" title="订购会员">
          <a href="/vip/pay" style="text-align:left" class="fl ksd-settings2 flitems"><i
              class="iconfont icon-huiyuan"></i>会员续期</a>
        </li>
        <li class="items" title="分享推广">
          <a href="/user/banwo" style="text-align:left" class="fl ksd-settings2 flitems"><i
              class="iconfont icon-zhanghao"></i>分享推广</a>
        </li>
        <li class="items" title="个人设置">
          <a href="/user/settings" style="width:100%;text-align:left" class="fl flitems"><i
              class="iconfont icon-gerenshezhi"></i>个人设置</a>
        </li>
      </ul>
    </div>
    <div class="ksd-login-items bnone" :class="{'xjy-login-items': after}" style="border-bottom: none;">
      <ul>
        <li class="items">
          <a href="javascript:void(0);" class="fl flitems ksd-logout" @click="loginOut"><i
              class="iconfont icon-tcdl"></i>退出登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'
import {loginOut} from "../../../common/utils";

export default {
  name: "NavUserLogin",
  props: {
    loginInfo: {
      id: '',
      age: '',
      avatar: '',
      mobile: '',
      nickname: '',
      sex: ''
    },
  },
  data() {
    return {
      flag: false,
      after: true,
    }
  },
  methods: {
    //登录弹窗
    userLogin() {
      this.flag = !this.flag;
    },
    exchangeGrade() {
      this.flag = false;
    },
    //退出登录
    loginOut,
  },
  computed: {
    userHead() {
      if (this.flag) {
        return {'z-index': '11', 'display': 'inline'}
      } else {
        return {}
      }
    },
    userTextColor() {
      if (this.$route.path.indexOf('/login') !== -1) {
        return {'color': '#fff'}
      } else {
        return {'color': '#000'}
      }
    },
    userLoginBg() {
      if (!this.after) {
        return {'background-color': '#fff', 'color': '#000'}
      }
    }
  },
  created() {
    this.after = this.$route.path.indexOf('/login') !== -1
  }
}
</script>

<style scoped>
.userlogin {
  box-shadow: 0 0 1em #ddd;
  display: inline;
}

.ksd-logindrop.show {
  box-shadow: none;
}

.ksd-logindrop {
  z-index: 100;
  position: absolute;
  width: 248px;
  background: transparent;
  margin: 10px;
  font-family: "微软雅黑";
  font-size: 14px;
  color: #999999;
  top: -14px;
  right: -22px;
  text-align: right;
  border-radius: 18px;
  margin: 22px 224px;
}


.xjy-header-items, .xjy-header-items .ksd-num-items a, .xjy-header-items a, .xjy-header-items .ksd-num-items .num, .xjy-header-items .ksd-num-items .text, .ksd-logindrop .xjy-login-items .items a {
  color: #fff !important;
}

.ksd-home {
  float: left;
  padding: 10px 0px 0px 8px;
  font-size: 11px;
  color: rgb(142, 142, 142);
  transform: scale(0.9);
  display: none;
}

.xjy-header-items:hover {
  color: black;
}

.tp2 {
  top: 2px !important;
}

.pr-1, .px-1 {
  padding-right: .25rem !important;
}

.ksd-user-info {
  color: #fff !important;
  padding: 10px;
  position: relative;
  top: 5px;
}

.dropdown-toggle {
  white-space: nowrap;
}

.ksd-avatar2 {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: baseline;
  top: 1px;
  position: relative;
}


.ksd-text {
  position: relative;
  font-size: 14px;
  max-width: 58px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-toggle::after {

  display: inline-block;
  position: relative;
  top: -3px;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
}

.dropdown-toggle-other::after {
  white-space: nowrap;
  display: inline-block;
  position: relative;
  top: -3px;
  margin-left: .255em;
  vertical-align: .255em;
  content: "";
  border-top: .3em solid;
  border-right: .3em solid transparent;
  border-bottom: 0;
  border-left: .3em solid transparent;
  color: black;
}

.ksd-logindrop.show .ksd-login-items {
  display: none;
}

.ksd-uqtext {
  color: black;
}

.ksd-uqtext:hover {
  color: white;
}

.ksd-logindrop .ksd-login-items {
  border-bottom: 1px solid #eee;
  padding: 8px 6px;
}

.ksd-header-items {
  margin: 6px;
  overflow: hidden;
}

.mt-3, .my-3 {
  margin-top: 1rem !important;
}

.ksd-header-items .ksd-num-items {
  float: left;
  width: 33.33333%;
  text-align: center;
  transition: 60ms linear;
  padding: 5px 0;
  font-weight: 400;
}

li {
  list-style: none;
}


.ksd-header-items .ksd-num-items .num {

  display: block;
  font-size: 18px;
  color: #444;
  margin-bottom: 2px;
  font-weight: 700;

}

.ksd-sign-items {
  text-align: center;
  padding: 14px 6px 8px;
}


.ktext:hover {
  font-weight: bold;
}

.ksd-sign-items a {

  display: inline-block;
  border-radius: 18px;
  padding: 6px 20px;
  border: 1px solid #eee;
  font-size: 13px;

}

.ksd-sign-items a:hover {
  background-color: #1E9FFF;
}

.ksd-logindrop .ksd-login-items .items {
  cursor: pointer;
  overflow: hidden;
}

.ksd-logindrop .ksd-login-items .items:hover {
  box-shadow: 0 0 1em #ddd;
  border-radius: 8px;
  font-weight: bold;
}

.ksd-logindrop .ksd-login-items .items a {
  font-size: 12px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  transition: 60ms linear;
}

.l, .z, .fl {
  float: left;
}

.r, .y, .fr {
  float: right;
}

.ksd-logindrop .ksd-login-items .items .flitems i {
  position: relative;
  top: -1px;
  display: inline-block;
  width: 24px;
  margin-right: 5px;
  text-align: center;
}

.ksd-logindrop .ksd-login-items .items .iconfont {
  padding-right: 0;
}
</style>

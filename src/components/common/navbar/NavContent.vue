<template>
  <div id="nav-content" class="navbar-collapse nav-position-relative">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item nav-position-relative xjy-left" v-for="(item, index) in navTitle" :key="index">
        <a class="ksd-nav-linknav" :class="indexOfFlag('/login')  ? 'login_color' : 'other_color'" :href="item.link">{{item.content}}</a>
        <i class="iconfont  ksd-bgd-left" :class="{show: index != 0}">热门</i>
      </li>
    </ul>
    <div id="ksdloginbox"                                                                                                                                          >
      <div style="position: relative;top:-18px">
        <a href="/vip/pay" title="点击前往升级会员"  :class="{show:indexOfFlag('/login') || this.showLogin}" class="ktipmessage-boxc" target="_blank"><i
          class="iconfont icon-huiyuan2 tp2 pr pr-1 fz20"></i>&nbsp;&nbsp;会员</a>
        <div class="tipmessage-box" style="cursor: pointer"  :class="{show:indexOfFlag('/login') || this.showLogin}" @click="information"><i
          class="iconfont icon-xiaoxi11 tp1 pr pr-1" style="font-size: 21px;"></i><span>&nbsp;&nbsp;消息</span></div>
        <div @click="information" @mouseleave="leaveInfo" class="i-frame animated2 fadeInDown" :class="{show: this.info}">
          <div class="im-root animated2 fadeInDown">
            <div class="im-list-box" style="border-radius: 11px;">
              <a href="/msg/index#me" data-index="0" class="im-list">我的消息<span
                class="im-notify im-number countMeMsgNum im-center none">0</span></a>
              <a href="/msg/index#follow" data-index="1" class="im-list">好友动态<span
                class="im-notify im-number countFollowMsgNum im-center none">0</span></a>
              <a href="/msg/index#reply" data-index="2" class="im-list">回复我的<span
                class="im-notify im-number countReplyMsgNum im-center none">0</span></a>
              <a href="/msg/index#system" data-index="3" class="im-list">系统通知<span
                class="im-notify countSystemMsgNum im-number im-center none">0</span></a>
              <a href="/msg/index#course" data-index="4" class="im-list">课程通知<span
                class="im-notify countCourseMsgNum im-number im-center none">0</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {indexOfFlag} from "../../../common/utils";

export default {
  name: "NavContent",
  data() {
    return {
      info: true,
      navTitle: [
        {
          link: '/course',
          content: '课程'
        },
        {
          link: '/bbs',
          content: '江湖'
        },
        {
          link: '/download',
          content: '下载'
        },
        {
          link: '/document',
          content: '官方文文档'
        }
      ]
    }
  },
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    indexOfFlag,
    information() {
      this.info = false
    },
    leaveInfo() {
      this.info = true
    }
  }
}
</script>

<style scoped>

.nav-position-relative {
  position: relative !important;
}

.iconfont {
  font-family: "iconfont" !important;
}

.login_color {
  color: white;
  background-color: transparent;
}

.login_color:hover {
  background-color: #35a8f0;
}

.other_color {
  color: black;
  background-color: transparent;
}

.other_color:hover {
  background-color: #EFF3F5;
}

/*.show {*/
/*  display: none;*/
/*}*/

.im-root {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #212121;
}

.im-root, .im-root * {
  font-size: 14px;
  line-height: 36px;
}

/*.frame {*/
/*  list-style: none;*/
/*  align-content: space-around;*/
/*}*/

/*.frame li {*/
/*  display: block;*/
/*  height: 37px;*/
/*  background: white;*/
/*  color: black;*/
/*  cursor: pointer;*/
/*}*/

/*.frame li:hover {*/
/*  background-color: #EFF3F5;*/
/*}*/
/*.frame li span {*/
/*  margin-left: -63px;*/
/*  position: relative;*/
/*  top: 10px;*/
/*}*/
.navbar-nav {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.mr-auto {
  margin-right: auto !important;
}


.ksd-bgd-left {
  position: absolute;
  right: -8px;
  top: -10px;
  transform: scale(0.82);
  font-size: 12px !important;
  border: 1px solid #eee;
  border-radius: 10px;
  background: red;
  color: #fff;
  padding: 0px 6px;
  text-align: center;
  font-style: initial;
}

.nav-item {
  margin: 0 10px;
}

.navbar-collapse {
  display: flex !important;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  height: 48px;
}

.ksd-nav-linknav {
  padding: 4px 22px !important;
  font-size: 14px;
  line-height: 16px;
  border-radius: 18px;
}

a {
  text-decoration: none;
  background-color: transparent;
}

.ktipmessage-boxc {
  position: absolute;
  right: 202px;
  z-index: 999;
  top: 6px;
  width: 80px;
}

.tp2 {
  top: 2px !important;
}

.pr {
  position: relative;
}

.fz20 {
  font-size: 20px !important;
}

.tipmessage-box {
  position: absolute;
  top: 7px;
  right: 138px;
  z-index: 1025;
  color: #34495e;
  width: 66px;
  font-size: 14px;
}

.tp1 {
  top: 1px !important;
}

.pr {
  position: relative;
}

.i-frame {
  background-color: white;
  position: absolute;
  width: 172px;
  height: 206px;
  top: 24px;
  z-index: 1024;
  left: calc(50% - 224px) !important;
  padding-top: 12px;
}

.animated2 {
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

.im-list-box {
  width: 172px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  padding: 10px 0;
}

.im-list {
  display: block;
  text-align: left;
  position: relative;
  line-height: 36px;
  height: 36px;
  padding-left: 20px;
}

.im-list:hover {
  background-color: #EFF3F5;
}

.im-root a, .im-root a:hover, .im-root a:active, .im-root a:link, .im-root a:visited {
  text-decoration: none;
  color: inherit;
}

.im-list .im-notify.im-number.im-center {
  top: 10px;
  right: 20px;
}

.im-notify.im-number.im-center {
  top: -8px;
  right: -8px;
  transform: scale(0.88);
}

.im-notify.im-number {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #fff;
}

.im-notify {
  position: absolute;
  background-color: #fa5a57;
}
</style>

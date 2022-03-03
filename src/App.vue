<template>
  <div id="app">
    <nav-bar v-if="!indexOfFlag('/topic')">
      <nav-img></nav-img>
      <nav-content :message="this.message" :show-login="showLogin" active-color="white" active-bg-color="#EFF3F5"></nav-content>
      <nav-btn v-if="this.isActive"></nav-btn>
      <nav-user-login v-else :_this="this"></nav-user-login>
    </nav-bar>
    <message v-if="indexOfFlag('/topic')"></message>
    <router-view v-if="!indexOfFlag('/topic')"></router-view>
    <transition name="top">
      <ul v-show="this.slide && !indexOfFlag('/login') && !indexOfFlag('/course')" class="layui-fixbar" style="display: block;">
        <li @click="backToTop('slide_bottom')" class="layui-icon layui-fixbar-top" lay-type="top" style="display: list-item;"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavContent from "components/common/navbar/NavContent";
import NavImg from "./components/common/navbar/NavImg";
import NavBtn from "./components/common/navbar/NavBtn";
import EditorMarkdown from "./views/bbs/children/EditorMarkdown";
import Message from "./views/bbs/children/Message";
import NavUserLogin from "./components/common/navbar/NavUserLogin";
import cookie from 'js-cookie'
import loginApi from './network/login'
import {indexOfFlag, backToTop, easeInOutQuad, slideTop} from "./common/utils";

export default {
  name: 'App',
  data() {
    return {
      index: '',
      account: '',
      isActive: '',//判断是否展示登录按钮还是展示用户信息
      showLogin: false,
      slide: false,
      message:{
        myNewsNumber: 2,
        friendFeedNumber: 10,
        replyNumber: 0,
        systemNumber: 19,
        courseNumber: 87
      }
    }
  },
  methods: {
    wxLogin() {
      //把token放入cookie中
      if (!cookie.get("wx_token")) {
        cookie.set('wx_token', this.$store.state.token, {domain: 'localhost', expires: 15})
        cookie.set('wx_login', {domain: 'localhost'})
      }
      loginApi.getLoginUserInfo()
        .then(response => {
          this.$store.commit("editLoginUserInfo", response.data.data.userInfo)
          cookie.set('wx_login', this.$store.state.loginInfo, {domain: 'localhost'})
        })
    },
    userAccountLogin() {
      loginApi.getLoginUserInfo().then(response => {
        this.$store.commit("editLoginUserInfo", response.data.data.userInfo)
        this.isActive = false;
      })
    },
    indexOfFlag,
    backToTop,
    easeInOutQuad,
    slideTop,
    //获取用户信息

  },
  mounted() {
    if (!(this.$route.path.indexOf('/zl') != -1)) {
      document.querySelector('body').className = 'bg-gray'
    }
    window.addEventListener('scroll', this.slideTop);
  },
  components: {
    NavUserLogin,
    Message,
    EditorMarkdown,
    NavBtn,
    NavImg,
    NavBar,
    NavContent
  },
  created() {
    let ele = document.getElementsByTagName('*');
    for (let i = 0; i < ele.length; i++) {
      ele[i].style.userSelect = 'text';
    }
    // //未登录，没有cookie
    // if (!cookie.get('wx_token')) {
    //   this.isActive = true;
    // }
    this.$router.onReady(() => {
      //获取路径里的token
      // this.$store.state.token = this.$route.query.token

      this.index = this.$route.query.index
      this.account = this.$route.query.account
      if (cookie.get("wx_token")) {//微信登录
        this.isActive = false
        this.wxLogin()
      } else if (this.index) { //走账号登录
        this.userAccountLogin();
      } else {
        this.isActive = true
      }
    })
    if (window.name == 'isReload') {
      this.backToTop('slide_bottom')
    } else {
      window.name = 'isReload'
    }

  }
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/icon.css";
@import "./assets/css/common.css";


</style>

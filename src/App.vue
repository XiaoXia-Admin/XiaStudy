<template>
  <div id="app">
    <nav-bar v-if="!messageShow">
      <nav-img></nav-img>
      <nav-content active-color="white" active-bg-color="#EFF3F5"></nav-content>
      <nav-btn v-if="this.isActive"></nav-btn>
      <nav-user-login v-else :login-info="loginInfo"></nav-user-login>
    </nav-bar>
    <message v-if="messageShow"></message>
    <router-view v-if="!messageShow"></router-view>
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
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      token: '',
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: ''
      },
      isActive: true,
    }
  },
  methods: {
    wxLogin() {
      //把token放入cookie中
      if(!cookie.get("wx_token")) {
        cookie.set('wx_token', this.token,{domain:'localhost',expires:15})
        cookie.set('wx_login', {domain:'localhost'})
      }
      loginApi.getLoginUserInfo()
        .then(response => {
          this.loginInfo = response.data.data.userInfo
          cookie.set('wx_login',this.loginInfo, {domain: 'localhost'})
      })

    }
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
  computed: {
    messageShow() {
      return this.$route.path.indexOf('/topic') !== -1;
    }
  },
  created() {
    this.$router.onReady(() => {
      //获取路径里的token
      this.token = this.$route.query.token
      if(this.token || cookie.get("wx_token")) {
        this.isActive = false
        this.wxLogin()
      } else {
        this.isActive = true
      }
    })

  }
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/icon.css";
@import "./assets/css/common.css";

body {
  background-color: #EFF3F5;
}
</style>

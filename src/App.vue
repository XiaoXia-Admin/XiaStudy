<template>
  <div id="app">
    <nav-bar v-if="!indexOfFlag('/topic')">
      <nav-img></nav-img>
      <nav-content :show-login="showLogin" active-color="white" active-bg-color="#EFF3F5"></nav-content>
      <nav-btn v-if="this.isActive"></nav-btn>
      <nav-user-login :_this="this"  v-else :is-active="isActive"></nav-user-login>
    </nav-bar>
    <message v-if="indexOfFlag('/topic')"></message>
    <router-view v-if="!indexOfFlag('/topic')"></router-view>
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
import {indexOfFlag} from "./common/utils";

export default {
  name: 'App',
  data() {
    return {
      index: '',
      account: '',
      isActive: true,
      showLogin: false
    }
  },
  methods: {
    wxLogin() {
      //把token放入cookie中
      if(!cookie.get("wx_token")) {
        cookie.set('wx_token', this.$store.state.token,{domain:'localhost',expires:15})
        cookie.set('wx_login', {domain:'localhost'})
      }
      loginApi.getLoginUserInfo()
        .then(response => {
          this.$store.state.loginInfo = response.data.data.userInfo
          cookie.set('wx_login',this.$store.state.loginInfo, {domain: 'localhost'})
      })

    },
    userAccountLogin(){
      loginApi.accountGetUserInfo(this.account).then(response => {
        this.$store.state.loginInfo = response.data.data.userInfo
        this.isActive = false;
      })

    },
    indexOfFlag
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
    if (!cookie.get('wx_token')) {
      this.isActive = true;
    }
    this.$router.onReady(() => {
      //获取路径里的token
      this.$store.state.token = this.$route.query.token
      this.index = this.$route.query.index
      this.account = this.$route.query.account
      if(this.$store.state.token || cookie.get("wx_token")) {
        this.isActive = false
        this.wxLogin()
      } else if (this.index) {
        this.userAccountLogin();
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

<template>
  <div id="app" v-cloak>
    <nav-bar v-if="!indexOfFlag('/topic')">
      <nav-img></nav-img>
      <nav-content :show-login="showLogin" active-color="white" active-bg-color="#EFF3F5"></nav-content>
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
<!--    <div style="width:500px;height:800px;margin:-103px 0px 0px -95px;">-->
<!--      <iframe id="wx_login_frame" width="800" height="600" scrolling="no">-->
<!--      </iframe>-->
<!--    </div>-->
<!--    <canvas id="surfaceCanvas" width="1536" height="250"></canvas>-->
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
import {backToTop, easeInOutQuad, indexOfFlag, init, slideTop} from "./common/utils";
import scriptjs from "scriptjs";

export default {
  name: 'App',
  data() {
    return {
      index: '',
      account: '',
      isActive: '',//判断是否展示登录按钮还是展示用户信息
      showLogin: false,
      slide: false,

    }
  },
  methods: {
    // wxLogin() {
    //   //把token放入cookie中
    //   if (!cookie.get("wx_token")) {
    //     cookie.set('wx_token', this.$store.state.token, {domain: 'localhost', expires: 15})
    //     cookie.set('wx_login', {domain: 'localhost'})
    //   }
    //   loginApi.getLoginUserInfo()
    //     .then(response => {
    //       this.$store.commit("editLoginUserInfo", response.data.data.myUserInfoVo)
    //       cookie.set('wx_login', this.$store.state.myUserInfoVo, {domain: 'localhost'})
    //     })
    // },
    userAccountLogin() {
      loginApi.getLoginUserInfo().then(response => {
        // alert(response.data.data.myUserInfoVo.isSign)
        alert(response.data.data.myUserInfoVo.vipLevel)
        this.$store.commit("editLoginUserInfo", response.data.data.myUserInfoVo)
        // this.$store.commit("editLoginUserInfo", response.data.data.myUserInfoVo)
        this.isActive = false;
      })
    },
    indexOfFlag,
    backToTop,
    easeInOutQuad,
    slideTop,
    init() {
      (async () => {
        await this.fetchScript('./static/utils/index.js')

      })()

    },
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
    //获取用户信息


  },
  mounted() {
    // surface = new Surface(window.innerWidth / 50, new Vector(window.innerWidth, window.innerHeight));
    // surface.colour = '#000000';
    //
    // window.addEventListener('resize', () => {
    //   surface.dimensions = new Vector(window.innerWidth, window.innerHeight);
    // });
    //
    // document.body.appendChild(surface.stage);
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
    // this.$router.onReady(() => {
    //   //获取路径里的token
    //   // this.$store.state.token = this.$route.query.token
    //
    //   this.index = this.$route.query.index
    //   this.account = this.$route.query.account
    //   if (cookie.get("wx_token")) {//微信登录
    //     this.isActive = false
    //     this.wxLogin()
    //   } else if (this.index) { //走账号登录
    //     this.userAccountLogin();
    //   } else {
    //     this.isActive = true
    //   }
    // })
    if (cookie.get("wx_token")) {//有token说明登录成功
      this.isActive = false
      // alert('有token')
      if(this.$store.state.myUserInfoVo.id == '') {
        this.userAccountLogin();
      }
    }else {
      this.isActive = true
      let  myUserInfoVo = {
          id: '',
          avatar: '',
          nickname: '',
          bbsArticleNumber: 0,
          attentionNumber: 0,
          fansNumber: 0,
          isSign: false,
          vipLevel: "",
          account: "",
          experience: 0,
          money: 0
        }
      this.$store.commit("editLoginUserInfo", myUserInfoVo)
    }

    if (window.name == 'isReload') {
      this.backToTop('slide_bottom')
    } else {
      window.name = 'isReload'
    }

  },
  // watch:{
  //   $route(to,from){
  //     alert(this.CHECK_URL('http://so.csdn.net/so/search'))
  //   }
  // },
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/icon.css";
@import "./assets/css/common.css";

body{
  overflow:scroll;
  overflow-x:hidden;
  background: #cccccc;
  /*overflow-y:hidden;*/

}
[v-cloak] {
  display: none;
}
#surfaceCanvas {
  position: fixed;
  background: #2196F3;
}
</style>

<template>
  <main @click="cancelSign">
    <div>
      <div class="user_info_box">
        <div id="ucenterapp" class="container position-relative">
          <div class="user_top_bg position-relative" data-bgpic="src/assets/bg/1.jpg"
               :style="{backgroundImage: 'url('+this.userDetail.bgImg+')',marginTop: '55px'}">
            <div class="ucenterappoverlay"></div>
            <div class="px-4 pb-4 row mx-0 position-relative xjy-left" style="z-index: 1">
                 <span class="pr">
                     <img
                       :src="this.$store.state.myUserInfoVo.avatar"
                       alt="" class="avatar-4" style="border: 2px solid rgb(239, 239, 239);">
                 </span>
              <div class="col" style="align-self: center;z-index: -1">
                <h3 class="mb-2 text-white">
                  <span class="username ksd-nickname" style="font-size: 20px; font-weight:bold;vertical-align: middle;">{{ this.userDetail.nickname }}</span>
                  &nbsp;
                  <span v-show="!this.userDetail.sex" style="padding:3px;position: relative;top:1px;"
                        class="badge cbadge-fz14 ksd-sex cbadge-sex-wm  badge-primary"><i style="padding: 0;"
                                                                                          class="iconfont icon-nvxing pr"></i></span>
                  <span  v-show="this.userDetail.sex" class="badgelv cbadge-fz14 badge-primary" style="padding: 3px; position: relative; top: 1px;"><i
                    class="iconfont icon-nanxing pr" style="padding: 0px;"></i></span>
                  &nbsp;
                  <span class="badgelv badge-danger cbadge-fz12 ksd-badge-exp fw" :class="this.displayLevel"
                        data-exp="2155">Lv{{ this.getLevel(this.userDetail.experience)}}</span>
                </h3>
                <div class="ksd-p-sign" :class="{'xjy-signature':sign}" style="position: relative;"
                     :title="this.inputValue == '' ? this.userDetail.sign : this.inputValue">
                  <p @click.stop="signExchange" class="fz12 pellipsis cof"><span
                    class="ksd-sign">{{this.inputValue == '' ? this.userDetail.sign : this.inputValue}}</span>&nbsp;&nbsp;
                    <span><span class="layui-icon layui-icon-edit"></span>编辑</span></p>
                </div>
                <p style="z-index: 2"><input @click.stop="signExchange" ref="signature" type="text"
                                             :class="{'xjy-signature':!sign}" :value="this.inputValue == '' ? this.userDetail.sign : this.inputValue"
                                             placeholder="请输入签名，长度少于60"
                                             maxlength="60" :data-title="this.userDetail.sign" data-feild="sign"
                                             class="ksd-input-update ksd-input-sign"></p>
              </div>
              <div class="col text-right px-0" style="align-self: flex-end;position: relative;top:12px;"></div>
            </div>
            <div class="ksd-space-theme-trigger-box">
              <a title="切换查看" :href="'/other/user/' + this.$store.state.myUserInfoVo.id" class="ksd-space-theme-trigger"><i
                class="iconfont icon-icon_yulan"></i></a>
              <a title="更换皮肤" href="javascript:void(0);" class="ksd-space-theme-trigger ksd-space-theme-trigger-change"><i
                class="iconfont icon-chanpin-copy"></i></a>
            </div>
          </div>
          <div class="user_top_nav py-3 px-2" style="margin-bottom: 15px;overflow: hidden">
            <ul class="nav nav-pills float-left">
              <li class="nav-item">
                <a class="nav-link" href="/user/homepage" :class="{active:this.home}">主页</a>
              </li>
              <li class="nav-item ksd-nav-item" data-href="topic">
                <a class="nav-link" @click="userPage('article')" :class="{active:this.article}">文章<span
                  class="ksd-num-count6 mr-2 fz12">{{ this.userDetail.allArticleNumber }}</span></a>
              </li>
              <li class="nav-item ksd-nav-item" data-href="zhuanlan">
                <a class="nav-link" @click="userPage('special')" :class="{active:this.special}">专栏 <span
                  class="ksd-num-count6 mr-2 fz12">{{ this.userDetail.columnNumber }}</span></a>
              </li>
              <li class="nav-item ksd-nav-item" data-href="course">
                <a class="nav-link " @click="userPage('study')" :class="{active:this.study}">学习 <span class="mr-2 fz12">{{ this.userDetail.studyNumber }}</span></a>
              </li>
              <li class="nav-item ksd-nav-item" data-href="say">
                <a class="nav-link " @click="userPage('talk')" :class="{active:this.talk}">说说 <span
                  class="ksd-num-count10 ksd-say-numc mr-2 fz12">{{ this.userDetail.dynamicNumber }}</span></a>
              </li>
              <li class="nav-item ksd-nav-item" data-href="setting">
                <a class="nav-link " @click="userPage('setting')" :class="{active:this.setting}">设置</a>
              </li>
            </ul>
            <span class="pl-3 float-right " style="color: #1E9FFF;">
                                  <a href="javascript:void(0);" data-href="fans" data-type="1"
                                     class="py-1 ksd-nav-item-fans nav-link"
                                     style="color: #ff7749"
                                     :class="{'nav-link-bold':this.follow}"
                                     @click="userPage('follow')">
                                      <i class="iconfont icon-xiazai11"
                                         style="position: relative;top:1px;"></i> 我的关注（{{ this.userDetail.attentionNumber }}）
                                  </a>
                                  <span class="ksd-spspan" style="padding:0 5px;">|</span>
                                  <a href="javascript:void(0);" data-href="follow" data-type="2"
                                     class="py-1 ksd-nav-item-fans nav-link"
                                     @click="userPage('fans')"
                                     :class="{'nav-link-bold':this.fans}"
                                  >
                                      <i class="iconfont icon-fensiguanli" style="position: relative;top:2px;"></i> 我的粉丝（{{ this.userDetail.fansNumber }}）
                                  </a>
                              </span>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </main>

</template>

<script>
import {backToTop, bottomExchange, cancelSign, easeInOutQuad, getLevel, userPage} from "../../common/utils";
import loginApi from "../../network/login";

export default {
  name: "User",

  data() {
    return {
      home: true,
      article: false,
      special: false,
      study: false,
      talk: false,
      setting: false,
      sign: false,
      follow: false,
      fans: false,
      user: true,
      inputValue: '',
      userDetail: {
        id: "",
        bgImg: "",
        avatar: "",
        nickname: "",
        sex: false,
        experience: 0,
        sign: "",
        attentionNumber: 0,
        fansNumber: 0,
        allArticleNumber: 0,
        columnNumber: 0,
        studyNumber: 0,
        dynamicNumber: 0,
        vipLevel: ""
      }
    }
  },
  methods: {
    userPage,
    bottomExchange,
    signExchange() {
      this.sign = true;
    },
    cancelSign,
    getLevel,
    getUserDetail(){
      loginApi.getUserDetail()
        .then(response => {
          this.userDetail = response.data.data.userDetail
        })
    },
    backToTop,
    easeInOutQuad,
  },
  computed: {
    displayLevel() {
      return 'cbadge-exp-lv' + this.getLevel(this.userDetail.experience)
    }
  },
  created() {
    this.home = this.$route.path.indexOf('/homepage') !== -1;
    this.article = this.$route.path.indexOf('/article') !== -1;
    this.follow = this.$route.path.indexOf('/follow') !== -1;
    this.fans = this.$route.path.indexOf('/fans') !== -1;
    this.special = this.$route.path.indexOf('/special') !== -1;
    this.study = this.$route.path.indexOf('/study') !== -1;
    this.talk = this.$route.path.indexOf('/talk') !== -1;
    this.setting = this.$route.path.indexOf('/setting') !== -1;
    if (this.$route.params.userId) {
      this.user = false
    } else {
      this.user = true
    }
    //获取用户主页详情信息
    this.getUserDetail()
  },
  mounted() {
    if (window.name == 'isReload') {
      this.backToTop('slide_bottom')
      let num = this.$route.path.lastIndexOf('/')
      let flagRoute = this.$route.path.substring(num, this.$route.path.length)
      let route
      // alert(flagRoute)
      let array = ['/tag', '/collect', '/purchase', '/edit', '/modify']
      // alert(array.findIndex((item) => {return item == flagRoute}))
      if(array.findIndex((item) => {return item == flagRoute}) != -1) {
        let router = this.$route.path.substring(0, num);
        // alert(router)
        // alert(route)
        // alert(route)
        this.$router.replace(router);
      } else {
        // route = this.$route.path.substring(0, num);

      }

    } else {
      window.name = 'isReload'
    }
  },
}
</script>

<style scoped>
@import "../../assets/css/user.css";

main {
  flex: 1;
  padding-bottom: 20px;
}

.user_top_bg {
  overflow: hidden;
  padding-top: 116px;
  transition: all ease 200ms;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.ucenterappoverlay {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.12);
}

.xjy-signature {
  display: none;
}

.avatar-4 {
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 4.5rem;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
}


.text-white {
  color: #fff !important;
}

.mb-2, .my-2 {
  margin-bottom: .5rem !important;
}

h1, h3, h4 {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
}

h1, h3, h4 {
  font-weight: 500;
}

.badge {
  display: inline-block;
  margin-bottom: 8px;
  padding: .75em 2.4em;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 1.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.cbadge-sex-wm {
  background: #ed4f82;
}

.badge-primary {
  color: #fff;
  background-color: #007bff;
}

.badgelv {
  transform: scale(0.9);
  display: inline-block;
  margin-bottom: 8px;
  padding: .25em .32em;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 1.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}


.fw {
  font-weight: 600 !important;
}

.pellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.cof {
  color: #fff !important;
}

.fz12 {
  font-size: 12px !important;
}

.float-right {
  float: right !important;
}

.ksd-input-sign {
  width: 600px;
  border: none;
  padding: 5px;
  font-family: inherit;
  border-radius: 20px;
  text-indent: 1em;
}

.text-right {
  text-align: right !important;
}

input[type="text"], input[type="email"], input[type="url"], textarea {
  border: 1px solid #E9E9E9;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.ksd-space-theme-trigger-box {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.42);
  z-index: 10;
  padding: 3px;
  border-radius: 18px;
}

.ksd-space-theme-trigger {
  display: inline-block;
  padding: 0 8px;
}

a {
  color: #000000;
}


.ksd-space-theme-trigger i {
  font-size: 18px;
  transition: 300ms;
}

.user_top_nav {
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 0 0 4px 4px;
}


.nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.float-left {
  float: left !important;
}

.user_top_nav .nav-pills .nav-item {
  cursor: pointer;
  padding-left: 12px;
}

.user_top_nav .nav-pills .nav-link.active {
  position: relative;
  color: #5b6066;
  background-color: unset;
  font-weight: bold;
}

.cbadge-sex-wm {
  background: #ed4f82;
}

.user_top_nav .nav-pills .nav-link {
  font-size: 14px;
}

.nav-pills .nav-link {
  padding: 0.2rem 0.7rem !important;
  border-radius: 20px !important;
}

.user_top_nav .nav-pills .nav-link.active::after {

  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -0.8rem;
  background: #34495e;
  border: 1px solid;

}

.ksd-nav-item a, .ksd-nav-item-fans {
  transition: 100ms;
  text-decoration: none !important;
}

.nav-link:hover {
  font-weight: bold;
}
.nav-link-bold {
  font-weight: bold;
}

.mr-2, .mx-2 {
  margin-right: .5rem !important;
}



</style>

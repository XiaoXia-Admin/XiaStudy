<template>
  <div class="ucenter_box">
    <div id="ucenterapp" class="container">
      <div class="user_top_bg position-relative xjy-left"
           :style="{backgroundImage: 'url('+this.userDetail.bgImg+')',marginTop: '55px'}">
        <div class="px-4 pb-4 row mx-0 "><span class="pr">
          <img :src="this.userDetail.avatar" alt="" class="avatar-4"
               style="border: 2px solid rgb(239, 239, 239);"></span>
          <div class="col" style="align-self: center;"><h3 class="mb-2 text-white"><span class="username"
                                                                                         style="font-size: 20px; font-weight: bold; vertical-align: middle;">{{
              this.userDetail.nickname
            }}
          <span v-show="this.userDetail.sex == 0" style="padding:3px;position: relative;top:-1px;margin-right: 5px;"
                class="badge cbadge-fz14 ksd-sex cbadge-sex-wm  badge-primary"><i style="padding: 0;"
                                                                                  class="iconfont icon-nvxing pr"></i></span>

                  <span v-show="this.userDetail.sex == 1" class="badgelv cbadge-fz14 badge-primary"
                        style="padding: 3px; position: relative; top: 1px;"><i
                    class="iconfont icon-nanxing pr" style="padding: 0px;"></i></span>

          </span>
            <span data-exp="2555" class="badgelv badge-danger cbadge-fz12 ksd-badge-exp fw" :class="this.displayLevel">Lv{{
                this.getLevel(this.userDetail.experience)
              }}</span>
          </h3>
            <p :title="this.userDetail.sign" class="fz12 pellipsis cof">{{ this.userDetail.sign }} </p></div>
          <div class="col text-right px-0" style="align-self: flex-end;"><input type="hidden"
                                                                                value="e73cbe9b3c21455ca55f371cf9efd0aa">
            <input type="hidden" id="followId" value="e73cbe9b3c21455ca55f371cf9efd0aa">
            <span class="pl-3 text-white">
              <a v-show="isAttention == 0" class="btn btn-0099ee  px-3 py-1 ksd-b-nav-link">
                <i class="iconfont tp1 pr icon-jia"></i> 关注TA
              </a>
              <a v-show="isAttention == 1" class="btn btn-0099ee  px-3 py-1 ksd-b-nav-link"><i
                class="iconfont tp1 pr icon-zhengquewancheng"></i> 已关注TA </a>
            </span> <span class="pl-3 text-white">
              <a href="/user" class="btn px-3 py-1 ksd-b-nav-link btn-0099ee2">
                <i class="iconfont icon-home"></i> 我的主页
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="user_top_nav py-3 px-2 position-relative" style="margin-bottom: 15px;">
        <ul class="nav nav-pills">
          <li data-href="say" class="nav-item ksd-nav-item"><a @click="bottomExchange('talk')" class="nav-link"
                                                               :class="{active:this.talk}">说说<span
            class="fz12 ml-1">{{this.userDetail.dynamicNumber}}</span></a></li>
          <li data-href="topic" class="nav-item ksd-nav-item"><a @click="bottomExchange('article')" class="nav-link"
                                                                 :class="{active:this.article}">文章<span
            class="fz12 ml-1">{{this.userDetail.articleNumber}}</span></a>
          </li>
          <li data-href="topic" class="nav-item ksd-nav-item"><a class="nav-link" @click="bottomExchange('special')"
                                                                 :class="{active:this.special}">专栏<span
            class="fz12 ml-1">{{this.userDetail.columnNumber}}</span></a>
          </li>
          <li data-href="course" class="nav-item ksd-nav-item"><a class="nav-link" @click="bottomExchange('study')"
                                                                  :class="{active:this.study}">学习 <span
            class="fz12 ml-1">{{this.userDetail.studyNumber}}</span></a>
          </li>
          <li data-href="content" class="nav-item ksd-nav-item"><a class="nav-link" @click="bottomExchange('home')"
                                                                   :class="{active:this.home}">简介</a></li>
        </ul>
        <div class="ksd-gz-box">
          <span class="pl-3 float-right " style="margin-top: -17px;color: rgb(30, 159, 255);">
            <a href="javascript:void(0);" class="py-1 ksd-nav-item-fans" style="color: rgb(255, 119, 73);"
               :class="{'nav-link-bold': this.follow}" @click="bottomExchange('follow')"><i
              class="iconfont icon-shoucang" style="position: relative; top: 1px;"></i> 关注（<span
              class="ksd-guanzhunum-gg">{{this.userDetail.attentionNumber}}</span>）
           </a> <span class="ksd-spspan" style="padding: 0px 5px;">|</span>
            <a href="javascript:void(0);" class="py-1 ksd-nav-item-fans" @click="bottomExchange('fans')" :class="{'nav-link-bold': this.fans}"><i
              class="iconfont icon-fensiguanli" style="position: relative; top: 2px;"></i> 粉丝（<span
              class="ksd-fans-num">{{this.userDetail.fansNumber}}</span>）
                            </a></span></div>
      </div>
    </div>
    <other-talk v-show="this.talk"></other-talk>
    <other-article v-show="this.article"></other-article>
    <other-special v-show="this.special"></other-special>
    <other-study v-show="this.study"></other-study>
    <other-home v-show="this.home"></other-home>
    <Follow :search-box="false" :user-list="this.userList" v-show="this.follow"></Follow>
    <Follow :search-box="false" :user-list="this.userList" v-show="this.fans"></Follow>

  </div>
</template>

<script>
import {bottomExchange, getLevel} from "../../common/utils";
import OtherTalk from "./children/OtherTalk";
import OtherArticle from "./children/OtherArticle";
import OtherSpecial from "./children/OtherSpecial";
import OtherStudy from "./children/OtherStudy";
import OtherHome from "./children/OtherHome";
import HomePage from "../user/children/HomePage";
import Follow from "../user/children/Follow";
export default {
  name: "UserPreview",
  components: { OtherHome, OtherStudy, OtherSpecial, OtherArticle, OtherTalk, HomePage, Follow},
  data() {
    return {
      img: require('../../assets/bg/1.jpg'),
      home: false,
      article: false,
      special: false,
      study: false,
      talk: true,
      setting: false,
      follow: false,
      fans: false,
      isAttention: 0,
      userDetail: {
        id: 1,
        bgImg: './static/bg/1.jpg',
        avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
        nickname: '小夏同学',
        sex: 1,
        experience: 100000,
        sign: '我还是从前那个少年，心中从未有改变!',
        attentionNumber: 123,
        fansNumber: 11,
        articleNumber: 123321,
        columnNumber: 213,
        studyNumber: 3,
        dynamicNumber: 323
      },
    }
  },
  methods: {
    bottomExchange,
    getLevel
  },
  computed: {
    displayLevel() {
      return 'cbadge-exp-lv' + this.getLevel(this.userDetail.experience)
    }
  },
  mounted() {
    if (window.name == 'isReload') {
      let num = this.$route.path.lastIndexOf('/')
      let route = this.$route.path.substring(0, num);
      this.$router.replace(route);
    } else {
      window.name = 'isReload'
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/user.css";
/*特有的*/
.text-white {
  color: #fff !important;
}

.pl-3, .px-3 {
  padding-left: 1rem !important;
}

.btn-0099ee {
  background-color: #1E9FFF;
  color: #fff !important;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-0099ee2 {
  background-color: #ff5722;
  color: #fff !important;
}

a:not([href]) {

  color: inherit;
  text-decoration: none;

}

.ksd-b-nav-link:hover {
  display: inline-block;
  font-weight: 400;
  color: white;
  background-color: black;
  /*text-align: center;*/
  /*vertical-align: middle;*/
  /*-webkit-user-select: none;*/
  /*-moz-user-select: none;*/
  /*-ms-user-select: none;*/
  /*user-select: none;*/
  /*background-color: transparent;*/
  /*border: 1px solid transparent;*/
  /*padding: .375rem .75rem;*/
  /*font-size: 1rem;*/
  /*line-height: 1.5;*/
  /*border-radius: .25rem;*/
  /*transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;*/

}


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

.cbadge-exp-lv1 {
  background: #bfbfbf;
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
.ksd-nav-item-fans:hover {
  font-weight: bold;
}

.nav-link-bold {
  font-weight: bold;
}
</style>

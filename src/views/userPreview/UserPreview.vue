<template>
  <div class="ucenter_box">
    <div id="ucenterapp" class="container">
      <div class="user_top_bg position-relative xjy-left"
           :style="{backgroundImage: 'url('+this.img+')',marginTop: '55px'}">
        <div class="px-4 pb-4 row mx-0 "><span class="pr"><img src="../../assets/avatar/6.jpg" alt="" class="avatar-4"
                                                               style="border: 2px solid rgb(239, 239, 239);"></span>
          <div class="col" style="align-self: center;"><h3 class="mb-2 text-white"><span class="username"
                                                                                         style="font-size: 20px; font-weight: bold; vertical-align: middle;">夏金宇</span>
            <span class="badgelv cbadge-fz14 badge-primary" style="padding: 3px; position: relative; top: 1px;"><i
              class="iconfont iconxingbie-nan pr" style="padding: 0px;"></i></span> <span data-exp="2555"
                                                                                          class="badgelv badge-danger cbadge-fz12 ksd-badge-exp fw cbadge-exp-lv1">Lv1</span>
          </h3>
            <p title="加油 " class="fz12 pellipsis cof">加油 </p></div>
          <div class="col text-right px-0" style="align-self: flex-end;"><input type="hidden"
                                                                                value="e73cbe9b3c21455ca55f371cf9efd0aa">
            <input type="hidden" id="followId" value="e73cbe9b3c21455ca55f371cf9efd0aa">
            <span
              class="pl-3 text-white"><a class="btn btn-0099ee  px-3 py-1 ksd-b-nav-link"><i
              class="iconfont tp1 pr icon-jia"></i> 关注TA </a></span> <span class="pl-3 text-white"><a href="/user"
                                                                                                          class="btn px-3 py-1 ksd-b-nav-link btn-0099ee2"><i
              class="iconfont icon-home"></i> 我的主页</a></span></div>
        </div>
      </div>
      <div class="user_top_nav py-3 px-2 position-relative" style="margin-bottom: 15px;">
        <ul class="nav nav-pills">
          <li data-href="say" class="nav-item ksd-nav-item"><a @click="userPreviewPage('talk')" class="nav-link" :class="{active:this.talk}">说说<span
            class="fz12 ml-1">1</span></a></li>
          <li data-href="topic" class="nav-item ksd-nav-item"><a @click="userPreviewPage('article')" class="nav-link" :class="{active:this.article}">文章<span class="fz12 ml-1">0</span></a>
          </li>
          <li data-href="topic" class="nav-item ksd-nav-item"><a class="nav-link" @click="userPreviewPage('special')" :class="{active:this.special}">专栏<span class="fz12 ml-1">2</span></a>
          </li>
          <li data-href="course" class="nav-item ksd-nav-item"><a class="nav-link" @click="userPreviewPage('study')" :class="{active:this.study}">学习 <span class="fz12 ml-1">22</span></a>
          </li>
          <li data-href="content" class="nav-item ksd-nav-item"><a class="nav-link" @click="userPreviewPage('home')" :class="{active:this.home}">简介</a></li>
        </ul>
        <div class="ksd-gz-box"><span class="pl-3 float-right " style="margin-top: -17px;color: rgb(30, 159, 255);"><a
          href="javascript:void(0);" class="py-1 ksd-nav-item-fans" style="color: rgb(255, 119, 73);"><i
          class="iconfont icon-shoucang" style="position: relative; top: 1px;"></i> 关注（<span
          class="ksd-guanzhunum-gg">1</span>）
                            </a> <span class="ksd-spspan" style="padding: 0px 5px;">|</span> <a
          href="javascript:void(0);" class="py-1 ksd-nav-item-fans"><i class="iconfont icon-fensiguanli"
                                                                       style="position: relative; top: 2px;"></i> 粉丝（<span
          class="ksd-fans-num">1</span>）
                            </a></span></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {bottomExchange,userPreviewPage} from "../../common/utils";

export default {
  name: "UserPreview",
  data() {
    return {
      img: require('../../assets/bg/1.jpg'),
      home: false,
      article: false,
      special: false,
      study: false,
      talk: true,
      setting: false,
    }
  },
  methods: {
    bottomExchange,
    userPreviewPage
  },
  mounted() {
    if (window.name == 'isReload') {
      let num = this.$route.path.lastIndexOf('/')
      let route = this.$route.path.substring(0,num);
      this.$router.replace(route);
    }else{
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
  font-weight: 400;
  text-decoration: none !important;
}

.nav-link:hover {
  font-weight: bold;
}

.ksd-nav-item a, .ksd-nav-item-fans {
  transition: 100ms;
  font-weight: 400;
  text-decoration: none !important;
}


</style>

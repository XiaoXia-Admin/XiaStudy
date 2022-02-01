<template>
  <main class="mainbox">
    <input type="hidden" value="1" id="ksd-uvip">
    <div class="banner-box ksd-banner-box pr ">
      <div class="overlay" style="background:#0362d8"></div>
      <div class="topWarp">
        <div class="course-cont ">
          <div class="course-title" title="方法详解">
            <span>方法详解</span>

          </div>
          <div class="course-stitle">方法详解</div>
          <div class="course-price-box">
            <span class="course-price-new">￥0.00</span>
            <span class="course-price-old">￥0.00</span>
            <span>


                    </span>
            <span title="课程时长" class="layui-badge layui-bg-black ml-2 mt-1 pr-2 pl-2">课程时长：57:27</span>
          </div>
          <div id="has-open-sales"></div>

          <div style="text-align: left;">
            <a class="course-btn free-study  ksd-nav-link-downx nav-link-down" style="background: #03a9f4"
               href="/course/play/1317504610634321921" target="_blank"><i
              class="iconfont iconshoucang1 fz18 pr-2 pr tp1"></i><span class="msg">免费课程，立即学习</span></a>

          </div>


          <!--          <a class="course-btn  nav-link-down nav-link-down-reward fr pr" data-cid="1317504610634321921" style="background:#fa5151;bottom:63px;" href="javascript:void(0);" title="赞赏或者K币、下载学习资料" onclick="KsdPay.rewarddialog(this)">-->
          <!--            <i class="iconfont iconqian fz18 pr-2 pr tp1"></i><span class="msg">赞赏课程</span>-->
          <!--          </a>-->
        </div>
      </div>
    </div>
    <div class="banner-box pr" style="height: 50px;">
      <div class="tag-box">
        <div class="warp">
          <ul class="details-tab">
            <li class="changebar" :class="{major: this.courseDetail}"><a @click="selectCourse('courseDetail')" href="javascript:void(0);">课程详情</a></li>
            <li class="changebar" :class="{major: this.courseChapter}"><a @click="selectCourse('courseChapter')" href="javascript:void(0);">课程章节<span class="fz12 ml-2">6</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="class-details-box">
      <div class="text-warp" :class="{show: this.flag}">
        <div class="table-top-box">
          <ul class="service-box">
            <li class="course-days" style="width: 33.333%;">
              <p class="cont-tit"><span class="text-span">4</span></p>
              <p class="cont-stit">小节数</p>
            </li>
            <li class="effective-days" style="width: 33.333%;">
              <p class="cont-tit"><span class="text-span" style="font-size:40px;">93989</span>
              </p>
              <p class="cont-stit">浏览数</p>
            </li>

            <li class="study-people" style="width: 33.333%;">
              <p class="cont-tit"><span class="text-span">46:58</span></p>
              <p class="cont-stit">课程时长</p>
            </li>
          </ul>
        </div>

        <div class="course-information-box pr" id="doc-content">
          <div id="tinymce">
            <div class="divTag" id="tinymcebox"><h4 id="etdw4">课程标题：聊聊编程这条路</h4>
              <p><br></p><h4 id="zfv4p">课程概述：</h4>
              <p><br></p>
              <p>在正式学习编程之前，我们来聊聊编程这条路到底该如何学习！要知道这条路，才能走得下去！即使再小的帆也能远航！</p>
              <p><br></p><h4 id="07hqf">讲师介绍：</h4>
              <p><br></p>
              <p>秦疆（遇见狂神说） Bilibili空间地址：<a href="https://space.bilibili.com/95256449" target="_blank"
                                           style="background-color: rgb(255, 255, 255);" one-link-mark="yes">https://space.bilibili.com/95256449</a>
              </p>
              <p><br></p><h4 id="sfow8">适合人群：</h4>
              <p><br></p>
              <p>编程零基础人员、初学者</p>
              <p><br></p><h4 id="lp281">学习时长：46分钟</h4>
              <p><br></p><h4 id="hutw5">课程安排：</h4>
              <p><br></p>
              <ol>
                <li>第一节：解决大家的疑问</li>
                <li>第二节：Java和Python的抉择</li>
                <li>第三节：学习方法及课程概述</li>
                <li>第四节：关于教育和对大家的期望</li>
              </ol>
              <p><br></p><h4 id="93xn9">课程反馈：</h4>
              <p><br></p>
              <p class="md-end-block md-p"><span class="md-plain md-expand">在这里学习的过程中，如果您有什么好的想法或建议，可以发送邮件到我们的邮箱：xuexiangban@dingtalk.com，感谢您对我们的支持。</span>
              </p></div>
          </div>
        </div>
      </div>

      <!--课程表-->


      <!--课程章节-->
      <div class="list-box" :class="{show: !this.flag}">
        <div class="onlyOne-stage ksd-onlyOne-stage  delay-1s">
          <div class="chapter-title">
            <h6 class="fz16">第1章 ：<span>方法详解</span></h6>
            <span @click="expendSelect" class="expand fr" :class="{show: !this.expend}"><i class="iconfont icon-xiangshang"></i></span>
            <span @click="expendSelect" class="expand fr" :class="{show: this.expend}"><i class="iconfont icon-xiangxia"></i></span>
          </div>
          <div class="chapter-cont" :class="{show: this.expend}">
            <div class="summary-box">
              <ul class="summary-cont">
                <li class="animated fadeIn">


                  <a target="_blank" href="../play/1317504610634321921#ksd_1336562976224534530_1336563151789711361" title="01、什么是方法？，点击前往学习">
                    <span class="title-text fl">第1节 ：01、什么是方法？</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="609.0"></span>

                  </a>
                </li>
                <li class="animated fadeIn">


                  <a target="_blank" href="../play/1317504610634321921#ksd_1336562976224534530_1336563235713540098" title="02、方法的定义和调用，点击前往学习">
                    <span class="title-text fl">第2节 ：02、方法的定义和调用</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="844.0"></span>

                  </a>
                </li>
                <li class="animated fadeIn">


                  <a target="_blank" href="../play/1317504610634321921#ksd_1336562976224534530_1336563299315965954" title="03、方法的重载，点击前往学习">
                    <span class="title-text fl">第3节 ：03、方法的重载</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="364.0"></span>

                  </a>
                </li>
                <li class="animated fadeIn">


                  <a target="_blank" href="../play/1317504610634321921#ksd_1336562976224534530_1336563366928146434" title="04、命令行传递参数，点击前往学习">
                    <span class="title-text fl">第4节 ：04、命令行传递参数</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="381.0"></span>

                  </a>
                </li>
                <li class="animated fadeIn">


                  <a target="_blank" href="../play/1317504610634321921#ksd_1336562976224534530_1336563435580514306" title="05、可变参数，点击前往学习">
                    <span class="title-text fl">第5节 ：05、可变参数</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="434.0"></span>

                  </a>
                </li>
                <li class="animated fadeIn">


                  <a target="_blank" href="../play/1317504610634321921#ksd_1336562976224534530_1336563512453718017" title="06、递归讲解，点击前往学习">
                    <span class="title-text fl">第6节 ：06、递归讲解</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="815.0"></span>

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!--相关课程-->
      <div class="list-box" style="display: none">
        <div class="table-top-box" style="margin-top: 30px;display: flex;justify-content: space-around">

        </div>
      </div>

      <!--课程面试题-->

    </div>
  </main>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      courseDetail: true,
      courseChapter: false,
      flag: false,
      expend: false
    }
  },
  methods: {
    selectCourse(str) {
      if(str == 'courseDetail') {
        this.flag = false
        this.courseDetail = true
        this.courseChapter = false
      } else {
        this.flag = true
        this.courseDetail = false
        this.courseChapter = true
      }
    },
    expendSelect (){
      this.expend = !this.expend
    }
  }
}
</script>

<style scoped>
.mainbox {
  margin-bottom: 100px;
}
/*.show {*/
/*  display: none;*/
/*}*/
main {
  padding-bottom: 200px;
}

main .banner-box {
  height: 460px;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: #000;
}
main .list-box .onlyOne-stage .chapter-cont .summary-box .summary-cont li a:hover {
  background: #f8f8f8;
}
main .banner-box .topWarp {

  width: 1190px;
  padding-top: 45px;
  margin: 0 auto;
  position: relative;

}

main .banner-box .topWarp .course-cont {
  margin-top: 73px;
  padding-left: 57px;
  position: relative;
}

main .banner-box .topWarp .course-cont .course-title {
  font-size: 32px;
  color: #FFFFFF;
  line-height: 74px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  height: 58px;
}

main .banner-box .topWarp .course-cont .course-stitle {
  text-align: left;
  margin-top: 12px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  word-wrap: break-word;
  width: 65%;

}

main .banner-box .topWarp .course-cont .course-price-box {
  height: 22px;
  margin-top: 42px;
  text-align: left;
}

main .banner-box .topWarp .course-cont .course-price-box .course-price-new {
  font-size: 28px;
  color: #FFFFFF;
  line-height: 22px;
}

main .banner-box .topWarp .course-cont .course-price-box .course-price-old {
  margin-left: 10px;
  text-decoration: line-through;
  line-height: 18px;
  font-size: 14px;
  color: #FFFFFF;
  opacity: 0.5;
  margin-top: 4px;
}

.layui-badge {
  height: 18px;
  line-height: 18px;
}

.layui-badge, .layui-badge-dot, .layui-badge-rim {
  position: relative;
  display: inline-block;
  padding: 0 6px;

  font-size: 12px;
  text-align: center;
  background-color: #FF5722;
  color: #fff;
  border-radius: 2px;
}

.layui-bg-black {
  background-color: #393D49 !important;
}

.layui-bg-black, .layui-bg-blue, .layui-bg-cyan, .layui-bg-green, .layui-bg-orange, .layui-bg-red {
  color: #fff !important;
}

.pl-2, .px-2 {
  padding-left: .5rem !important;
}

.pr-2, .px-2 {
  padding-right: .5rem !important;
}

.ml-2, .mx-2 {
  margin-left: .5rem !important;
}

.mt-1, .my-1 {
  margin-top: .25rem !important;
}

main .banner-box .topWarp .course-cont #has-open-sales {
  display: inline-block;
}

main .banner-box .topWarp .course-cont .course-btn {
  margin-top: 14px;
  width: 202px;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: #FFFFFF;
  border: 0;
  display: inline-block;
  margin-right: 20px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  text-align: center;

}

.nav-link-course, .nav-link-topics, .nav-link-down {
  font-size: 14px;
  font-weight: 400;
  transition: 60ms linear;
}

.tp1 {
  top: 1px !important;
}

.pr {
  position: relative;
}

.fz18 {
  font-size: 18px !important;
}

main .banner-box .tag-box {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 64px;
  background: rgba(255, 255, 255, 1);
}

main .banner-box .tag-box .warp {
  max-width: 1190px;
  margin: 0 auto;
}

main .banner-box .tag-box .warp ul {
  display: flex;
}

main .banner-box .tag-box .warp ul li {
  height: 64px;
  line-height: 64px;
  text-align: center;
  flex: 1;
  justify-content: space-between;
}

main .banner-box .tag-box .warp ul li.major a {
  color: #03a9f4;
}

main .banner-box .tag-box .warp ul li a {
  display: inline-block;
  position: relative;
  height: 64px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #666;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

main .banner-box .tag-box .warp ul li a {
  display: inline-block;
  position: relative;
  height: 64px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #666;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

.fz12 {
  font-size: 12px !important;
}

.ml-2, .mx-2 {
  margin-left: .5rem !important;
}

main .class-details-box .text-warp {
  max-width: 1190px;
  margin: 30px auto 0;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  overflow: hidden;
}

main .class-details-box .text-warp .table-top-box {
  padding: 40px 45px;
  padding-bottom: 40px;
  background: #fff;
  border-radius: 8px;
  padding-bottom: 110px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}

main .class-details-box .text-warp .table-top-box .service-box li {
  float: left;
  width: 275px;
  text-align: center;
}

main .class-details-box .text-warp .table-top-box .service-box li .cont-tit {
  font-size: 24px;
  color: #00001C;
  font-weight: lighter;
}

main .class-details-box .text-warp .table-top-box .service-box li .cont-tit .text-span {
  font-size: 50px;
  color: #666666;
  line-height: 50px;
  font-weight: lighter;
}

main .class-details-box .text-warp .table-top-box .service-box li .cont-stit {
  margin-top: 16px;
  font-size: 12px;
  color: #82868D;
}

main .class-details-box .text-warp .course-information-box {
  margin-top: 30px;
  padding: 50px 26px;
  background: #fff;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}

.pr {
  position: relative;
}

.divTag {
  line-height: 22px;
  font-size: 14px;
  color: #666;
}

.divTag h4 {
  font-size: 1.12em;
  margin-bottom: 10px;
}

.divTag p {
  line-height: 26px;
}
/*章节*/
main .list-box {
  max-width: 1190px;
  margin: 30px auto 100px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  background: #fff;
  padding: 20px 26px 56px;
}
main .list-box .onlyOne-stage {
  border-bottom: 1px solid #F0F0F0;
  background: #eff3f5;
}
main .list-box .onlyOne-stage:nth-of-type(1) .chapter-title {
  margin-top: 10px;
}
main .list-box .onlyOne-stage .chapter-title {
  position: relative;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
  background: #f8f8f8;
  height: 56px;
}
main .list-box .onlyOne-stage .chapter-title h6 {
  display: block;
  float: left;
  color: #666666;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
}
.fz16 {
  font-size: 16px !important;
}
main .list-box .onlyOne-stage .chapter-title .expand {
  position: relative;
  top: 4px;
}
.r, .y, .fr {
  float: right;
}
main .list-box .onlyOne-stage .chapter-cont {
  margin-top: 10px;
  padding: 5px 30px 30px;
  background: #eff3f5;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
}
main .list-box .onlyOne-stage .chapter-cont .summary-box:nth-of-type(1) {
  margin-top: 0;
}
main .list-box .onlyOne-stage:nth-of-type(1) .chapter-cont .summary-box:nth-of-type(1) .summary-cont {
  display: block;
}
main .list-box .onlyOne-stage .chapter-cont .summary-box .summary-cont li:nth-of-type(1) {
  margin-top: 0;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
main .list-box .onlyOne-stage .chapter-cont .summary-box .summary-cont li a {
  margin-top: 10px;
  font-size: 12px;
  color: #737C8F;
  display: block;
  background: #fff;
  padding: 15px;
  cursor: pointer;
  overflow: hidden;
  font-weight: bold;
  position: relative;
}
.l, .z, .fl {
  float: left;
}
.tp2 {
  top: 2px !important;
}
</style>

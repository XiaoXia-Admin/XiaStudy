<template>
  <main class="mainbox">
    <input type="hidden" value="1" id="ksd-uvip">
    <div class="banner-box ksd-banner-box pr ">
      <div class="overlay" style="background:#0362d8"></div>
      <div class="topWarp">
        <div class="course-cont ">
          <div class="course-title" :title="this.course.title">
            <span>{{ this.course.title}}</span>

          </div>
          <div class="course-stitle">{{this.course.description}}</div>
          <div class="course-price-box">
            <span class="course-price-new">￥{{ this.course.price }}</span>
            <span class="course-price-old">￥{{this.course.price}}</span>
            <span>


                    </span>
            <span title="课程时长" class="layui-badge layui-bg-black ml-2 mt-1 pr-2 pl-2">课程时长：{{ this.course.totalLength }}</span>
          </div>
          <div id="has-open-sales"></div>

          <div style="text-align: left;">
            <a v-show="this.course.price == 0" class="course-btn free-study  ksd-nav-link-downx nav-link-down" style="background: #03a9f4"
               :href="'/course/play/' + this.course.id" target="_blank"><i
              class="iconfont iconshoucang1 fz18 pr-2 pr tp1"></i><span class="msg">免费课程，立即学习</span></a>

            <a v-show="this.course.price != 0" class="course-btn sign-up  ksd-buy-course" data-courseid="1385771155494879233" href="javascript:void(0);"><i class="iconfont icon-gouwucheman fz18 pr-2"></i>报名学习</a>

            <a v-show="this.course.price != 0" class="course-btn free-study  ksd-nav-link-down-try nav-link-down" href="javascript:void(0);" :data-href="'/course/play/' + this.course.id"><i class="iconfont icon-bofang fz18 pr-2"></i><span class="msg">点击试学习</span></a>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-box pr" style="height: 50px;">
      <div class="tag-box">
        <div class="warp">
          <ul class="details-tab">
            <li class="changebar" :class="{major: this.courseDetail}"><a @click="selectCourse('courseDetail')" href="javascript:void(0);">课程详情</a></li>
            <li class="changebar" :class="{major: this.courseChapter}"><a @click="selectCourse('courseChapter')" href="javascript:void(0);">课程章节<span class="fz12 ml-2">{{this.course.videoNumber}}</span></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="class-details-box">
      <div class="text-warp" :class="{show: this.flag}">
        <div class="table-top-box">
          <ul class="service-box">
            <li class="course-days" style="width: 33.333%;">
              <p class="cont-tit"><span class="text-span">{{this.course.videoNumber}}</span></p>
              <p class="cont-stit">小节数</p>
            </li>
            <li class="effective-days" style="width: 33.333%;">
              <p class="cont-tit"><span class="text-span" style="font-size:40px;">{{this.course.views}}</span>
              </p>
              <p class="cont-stit">浏览数</p>
            </li>

            <li class="study-people" style="width: 33.333%;">
              <p class="cont-tit"><span class="text-span">{{this.course.totalLength}}</span></p>
              <p class="cont-stit">课程时长</p>
            </li>
          </ul>
        </div>

        <div class="course-information-box pr xjy-left" id="doc-content">
          <div id="tinymce">
            <div class="divTag" id="tinymcebox">
              <h4 id="etdw4">课程标题：{{this.course.title}}</h4>
              <p><br></p><h4 id="zfv4p">课程概述：</h4>
              <p><br></p>
              <p>{{this.course.overview}}</p>
              <p><br></p><h4 id="07hqf">讲师介绍：</h4>
              <p><br></p>
              <p>{{this.course.teacher}}
              </p>
              <p><br></p><h4 id="sfow8">适合人群：</h4>
              <p><br></p>
              <p>{{ this.course.suitablePeople }}</p>
              <p><br></p><h4 id="lp281">学习时长：{{this.course.totalLength.substring(0,this.course.totalLength.indexOf(':'))}} 分钟</h4>
              <p><br></p><h4 id="hutw5">课程安排：</h4>
              <p><br></p>
              <ol >
                <li :id="item1.id" v-for="item1 in chapterList[0].videoList" :key="item1.id">{{item1.title}}</li>
              </ol>
              <p><br></p><h4 id="93xn9">课程反馈：</h4>
              <p><br></p>
              <p class="md-end-block md-p"><span class="md-plain md-expand">{{this.course.courseFeedback}}</span>
              </p></div>
          </div>
        </div>
      </div>

      <!--课程表-->


      <!--课程章节-->
      <div class="list-box" :class="{show: !this.flag}">
        <div class="onlyOne-stage ksd-onlyOne-stage  delay-1s" v-for="item in chapterList" :key="item.id">
          <div class="chapter-title">
            <h6 class="fz16">{{item.title}}</h6>
            <span @click="expendSelect" class="expand fr" :class="{show: !expend}"><i class="iconfont icon-xiangshang"></i></span>
            <span @click="expendSelect" class="expand fr" :class="{show: expend}"><i class="iconfont icon-xiangxia"></i></span>
          </div>
          <div class="chapter-cont":class="{show: expend}">
            <div class="summary-box">
              <ul class="summary-cont">
                <li class="animated fadeIn" v-for="item1 in item.videoList" :key="item1.id">
<!--                  :href="'/course/play/' + item1.id + '/' + item1.videoSourceId"-->
                  <a href="javascript:void(0);" @click="play(item1.id, item1.videoSourceId)" :title="item1.title">
                    <span class="title-text fl">{{item1.title}}</span>
                    <span class="ksd-video-timer pr tp2 fr " data-timer="609.0"></span>
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
import courseApi from "../../../network/course";

export default {
  name: "Detail",
  data() {
    return {
      courseDetail: true,
      courseChapter: false,
      flag: false,
      expend: false,
      isBuy: 1,
      course: {
        id: '',
        title: '',
        description: '',
        price: '',
        totalLength: '',
        videoNumber: '',
        views: '',
        overview: '',
        teacher: '',
        suitablePeople: '',
        courseArrange: '',
        courseFeedback: ''
      },
      chapterList: [
        {
          id: '',
          title: '',
          videoList:[
            {
              id: '',
              title: ''
            }
          ]
        }
      ]
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
    play(id, videoId) {
      courseApi.getVideoEvidence(id, videoId).then(response => {
        let playAuth = response.data.data.playAuth
        let route = '/course/play/' + videoId +'/' + playAuth
        this.$router.replace(route)
      })

    },
    expendSelect (){
      this.expend = !this.expend
    },
    findCourseDetail(id) {
      courseApi.findCourseDetail(id).then(response => {
        this.isBuy = response.data.data.isBuy
        this.course = response.data.data.course

      })
    },
    findChapter(id) {
      courseApi.findCourseChapter(id).then(response => {
        if(response.data.data.chapterList == null) {
          this.chapterList = []
        } else {
          this.chapterList = response.data.data.chapterList
        }
      })
    }
  },
  created() {
    //查询课程详情和章节课程信息
    this.findCourseDetail(this.$route.params.detailId)
    this.findChapter(this.$route.params.detailId)
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
ol li {
  list-style-type: decimal-leading-zero;
  margin-left: 22px;
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
h1, h2, h3, h4, h5 {
  font-weight: 700;
  color: #444;
}
.divTag h4::before {
  content: "";
  border-left: 4px solid #bbb;
  padding-left: 6px;
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
main .banner-box .topWarp .course-cont .sign-up {
  cursor: pointer;
  background: #ff9800;
}
main .banner-box .topWarp .course-cont .sign-up:hover {
  background: #FF9F4A;
}

main .banner-box .topWarp .course-cont .free-study:hover {
  background: rgb(3, 169, 244) none repeat scroll 0% 0%;
}

main .banner-box .topWarp .course-cont .free-study {
  background: rgba(221,67,67,0.98);
}
</style>

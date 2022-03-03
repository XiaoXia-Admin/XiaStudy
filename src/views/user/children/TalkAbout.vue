<template>
  <div class="container" style="text-align: left;">
    <div class="ksd-main-content">
      <div id="page-video" class="wrapper" style="background: #fff;">
        <div class="container pt-3 pb-5">
          <div class="col-md-12 blog-main" :class="{show: this.otherTalk}"
               style="margin-top: 20px;padding:0 10px;overflow: hidden;position: relative">
            <div class="col-md-12 mb-3">
              <div id="say-content">
                <textarea id="sayContent-textarea" placeholder="请输入此时此刻的心情，字数少于400" maxlength="400" name="sayContent"
                          class="form-control"></textarea>
              </div>
            </div>
            <span
              style="position: absolute;font-size:12px;color:#999;bottom: 34px;left: 46px;font-size: 14px;">还可以输入：<span
              class="countnum">400</span></span>
            <div class="col-md-2 mb-3" style="position: absolute;bottom:20px;right:30px;">
              <button id="submit-say" class="btn btn-primary btn-sm btn-block" style="padding:10px 0;color: white"><i
                class="iconfont icon-zhifeiji pr-2 pr tp1"></i>发布说说
              </button>
            </div>
          </div>

          <div class="timeline-small">
            <div class="timeline-small-body">
              <ul id="ksd-say-ullist" style="overflow: hidden">
                <li v-for="(item, index) in talkList" :key="item.id" class="ksd-say-items animated fadeInUpBig"
                    :class="delay(index + 1)" style="position: relative">
                  <div class="bullet green"></div>
                  <div class="desc">
                    <h4>{{ item.content }}~<br></h4>
                    <p class="pt-4">
                <span class="float-right ksd-say-buttons">
                  <span>&nbsp;&nbsp;</span>
                  <a v-show="item.isPublic == 0" href="javascript:void(0);"
                     data-opid="155fd581af5141f5b48a07b844c47b39" data-hidden="1"
                     class="ksd-say-updatelink "><i class="iconfont icon-yinsi"></i>设为隐私(已公开)</a>
                  <a v-show="item.isPublic == 1" href="javascript:void(0);" data-opid="155fd581af5141f5b48a07b844c47b39"
                     data-hidden="1"
                     class="ksd-say-updatelink "><i class="iconfont icon-yinsi"></i>已公开</a>
                  <span>&nbsp;&nbsp;</span>
                  <a href="javascript:void(0);" class=" ksd-say-del"
                     data-opid="155fd581af5141f5b48a07b844c47b39"><i
                    class="iconfont icon-shanchu"></i>删除</a>
                  <span>&nbsp;&nbsp;</span>
                  <span v-show="item.gtmCreate == ''">
                        撰写时间：<span>刚刚</span>
                  </span>
                  <span v-show="item.gtmCreate != ''"><i
                    class="iconfont icon-shijian mr-1 pr tp1"></i><span>{{ item.gtmCreate }}</span></span></span>
                    </p>
                  </div>
                </li>
              </ul>
              <!--              <div class="loadmore ksd-pages-box none" onclick="KsdSay.loadMore()" style="display: none;">-->
              <!--                <a href="javascript:void(0);">加载更多(共<span class="ksd-total">1</span>条，当前第 <span-->
              <!--                  class="ksd-pageno">1</span>页/共<span class="ksd-pages">1</span>页)</a>-->
              <!--              </div>-->
              <!--              <div class="ksd-noempty none"-->
              <!--                   style="background: rgb(255, 255, 255) none repeat scroll 0% 0% !important; display: none;">-->
              <!--                <span class="font-weight-bold"><img src="/assert/images/nodata.png" alt="" width="200"></span>-->
              <!--                <p>快来发表您在KuangStudy的第一条说说吧. 记录成长的点滴~</p>-->
              <!--              </div>-->
              <!--              <div class="ksd-pages-nodata none" style="display: none;">-->
              <!--                <p class="text-center">没有更多了~</p>-->
              <!--              </div>-->
              <!--              <div id="kloading" style="padding: 30px 0px; text-align: center; display: none;"></div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {delay} from "../../../common/utils";

export default {
  name: "TalkAbout",
  props: {
    otherTalk: {
      type: Boolean,
      default: false
    },
    talkList: {
      type: Array,
      default: [
        {
          id: 1,
          content: '今天是美好的一天!',
          isPublic: 0,
          gtmCreate: '2022-01-02 13:17'
        },
        {
          id: 2,
          content: '今天是美好的二天!',
          isPublic: 1,
          gtmCreate: '2022-01-02 13:17'
        },
        {
          id: 3,
          content: '今天是美好的三天!',
          isPublic: 0,
          gtmCreate: '2022-01-02 13:17'
        },
        {
          id: 4,
          content: '今天是美好的四天!',
          isPublic: 1,
          gtmCreate: ''
        }
      ]
    }
  },
  methods: {
    delay
  }
}
</script>

<style scoped>
@import "../../../assets/css/user.css";

.ksd-main-content {
  min-height: 400px;
}

.ksd-say-items:hover {
  background-color: #EFF3F5;
}

.pb-5, .py-5 {
  padding-bottom: 3rem !important;
}

.pt-3, .py-3 {
  padding-top: 1rem !important;
}

.col-md-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

/*.ksd-say-ullist:hover .ksd-say-items:hover .:hover {*/
/*  visibility: hidden;*/
/*}*/
textarea.form-control {
  height: 186px;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  resize: none;
  outline: none;
}

.form-control:focus {
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  outline: 5px solid rgba(30, 159, 255, 0.5);
}

button, input, optgroup, option, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  outline: 0;
}

.mb-3, .my-3 {
  margin-bottom: 1rem !important;
}

.col-md-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-primary {
  background-color: #1E9FFF;
  border-color: #1E9FFF;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-group-sm > .btn, .btn-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.timeline-small {
  margin: 30px;
}

.timeline-small-body ul {
  padding: 1em 0 0 0em;
  margin: 0;
  list-style: none;
  position: relative;
}

.timeline-small-body ul::before {
  content: ' ';
  height: 100%;
  width: 4px;
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  left: 1.4em;
  z-index: 0;
}

*, ::after, ::before {
  box-sizing: border-box;
}

.animated.delay-1s {
  -webkit-animation-delay: 50ms;
  animation-delay: 50ms;
}

.timeline-small-body ul li {
  background: #fff;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  border: 5px dashed transparent;
}

.animated.delay-1s {
  -webkit-animation-delay: 50ms;
  animation-delay: 50ms;
}

.animated.delay-2s {
  -webkit-animation-delay: 70ms;
  animation-delay: 70ms;
}

.animated.delay-3s {
  -webkit-animation-delay: 80ms;
  animation-delay: 80ms;
}

.animated.delay-4s {
  -webkit-animation-delay: 1000ms;
  animation-delay: 100ms;
}

.animated.delay-5s {
  -webkit-animation-delay: 2000ms;
  animation-delay: 200ms;
}

.animated.delay-6s {
  -webkit-animation-delay: 3000ms;
  animation-delay: 300ms;
}

.animated.delay-7s {
  -webkit-animation-delay: 4000ms;
  animation-delay: 400ms;
}

.animated.delay-8s {
  -webkit-animation-delay: 5000ms;
  animation-delay: 500ms;
}

.animated.delay-9s {
  -webkit-animation-delay: 6000ms;
  animation-delay: 600ms;
}

.animated.delay-10s {
  -webkit-animation-delay: 7000ms;
  animation-delay: 700ms;
}

.animated.delay-11s {
  -webkit-animation-delay: 8000ms;
  animation-delay: 800ms;
}

.animated.delay-12s {
  -webkit-animation-delay: 9000ms;
  animation-delay: 900ms;
}

.animated.delay-13s {
  -webkit-animation-delay: 1000ms;
  animation-delay: 1000ms;
}

.animated.delay-14s {
  -webkit-animation-delay: 1100ms;
  animation-delay: 1100ms;
}

.animated.delay-15s {
  -webkit-animation-delay: 1200ms;
  animation-delay: 1200ms;
}

.animated.delay-16s {
  -webkit-animation-delay: 1300ms;
  animation-delay: 1300ms;
}

.animated.delay-17s {
  -webkit-animation-delay: 1400ms;
  animation-delay: 1400ms;
}

.animated.delay-18s {
  -webkit-animation-delay: 1500ms;
  animation-delay: 1500ms;
}

.animated.delay-19s {
  -webkit-animation-delay: 1600ms;
  animation-delay: 1600ms;
}


.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

.timeline-small-body .bullet.green {
  background-color: lightseagreen;
  border: 3px solid #B0E8E2;
}

.timeline-small-body .bullet {
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  border-radius: 50%;
  background: #fff;
  z-index: 1;
  margin: 1em 10px 1em 0;
}

.timeline-small-body li div {
  display: inline-block;
  margin: 1em 0;
  vertical-align: top;
}

.green {
  color: rgba(43, 181, 92, 0.9);
}

.timeline-small-body .desc {
  width: 95%;
}

.timeline-small-body li div {
  display: inline-block;
  margin: 1em 0;
  vertical-align: top;
}

.timeline-small-body h4 {
  font-size: 14px;
  font-weight: 400;
  color: #808080;
}

.pt-1, .py-1 {
  padding-top: .25rem !important;
}

.float-right {
  float: right !important;
}

.tp1 {
  top: 1px !important;
}

.pr {
  position: relative;
}

/*说说部分*/
.timeline-small {
  margin: 30px;
}

.timeline-small-body ul {
  padding: 1em 0 0 0em;
  margin: 0;
  list-style: none;
  position: relative;
}

.timeline-small-body ul li {
  background: #fff;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  border: 5px dashed transparent;
}

.timeline-small-body .bullet.green {
  background-color: lightseagreen;
  border: 3px solid #B0E8E2;
}

.timeline-small-body .bullet {
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  border-radius: 50%;
  background: #fff;
  z-index: 1;
  margin: 1em 10px 1em 0;
}

.timeline-small-body li div {
  display: inline-block;
  margin: 1em 0;
  vertical-align: top;
}

.green {
  color: rgba(43, 181, 92, 0.9);
}

.timeline-small-body .desc {
  width: 95%;
}

.timeline-small-body li div {
  display: inline-block;
  margin: 1em 0;
  vertical-align: top;
}

.timeline-small-body h4 {
  font-size: 14px;
  font-weight: 400;
  color: #808080;
}

*, ::after, ::before {
  box-sizing: border-box;
}

.pt-4, .py-4 {
  padding-top: 1.5rem !important;
}

.float-right {
  float: right !important;
}

a {
  color: #000000;
}

.float-right {
  float: right !important;
}

.ksd-say-buttons a {
  color: #999;
  visibility: hidden;
}
.ksd-say-buttons a:hover {
  color: #999;
  background-color: #EFF3F5;
  visibility: visible;
}
</style>

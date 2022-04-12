<template>
  <div class="main-content ksd-course-content">
    <div id="submit-video" class="section video">
      <div id="video-list-style" class="cube">
        <div id="submit-video-list" class="content person_works">
          <ul id="ksd-course-cube-list" class="work_lists cl">
            <li v-for="(item,index) in courseList" :key="item.id" data-courseid="1325771226245623809" data-pages="2" data-total="22" class="z pos animated fadeIn delay-1s">
              <a target="_blank" title="如何准备面试" :href="'/course/detail/' + item.id" class="hide shadow_cover">
              </a><a target="_blank" title="如何准备面试" :href="'/course/detail/' + item.id" class="cover">
              <img class="imgloadinglater" onerror="imgError(this)" :src="item.cover" :alt="item.title"></a>
              <div class="work_bt"><a target="_blank" :title="item.title" :href="'/course/detail/' + item.id" class="title">{{item.title}}</a>
                <a :href="'/course/play/' + item.id" style="font-size:12px;float:right;color: #1E9FFF;font-weight: bold;" target="_blank"><i class="iconfont icon-play"></i>进入点播</a>
                <div class="number mt-2">
                  <span><i class="iconfont icon-icon_yulan fsi"></i>{{item.views}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="ksd-page-loadmore ksd-page loadmore" data-pages="2" data-total="22" data-pageno="1" v-show="this.total != 0" style="margin:0 10px;">
          <a href="javascript:void(0);"  v-show="this.purchaseCurrent < Math.ceil(this.total/this.limit)" @click="findHistory"><span class="msg">点击加载更多</span></a>
          <a href="javascript:void(0);" v-show="this.purchaseCurrent == Math.ceil(this.total/this.limit)"><span class="msg">没有更多了</span></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import courseApi from "../../../network/course";

export default {
  name: "FootPrint",
  data() {
    return {
      courseList: [
        // {
        //   id: 1,
        //   title: '如何准备面试',
        //   cover: './static/footimg/03.jpg',
        //   views: 8
        // },
        // {
        //   id: 2,
        //   title: '如何准备面试',
        //   cover: './static/footimg/850301863063588864.jpg',
        //   views: 8
        // }

      ],
      purchaseCurrent: 0,
      limit: 12,
      total: 0,
      buyCourseList: []
    }
  },
  methods: {
    findHistory() {
      this.purchaseCurrent += 1
      courseApi.findPurchaseCourse(this.purchaseCurrent, this.limit)
        .then(response => {
          this.total = response.data.data.total
          console.log(response.data.data.buyCourseList)
          this.courseList = response.data.data.buyCourseList
        })
    }
  },
  created() {
    this.findHistory()
  }
}
</script>

<style scoped>
.section {
  position: relative;
}
#page-video #submit-video .content {
  max-height: none;
  overflow: hidden;
}
#page-video #submit-video-list {
  margin-left: -5px;
}
.person_works .work_lists, .person_works .file_lists {
  position: relative;
}
ul {
  list-style: none
}
.person_works .work_lists li {
  padding: 10px;
  width: 290px;
  height: 235px;
  margin-left: 15px;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background-color: #f4f5f7;
  margin-bottom: 15px;
  float: left;
}
.animated.delay-1s {
  -webkit-animation-delay: 50ms;
  animation-delay: 50ms;
}
a {
  color: #000000;
}
.person_works .work_lists .cover {
  width: 100%;
  padding-bottom: 5px;
  display: block;
  overflow: hidden;
}
person_works .work_lists .cover img {
  width: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.imgloadinglater {
  width: 240px;
  max-height: 142px;
}
.person_works .work_lists .work_bt {
  padding: 0 10px;
  box-sizing: border-box;
}
.delay-1s {
  -webkit-animation-delay: 50ms;
  animation-delay: 50ms;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}
.person_works .work_lists .work_bt .title {
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  margin-top: 8px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.person_works .work_lists .work_bt .number {
  font-size: 0;
}
.mt-2, .my-2 {
  margin-top: .5rem !important;
}
.person_works .work_lists .work_bt .number span {
  font-size: 12px;
  color: #34495e;
  display: inline-block;
  margin-right: 6px;
}
.person_works .work_lists .work_bt .number i {
  margin-right: 4px;
}
.ksd-pages-nodata, .ksd-noempty, .loadmore, .ksd-page-loadmore {
  text-align: center;
  background: #f4f5f7 !important;
  position: relative;
  z-index: 100;
  padding: 5px;
  color: #666;
  cursor: pointer;
}
.person_works .work_lists li:hover .cover img {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}
.person_works .work_lists .cover img {
  width: 100%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.imgloadinglater {
  width: 240px;
  max-height: 142px;
}
.person_works .work_lists li:hover, .person_works .jk_lists li:hover {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12),0 0 6px rgba(0,0,0,.04);
}
</style>

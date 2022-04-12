<template>
  <div>
    <msg-title :title="this.title" :total="this.total"></msg-title>
    <div class="n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div v-for="(item, index) in courseNewList" :key="item.courseId" class="item f-cb xjy-left">
        <div class="ava f-pr"><a :href="'/course/detail/' + item.courseId" target="_blank"
                                 :title="item.title"><img
          :src="item.cover"
          style="max-width: 120px; width: 120px; height: 78px;"></a></div>
        <div class="cont xjy-left" style="margin-left: 135px;">
          <div class="sec1">
            <div class="time s-fc4">更新时间：{{item.gmtModified}}&nbsp;<i class="u-icn u-icn-57"></i></div>
            <div class="mn"><a target="_blank" :href="'/course/detail/' + item.courseId" :title="item.title"
                               class="s-fc0 f-fs1 f-fw1 fw fz16">{{item.title}}</a>&nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="sec2 sec2-1 f-thide s-fc4"><p class="f-thide"><span class="fw">课程介绍：</span>{{item.title}}
          </p>
            <p class="f-thide"><span class="fw">讲师：</span>{{item.teacher}} <span class="fw pl-3 pr-3">学习人次：<span class="fw">{{item.views}} / 共{{item.videoNumber}}章节
                                    </span></span></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
import informationApi from "../../../network/information";

export default {
  name: "CourseInformation",
  components: {MsgTitle},
  data() {
    return {
      title: '课程通知:&nbsp;<small>您可以在这里看到我们最新发布的课程动态。</small>',
      total: 100,
      courseNewList: [
        {
          courseId: '123',
          cover: '',
          title: '',
          description: '',
          teacher: '',
          views: '',
          videoNumber: '',
          gmtModified: ''
        },
      ],
      current: 0,
      limit: 10
    }
  },
  methods: {
    //查询课程通知消息
    findCourseInfo() {
      this.current += 1
      informationApi.findCourseInfo(this.current, this.limit).then(response => {
        this.total = response.data.data.total
        this.courseNewList = response.data.data.courseNewList
      })
    },
  },
  created() {
    this.findCourseInfo()
  }
}
</script>

<style scoped>
@import "../../../assets/css/msg.css";
.n-msgnt-1 .ava, .n-msgnt-1 .ava img {
  width: 50px;
  height: 50px;
}
.n-msgnt .ava {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: -100px;
}
</style>

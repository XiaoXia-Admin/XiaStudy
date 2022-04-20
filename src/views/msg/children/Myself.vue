<template xmlns="http://www.w3.org/1999/html">
  <div v-show="!this.$store.state.loadingFlag">
    <msg-title :title="this.title" :total="this.total"></msg-title>
    <div v-show="this.total != 0" class="n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div v-for="(item, index) in myNewsList" class="item f-cb" :key="item.id">
        <div class="cont" style="margin-left: 0px;">
          <div class="sec1">
            <div class="time s-fc4">发布时间：{{ item.gmtCreate }}&nbsp;<i class="u-icn u-icn-57"></i></div>
            <div class="mn" style=" text-align: left;"><a target="_self" href="javascript:void(0);"
                                                          class="s-fc0 f-fs1 f-fw1 fw fz14"><i
              class="iconfont icon-xiaoxi pr-2"></i><span>{{ item.title }}</span> <!----></a>&nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="sec2 sec2-1 f-thide s-fc4 fz12">
            <div class="oper">
              <span class="dlt">
                <a href="javascript:void(0);" @click="deleteMyInfo($event, index)" :data-id="item.id"
                   class="s-fc7">删除</a>
              </span> <!----> <!----> <!----> <!---->
              <a v-show="item.title == '新用户注册通知' " target="_blank" href="/user/setting" class="gocoursebtn">完善资料</a>
              <a v-show="item.title == '购买课程通知'" target="_blank" :href="'/course/detail/' + item.courseId"
                 class="gocoursebtn">点击前往学习</a>
            </div>
            <p class="f-thide" v-html="item.content"></p></div>
        </div>
      </div>
    </div>
    <div v-show="this.total == 0">暂无信息</div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
import informationApi from "../../../network/information";

export default {
  name: "Myselt",
  components: {MsgTitle},
  data() {
    return {
      total: 100,
      title: '我的消息',
      myNewsList: [
        {
          id: '',
          title: '',
          content: '',
          gmtCreate:'',
          isCourse: '',
          courseId: ''
        }
      ],
      current: 0,
      limit: 10
    }
  },
  methods: {
    //查询用户我的消息
    findMyselfInfo() {
      this.current += 1
      informationApi.findMyselfInfo(this.current, this.limit).then(response => {
        this.total = response.data.data.total
        this.myNewsList = response.data.data.myNewsList
        this.$store.commit("editLoadingFlag", false)
      })
    },
    //删除我的消息
    deleteMyInfo(e, index) {
      let id = e.currentTarget.dataset.id;
      layer.confirm(`你确定要删除吗？`, {
        btn: ['点击删除', '取消'],//按钮
        data: {
          _index: index,
          _this: this,
          _id: id
        }
      }, function () {
        this.data._this.myNewsList.splice(this.data._index, 1)
        layer.msg('删除成功')
        informationApi.deleteMyselfInfo(this.data._id).then(response => {

        })
      }, function () {

      });
    }
  },
  created() {

    this.findMyselfInfo()
  }
}
</script>
<style scoped>
@import "../../../assets/css/msg.css";
</style>

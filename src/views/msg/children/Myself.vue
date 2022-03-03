<template xmlns="http://www.w3.org/1999/html">
  <div>
    <msg-title :title="this.title" :total="this.total"></msg-title>
    <div class="n-msgnt n-msgnt-1 n-msgnt-hvr j-flag" >
      <div v-for="(item, index) in myNewsList" class="item f-cb" :key="item.id">
        <div class="cont" style="margin-left: 0px;">
          <div class="sec1">
            <div class="time s-fc4">发布时间：{{item.gmtCreate}}&nbsp;<i class="u-icn u-icn-57"></i></div>
            <div class="mn" style=" text-align: left;"><a target="_self" href="javascript:void(0);"
                                                          class="s-fc0 f-fs1 f-fw1 fw fz14"><i
              class="iconfont icon-xiaoxi pr-2"></i><span>{{item.title}}</span> <!----></a>&nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="sec2 sec2-1 f-thide s-fc4 fz12">
            <div class="oper"><span class="dlt">
            <a href="javascript:void(0);" :data-id="item.id" class="s-fc7">删除</a>
          </span> <!----> <!----> <!----> <!---->
              <a  v-show="item.title == '新用户注册通知' " target="_blank" href="/user/setting" class="gocoursebtn">完善资料</a>
              <a v-show="item.title == '购买课程通知'" target="_blank" :href="'/course/detail/' + item.courseId" class="gocoursebtn">点击前往学习</a>
            </div>
            <p class="f-thide" v-html="item.content"></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
export default {
  name: "Myselt",
  components: {MsgTitle},
  data() {
    return {
      total: 100,
      title: '我的消息',
      myNewsList: [
        {
          id: 1,
          title: '用户等级提升通知',
          content: '尊敬的用户: 【夏金宇】您好，您已升至Lv1，你的经验是：【<strong style="font-size:16px;color: #4CAF50;">2255</strong>】，永远相信美好的事情即将发生！学相伴，以学为伴一生相伴~',
          gmtCreate: '2022-01-12 18:16:33',
          isCourse: '0',
          courseId: ''
        },
        {
          id: 2,
          title: '新用户注册通知',
          content: '尊敬的用户: 【夏金宇】您好，您已成功开通月会员，赠送【K币3000】，如在平台使用过程中遇到问题可以添加客服微信：<strong style="font-size:16px;color: #4CAF50;">xuexiangban</strong> 我们会为您提供一对一的服务指导！学相伴，以学为伴一生相伴~',
          gmtCreate: '2022-01-12 18:16:33',
          isCourse: '0',
          courseId: ''
        },
        {
          id: 2,
          title: '购买课程通知',
          content: '尊敬的用户: 【夏金宇】您好，欢迎您加入KuangStudy学习平台！K币+<strong style="font-size:16px;color: #4CAF50;">50<strong>，经验值：<strong style="font-size:16px;color: #4CAF50;">+5</strong>，快去个人中心完善信息吧！学相伴，以学为伴一生相伴~</strong></strong>',
          gmtCreate: '2022-01-12 18:16:33',
          isCourse: '0',
          courseId: ''
        }
      ]
    }
  }
}
</script>
<style scoped>
@import "../../../assets/css/msg.css";
</style>

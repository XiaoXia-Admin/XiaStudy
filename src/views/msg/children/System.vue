<template>
  <div>
    <msg-title :total="this.total" :title="this.title"></msg-title>
    <div class="xjy-left n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div  v-for="(item,index) in systemNewsList" :key="item.id" class="item f-cb ">
        <div class="cont" style="margin-left: 0px;">
          <div class="sec1">
            <div class="time s-fc4">{{item.gmtCreate}}&nbsp;<i class="u-icn u-icn-57"></i></div>
            <div class="mn"><a target="_self" href="javascript:void(0);" class="s-fc0 f-fs1 f-fw1 fw fz14">{{item.title}}</a>&nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="sec2 sec2-1 f-thide s-fc4 fz12">
            <p class="f-thide" v-html="item.content" style="line-height:1.6">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
export default {
  name: "System",
  components: {MsgTitle},
  data() {
    return {
      total: 190,
      title: '系统消息',
      systemNewsList:[
        {
          id: 1,
          title: '净网2020 · 严打不良信息传播行为  ',
          content: "为响应国家政策，净化网络环境，积极配合国家“扫黄打非”办公室部署开展“净网2020”“护苗2020”“秋风2020”专项行动，KuangStudy坚决严厉打击利用“KuangStudy”传播色情、淫秽、暴恐、盗版等侵权或不良信息，全站屏蔽色情、淫秽、暴恐、盗版等相关关键词！对于相关的不良信息及严重违规账号，将采取全面清理、永久封禁的措施。<br> <br>请广大用户加强自律与监督，合法、合规使用“KuangStudy”，与KuangStudy共同维护清朗的网络环境！",
          gmtCreate: '2021-02-09 14:55:24',
        },
        {
          id: 1,
          title: '谷歌浏览器扫码登陆不上的情况，可以尝试切换其他浏览器登陆！   ',
          content: '谷歌浏览器扫码登陆不上的情况，可以尝试切换其他浏览器登陆！',
          gmtCreate: '2021-02-09 14:55:24',
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/msg.css";

</style>


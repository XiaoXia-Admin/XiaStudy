<template>
  <div>
    <msg-title :title="this.title" :total="this.total"></msg-title>
    <div class="n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div class="item f-cb xjy-left" v-for="(item, index) in replyNewsList" :key="item.id">
        <div class="cont load-topics-page mn" style="margin-left: 0px;">
          <div class="sec1">
            <div class="mn"><a target="_blank" :href="'/bbs/preview/' + item.articleId" class="s-fc0 f-fs1 f-fw1 fw fz16 pr tp2"><span>Markdown写作指南</span>
              <!----></a>
              &nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="title-msg" style="margin: 10px 0px 15px;"><span>
            <a :href="'/other/user/' + item.replyUserId" target="_blank" :title="item.replyUserNickname"><img
            :src="item.replyUserAvatar" alt="" class="ksd-avatar"> <span class="mx-1">{{item.replyUserNickname}}</span></a> <!---->
            <!----></span> <span class="pr-2 pl-2">于{{item.gmtCreate}}</span> <span class="fw"
                                                                                     style="color: rgb(76, 175, 80);">回复了：</span>
            <span class="fr"><a href="javascript:void(0);" data-opid="1495681042617868290"
                                class="ksd-reply-btn pr-3 fz12"><i class="iconfont icon-huifu pr-1 pr tp1"></i>回复</a> <a
              href="javascript:void(0);" data-opid="1495681042617868290" class="ksd-reply-removebtn pr-3 fz12"><i
              class="iconfont icon-shanchu pr-1 pr tp1"></i>删除该通知</a></span></div>
          <div class="mt-1"
               style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
            <div><p style="color: #34495e;font-size: 14px">{{item.content}}</p></div>
          </div>
          <div class="reply-box" style="display: none;">
            <div class="left-box">
              <div title="夏金宇" class="my-avatar"
                   style="background-image: url('./src/assets/bg/1.jpg');"></div>
            </div>
            <div class="center-box"><textarea maxlength="200" id="reply-box0" name="reply-box"
                                              placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论!"
                                              class="reply-textarea"></textarea></div>
            <div class="right-box">
              <button data-opid="1495681042617868290" class="send-button">
                发表<br>
                评论
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";

export default {
  name: "Replay",
  components: {MsgTitle},
  data() {
    return {
      title: '回复我的',
      total: 100,
      replyNewsList: [
        {
          id: 1,
          articleId: 2,
          title: 'Markdown写作指南   ',
          replyUserId: 3,
          replyUserAvatar: './static/avatar/1.jpg',
          replyUserNickname: '大白兔奶糖',
          vipLevel: 'vip',
          gmtCreate: '2022-02-21 16:45:24',
          content: '你要吗我发你'
        }
      ]
    }
  }
}
</script>
<style scoped>
@import "../../../assets/css/msg.css";
</style>

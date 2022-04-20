<template>
  <div v-show="!this.$store.state.loadingFlag">
    <msg-title :title="this.title" :total="this.total"></msg-title>
    <div v-show="this.total != 0" class="n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div class="item f-cb xjy-left" v-for="(item, index) in replyNewsList" :key="item.id">
        <div class="cont load-topics-page mn" style="margin-left: 0px;">
          <div class="sec1">
            <div class="mn"><a target="_blank" :href="'/bbs/preview/' + item.articleId" class="s-fc0 f-fs1 f-fw1 fw fz16 pr tp2"><span>{{item.title}}</span>
              <!----></a>
              &nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="title-msg" style="margin: 10px 0px 15px;"><span>
            <a :href="'/other/user/' + item.replyUserId" target="_blank" :title="item.replyUserNickname"><img
            :src="item.replyUserAvatar" alt="" class="ksd-avatar"> <span class="mx-1">{{item.replyUserNickname}}</span></a> <!---->
            <!----></span> <span class="pr-2 pl-2">于{{item.gmtCreate}}</span> <span class="fw"
                                                                                     style="color: rgb(76, 175, 80);">回复了：</span>
            <span class="fr"><a href="javascript:void(0);" :data-opid="item.id" @click="replayUser(index)"
                                class="ksd-reply-btn pr-3 fz12"><i class="iconfont icon-huifu pr-1 pr tp1"></i>回复</a> <a
              href="javascript:void(0);" @click="deleteReplay($event, index)" :data-opid="item.id" class="ksd-reply-removebtn pr-3 fz12"><i
              class="iconfont icon-shanchu pr-1 pr tp1"></i>删除该通知</a></span></div>
          <div class="mt-1"
               style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
            <div><p style="color: #34495e;font-size: 14px">{{item.content}}</p></div>
          </div>

<!--          回复评论-->
          <div class="reply-box" v-show="index == replayIndexFlag" >
            <div class="left-box">
              <img :title="$store.state.myUserInfoVo.nickname" class="my-avatar"
                   :src="$store.state.myUserInfoVo.avatar">
            </div>
            <div class="center-box"><textarea v-model="replayData" maxlength="200" id="reply-box0" name="reply-box"
                                              placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论!"
                                              class="reply-textarea"></textarea></div>
            <div class="right-box">
              <button :data-opid="item.articleId" @click="publishReview" class="send-button">
                发表<br>
                评论
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="this.total == 0">暂无回复</div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
import informationApi from "../../../network/information";

export default {
  name: "Replay",
  components: {MsgTitle},
  data() {
    return {
      title: '回复我的',
      total: 100,
      replyNewsList: [
        {
          articleId: "",
          content: "",
          gmtCreate: "",
          id: "",
          replyUserAvatar: "",
          replyUserId: "",
          replyUserNickname: "",
          title: "",
          vipLevel: ""
        }
      ],
      replayIndexFlag: -1,
      current: 0,
      limit: 10,
      replayData: ''
    }
  },
  methods: {
    replayUser(index) {
      if(this.replayIndexFlag == index) {
        this.replayIndexFlag = -1
      } else {
        this.replayIndexFlag = index
      }

    },
    //查询他人回复用户消息
    findOtherPeopleInfo() {
      this.current += 1
      informationApi.findOtherPeopleInfo(this.current, this.limit).then(response => {
        // console.log(response.data.data.replyNewsList)
        this.total = response.data.data.total
        this.replyNewsList = response.data.data.replyNewsList
        this.$store.commit("editLoadingFlag", false)
      })
    },
    deleteReplay(e, index){
      let id = e.currentTarget.dataset.id;
      layer.confirm(`你确定要删除吗？`, {
        btn: ['点击删除', '取消'],//按钮
        data: {
          _index: index,
          _this: this,
          _id: id
        }
      }, function () {
        this.data._this.replyNewsList.splice(this.data._index, 1)
        layer.msg('删除成功')
        this.data._this.total -= 1
        informationApi.deleteReplay(this.data._id).then(response => {

        })
      }, function () {

      });
    },
    //回复别人消息
    publishReview(e) {
      layer.msg('回复评论成功!')
      let id = e.currentTarget.dataset.opid
      alert(id)
      informationApi.replayUserInfo(id, this.replayData).then(response => {

      })
    }
  },
  created() {
    this.findOtherPeopleInfo()
  }
}
</script>
<style scoped>
@import "../../../assets/css/msg.css";
.reply-box {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-top: 20px;
}
.left-box {
  width: 60px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.my-avatar {
  display: block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.center-box {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.reply-textarea {
  width: 100%;
  height: 65px;
  resize: none;
  background: #fff;
  border: 1px solid #e9eaec;
  overflow: auto;
  border-radius: 4px;
  color: #555;
  padding: 5px 10px;
  font-size: 12px;
}
.right-box {
  width: 80px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.send-button {
  width: 70px;
  height: 64px;
  border: 1px solid #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #00a1d6;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
</style>

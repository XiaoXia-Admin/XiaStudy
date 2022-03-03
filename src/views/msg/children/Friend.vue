<template>
  <div>
    <msg-title :title="this.title" :total="this.total"></msg-title>
    <div class="xjy-left n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div v-for="(item, index) in dynamicNewList" :key="item.id" class="item f-cb ">
        <div class="cont load-topics-page" style="margin-left: 0px;">
          <div class="sec1">
            <div class="time s-fc4">发表时间：{{item.gmtCreate}}&nbsp;<i class="u-icn u-icn-57"></i></div>
            <div class="mn"><a target="_blank" :href="'/bbs/preview/'+item.id"
                               class="s-fc0 f-fs1 f-fw1 fw fz16 pr tp2"><span>{{item.title}}</span></a>&nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="sec2 sec2-1 f-thide s-fc4"><a target="_blank" :href="'/bbs/preview/'+item.id" :title="item.title"
                                                    class="s-fc0 f-fs1 f-fw1 "><p class="f-thide">
            {{item.description}}</p></a></div>
          <div class="title-msg" style="margin: 10px 0px 0px;"><span><a :href="'/other/user/'+item.attationUserId" target="_blank"
                                                                        :title="item.attationUserNickname"><img
            :src="item.attationUserAvatar" alt="" class="ksd-avatar"> <span class="mx-1" style="font-size: 14px;">{{item.attationUserNickname}}</span></a> <!----> <span data-v-a73170e6="" class="svipicon"><svg data-v-a73170e6="" t="1644496904794" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2852" width="32" height="32" class="icon" style="position: relative; top: 12px; left: 1px;"><path data-v-a73170e6="" d="M649.142857 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.093714 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.192 18.285714-18.285714L667.428571 420.571429C667.428571 410.477714 659.254857 402.285714 649.142857 402.285714zM539.428571 402.285714l-36.571429 0c0 0 0 106.276571 0 128 0.566857 29.147429-36.571429 36.571429-36.571429 36.571429s-36.571429-7.424-36.571429-36.571429c0-25.142857 0-128 0-128l-36.571429 0c-10.093714 0-18.285714 8.192-18.285714 18.285714l0 128c0.566857 1.901714 64.384 73.709714 73.142857 73.142857l36.571429 0c10.477714 0 73.142857-73.526857 73.142857-73.142857l0-128C557.714286 410.477714 549.540571 402.285714 539.428571 402.285714zM841.142857 402.285714l-54.857143 0c-6.345143 0-12.342857 1.206857-18.102857 2.925714C765.403429 403.510857 762.331429 402.285714 758.857143 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.112 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.173714 18.285714-18.285714l0-55.789714C780.16 548.096 783.158857 548.571429 786.285714 548.571429l54.857143 0c35.346286 0 64-28.653714 64-64l0-18.285714C905.142857 430.939429 876.489143 402.285714 841.142857 402.285714zM850.285714 493.714286c0 10.093714-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-73.142857 54.857143 0c10.093714 0 18.285714 8.173714 18.285714 18.285714L850.285714 493.714286zM284.507429 475.428571l19.382857 0c6.729143 0 12.635429-3.236571 16.109714-8.137143 0-13.732571-2.706286-22.619429-6.820571-28.434286l0.420571 0c-10.294857-21.558857-32.109714-36.571429-57.6-36.571429-3.145143 0-6.125714 0.621714-9.142857 1.097143L246.857143 402.285714l-54.857143 0 0 0.914286c-30.976 4.48-54.857143 30.866286-54.857143 63.085714 0 34.596571 27.483429 62.592 61.787429 63.780571-0.036571 0.073143-0.073143 0.146286-0.109714 0.219429L246.857143 530.285714c10.093714 0 18.285714 8.173714 18.285714 18.285714l0 18.285714c0 10.112-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-18.285714c0-10.112-8.667429-18.285714-19.364571-18.285714l-19.382857 0C146.541714 548.571429 140.617143 551.808 137.142857 556.708571 137.088 570.605714 139.977143 579.456 144.347429 585.142857L143.542857 585.142857c10.294857 21.558857 32.128 36.571429 57.6 36.571429 3.145143 0 6.125714-0.621714 9.142857-1.097143L210.285714 621.714286l54.857143 0 0-0.932571c30.976-4.461714 54.857143-30.866286 54.857143-63.067429 0-34.450286-27.282286-62.336-61.385143-63.744 0.036571-0.073143 0.054857-0.182857 0.091429-0.256L210.285714 493.714286c-10.093714 0-18.285714-8.192-18.285714-18.285714l0-18.285714c0-10.093714 8.192-18.285714 18.285714-18.285714l54.857143 0 0 18.285714C265.142857 467.236571 273.810286 475.428571 284.507429 475.428571z" p-id="2853" fill="#d81e06"></path></svg></span>&nbsp;&nbsp;</span> <span style="font-size: 14px;"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      class="layui-hide-xs pl-4 pr-4">浏览：<span>{{item.views}}</span></span> <!----></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
export default {
  name: "Friend",
  components: {MsgTitle},
  data() {
    return {
      total: 100,
      title: '好友动态',
      dynamicNewList: [
        {
          id: 1,
          articleId: 123,
          title: 'Mac翻墙记录帖  ',
          description: 'Mac翻墙记录帖  ',
          views: 636,
          gmtCreate: '2022-02-04 23:35:03',
          attationUserId: 123,
          attationUserAvatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKqDS52H9hBBHHPibn4ty1MNmyAsLvWeVV4RXvJg7w4bR0CyX4blZU4BenEQVUmmMkCowVz0FhIZfA/132',
          attationUserNickname: '赵子龙',
          vipLevel: 'svip',
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/msg.css";
</style>

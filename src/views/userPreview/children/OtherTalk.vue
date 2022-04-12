<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class=" bottom_content" style="display: block;">
        <div class="row mx-0 ">
          <div class="col-12 col-md-9 content_box blog-main bg-white mb-3 pb-4 pt-3"
               style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
            <talk-about :talk-list="this.talkList" :other-talk="true"></talk-about>
          </div>
          <div id="ucenterapp2" class="col-md-3 pr-0 ucenter_right_box" style="padding-left: 15px;">
            <home-slide :home-page="this.homePage"></home-slide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSlide from "../../user/common/HomeSlide";
import TalkAbout from "../../user/common/TalkAbout";
import loginApi from "../../../network/login";
export default {
  name: "OtherTalk",
  data() {
    return {
      homePage: {
        vipLevel: 'vip',
        articleRealeaseNumber: 123,
        commentNumber: 123,
        studyNumber: 123,
        account: '999988',
        nickname: '小夏同学啊',
        experience: 20000,
        money: 1000,
        gmtCreate: '2021-04-29',

      },
      talkList: [
        // {
        //   id: 1,
        //   content: '今天是美好的fjfjfj天!',
        //   gtmCreate: '2022-01-02 13:17'
        // },
        // {
        //   id: 2,
        //   content: '今天是美好的二天!',
        //   gtmCreate: '2022-01-02 13:17'
        // },
        // {
        //   id: 3,
        //   content: '今天是美好的三天!',
        //   gtmCreate: '2022-01-02 13:17'
        // },
        // {
        //   id: 4,
        //   content: '今天是美好的四天!',
        //   gtmCreate: ''
        // }
      ],
      otherUserTalkList: [],//没用
      current: 0,
      limit: 20,
      total: 0
    }
  },
  methods: {
    findOtherTalk(userId) {
      this.current += 1
      loginApi.findOtherUserTalk(this.current, this.limit, userId).then(response => {
        this.talkList = response.data.data.otherUserTalkList
        console.log(response.data.data.otherUserTalkList)
        this.total = response.data.data.total
      })
    },
    findHomePage(userId) {
      //查询右侧边栏内容
      loginApi.findUserHome(userId).then(response => {
        this.homePage = response.data.data.userLowerRightBox
      })
    },
  },
  components: {
    HomeSlide,
    TalkAbout
  },
  created() {
    this.findOtherTalk(this.$route.params.userId)
    this.findHomePage(this.$route.params.userId)
  }
}
</script>

<style scoped>

</style>

<template>
  <talk-about :talk-list="this.talkList" :other-talk="false" :total="this.total" :current="this.current"
              :limit="this.limit"></talk-about>
</template>

<script>
import TalkAbout from "../common/TalkAbout";
import loginApi from "../../../network/login";

export default {
  name: "TalkList",
  components: {TalkAbout},
  data() {
    return {
      talkList: [
        // {
        //   id: 1,
        //   isPublic: false,
        //   content: '今天是美好的一天!',
        //   gtmCreate: '2022-01-02 13:17'
        // },
        // {
        //   id: 2,
        //   isPublic: true,
        //   content: '今天是美好的二天!',
        //   gtmCreate: '2022-01-02 13:17'
        // },
        // {
        //   id: 3,
        //   isPublic: false,
        //   content: '今天是美好的三天!',
        //   gtmCreate: '2022-01-02 13:17'
        // },
        // {
        //   id: 4,
        //   isPublic: true,
        //   content: '今天是美好的四天!',
        //   gtmCreate: ''
        // }
      ],
      current: 0,
      limit: 20,
      total: 100
    }
  },
  methods: {
    findUserTalk() {
      this.current += 1
      loginApi.findTalk(this.current, this.limit)
        .then(response => {
          this.total = response.data.data.total
          this.talkList = response.data.data.talkList
        })
    },
  },
  created() {
    this.findUserTalk()
  }
}
</script>

<style scoped>

</style>

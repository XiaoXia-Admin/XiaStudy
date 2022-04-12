<template>
  <follow :user-follow-list="this.userFollowList" :total="this.total" :search-box="true" :follow-flag="true" :fans-flag="false"></follow>
</template>

<script>
import Follow from "../common/Follow";
import loginApi from "../../../network/login";
export default {
  name: "FollowList",
  components: {Follow},
  data() {
    return {
      userFollowList: [
        // {
        //   id: 1,
        //   avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
        //   nickname: '往事随风',
        //   sign: '我还是从前那个少年，心中从未有改变!',
        //   vipLevel: 'svip',
        //   gmtCreate: '2022/01/15 12:24',
        // },
        // {
        //   id: 2,
        //   avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
        //   nickname: '往事随风',
        //   sign: ' 我们的征途是星辰大海！',
        //   vipLevel: 'svip',
        //   gmtCreate: '2022/01/15 12:24',
        // }
      ],
      total: 0,
    }
  },
  methods: {
    //查找关注的用户
    findFollow() {
      loginApi.findFollow(1, 15, this.$store.state.myUserInfoVo.id).then(response => {
        this.total = response.data.data.total
        this.userFollowList = response.data.data.userFollowList
      })
    },
  },
  created() {
    this.findFollow()
  }
}
</script>

<style scoped>

</style>

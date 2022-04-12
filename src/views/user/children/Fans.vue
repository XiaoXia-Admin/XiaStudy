<template>
  <Follow :search-box="false" :total="this.total" :user-follow-list="this.userFansList" :follow-flag="false" :fans-flag="true"></Follow>
</template>

<script>
import Follow from "../common/Follow";
import loginApi from "../../../network/login";
export default {
  name: "Fans",
  data() {
    return {
      userFansList: [
      //   {
      //   id: 1,
      //   avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
      //   nickname: '往事随风',
      //   sign: '我还是从前那个少年，心中从未有改变!',
      //   vipLevel: 'svip',
      //   gmtCreate: '2022/01/15 12:24',
      // },
      //   {
      //     id: 2,
      //     avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
      //     nickname: '往事随风',
      //     sign: ' 我们的征途是星辰大海！',
      //     vipLevel: 'svip',
      //     gmtCreate: '2022/01/15 12:24',
      //   }
        ],
      total: 0
    }
  },
  components: {Follow},
  methods: {
    //查找粉丝
    findFans(userId) {
      loginApi.findFans(this.current, this.limit, userId).then(response => {
        this.total = response.data.data.total
        this.userFansList = response.data.data.userFansList
      })
    }
  },
  created() {
    this.findFans(this.$store.state.myUserInfoVo.id)
  }
}
</script>

<style scoped>

</style>

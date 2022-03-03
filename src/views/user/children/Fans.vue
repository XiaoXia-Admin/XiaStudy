<template>
  <Follow :search-box="false" :user-list="this.userList"></Follow>
</template>

<script>
import Follow from "./Follow";
export default {
  name: "Fans",
  data() {
    return {
        userList: [
          {
            id: 1,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 2,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/XOGwRhBCHicibYRHGK6L6icmXJcicqK09tK2BKLfmojffW64FDsLUFiaWUialQrJFf4KDVRbrjbDq4QyCicibibfFvibZLXQ/132',
            nickname: '往事随风',
            sign: ' 我们的征途是星辰大海！',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 3,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 4,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 5,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 6,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 7,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 8,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 9,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 10,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          },
          {
            id: 11,
            avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
            nickname: '往事随风',
            sign: '我还是从前那个少年，心中从未有改变!',
            vipLevel: 'svip',
            gmtCreate: '2022/01/15 12:24',
          }
        ],
    }
  },
  components: {Follow}
}
</script>

<style scoped>

</style>

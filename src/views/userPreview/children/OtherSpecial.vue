<template>
  <SpecialColumn :column-list="this.columnList"></SpecialColumn>
</template>

<script>
import SpecialColumn from "../../user/children/SpecialColumn";
export default {
  name: "OtherSpecial",
  data() {
    return {
      columnList: [
        {
          id: 1,
          title: 'heiehe',
          views: 7,
          visibility: '尽自己可见',
          color: 'background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);'
        },
        {
          id: 2,
          title: 'xiaoao',
          views: 'haha',
          visibility: '所有人可见',
          color: 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);'
        },
        {
          id: 3,
          title: 'xiaoao',
          views: 'haha',
          visibility: '所有人可见',
          color: 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);'
        },
        {
          id: 4,
          title: '小夏专栏啊',
          views: 7,
          visibility: '尽自己可见',
          color: 'background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);'
        },
        {
          id: 5,
          title: 'xiaoao',
          views: 'haha',
          visibility: '所有人可见',
          color: 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);'
        },
      ]
    }
  },
  components: {SpecialColumn}
}
</script>

<style scoped>

</style>

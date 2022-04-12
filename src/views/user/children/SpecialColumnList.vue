<template>
  <special-column :column-list="this.columnList"></special-column>
</template>

<script>
import SpecialColumn from "../common/SpecialColumn";
import bbsApi, {bbs} from "../../../network/bbs";
export default {
  name: "SpecialColumnList",
  components: {SpecialColumn},
  data() {
    return {
      columnList: [
        // {
        //   id: 1,
        //   title: '小夏专栏啊',
        //   views: 7,
        //   visibility: '尽自己可见',
        //   color: 'background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);'
        // },
        // {
        //   id: 2,
        //   title: 'xiaoao',
        //   views: 'haha',
        //   visibility: '所有人可见',
        //   color: 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);'
        // },
        // {
        //   id: 3,
        //   title: 'xiaoao',
        //   views: 'haha',
        //   visibility: '所有人可见',
        //   color: 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);'
        // },
        // {
        //   id: 4,
        //   title: '小夏专栏啊',
        //   views: 7,
        //   visibility: '尽自己可见',
        //   color: 'background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);'
        // },
        // {
        //   id: 5,
        //   title: 'xiaoao',
        //   views: 'haha',
        //   visibility: '所有人可见',
        //   color: 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);'
        // },
      ]
    }
  },
  methods: {
    findUserSpecial() {
      bbsApi.findUserSpecial().then(response => {
        this.columnList = response.data.data.columnList
      })
    }
  },
  created() {
    this.findUserSpecial()
  }
}
</script>

<style scoped>

</style>

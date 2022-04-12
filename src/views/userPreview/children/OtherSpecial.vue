<template>
  <SpecialColumn :column-list="this.columnList" :other-special="false"></SpecialColumn>
</template>

<script>
import SpecialColumn from "../../user/common/SpecialColumn";
import bbsApi from "../../../network/bbs";
export default {
  name: "OtherSpecial",
  data() {
    return {
      columnList: [

      ],
    }
  },
  methods: {
    //查询其他用户专栏
    findOtherSpecial(userId) {
      bbsApi.findOtherSpecial(userId).then(response => {
        this.columnList = response.data.data.columnList
      })
    }
  },
  components: {SpecialColumn},
  created() {
    this.findOtherSpecial(this.$route.params.userId)
  }
}
</script>

<style scoped>

</style>

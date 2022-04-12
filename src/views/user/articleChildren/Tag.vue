<template>
  <article-tag :label-list="this.labelList" :title-flag="true"></article-tag>
</template>

<script>
import ArticleTag from "../common/ArticleTag";
import bbsApi from "../../../network/bbs";

export default {
  name: "Tag",
  components: {ArticleTag},
  data() {
    return {
      labelList:  [
        // 'a','b','c','d'
      ]
    }
  },
  methods: {
    findUserSpan(userId) {
      bbsApi.findUserSpan(userId)
        .then(response => {
          this.labelList = response.data.data.labelList
        })
    }
  },
  created() {
    this.findUserSpan(this.$store.state.myUserInfoVo.id)
  }
}
</script>

<style scoped>

</style>

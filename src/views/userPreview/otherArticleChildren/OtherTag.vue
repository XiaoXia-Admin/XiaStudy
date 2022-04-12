<template>
  <div class="main-content ksd-topic-content">
    <div class="alert alert-primary" role="alert">
      合理使用标签可以将文章进行更好的分类管理，点击标签查看自己对应标签下的文章，即文章分类.
    </div>
    <article-label :label-list="this.labelList"></article-label>
  </div>
</template>

<script>
export default {
  name: "OtherTag",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="main-content ksd-topic-content">
    <div class="alert alert-primary" role="alert">
      合理使用标签可以将文章进行更好的分类管理，点击标签查看自己对应标签下的文章，即文章分类.
    </div>

    <div class="xjy-left">
      <a href="/bbs?from=1&amp;searchKey=jj" class="badge tagscolor mr-2 badge-success" target="_blank"><i class="iconfont icon-biaoqian pr-2 pr tp1"></i><span>jj</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleManagement"
}
</script>

<style scoped>
.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}
.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}
.tagscolor {
  margin-bottom: 10px;
}
.badge {
  display: inline-block;
  margin-bottom: 8px;
  padding: .75em 2.4em;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 1.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.mr-2, .mx-2 {
  margin-right: .5rem !important;
}
.badge-success {
  color: #fff;
  background-color: #28a745;
}


</style>

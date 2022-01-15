<template>
  <div class="main-content ksd-topic-content">
    <div>
      <div class="text-center ksdno-data">
        <span class="font-weight-bold"><img src="../../../assets/img/nodata.png" alt="" width="200"></span>
        <p class="mt-3">暂无收藏文章数据</p>
        <a href="/bbs" class="layui-btn nav-link-down layui-btn-normal" style="display: inline-block;margin-top: 30px;">
          <span class="iconfont icon-xiazai11"></span>
          去收藏一个文章
        </a>
      </div>
      <div id="ksd-topic-cube-list">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleManagement"
}
</script>

<style scoped>
.text-center {
  text-align: center !important;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.mt-3, .my-3 {
  margin-top: 1rem !important;
}
</style>

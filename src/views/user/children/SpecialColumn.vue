<template>
  <div class="container">
    <div class="ksd-main-content">
      <div style="padding:20px;background: #fff;">
        <div id="ksd-topic-cube-list-add" class="ksd-topic-cube-list">
          <div class="media text-muted ksd-topic-items-c ksd-topic-items-c-first text-center block"
               id="ksd-topic-items-c-addbox">
            <a href="javascript:void(0);" class="block">
                <span style="position: relative;top:15px;">
                   <i class="iconfont icon-chuangjiantianjiapiliangtianjia fz24"></i>
                   <p class="fz12 mt-1">创建专栏</p>
               </span>
            </a>
          </div>
        </div>
<!--        <div id="ksd-topic-cube-list" class="ksd-topic-cube-list">-->

<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style scoped>
.ksd-topic-cube-list {
  overflow: hidden;
}
.ksd-topic-cube-list .ksd-topic-items-c.ksd-topic-items-c-first {
  border: 2px dotted #e9e9ea;
}
.ksd-topic-cube-list .ksd-topic-items-c {
  border-radius: 12px;
  float: left;
  width: 270px;
  height: 86px;
  margin-right: 15px;
  padding: 8px 18px;
}
.ksd-topic-items-c-first {
  background: #fff;
}
.ksd-topic-items-c {
  margin-bottom: 15px;
}
.text-center {
  text-align: center !important;
}
.block {
  display: block;
}
.text-muted {
  color: #34495e !important;
}
.fz24 {
  font-size: 24px !important;
}
.fz12 {
  font-size: 12px !important;
}
.mt-1, .my-1 {
  margin-top: .25rem !important;
}
.ksd-topic-items-c:hover {
  background-color: #EFF3F5;
}
</style>

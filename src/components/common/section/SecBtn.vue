<template>
  <div class="sec-btn">
    <a class="button button-primary fw btn1" target="_blank" href="/course" ><i
      class="layui-icon layui-icon-note"></i>课程</a>
    <a class="button button-primary fw btn1 btn2" target="_blank" href="/bbs"><i
      class="iconfont icon-wenzhang"></i>文章</a>
    <a class="button button-primary fw btn1 btn3" target="_blank" href="/message"><i
      class="layui-icon layui-icon-tree"></i>官网文档</a>
  </div>
</template>

<script>
export default {
  name: "SecBtn"
}
</script>

<style scoped>

.button {
  margin-right: 12px;
  font-size: 13px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  min-width: 140px;
  padding: 0 12px;
  font-family: Avenir-Heavy;
  box-sizing: border-box;
  display: inline-block;
}


.button-primary {
  border-color: transparent;
}
.button-primary:hover {
  background-color: black;
}

i {
  padding-right: 6px;
}
.btn1 {
  height: 42px;
  line-height: 42px;
  background: #28c58d;
  color: #fff;
  box-shadow: 0 0 45px #35a8f0;
}

.btn2 {
  background: #4d2b8a;
  color: #fff;
  box-shadow: 0 0 45px #35a8f0;
}

.btn3 {
  background: #b1149e;
  color: #fff;
  box-shadow: 0 0 45px #35a8f0;
}

.sec-btn{
  text-align: center;
  margin-top: 55px;
}
</style>

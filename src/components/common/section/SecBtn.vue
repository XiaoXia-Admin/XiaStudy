<template>
  <div class="sec-btn">
    <a class="button button-primary fw ksdbtn1" :class="{active:isActive1}" target="_blank" href="/course"  @mouseleave="leaveColor()"
       @mousemove="exchangeColor('1')"><i
      class="layui-icon layui-icon-note"></i>课程</a>
    <a class="button button-primary fw ksdbtn1 ksdbtn2" :class="{active:isActive2}" target="_blank" href="/bbs"  @mouseleave="leaveColor()"
       @mousemove="exchangeColor('2')"><i
      class="iconfont icon-wenzhang"></i>文章</a>
    <a class="button button-primary fw ksdbtn1 ksdbtn4" :class="{active:isActive3}" target="_blank" href="/message"  @mouseleave="leaveColor()"
       @mousemove="exchangeColor('3')"><i
      class="layui-icon layui-icon-tree"></i>官网文档</a>
  </div>
</template>

<script>
import {exchangeColor,leaveColor} from "../../../common/utils";
export default {
  name: "SecBtn",
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false
    }
  },
  methods: {
    exchangeColor,
    leaveColor
  }
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

.ksdbtn1 {
  height: 42px;
  line-height: 42px;
  background: #28c58d;
  color: #fff;
  box-shadow: 0 0 45px #35a8f0;
}

.button-primary {
  border-color: transparent;
}

.fw {
  font-weight: 600 !important;
}

i {
  padding-right: 6px;
}

.ksdbtn2 {
  background: #4d2b8a;
  color: #fff;
  box-shadow: 0 0 45px #35a8f0;
}

.ksdbtn4 {
  background: #b1149e;
  color: #fff;
  box-shadow: 0 0 45px #35a8f0;
}

.sec-btn{
  text-align: center;
  margin-top: 55px;
}
.active {
  background-color: #0C0C0C;
}
</style>

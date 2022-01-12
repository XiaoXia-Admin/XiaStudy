<template>
  <section v-if="show" class="course-area">
    <div class="elevator" style="top: 125.3px; display: block;">
      <img src="../../assets/img/xiaok.png" width="64" height="64">
      <div class="list-box">
        <slot></slot>
        <div id="slide_bottom" class="slide_item back-top ksd-layui-fixbar" @click="backToTop('slide_bottom')"><i
          class="iconfont icon-xiangshang"></i></div>
      </div>
    </div>
  </section>
</template>

<script>
import {slideArrayTop, backToTop, easeInOutQuad, scrollTop, activeBtn} from "../../common/utils";

export default {
  name: "SlideBar",
  props: {
    slideList: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      show: false,
      flag: 0,
      slideArray: {
        type: Array,
        default: []
      }
    }
  },
  methods: {
    scrollTop,
    backToTop,
    easeInOutQuad,
    slideArrayTop,
    activeBtn
  },
  mounted() {
    window.addEventListener('scroll', this.scrollTop);
    window.addEventListener('scroll',this.slideArrayTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollTop);
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
</script>

<style scoped>
.list-box {
  padding-top: 6px;
  position: relative;
  background: #fff;
  border: 1px solid #e7e7e7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 2;
}

.elevator {
  position: fixed;
  left: calc(50% + 3px);
  margin-left: 600px;
  z-index: 10;
}

section {
  display: block;
}

.slide_item.back-top {
  position: absolute;
  left: -1px;
  bottom: -37px;
  width: 80px;
  line-height: 30px;
  height: 32px;
  border: 1px solid #e7e7e7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.slide_item {
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  transition: all .2s;
  user-select: none;
  background: #fff;
}

</style>

<template>
  <div id="nav-content" class="navbar-collapse nav-position-relative">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item nav-position-relative">
        <a class="ksd-nav-linknav" :class="activeStyle" :style="this.course ? BgColor : ''" href="/course">课程</a>
        <i class="iconfont  ksd-bgd-left">热门</i>
      </li>
      <li class="nav-item nav-position-relative">
        <a slot="navContentBtn" class=" ksd-nav-linknav" :class="activeStyle" :style="bbs ? BgColor : ''" href="/bbs">江湖</a>
      </li>
      <li class="nav-item nav-position-relative">
        <a slot="navContentBtn" class="nav-link ksd-nav-linknav" :class="activeStyle" :style="download ? BgColor : ''" href="/download">下载</a>
      </li>
      <li class="nav-item nav-position-relative">
        <a slot="navContentBtn" class="nav-link ksd-nav-linknav" :class="activeStyle" :style="document ? BgColor : ''" href="/document">官方文档</a>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "NavContent",
  data() {
    return {
      bbs: false,
      document: false,
      download: false,
      course: false,
      flag: true
    }
  },
  props: {
    activeColor: {
      type: String,
      default: '#FFFFFF'
    },
    activeBgColor: {
      type: String,
      default: '#35a8f0'
    },
  },
  computed: {
    activeStyle() {
      this.flag = this.$route.path.indexOf('/login') !== -1
      this.download = this.$route.path.indexOf('/download') !== -1
      this.document = this.$route.path.indexOf('/document') !== -1
      this.bbs = this.$route.path.indexOf('/bbs') !== -1
      this.course = this.$route.path.indexOf('/course') !== -1
      return this.flag ? 'login_color' : 'other_color';
    },
    BgColor() {
      return {backgroundColor:this.activeBgColor}
    }
  }
}
</script>

<style scoped>

.nav-position-relative {
  position: relative !important;
}

.iconfont {
  font-family: "iconfont" !important;
}

.login_color {
  color: white;
  background-color: transparent;
}

.login_color:hover {
  background-color: #35a8f0;
}

.other_color {
  color: black;
  background-color: transparent;
}

.other_color:hover {
  background-color: #EFF3F5;
}


.navbar-nav {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.mr-auto {
  margin-right: auto !important;
}


.ksd-bgd-left {
  position: absolute;
  right: -8px;
  top: -10px;
  transform: scale(0.82);
  font-size: 12px !important;
  border: 1px solid #eee;
  border-radius: 10px;
  background: red;
  color: #fff;
  padding: 0px 6px;
  text-align: center;
  font-style: initial;
}

.nav-item {
  margin: 0 10px;
}

.navbar-collapse {
  display: flex !important;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  height: 48px;
}

.ksd-nav-linknav {
  padding: 4px 22px !important;
  font-size: 14px;
  line-height: 16px;
  border-radius: 18px;
}

a {
  text-decoration: none;
  background-color: transparent;
}
</style>

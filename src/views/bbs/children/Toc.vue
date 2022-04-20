<template>
  <div class="ksd-chapterlist-box" v-show="this.tocLength != 0" :class="{fixed: this.leftTocFlag}">
    <a href="javascript:void(0);" class="expand-chapterlist mb-1">
      <span class="msg">展开目录</span>
      <span class="fr ksd-topic-add fz24 pr ftp4" style="color: #999">+</span>
      <span class="fr ksd-topic-minus fz24 pr ftp4" style="color: #999;display: none">-</span>
    </a>
    <div id="ksd-chapterlist">
    </div>
  </div>
</template>

<script>
export default {
  name: "Toc",
  props: {
    leftTocFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      unfold: true,
      toc: [],
      tocLength: 0
    }
  },
  methods: {
    unfoldToc() {
      this.unfold = !this.unfold
    }
  },
  created() {
    setTimeout(()=>{
      let headList = [...document.getElementById("preview").querySelectorAll('h1,h2,h3,h4,h5,h6')];
      this.tocLength = headList.length
    }, 500)
  }
}
</script>

<style scoped>
.ksd-chapterlist-box {
  background: #eff3f5;
  margin: 32px 15px 0;
  padding: 10px;
  border-radius: 10px;
}

.ksd-chapterlist-box a {
  display: block;
  padding: 2px;
}

.mb-1, .my-1 {
  margin-bottom: .25rem !important;
}

.ftp4 {
  top: -4px !important;
}

.pr {
  position: relative;
}

.fz24 {
  font-size: 24px !important;
}

a {
  color: #34495e;
  text-decoration: none;
  background-color: transparent;
}

#ksd-chapterlist li {
  padding: 2px 0;
}

li {
  list-style: none;
}

#ksd-chapterlist li a {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 264px;
  white-space: nowrap;
  display: block;
}

#ksd-chapterlist a {
  color: #4183c4;
}

.ksd-chapterlist-box a {
  display: block;
  padding: 2px;
}

#ksd-chapterlist {
  display: none;
}
/*左侧目录*/
.ksd-chapterlist-box.fixed {
  position: fixed;
  top: 53px;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 280px;
  border-radius: 0;
  background: white;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>

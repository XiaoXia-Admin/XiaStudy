<template>
  <div class="container">
    <div class="ksd-main-content">
      <div id="page-video" class="wrapper" style="background: #fff;">
        <div class="col-full clearfix" >
          <div class="contribution-sidenav">
            <div class="nav-container playlist-container">
              <div class="contribution-list-container" >
                <ul class="contribution-list">
                  <li class="contribution-item ksd-topic-item" :class="{cur:management}" data-type="1"><a href="javascript:void(0);" @click="articlePage('management')" class="text">文章管理</a><span class="num ksd-num-count6 font-weight-bold"></span></li>
                  <li class="contribution-item ksd-topic-item" :class="{cur:collect}" data-type="3"><a href="javascript:void(0);" @click="articlePage('collect')" class="text">收藏文章</a><span class="num ksd-num-count11 font-weight-bold"></span></li>
                  <li class="contribution-item ksd-topic-item" :class="{cur:tag}" data-type="4"><a href="javascript:void(0);" @click="articlePage('tag')" class="text router-link-exact-active router-link-active">文章标签</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="main-content ksd-topic-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      management: true,
      collect: false,
      tag: false
    }
  },
  methods: {
    articlePage(path) {
      this.bottomExchange(path)
      this.$router.replace('/user/article/' + path);
    },
    bottomExchange(path) {
      this.management = false;
      this.collect = false;
      this.tag = false;
      if (path == 'management') {
        this.management = true
      } else if (path == 'collect') {
        this.collect = true;
      } else if (path == 'tag') {
        this.tag = true;
      }
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/user.css";
.ksd-main-content {
  min-height: 400px;
}
.ksd-topic-item:hover{
  background-color: #EFF3F5;
}

.contribution-sidenav {
  width: 210px;
  position: relative;
  float: left;
  margin-right: -1px;
  font-size: 14px;
  color: #222;
  box-sizing: border-box;
}
.contribution-sidenav .contribution-list-container {
  position: relative;
  max-height: 420px;
  margin: 10px 0 20px;
  overflow: hidden;
}
ul {
  list-style: none;
}
.contribution-sidenav .contribution-item.cur {
  background-color: #5b6066;
}
.contribution-sidenav .contribution-item {
  position: relative;
  padding-left: 30px;
  transition: background-color .3s ease;
  white-space: nowrap;
  font-size: 0;
  overflow: hidden;
}
.contribution-sidenav .contribution-item.cur .num, .contribution-sidenav .contribution-item.cur .text {
  color: #fff;
}
.contribution-sidenav .contribution-item .text {
  width: 130px;
}
.contribution-sidenav .text {
  display: inline-block;
  line-height: 44px;
  width: 114px;
  margin-right: 5px;
  font-size: 14px;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.contribution-sidenav .contribution-item.cur .num, .contribution-sidenav .contribution-item.cur .text {
  color: #fff;
}
.contribution-sidenav .num {
  display: inline-block;
  width: 32px;
  font-size: 12px;
  color: #99a2aa;
  vertical-align: middle;
  text-align: center;
  font-family: Arial;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.clearfix {
  display: block;
  *zoom: 1;
}
clearfix::after {
  content: '\0020';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.contribution-sidenav ~ .main-content {
  padding: 20px 20px 160px;
  box-sizing: border-box;
  margin-left: 210px;
  border-left: 1px solid #eee;
  min-height: 400px;
}
</style>

<template>
  <div class="container">
    <div class="ksd-main-content">
      <div id="page-video" class="wrapper" style="background: #fff;">
        <div class="col-full clearfix">
          <div class="contribution-sidenav">
            <div class="nav-container playlist-container">
              <div class="contribution-list-container">
                <ul class="contribution-list" v-for="(item,index) in this.slide">
                  <li class="contribution-item ksd-topic-item" :class="{cur:item.flag}" data-type="1"><a
                    href="javascript:void(0);" @click="articlePage(item.slideArgs)"
                    class="text">{{ item.content }}</a><span v-show="index == 1"
                                                             class="num ksd-num-count6 font-weight-bold">{{ collectNumber }}</span>
                  </li>
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
import bbsApi from "../../../network/bbs";

export default {
  name: "Article",
  props: {
    slide: {
      type: Array,
      default: () => {
        return [
          {
            flag: true,
            content: '文章管理',
            slideArgs: 'management'
          },
          {
            flag: false,
            content: '收藏文章',
            slideArgs: 'collect'
          },
          {
            flag: false,
            content: '文章标签',
            slideArgs: 'tag'
          }
        ]
      }
    }
  },
  data() {
    return {
      collectNumber: 22,
      dataSlide: [
        {
          flag: true,
          content: '文章管理',
          slideArgs: 'management'
        },
        {
          flag: false,
          content: '收藏文章',
          slideArgs: 'collect'
        },
        {
          flag: false,
          content: '文章标签',
          slideArgs: 'tag'
        }
      ]
    }
  },
  methods: {
    articlePage(path) {
      this.bottomExchange(path)
      this.$router.replace('/user/article/' + path);
    },
    bottomExchange(path) {
      this.slide[0].flag = false;
      this.slide[1].flag = false;
      this.slide[2].flag = false;
      if (path == 'management') {
        this.slide[0].flag = true
      } else if (path == 'collect') {
        this.slide[1].flag = true;
      } else if (path == 'tag') {
        this.slide[2].flag = true;
      }
    },
    findUserArticle() {
      bbsApi.findUserArticle(0, 20).then(response => {
        this.collectNumber = response.data.data.total
      })
    }
  },
  created() {
    if (!this.slide) {
      this.slide = this.dataSlide
    }
    this.findUserArticle()
  }
}
</script>

<style scoped>
@import "../../../assets/css/user.css";

.ksd-main-content {
  min-height: 400px;
}

.ksd-topic-item:hover {
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
  text-align: left;
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

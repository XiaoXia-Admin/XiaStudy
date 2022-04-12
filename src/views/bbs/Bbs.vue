<template>
  <div class="layui-container" style="top: 55px;">
    <div class="layui-row layui-col-space15 bbs-main">
      <div class="layui-col-md9 layui-col-lg9" style="min-height: 790px;">
        <nav class="bbs-nav">
          <ol class="breadcrumb fl animated fadeIn">
            <li class=""><a href="/bbs">全部 <span class="bbs-total">( {{ this.total }} )</span></a></li>
          </ol>
          <div class="fr" style="padding: 7px;">
            <div class="fl">
              <input type="text" id="searchKey" name="searchKey" :value="this.searchKey == '' ? '' : this.searchKey"
                     autocomplete="off" maxlength="20"
                     class="xjy-layui-input" ref="searchKey" placeholder="请输入文章关键词或标签" onfocus="this.placeholder=''"
                     onblur="this.placeholder='请输入文章关键词或标签'">
            </div>
            <div class="fl">
              <button class="layui-btn layui-btn-sm layui-btn-primary" @click="nameSearch" type="button"><i
                class="layui-icon"></i>
              </button>
            </div>
          </div>
          <div class="fr" style="margin: 15px;font-size:12px;">
            热门关键词：<a href="/bbs?searchKey=学相伴">学相伴</a>&nbsp;&nbsp;<a href="/bbs?searchKey=java">Java</a>
          </div>
        </nav>
        <div class="bbs-page" data-total="11920">
<!--          v-show="this.articleList[0].id != ''"-->
          <div v-for="(item,index) in articleList" :data-userId="item.userId" :key="item.id"
               class="bbs-article-title bbs-title-article-link list-card animated fadeIn delay-1s"
               :data-href="'bbs/preview/'+item.id">
            <span v-show="item.isTop" class="iconfont icon-zhiding ksd-iconzhiding"></span>
            <span v-show="item.isExcellentArticle == 1" title="精品推荐"
                  class="iconfont icon-tuijian ksd-iconstar-blue fz24"></span>
            <a target="_blank" :id="item.userId" :href="'bbs/preview/'+item.id" class="hlink">
              <h1>{{ item.title }}</h1>
            </a>
            <a target="_blank" :href="'bbs/preview/'+item.id" class="hlink2">
              <p>{{ item.description }}</p>
            </a>
            <div class="bbs-title-msg">
              <span>
                 <a :href="'/other/user/' + item.userId " target="_blank" :title="item.nickname">
                   <img
                     :src="item.avatar"
                     :data-original="item.avatar"
                     class="ksd-avatar" alt="" style="">
                   &nbsp;&nbsp;
                     <span class="mx-1">{{ item.nickname }}</span></a>
                    &nbsp;&nbsp;
                    <span v-show="item.vipLevel == 'svip'" class="svipIcon"><svg
                      style="position: relative;top: 12px;left: 1px;" t="1644496904794" class="icon"
                      viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2852" width="32"
                      height="32"><path
                      d="M649.142857 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.093714 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.192 18.285714-18.285714L667.428571 420.571429C667.428571 410.477714 659.254857 402.285714 649.142857 402.285714zM539.428571 402.285714l-36.571429 0c0 0 0 106.276571 0 128 0.566857 29.147429-36.571429 36.571429-36.571429 36.571429s-36.571429-7.424-36.571429-36.571429c0-25.142857 0-128 0-128l-36.571429 0c-10.093714 0-18.285714 8.192-18.285714 18.285714l0 128c0.566857 1.901714 64.384 73.709714 73.142857 73.142857l36.571429 0c10.477714 0 73.142857-73.526857 73.142857-73.142857l0-128C557.714286 410.477714 549.540571 402.285714 539.428571 402.285714zM841.142857 402.285714l-54.857143 0c-6.345143 0-12.342857 1.206857-18.102857 2.925714C765.403429 403.510857 762.331429 402.285714 758.857143 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.112 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.173714 18.285714-18.285714l0-55.789714C780.16 548.096 783.158857 548.571429 786.285714 548.571429l54.857143 0c35.346286 0 64-28.653714 64-64l0-18.285714C905.142857 430.939429 876.489143 402.285714 841.142857 402.285714zM850.285714 493.714286c0 10.093714-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-73.142857 54.857143 0c10.093714 0 18.285714 8.173714 18.285714 18.285714L850.285714 493.714286zM284.507429 475.428571l19.382857 0c6.729143 0 12.635429-3.236571 16.109714-8.137143 0-13.732571-2.706286-22.619429-6.820571-28.434286l0.420571 0c-10.294857-21.558857-32.109714-36.571429-57.6-36.571429-3.145143 0-6.125714 0.621714-9.142857 1.097143L246.857143 402.285714l-54.857143 0 0 0.914286c-30.976 4.48-54.857143 30.866286-54.857143 63.085714 0 34.596571 27.483429 62.592 61.787429 63.780571-0.036571 0.073143-0.073143 0.146286-0.109714 0.219429L246.857143 530.285714c10.093714 0 18.285714 8.173714 18.285714 18.285714l0 18.285714c0 10.112-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-18.285714c0-10.112-8.667429-18.285714-19.364571-18.285714l-19.382857 0C146.541714 548.571429 140.617143 551.808 137.142857 556.708571 137.088 570.605714 139.977143 579.456 144.347429 585.142857L143.542857 585.142857c10.294857 21.558857 32.128 36.571429 57.6 36.571429 3.145143 0 6.125714-0.621714 9.142857-1.097143L210.285714 621.714286l54.857143 0 0-0.932571c30.976-4.461714 54.857143-30.866286 54.857143-63.067429 0-34.450286-27.282286-62.336-61.385143-63.744 0.036571-0.073143 0.054857-0.182857 0.091429-0.256L210.285714 493.714286c-10.093714 0-18.285714-8.192-18.285714-18.285714l0-18.285714c0-10.093714 8.192-18.285714 18.285714-18.285714l54.857143 0 0 18.285714C265.142857 467.236571 273.810286 475.428571 284.507429 475.428571z"
                      p-id="2853" fill="#d81e06"></path></svg></span>
                &nbsp;&nbsp;
              </span>
              <span class="pr-2 pl-2 ksd-screen-time-no"><label
                class="fw">时间：</label><span>{{ item.gmtCreate }}</span></span>
              &nbsp;&nbsp;
              <span class=" pr-2"><label class="fw">浏览：</label><span>{{ item.views }}</span></span>
              &nbsp;&nbsp;
              <span><label class="fw">分类：</label>
                            <a :href="'/bbs?categoryId=' + (boxList.indexOf(item.categoryName) + 1)"
                               class="ksd-topic-tags">{{ item.categoryName }}</a>
                        </span>
            </div>
          </div>
          <div class="page-navigator">
            <nav aria-label="Page navigation example" class="mt-4">
              <ul class="pagination justify-content-center pagination-sm">
                <li class="page-item" :class="{show:this.page < 5}">
                  <a class="page-link" href="/bbs?pageNo=0" tabindex="">首页</a>
                </li>
                <li class="page-item" :class="{disabled: this.page<5}">
                  <a class="page-link" href="javascript:void(0);" @click="categorySearch(Number(page) - Number(1),'')"
                     tabindex=""><i class="iconfont icon-xiangzuo1 fz22"></i></a>
                </li>

                <ul v-for="pageNum in pageList" :key="pageNum">
                  <li class="page-item" :class="{active: pageNum == page}">
                    <a class="page-link" href="javascript:void(0);"
                       @click="categorySearch(pageNum, '')">{{ pageNum }}</a>
                  </li>
                </ul>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);" @click="categorySearch(Number(page) +Number(1),'')"><i
                    class="iconfont icon-xiangyou1 fz22"></i></a>
                </li>
                <li class="page-item" v-show="this.page != this.pageMax">
                  <a class="page-link" href="javascript:void(0);" style="cursor: pointer"
                     @click="categorySearch(Number(pageMax),'')">尾页</a>
                </li>
                <li class="page-item">
                  <input type="text" value="1" ref="jumpNumber" id="ksd-page-link-pno" class="page-link inputheight"
                         style="text-align: center;width:48px;">
                </li>
                <li class="page-item">
                  <a class="page-link ksd-page-go" @click="categorySearch(-1, '')">跳转</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);">{{ this.page }}/{{ Math.ceil(this.total / 15) }}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="layui-col-md3 layui-col-lg3 animated fadeIn" :class="{'ksd-fixed':this.slide}">
        <div class="send-article">
          <a href="/topic/publish-article"
             class="layui-btn nav-link-down nav-link-login layui-btn-normal" style="width: 100%;">
            <span class="layui-icon layui-icon-edit"></span>
            发布文章
          </a>
        </div>
        <div v-show="!this.slide" class="slide-card mb-3 position-relative animated fadeIn"
             style="border:none;border-radius: 6px;">
          <div class="p-3">
            <div class="slide-card-row mx-0 text-center pb-2">
              <div class="slide-card-col px-0">
                <div class="pb-0 fz14">{{ this.userNumber }}</div>
                <div class=" mt-2 fz14 small text-muted">用户</div>
              </div>
              <div class="slide-card-col px-0">
                <div class="pb-0 fz14">{{ this.articleNumber }}</div>
                <div class=" mt-2 fz14 small text-muted">文章</div>
              </div>
              <div class="slide-card-col">
                <div class="pb-0 fz14">{{ this.commentNumber }}</div>
                <div class=" mt-2 fz14 small text-muted">回复</div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-column">
          <h3 class="slide-column-title">
            <a href="/bbs"><i class="layui-icon pr tp1"></i>文章分类</a>
            <a href="javascript:void(0);" @click="categorySearch(-3, '')" class="fr fz12 pr"
               style="top:4px;color:#666;">查看精品文章</a>
          </h3>
          <ul class="layui-row layui-col-space5">
            <li style="cursor: pointer;" v-for="item in categoryList" :id="item.id"
                class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-1s"
                :title="item.categoryList">
              <a @click="categorySearch(-2, item.id)" style="display: block"
                 class="ksd-nav-linknav-rorate">
                {{ item.categoryName }}
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import Message from "./children/Message";
import {slideTop, backToTop, easeInOutQuad} from "../../common/utils";
import bbsApi from "../../network/bbs";
import loginApi from "../../network/login";
import cookie from "js-cookie";

export default {
  name: "Bbs",
  data() {
    return {
      slide: false,
      pageList: [1, 2, 3, 4, 5], // 页码列表
      page: 1, // 当前页码
      pageMax: 7, // 最大页数
      pageMin: 1, //首页
      userNumber: 239687,
      articleNumber: 12329,
      commentNumber: 7785,
      total: 12220,
      articleList: [
        // {
        //   id: '',
        //   isTop: '',
        //   title: '',
        //   description: '',
        //   userId: '',
        //   avatar: '',
        //   nickname: '',
        //   vipLevel: '',
        //   views: '',
        //   categoryName: '',
        //   isExcellentArticle: 0,
        //   gmtCreate: '',
        // }
      ],
      categoryList: [
        // {
        //   id: 1,
        //   categoryName: '程序人生',
        // },
        // {
        //   id: 2,
        //   categoryName: '管理',
        // },
        // {
        //   id: 3,
        //   categoryName: '教程',
        // },
        // {
        //   id: 4,
        //   categoryName: '学习笔记',
        // },
        // {
        //   id: 5,
        //   categoryName: '采坑记录',
        // },
        // {
        //   id: 6,
        //   categoryName: '架构',
        // },
        // {
        //   id: 7,
        //   categoryName: '后台',
        // },
        // {
        //   id: 8,
        //   categoryName: '前端',
        // },
        // {
        //   id: 9,
        //   categoryName: '问答',
        // },
        // {
        //   id: 10,
        //   categoryName: '测试',
        // },
        // {
        //   id: 11,
        //   categoryName: '数据库',
        // },
        // {
        //   id: 12,
        //   categoryName: '安全',
        // },
        // {
        //   id: 13,
        //   categoryName: '面试',
        // },
        // {
        //   id: 14,
        //   categoryName: '理财',
        // }
      ],
      boxList: ['程序人生', '管理', '教程', '学习笔记', '采坑记录', '架构', '后台', '前端', '问答', '测试', '数据库', '安全', '面试', '理财',],
      limit: 10,
      categoryId: 1,
      isRecommend: 0,
      searchKey: ''
    }
  },
  components: {Message},
  methods: {
    slideTop,
    easeInOutQuad,
    nameSearch() {
      if (this.categoryId == '' || typeof this.categoryId === 'undefined') {
        window.location.href = '/bbs?&searchKey=' + this.$refs.searchKey.value
      } else {
        window.location.href = '/bbs?categoryId=' + this.categoryId + '&searchKey=' + this.$refs.searchKey.value
      }
    },
    categorySearch(pageNo, id) {
      if (id != '') {
        this.categoryId = id
      } else if (id == '') {
        this.categoryId = ''
      }
      if (typeof this.isRecommend === 'undefined') {
        this.isRecommend = ''
      }
      if (pageNo == -1) {
        window.location = 'http://localhost:8080/bbs?pageNo=' + this.$refs.jumpNumber.value + '&categoryId=' + this.categoryId + '&isExcellentArticle=' + this.isRecommend + '&searchKey=' + this.$refs.searchKey.value
      } else if (pageNo >= 0) {
        window.location = 'http://localhost:8080/bbs?pageNo=' + pageNo + '&categoryId=' + this.categoryId + '&isExcellentArticle=' + this.isRecommend + '&searchKey=' + this.$refs.searchKey.value
      } else if (pageNo == -2) {
        window.location = 'http://localhost:8080/bbs?categoryId=' + id
      } else if (pageNo == -3) {
        window.location = 'http://localhost:8080/bbs?isExcellentArticle=1&categoryId=' + this.categoryId
      }

    },
    findCategory() { //查询分类
      bbsApi.findCategory()
        .then(response => {
          this.categoryList = response.data.data.categoryList
        })
    },
    getCourseList() { //查询付费课程和系统中用户、文章、评论数量
      bbsApi.getCourseList()
        .then(response => {
          this.userNumber = response.data.data.userNumber
          this.articleNumber = response.data.data.articleNumber
          this.commentNumber = response.data.data.commentNumber
        })
    },
    getArticleList(categoryId, isExcellentArticle, articleNameOrLabelName, page) { //查询文章接口，这里实现了三种类型查询
      this.current += 1
      this.categoryId = categoryId
      this.isRecommend = isExcellentArticle
      if (!categoryId || typeof categoryId === 'undefined') {
        categoryId = ''
      }
      if (!isExcellentArticle || typeof isExcellentArticle === 'undefined') {
        isExcellentArticle = ''
      }
      if (!articleNameOrLabelName || typeof articleNameOrLabelName === 'undefined') {
          articleNameOrLabelName = ''
      }
      if (!page || typeof page === 'undefined') {
        page = this.page
      }
      console.log('categoryId' + categoryId)
      console.log('isExcellentArticle' + isExcellentArticle)
      console.log('articleNameOrLabelName' + articleNameOrLabelName)
      console.log('page' + page)
      bbsApi.getArticleList(categoryId, isExcellentArticle, articleNameOrLabelName, page, this.limit)
        .then(response => {
          console.log(response.data.data.articleList[0].isTop)

          this.articleList = response.data.data.articleList
        })
    },
  },
  created() {
    if (!this.$route.query.pageNo || this.$route.query.pageNo == 0) {

      this.page = 1;
    } else if (this.$route.query.pageNo >= 5) {
      let array = this.pageList.slice(3)
      let newArray = [6, 7, 8, 9]
      this.pageList = array.concat(newArray)
      this.page = this.$route.query.pageNo
    } else {
      this.page = this.$route.query.pageNo
    }

    this.findCategory()
    this.getCourseList()
    this.searchKey = this.$route.query.searchKey
    this.getArticleList(this.$route.query.categoryId, this.$route.query.isExcellentArticle, this.$route.query.searchKey, this.$route.query.pageNo)

  },
  mounted() {
    window.addEventListener('scroll', this.slideTop);
  },
}
</script>

<style scoped>
@import "../../assets/css/bbs.css";

.layui-btn {
  display: inline-block;
  background-color: #1E9FFF;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  border: none;
  border-radius: 2px;
}

.layui-btn, .layui-disabled, .layui-icon, .layui-unselect {
  -webkit-user-select: none;
}

.layui-col-space5 {
  margin: -2.5px;
}

.layui-col-space5 .slide-column-item {
  padding: 2px;
}

.layui-col-md12 {
  width: 100%;
}

.layui-col-md12, .layui-col-md3, .layui-col-md9 {
  float: left;
}

.layui-col-lg3, .layui-col-lg9, .layui-col-md12, .layui-col-md3, .layui-col-md9, .layui-col-xs12 {
  position: relative;
  display: block;
  box-sizing: border-box;
}

.layui-col-lg3 {
  width: 25%;
}

.layui-col-lg3, .layui-col-md3 {
  position: relative;
  display: block;
  box-sizing: border-box;
}

input {
  font-family: inherit;
  font-style: inherit;
  outline: 0;
  overflow: visible;
}

.ksd-fixed {
  position: fixed;
  margin-left: 900px;
  width: 285px;
}

/*分页*/
.page-navigator {
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: inherit;
  margin-bottom: 32px;
}

.justify-content-center {
  -webkit-box-pack: center !important;
  justify-content: center !important;
}

.pagination {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
}

.pagination .page-item {
  margin-right: 4px;
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  float: left;
  color: #555;
  margin-right: 10px;
}

.pagination .page-item a:hover {
  color: white;
  background-color: #1E9FFF;
}

.pagination .page-item .inputheight:hover {
  color: black;
  background-color: #e9ecef;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.pagination-sm .page-link {
  padding: .25rem 0.8rem;
  font-size: .875rem;
}

.page-link {
  color: #99a1a7;
  font-style: normal;
  font-size: 14px;
  height: 40px;
  line-height: 36px;
  display: block;
  text-align: center;
  display: block;
  background: #ffffff;
  border-radius: 2px;
}

.fz22 {
  font-size: 22px !important;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.ksd-page-go:hover {
  color: #fff !important;
}

.ksd-page-go {
  color: #007bff !important;
  cursor: pointer;
}

.ksd-iconstar-blue {
  position: absolute;
  top: 14px;
  right: 21px;
  color: #F44336;
}

.fz24 {
  font-size: 24px !important;
}
</style>


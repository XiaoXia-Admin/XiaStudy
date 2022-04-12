<template>
  <div class="main-content ksd-topic-content">
    <div>
      <div class="alert alert-primary" v-show="this.total != 0" style="background-color: #f4f5f7;border-color: #f4f5f7;">
        <a href="/topic/publish-article" style="display: block;text-align: right;" target="_blank">Hi,今天又学到新知识了吗？快快记录下来吧，<span
          style="text-decoration: underline;color:#4caf50;">点击发表文章!</span></a>
      </div>
      <div id="ksd-topic-cube-list" class="xjy-left" v-show="this.total != 0">
        <div v-for="(item, index) in userBbsArticleList" :key="item.articleId" class="media text-muted ksd-topic-items" :id="item.articleId">
          <div class="media-body load-topics-page pr">
            <span v-show="item.isExcellentArticle && !item.isRelease && !item.isViolationArticle "
                  title="精品推荐" class="iconfont icon-tuijian ksd-iconstar-blue fz24"></span>
            <h3 style="font-size:16px;padding:10px 0;">
              <a :href="'/bbs/preview/' + item.articleId" target="_blank"
                 class="text-dark font-weight-bold text-decoration-none d-block">
                <span>{{ item.title }}</span>
                <span v-show="item.isViolationArticle" class="red fw pl-2" title="违规文章，仅自己可见！"><i
                  class="iconfont icon-weiguitongzhi fz18 pr tp1"></i></span>
              </a>
            </h3>
            <p><a :href="'/bbs/preview/' + item.articleId">{{ item.description }}</a></p>
            <div class="mt-2">
                    <span class="pr-3 fz12">
                        分类：<a href="/bbs?from=1&amp;cid=11">{{ item.categoryName }}</a>
                    </span>
              <span class="mr-3 mt-2">
                        <i class="iconfont icon-icon_yulan tp2">
                        </i>
                        <span>{{ item.views }}</span>
                    </span>
              <span>
                    </span>
              <span class="mr-3 mt-2">
                        <i class="iconfont icon-shijian tp2">
                        </i>
                        <span>{{ item.gmtTime }}</span>
                    </span>
              <span v-show="!item.isViolationArticle && !item.isRelease" class="mr-3 mt-2"
                    style="color:#144d7b;font-size:12px;" title="发布状态"><i
                class="iconfont icon-yinsi pr-1"></i>未发布</span>
              <span v-show="item.labelList.length != 0">标签：
                <a v-for="(item, index) in item.labelList" :key="index" :href="'/bbs?searchKey=' + item" :title="item" target="_blank" class="ksd-topic-tags">{{item}}</a>
              </span>
              <span>
                       <a @click="deleteArticle($event, index)" :data-articleId="item.articleId" class="topic-delete-a badge badge-danger float-right"
                          style="font-weight: 400;background:transparent;color: #745e5e;border:1px solid #bcbcbc;padding:4px 12px;border-radius: 0;">
                          <i class="iconfont icon-shanchu"></i>删除
                       </a>
                       <a :href="'/topic/to-update/' + item.articleId" target="_blank"
                          class="badge badge-success mr-2 float-right"
                          style="font-weight: 400;background:transparent;color: #7d7455;border:1px solid #bcbcbc;padding:4px 12px;border-radius: 0;">
                           <i class="iconfont icon-tianxie"></i>
                           编辑
                       </a>
                   </span>
            </div>
          </div>
        </div>
        <div data-pages="17" data-total="335" data-pageno="1" class="ksd-page-loadmore ksd-page loadmore">
          <a v-show="this.current < Math.ceil(this.total/this.limit)" href="javascript:void(0);"><span class="msg"
                                                                                                       @click="findUserArticle">点击加载更多，共 <span
            class="fw">{{ this.total }}</span>，当前: <span
            class="fw">{{ this.current }}/{{ Math.ceil(this.total / this.limit) }}</span></span>
          </a>
          <a href="javascript:void(0);" v-show="this.current == Math.ceil(this.total/this.limit)"><span class="msg">没有更多了</span></a>
        </div>
      </div>
      <div v-if="this.total == 0" class="text-center ksdno-data">
        <span class="font-weight-bold"><img :src="this.img" alt="" width="200"></span>
        <p class="mt-3">快去写第一篇文章吧！</p>
        <a href="/topic/publish-article" class="layui-btn nav-link-down layui-btn-normal" style="display: inline-block;margin-top: 30px;">
          <span class="iconfont icon-xiazai11"></span>
          去写第一篇文章
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import bbsApi from "../../../network/bbs";

export default {
  name: "ArticleManagement",
  data() {
    return {
      total: 0,
      limit: 20,
      current: 0,
      userBbsArticleList: [
        {
          articleId: '',
          title: '',
          description: '  ',
          categoryName: '',
          views: '',
          gmtCreate: '',
          isRelease: false,
          isViolationArticle: false,
          isExcellentArticle: true,
          labelList: [

          ]
        }
      ],
      img: './static/img/nodata.png'
    }
  },
  methods: {
    findUserArticle() {
      this.current += 1
      bbsApi.findUserArticle(this.current, this.limit).then(response => {
        console.log(response.data.data.userBbsArticleList)
        this.total = response.data.data.total
        if(this.current == 1) {
          this.userBbsArticleList = response.data.data.userBbsArticleList
        } else {
          this.userBbsArticleList = this.userBbsArticleList.concat(response.data.data.userBbsArticleList)
        }
      })
    },
    deleteArticle(event, index) {
      layer.confirm('删除文章将彻底丢失,请慎重选择？', {
        btn: ['就要删除了', '我点错了'], //按钮
        data: {
          id: event.currentTarget.dataset.articleid,
          _index: index,
          _this: this
        }
      }, function(){
        this.data._this.userBbsArticleList.splice(index, 1)
        layer.msg('删除成功', {icon: 1,time: 500});
        //删除文章
        bbsApi.deleteArticle(this.data.id).then(response => {

        })
      }, function(){
      });
    }
  },
  created() {
    this.findUserArticle(this.current, this.limit)
  }
}
</script>
<style scoped>
.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

a {
  color: #000000;
}

.ksd-topic-items:hover {
  background: #fafafa;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  border: 3px dashed #B8B8B8;
}

.ksd-topic-items {
  background: #ffffff;
  padding: 20px 30px;
  margin-bottom: 10px;
  border: 3px solid #f4f5f7;
}

.text-muted {
  color: #34495e !important;
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.media-body {
  -ms-flex: 1;
  flex: 1;
}

h1, h3, h4 {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
}

h1, h3, h4 {
  font-weight: 500;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-dark {
  color: #343a40 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.d-block {
  display: block !important;
}

.fw {
  font-weight: 600 !important;
}

.red {
  color: red;
}

.pl-2, .px-2 {
  padding-left: .5rem !important;
}

.tp1 {
  top: 1px !important;
}

.fz18 {
  font-size: 18px !important;
}

i {
  opacity: 0.8;
}

.mt-2, .my-2 {
  margin-top: .5rem !important;
}

.fz12 {
  font-size: 12px !important;
}

.pr-3, .px-3 {
  padding-right: 1rem !important;
}

.mr-3, .mx-3 {
  margin-right: 1rem !important;
}

.mt-2, .my-2 {
  margin-top: .5rem !important;
}

.tp2 {
  top: 2px !important;
}

.ksd-topic-items .topic-delete-a {
  font-size: 12px;
  cursor: pointer;
  background: rgba(236, 93, 82, 0.92);
}

a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.float-right {
  float: right !important;
}

.badge {
  display: inline-block;
  margin-bottom: 8px;
  padding: .75em 2.4em;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 1.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.ksd-topic-items .badge-success i, .ksd-topic-items .topic-delete-a i {
  font-size: 14px;
  position: relative;
  top: 0px;
}

.ksd-topic-items .badge-success {
  font-size: 12px;
  cursor: pointer;
  background: rgba(40, 167, 69, 0.92);
}

.fz24 {
  font-size: 24px !important;
}

.ksd-iconstar-blue {
  position: absolute;
  top: 14px;
  right: 21px;
  color: #F44336;
}
.ksd-topic-tags {
  background: #999;
  color: #fff;
  padding: 0 10px;
  margin-right: 4px;
  border-radius: 14px;
  font-size: 12px;
  max-width: 90px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ksd-topic-tags {
  position: relative;
  top: -1px;
  background: #bababa;
  color: #fff;
  padding: 2px 10px;
  margin-right: 4px;
  border-radius: 16px;
  font-size: 12px;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  font-style: normal;
  vertical-align: middle;
  white-space: nowrap;
}
.ksd-topic-tags:hover {
  background-color: #76c489;
}

</style>

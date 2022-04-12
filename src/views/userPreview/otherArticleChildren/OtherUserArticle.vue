<template>
  <div class="main-content ksd-topic-content">
    <div>
      <div id="ksd-topic-cube-list" class="xjy-left">
        <div v-for="(item) in articleList" :key="item.articleId"
             class="media text-muted ksd-topic-items animated fadeIn delay-1s" :id="item.articleId">
          <div class="media-body load-topics-page pr">
            <div style="float: right">
              <span v-show="item.isExcellentArticle"
                    title="精品推荐" class="iconfont icon-tuijian ksd-iconstar-blue fz24"></span>
              <span v-show="vipLevel == 'svip'" data-v-a73170e6="" class="svipicon" style="right: -19px;"><svg
                data-v-a73170e6="" t="1644496904794" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2852" width="32" height="32" class="icon"
                style="position: relative; top: 12px; left: 1px;"><path data-v-a73170e6=""
                                                                        d="M649.142857 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.093714 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.192 18.285714-18.285714L667.428571 420.571429C667.428571 410.477714 659.254857 402.285714 649.142857 402.285714zM539.428571 402.285714l-36.571429 0c0 0 0 106.276571 0 128 0.566857 29.147429-36.571429 36.571429-36.571429 36.571429s-36.571429-7.424-36.571429-36.571429c0-25.142857 0-128 0-128l-36.571429 0c-10.093714 0-18.285714 8.192-18.285714 18.285714l0 128c0.566857 1.901714 64.384 73.709714 73.142857 73.142857l36.571429 0c10.477714 0 73.142857-73.526857 73.142857-73.142857l0-128C557.714286 410.477714 549.540571 402.285714 539.428571 402.285714zM841.142857 402.285714l-54.857143 0c-6.345143 0-12.342857 1.206857-18.102857 2.925714C765.403429 403.510857 762.331429 402.285714 758.857143 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.112 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.173714 18.285714-18.285714l0-55.789714C780.16 548.096 783.158857 548.571429 786.285714 548.571429l54.857143 0c35.346286 0 64-28.653714 64-64l0-18.285714C905.142857 430.939429 876.489143 402.285714 841.142857 402.285714zM850.285714 493.714286c0 10.093714-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-73.142857 54.857143 0c10.093714 0 18.285714 8.173714 18.285714 18.285714L850.285714 493.714286zM284.507429 475.428571l19.382857 0c6.729143 0 12.635429-3.236571 16.109714-8.137143 0-13.732571-2.706286-22.619429-6.820571-28.434286l0.420571 0c-10.294857-21.558857-32.109714-36.571429-57.6-36.571429-3.145143 0-6.125714 0.621714-9.142857 1.097143L246.857143 402.285714l-54.857143 0 0 0.914286c-30.976 4.48-54.857143 30.866286-54.857143 63.085714 0 34.596571 27.483429 62.592 61.787429 63.780571-0.036571 0.073143-0.073143 0.146286-0.109714 0.219429L246.857143 530.285714c10.093714 0 18.285714 8.173714 18.285714 18.285714l0 18.285714c0 10.112-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-18.285714c0-10.112-8.667429-18.285714-19.364571-18.285714l-19.382857 0C146.541714 548.571429 140.617143 551.808 137.142857 556.708571 137.088 570.605714 139.977143 579.456 144.347429 585.142857L143.542857 585.142857c10.294857 21.558857 32.128 36.571429 57.6 36.571429 3.145143 0 6.125714-0.621714 9.142857-1.097143L210.285714 621.714286l54.857143 0 0-0.932571c30.976-4.461714 54.857143-30.866286 54.857143-63.067429 0-34.450286-27.282286-62.336-61.385143-63.744 0.036571-0.073143 0.054857-0.182857 0.091429-0.256L210.285714 493.714286c-10.093714 0-18.285714-8.192-18.285714-18.285714l0-18.285714c0-10.093714 8.192-18.285714 18.285714-18.285714l54.857143 0 0 18.285714C265.142857 467.236571 273.810286 475.428571 284.507429 475.428571z"
                                                                        p-id="2853" fill="#d81e06"></path></svg></span>
            </div>
            <h3 style="font-size:16px;padding:10px 0;">
              <a :href="'/bbs/preview/' + item.articleId" target="_blank"
                 class="text-dark font-weight-bold text-decoration-none d-block">
                <span>{{ item.title }}</span>
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
                        <span>{{ item.gmtCreate }}</span>
                    </span>
              <span v-show="item.labelList.length != 0">标签：
                <a v-for="(item, index) in item.labelList" :key="index" :href="'/bbs?searchKey=' + item" :title="item" target="_blank" class="ksd-topic-tags">{{item}}</a>
              </span>
            </div>
          </div>
        </div>


        <!--      <div class="ksd-page-loadmore ksd-page loadmore" data-pages="1" data-total="2" data-pageno="1">-->
        <!--        <a href="javascript:void(0);"><span class="msg">没有更多了</span></a>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OtherUserArticle",
  props: {
    articleList: {
      type: Array,
      default: () => {
        return []
      }
    },
    vipLevel: {
      type: String,
      default: ''
    }
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

}
.ksd-topic-tags:hover {
  background-color: #76c489;
}
</style>

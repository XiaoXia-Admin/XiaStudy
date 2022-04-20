<template>
  <div class="title-article"
       style="background-color: white;text-align: left;margin-left: -17px;padding: 10px 17px;margin-right: 17px;"
       :class="{'other-article':indexOfFlag('/bbs/preview'),'zl-article':indexOfFlag('/zl')}">
    <h1 class="title" id="sharetitle">
        <span v-show="this.article.isExcellentArticle" style="color:#F44336;font-weight: normal;font-size:30px;"
              title="精品推荐"
              class="iconfont icon-tuijian ksd-iconstar-blue pr tp2"></span>&nbsp;
      <span style="color: black">{{ this.article.title }}</span>
      &nbsp;
      <span class="fz16 red" v-show="!this.article.isRelease && this.article.isRelease != null">(草稿)</span>

    </h1>
    <div class="title-msg">
                        <span>
                        <a class="c999" :href="'/other/user/' + this.article.userId" target="_blank"
                           :title="this.article.title">
                            <img
                              :src="this.article.avatar"
                              class="ksd-avatar" alt="">
                            <span class="mx-1">{{ this.article.nickname }}</span>
                           <span v-show="this.article.vipLevel == 'svip'" class="svipIcon"><svg
                             style="position: relative;top: 12px;left: 1px;" t="1644496904794" class="icon"
                             viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2852"
                             width="32"
                             height="32"><path
                             d="M649.142857 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.093714 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.192 18.285714-18.285714L667.428571 420.571429C667.428571 410.477714 659.254857 402.285714 649.142857 402.285714zM539.428571 402.285714l-36.571429 0c0 0 0 106.276571 0 128 0.566857 29.147429-36.571429 36.571429-36.571429 36.571429s-36.571429-7.424-36.571429-36.571429c0-25.142857 0-128 0-128l-36.571429 0c-10.093714 0-18.285714 8.192-18.285714 18.285714l0 128c0.566857 1.901714 64.384 73.709714 73.142857 73.142857l36.571429 0c10.477714 0 73.142857-73.526857 73.142857-73.142857l0-128C557.714286 410.477714 549.540571 402.285714 539.428571 402.285714zM841.142857 402.285714l-54.857143 0c-6.345143 0-12.342857 1.206857-18.102857 2.925714C765.403429 403.510857 762.331429 402.285714 758.857143 402.285714l-18.285714 0c-10.112 0-18.285714 8.192-18.285714 18.285714l0 182.857143c0 10.112 8.173714 18.285714 18.285714 18.285714l18.285714 0c10.112 0 18.285714-8.173714 18.285714-18.285714l0-55.789714C780.16 548.096 783.158857 548.571429 786.285714 548.571429l54.857143 0c35.346286 0 64-28.653714 64-64l0-18.285714C905.142857 430.939429 876.489143 402.285714 841.142857 402.285714zM850.285714 493.714286c0 10.093714-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-73.142857 54.857143 0c10.093714 0 18.285714 8.173714 18.285714 18.285714L850.285714 493.714286zM284.507429 475.428571l19.382857 0c6.729143 0 12.635429-3.236571 16.109714-8.137143 0-13.732571-2.706286-22.619429-6.820571-28.434286l0.420571 0c-10.294857-21.558857-32.109714-36.571429-57.6-36.571429-3.145143 0-6.125714 0.621714-9.142857 1.097143L246.857143 402.285714l-54.857143 0 0 0.914286c-30.976 4.48-54.857143 30.866286-54.857143 63.085714 0 34.596571 27.483429 62.592 61.787429 63.780571-0.036571 0.073143-0.073143 0.146286-0.109714 0.219429L246.857143 530.285714c10.093714 0 18.285714 8.173714 18.285714 18.285714l0 18.285714c0 10.112-8.192 18.285714-18.285714 18.285714l-54.857143 0 0-18.285714c0-10.112-8.667429-18.285714-19.364571-18.285714l-19.382857 0C146.541714 548.571429 140.617143 551.808 137.142857 556.708571 137.088 570.605714 139.977143 579.456 144.347429 585.142857L143.542857 585.142857c10.294857 21.558857 32.128 36.571429 57.6 36.571429 3.145143 0 6.125714-0.621714 9.142857-1.097143L210.285714 621.714286l54.857143 0 0-0.932571c30.976-4.461714 54.857143-30.866286 54.857143-63.067429 0-34.450286-27.282286-62.336-61.385143-63.744 0.036571-0.073143 0.054857-0.182857 0.091429-0.256L210.285714 493.714286c-10.093714 0-18.285714-8.192-18.285714-18.285714l0-18.285714c0-10.093714 8.192-18.285714 18.285714-18.285714l54.857143 0 0 18.285714C265.142857 467.236571 273.810286 475.428571 284.507429 475.428571z"
                             p-id="2853" fill="#d81e06"></path></svg></span>

                    <span class="vipicon" v-show="this.article.vipLevel == 'vip'"><i
                      class="iconfont iconvip11"></i></span>

                    <span class="badgelv badge-vip cbadge-fz12 fw" v-show="this.article.vipLevel == 'zVip'">年会员</span>
                        </a>
                          &nbsp;&nbsp;
                    </span>
      <span class="c999" style="padding:0 6px;">分类：<a class="c999"
                                                      :href="'/bbs?cid=' + this.categoryList.indexOf(this.article.categoryName)"
                                                      target="_blank">教程</a></span>&nbsp;&nbsp;
      <span class="c999" v-show="indexOfFlag('/bbs/preview')">浏览：<span>{{ this.article.views }}</span></span>&nbsp;&nbsp;
      <span v-show="indexOfFlag('zl')" class="c999">创建时间：<span>{{ this.article.gmtCreate }}</span></span>&nbsp;&nbsp;
      <span v-show="indexOfFlag('/bbs/preview')" class="c999"><a href="#comments"
                                                                 class="c999">评论：<span>{{
          this.commentNumber
        }}</span></a></span>&nbsp;&nbsp;
      <a href="javascript:void(0);" @click="writePrint" class="c999 ksd-update-fontsize">
        <i v-show="this.write" class="iconfont icon-weixuanze"></i><i v-show="!this.write"
                                                                      class="iconfont icon-xuanze"></i>
        <span>字体</span>
      </a>&nbsp;&nbsp;
      <a href="javascript:void(0);" @click="editSkin" class="c999 ksd-update-skin">
        <i v-show="this.skin" class="iconfont icon-weixuanze"></i><i v-show="!this.skin"
                                                                     class="iconfont icon-xuanze"></i><span>皮肤</span></a>
      &nbsp;&nbsp;
      <a v-show="indexOfFlag('/zl')" @click="editZlArticle($event)" href="javascript:void(0);"
         :data-opid="this.article.articleId" class="c999">
        <i :data-opid="this.article.articleId" class="iconfont fz14 icon-tianxie mr-1" style="font-size: 13px;"></i>编辑
      </a>
      <a v-show="indexOfFlag('/bbs/preview')" @click="showAccusation" href="javascript:void(0);"
         :data-opid="this.article.articleId" rel="nofollow"
         class="ksd-tiff ksd-operator ksd-reply-link-main-report" title="健康"><i class="iconfont icon-dunpai fz24"></i>
      </a>
      <a v-show="!this.isCollection && indexOfFlag('/bbs/preview')" href="javascript:void(0);"
         class="ksd-tiff2 ksd-tiff-collect" @click="collectArticle">
        <i class="iconfont icon-chuangjiantianjiapiliangtianjia pr-1"></i>
        <span class="zzmsg">收藏</span>
      </a>
      <a v-show="this.isCollection && indexOfFlag('/bbs/preview')" href="javascript:void(0);"
         style="margin-top: -3px;" class="ksd-tiff2 ksd-tiff-collect" @click="cancelCollectArticle">
        <i class="iconfont icon-shoucang pr-1" style="font-size: 20px"></i><span class="zzmsg">已收藏</span>
      </a>

      <a v-show="indexOfFlag('/bbs/preview') && !this.leftFlag && this.tocLength != 0" @click="displayLeftToc" href="javascript:void(0);"
         :data-opid="this.article.articleId"
         class="edittopics-link ksd-operator-expand pl-4 pr tp1">
        <i class="iconfont icon-fuzhi pr tp1"></i>&nbsp;<span class="rmsg">左侧展开</span>

      </a>
      <a v-show="indexOfFlag('/bbs/preview') && this.leftFlag" href="javascript:void(0);" @click="displayLeftToc"
         :data-opid="this.article.articleId"
         class="edittopics-link ksd-operator-expand pl-4 pr tp1">
        <i class="iconfont icon-fuzhi pr tp1"></i>&nbsp;<span class="rmsg">收起目录</span>
      </a>
      <span class="fr c999 ksd-update-span">
                             <span
                               :class="{'other-article-modify-time': indexOfFlag('/bbs/preview'),'zl-modify-time':indexOfFlag('/zl')}">
                                 最后修改于：
                                <span>{{ this.article.gmtModified }}</span>
                            </span>
                        </span>
    </div>
    <!--    <toc></toc>-->
    <slot></slot>
  </div>
</template>

<script>
import {indexOfFlag, loadToc, skinOrWrite} from "../../../common/utils";
import Toc from "./Toc";
import bbsApi from "../../../network/bbs";

export default {
  name: "PreviewTitle",
  components: {Toc},
  props: {
    isCollection: {
      type: Boolean,
      default: false
    },
    article: {
      type: Object,
      default: () => {
        return {}
      }
    },
    commentNumber: {
      type: Number,
      default: 0,
    },
    accusation: {
      type: Boolean,
      default: true
    }
    // labelList: {
    //   type: Array,
    //   default: []
    // }
  },
  data() {
    return {
      categoryList: [
        '程序人生', '管理', '教程', '学习笔记', '采坑记录', '架构', '后台', '前端', '问答', '数据库', '安全', '面试', '理财'
      ],
      time: 500,
      write: false,
      skin: false,
      leftFlag: false,
      test: '',
      tocLength: 0
    }
  },
  methods: {
    displayLeftToc() {
      this.leftFlag = !this.leftFlag
      this.$emit('displayLeftToc')
    },
    collectArticle() {

      this.isCollection = true
      let articleId = this.$route.params.bbsId

      // 收藏文章
      bbsApi.addCollectArticle(articleId).then(response => {
        if (response.data.code == 20000) {
          layer.msg('收藏成功!')
        }
      })
    },
    showAccusation() {
      this.$emit('showAccusation', true);
    },
    cancelCollectArticle() {

      this.isCollection = false
      let articleId = this.$route.params.bbsId

      // 收藏文章
      bbsApi.cancelCollectArticle(articleId).then(response => {
        if (response.data.code == 20000) {
          layer.msg('取消收藏成功!')
        }
      })
    },
    indexOfFlag,
    loadToc,
    writePrint() {
      this.write = !this.write
      this.skinOrWrite()
    },
    editSkin() {
      this.skin = !this.skin
      this.skinOrWrite()
    },
    skinOrWrite,
    editZlArticle(e) {
      let articleId = this.article.articleId
      let zlId = this.$route.params.zlId
      // alert(articleId + '' +zlId)
      this.$emit('editZlArticle', zlId, articleId)
      // ksdZL.hidetoc = true;
      // $(".book-page-main,.ksd-book-toc").hide();
      // $(".book-page-editbox").show();
      // $("body,html").css("overflow", "hidden");
      // $(".blog-footer").css("marginRight", 0);
      // setTimeout(function () {
      //   $(".ksd-nextbtn").hide();
      // }, 300);
      // $("#iframebox").height($(window).height() - 100).attr("src", '/topic/zl/1');
      // $(obj).parents("li").addClass("active").siblings().removeClass("active");
      // KsdLogin.goLogin(function () {
      //   let zlCntId = $(obj).data("opid");
      //   let zlId = $("body").data("zlid");
      //   ksdZL.hidetoc = true;
      //   $(".book-page-main,.ksd-book-toc").hide();
      //   $(".book-page-editbox").show();
      //   $("body,html").css("overflow", "hidden");
      //   $(".blog-footer").css("marginRight", 0);
      //   setTimeout(function () {
      //     $(".ksd-nextbtn").hide();
      //   }, 300);
      //
      // });
    },

  },
  created() {
    if (this.indexOfFlag('/bbs/preview')) {
      setTimeout(this.loadToc, this.time);
    }
    setTimeout(this.skinOrWrite, 100)
    setTimeout(()=>{
      let headList = [...document.getElementById("preview").querySelectorAll('h1,h2,h3,h4,h5,h6')];
      this.tocLength = headList.length
    }, 500)
  }
}

</script>
<style scoped>

.title-article h1.title {
  font-size: 28px;
  font-weight: 600;
  color: #34495e;
  padding: 0 0 10px;
  width: 82%;
  line-height: 32px;
  word-break: break-all;
}


.tp2 {
  top: 2px !important;
}

.icon-xuanzhong {
  top: 0px !important;
  right: 2px;
}

.pr {
  position: relative;
}

.title-article .title-msg a:hover {
  color: black;
}

.title-article .title-msg {
  margin-bottom: 0px;
  font-size: 12px;
  color: #999;
}

.title-article .title-msg span {
  margin-right: 3px;
}

.title-article .title-msg span.c999, .title-article .title-msg span a.c999 {
  color: #999999 !important;
}

.ksd-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: baseline;
  top: 7px;
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;

}

.mr-1, .mx-1 {
  margin-right: .25rem !important;
}


a {
  text-decoration: none;
}

.tp1 {
  top: 0px !important;
}

.title-article .title-msg a.ksd-tiff {
  position: absolute;
  top: 35px;
  right: 25px;
  color: #4CAF50;
  font-weight: bold;
}

.title-article .title-msg a {
  color: #999;
}

.title-article .title-msg a.ksd-tiff2 {
  position: absolute;
  top: 40px;
  right: 66px;
  color: #ff6700 !important;
  font-weight: bold;
  font-size: 14px;
}

.pr-1, .px-1 {
  padding-right: .25rem !important;
}

.title-article .title-msg span {
  margin-right: 3px;
}

.title-article .title-msg span {
  margin-right: 3px;
}

.pl-4, .px-4 {
  padding-left: 1.5rem !important;
}

.fz24 {
  font-size: 24px !important;
}

.layui-container .main {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  padding: 20px;
  background: #fff;
}

.zl-article {
  width: 87%;
}

.other-article {
  box-shadow: rgba(0, 0, 0, 0.1) -4px -4px 12px;
  margin-top: 62px;
}

.other-article-modify-time {
  position: relative;
  top: 18px;
}

.zl-modify-time {
  position: relative;
  right: -137px;
  top: 19px;
}

.red {
  color: red;
}

.fz16 {
  font-size: 16px !important;
}
</style>

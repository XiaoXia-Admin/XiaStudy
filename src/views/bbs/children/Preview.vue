<template>
  <div class="main">
    <div class="layui-container" :class="{'ksd-content-fixed': this.leftTocFlag}" style="padding:0;">
      <preview-title v-on:displayLeftToc="displayLeftToc" @showAccusation="showAccusation" :accusation="this.accusation" :is-collection="this.isCollection"
                     :article="this.article" :comment-number="this.commentNumber">
        <toc :left-toc-flag="this.leftTocFlag"></toc>
      </preview-title>

      <markdown-to-html :markdown-value="this.markdownValue" :id="this.id"></markdown-to-html>
      <div class="xjy-left copy-text mb-4 mt-4"
           style="position: relative;z-index: 29;background-color: white;margin-left: -17px;margin-top: -26px;top: -24px;height: 57px;margin-right: 17px;">
        <span class="ksd-tagsspan">标签：<em v-show="labelList.length > 0" v-for="(item, index) in labelList"
                                          :key="item" class="ksd-topic-tags pr ftp2" :title="item">{{
            item
          }}</em></span>
      </div>
      <div class="layui-row layui-col-space15 main mt-4"
           style="margin-bottom: 100px; margin-left: -17px;margin-right: 16px;">
        <div class="layui-col-md12 layui-col-lg12" style="padding:10px 25px;">
          <div class="comment-text layui-form">
            <div id="comments">
<!--              添加评论-->
              <div id="commentbox-post">
                <div id="respond-post" class="respond">
                  <div class="cancel-comment-reply">
                    <a id="cancel-comment-reply-link" style="display: none" href="javascript:void(0);">
                      取消回复
                    </a>
                  </div>
                  <div class="layui-form-item">
                    <div id="commentarea" class="xjy-left" style="z-index: 10;position: relative">

                    </div>
                  </div>
                  <div class="layui-inline">
                    <button id="submit-comment" @click="submitBtn($event)" style="margin-left: 963px;"
                            class="layui-btn layui-btn-normal fr"><i
                      class="iconfont icon-tianxie pr-2"></i>提交评论
                    </button>
                  </div>
                </div>
              </div>
<!--              用户评论-->
              <div v-show="this.reviewTotal > 0 && !this.loadingFlag" id="commentbox" data-topicid="1363074625050828802">
                <br>
                <h3>总共已有 <span class="totalcount1">{{ reviewTotal }}</span> 条评论</h3>
                <br>
                <!--                评论-->
                <div>
                  <div class="pinglun">
                    <ol class="comment-list-ol comment-list-ol-ol">
                      <li :data-ctotal="reviewTotal" data-total="104" :data-pages="current"
                          v-for="(item, index) in commentList" :key="item.id"
                          :id="'li-comment-' + item.id"
                          class="animated fadeInUpBig comment-body comment-parent comment-odd">
                        <!--                        父评论-->
                        <div :id="'comment-' + item.id" class="pl-dan comment-txt-box">
                          <div class="t-p comment-author position-relative">
                            <a :href="'/other/user/' + item.userId" target="_blank">
                              <img class="avatar" :src="item.userAvatar" width="40" height="40"></a>
                          </div>
                          <div class="t-u comment-author">
                <span>
                    <a :href="'/other/user/' + item.userId" class="fw"
                       target="_blank"><span>{{ item.userNickname }}</span></a>
                    <span class="layui-badge"></span>
                </span>
                            <div class="pt-1">
                              <span class="t-btn">
                        <a href="javascript:void(0);"
                           :data-fatherId="item.id"
                           :data-replyUserId="item.userId"
                           :data-replyNickname="item.userNickname"
                           :data-fatherIndex="index"
                           :data-ruid="item.id" rel="nofollow" class="ksd-reply-link" @click="replayPreview($event, 2)"><i
                          class="iconfont icon-fenxiang"></i>回复</a>
                        &nbsp;
                                <a :data-commentid="item.id" v-show="$store.state.myUserInfoVo.id == item.userId"
                                   class="ksd-comment-parent-deletelink rpl-red" href="javascript:void(0);"
                                   @click="deleteReview($event, index)"><i
                                  class="iconfont icon-chahao"></i>删除</a>
                                &nbsp;
                        <span class="t-g">{{ item.gmtCreate }}</span>
                    </span>
                            </div>
                            <div><b></b></div>
                            <div class="t-s"><p>{{ item.content }}<br></p></div>
                          </div>
                        </div>
                        <!--                        子评论-->
                        <div class="pl-list comment-children">
                          <ol class="comment-list" :id="'comment-list-children-' + item1.id"
                              v-for="(item1,index1) in item.childList" :key="item1.id">
                            <li :id="'li-comment-' + item1.id"
                                class="comment-body comment-child comment-level-odd comment-odd comment-by-author animation fadeInUpBig">
                              <div :id="'comment-' + item1.id" class="pl-dan comment-txt-box">
                                <div class="t-p comment-author position-relative">
                                  <a :href="'/other/user/' + item1.userId" target="_blank"><img class="avatar"
                                                                                                :src="item1.userAvatar"
                                                                                                width="40"
                                                                                                height="40"></a>
                                </div>
                                <div class="t-u comment-author">
                                <span>
                                    <a :href="'/other/user/' + item1.userId" class="fw"
                                       target="_blank"><span>{{ item1.userNickname }}</span></a>


                                    <span class="touser_sp">@<a :href="'/other/user/' + item1.replyUserId"
                                                                target="_blank">{{ item1.replyUserNickname }}</a></span>
                                    <span class="layui-badge"></span>
                                </span>
                                  <div class="pt-1">
                                <span class="t-btn">
                                    <a href="javascript:void(0)"
                                       :data-userId="item1.userId"
                                       :data-nickname="item1.userNickname"
                                       :data-avatar="item1.userAvatar"
                                       :data-replyUserId="item1.replyUserId"
                                       :data-replyNickname="item1.replyUserNickname"
                                       :data-fatherId="item.id"
                                       :data-fatherIndex="index"
                                       rel="nofollow"
                                       class="ksd-reply-link" @click="replayPreview($event, 2)"><i
                                      class="iconfont icon-fenxiang "></i>回复</a>
                                    <a :data-commentid="item1.id" v-show="$store.state.myUserInfoVo.id == item1.userId"
                                       class="ksd-comment-deletelink rpl-red" href="javascript:void(0);"
                                       @click="deleteReview($event, index, index1)"><i
                                      class="iconfont icon-chahao"></i>删除</a>
                                    <span class="t-g">{{ item1.gmtCreate }}</span>
                                </span></div>
                                  <div><b></b></div>
                                  <div class="t-s"><p>{{ item1.content }}</p></div>
                                </div>
                              </div>
                            </li>
                          </ol>

                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div class="loadmore" style=""><a href="javascript:void(0);"><span class="msg">加载更多评论</span>
                  (共<span class="totalcount fw">{{ reviewTotal }}</span>条 / 当前<span
                    class="fw pages">{{ this.current }}</span>页)</a></div>
              </div>
              <!--                没评论显示-->
              <div v-show="this.reviewTotal == 0 && !this.loadingFlag" class="mt-5 mt-5 text-center ksd-empty-box-c" style="">
                <div class="ksd-noempty none" style="background: rgb(255, 255, 255) !important; display: block;">
                  <span class="font-weight-bold"><img :src="this.img" alt="" width="200"></span>
                  <p>坐等您的评论...</p>
                </div>
              </div>
            </div>
            <loading :loading-flag="this.loadingFlag"></loading>
          </div>
        </div>
      </div>
    </div>
<!--    举报-->
    <div class="tipoff-box js-tipoff-box animated bounceInDown" v-show="this.accusation">
      <div class="tipoff-top-box clearfix">
        <p class="l tipoff-title">举报</p>
        <span class="r tipoff-close-btn icon-close2 js-tipoff-close"></span>
      </div>
      <div class="tipoff-type-box js-tipoff-typebox clearfix">
        <div class="item l" v-for="(item, index) in accusationList" :key="index" :title="item.title">
          <i class="l icon-weixuanze iconfont" :id="'accuItem-'+item.type" :data-type="item.type"
             @click="addAccusationInfo($event)"></i>
          <p class="l">{{ item.title }}</p>
        </div>
      </div>
      <div class="tipoff-content">
        <textarea name="tipoff-content" id="tipoff-content" class="tipoff-desc js-tipoff-desc"
                  placeholder="写下举报理由"></textarea>
        <div class="tipoff-text"><span class="js-tipoff-text" style="color: rgb(147, 153, 159);">0</span>/150</div>
      </div>
      <div class="tipoff-btn-box clearfix">
        <div class="r tipoff-submit-btn js-tipoff-submit" @click="submitAccusation">提交
        </div>
        <div class="r tipoff-cancel-btn js-tipoff-close" @click="cancelBtn">取消</div>
      </div>
    </div>
    <div class="tipoff-block js-tipoff-block" v-show="this.accusation"></div>
  </div>
</template>

<script>

import EditorMarkdown from "./EditorMarkdown";
import {backToTop, createEditor, easeInOutQuad, loadToc, mkImageShow, layuiOpen} from "../../../common/utils";
import PreviewTitle from "./PreviewTitle";
import MarkdownToHtml from "./MarkdownToHtml";
import Toc from "./Toc";
import bbsApi from "../../../network/bbs";
import cookie from "js-cookie";
import Loading from "../../../components/common/load/Loading";

export default {
  name: "Preview",
  components: {Loading, Toc, MarkdownToHtml, PreviewTitle, EditorMarkdown},
  data() {
    return {
      editor: null,
      markFlag: false,
      time: 500,
      loadingFlag: true,
      config: {
        width: "98%",
        height: 440,
        path: "./static/lib/editormd/lib/",
        codeFold: true, // 代码折叠
        lineWrapping: true, // 编辑框不换行
        watch: true,// 实时预览
        saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
        searchReplace: true,
        htmlDecode: "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
        emoji: false,
        taskList: true,
        tocm: true,         // Using [TOCM]
        tex: true,                   // 开启科学公式TeX语言支持，默认关闭
        flowChart: true,             // 开启流程图支持，默认关闭
        sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "./php/upload.php",


        toolbarIcons: function () {
          return [
            "bold",
            "list-ul", "list-ol", "emoji"
          ]
        },
        toolbarIconTexts: {
          model: `<i class="fa" style="font-size: 16px;text-align: center;display: block;font-weight: bolder;padding: 5px;" name="testIcon" unselectable="on">模板</i>`,  // 如果没有图标，则可以这样直接插入内容，可以是字符串或HTML标签
          markdown: `<i class="fa" name="layoutmd" unselectable="on"><a href="https://www.kuangstudy.com/bbs/1356475333565587458" target="_blank">MarkDown指南</a></i>`
        },
        onload: function () {
        }
      },
      markdownValue:``,
      isCollection: false,
      accusation: false,
      flag: false,
      id: 'preview',
      img: './static/bg/nodata.png',
      article: {
        // id: '',
        // title: '',
        // isExcellentArticle: true,
        // isRelease: true,
        // userId: '',
        // avatar: '',
        // nickname: '',
        // vipLevel: '',
        // categoryName: '',
        // views: '',
        // content: '',
        // gmtModified: '',
        // gmtCreate: ''
      },
      current: 0,
      limit: 20,
      reviewFlag: 1,
      labelList: [

      ],
      commentNumber: 0,
      fatherId: '',
      fatherIndex: '',
      commentList: [
        // {
        //   id: 1,
        //   userId: 2,
        //   userAvatar: './static/avatar/1.jpg',
        //   userNickname: '往事随风',
        //   content: '666',
        //   vipLevel: 'vip',
        //   gmtCreate: '2022-01-16 18:52:44',
        //   childList: [
        //     {
        //       id: 3,
        //       userId: 4,
        //       userAvatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJS118lQTRSw9pWrKYX3LlRXtDjaJkM48oS2wZ9N82iaPoJicKowzIYDF2q2drtwWbVC6jatrQQzEJg/132',
        //       userNickname: '过往云烟',
        //       content: '777',
        //       vipLevel: 'svip',
        //       replyUserId: 1,
        //       replyUserNickname: '往事随风',
        //       gmtCreate: '2022-01-16 18:52:44'
        //     },
        //   ]
        // }
      ],
      reviewTotal: 0,
      accusationList: [
        {
          title: '广告或垃圾信息',
          type: 1
        },
        {
          title: '辱骂',
          type: 2
        },
        {
          title: '涉政或违法',
          type: 3
        },
        {
          title: '抄袭',
          type: 4
        },
        {
          title: '不合适内容',
          type: 5
        }
      ],
      userAccusationList: [],
      nickname: '',
      avatar: '',
      replyUserId: '',
      replyUserNickname: '',
      leftTocFlag: false
    }
  },
  methods: {
    //展开左侧目录
    displayLeftToc() {
      this.leftTocFlag = !this.leftTocFlag
    },
    createEditor,
    cancelBtn() {
      this.accusation = false
    },
    //展示举报页面
    showAccusation(res) {
      this.accusation = res
    },
    //举报文章
    submitAccusation() {
      if(this.userAccusationList.length == 0) {
        layer.msg('请输入或者选择举报内容!')
      } else {
        this.accusation = false
        let articleId = this.$route.params.bbsId
        let params = new URLSearchParams()
        params.append('articleId', articleId);
        params.append('content', this.userAccusationList)

        //调教举报信息
        bbsApi.reportArticle(params).then(response => {
          layer.msg('举报成功，我们会及时查看的哦！')
        })
      }


    },
    //添加评论
    submitBtn(e) {
      let articleId = this.$route.params.bbsId
      let content = this.editor.txt.text()
      // console.log(articleId)
      // console.log(content)
      // console.log('那个以及评论下==》'+this.fatherId)
      // console.log('评论人昵称==》'+this.nickname)
      // console.log('评论人头像==》'+this.avatar)
      // console.log('回复人昵称==》'+this.replyUserNickname)
      // console.log('回复人id==》'+this.replyUserId)
      if(cookie.get('wx_token')){
        if (this.reviewFlag == 1) {
          this.firstReview(articleId, content, this.nickname, this.avatar)
        } else if (this.reviewFlag == 2) {
          this.secondReview(articleId, content, this.fatherId, this.replyUserId, this.replyUserNickname, this.$store.state.myUserInfoVo.nickname, this.$store.state.myUserInfoVo.avatar)
        }
        this.reviewFlag = 1
        this.editor.txt.text('')
      } else {
        this.layuiOpen()
      }
    },
    layuiOpen,
    replayPreview(e, flag) {
      this.reviewFlag = flag
      this.nickname = e.currentTarget.dataset.nickname
      this.avatar = e.currentTarget.dataset.avatar;

      if (flag == 2) {
        //父亲id
        this.replyUserId = e.currentTarget.dataset.replyuserid
        //父亲名称
        this.replyUserNickname = e.currentTarget.dataset.replynickname
        //那个以及评论下的
        this.fatherId = e.currentTarget.dataset.fatherid;
        this.fatherIndex = e.currentTarget.dataset.fatherindex
      }
      $(e.currentTarget).parents(".comment-author").append($("#respond-post"));
      // 取消回复
      $("#cancel-comment-reply-link").show().off("click").on("click", function () {
        $('#submit-comment')
          .removeData("pid")
          .removeData("nickname")
          .removeData("avatar")
          .removeData("ruid");
        $("#commentbox-post").append($("#respond-post"))
        $("#cancel-comment-reply-link").hide()
      })
    },
    deleteReview(e, index, index1) {
      let commentId = e.currentTarget.dataset.commentid
      console.log('index==>' + index, 'index1==>'+index1)
      layer.confirm('你确定删除吗?', {
        title: '提示',
        btn: ['点击删除', '放弃删除'],
        data: {
          _commentId: commentId,
          _this: this,
          _index: index,
          _index1: index1
        }
      }, function (index) {
        if (!this.data._index1 && this.data._index1 != 0) {
          // alert('删除一级评论')
          $("#li-comment-" + this.data._this.commentList[this.data._index].id).removeClass("animated fadeInUpBig")
            .addClass("animated fadeOutDown").fadeOut(1000, function () {
            this.data._this.remove();
          })
          layer.close(index)
        } else {
          // alert('删除二级评论')
          let id = 'comment-list-children-' + this.data._this.commentList[this.data._index].childList[this.data._index1].id
          // $('#' + id).fadeOut(1000, function () {
          //   this.data._this.commentList[this.data._index].childList.splice(this.data._index1, 1)
          //   $('#' + id).remove()
          // });
          $("#li-comment-" + this.data._this.commentList[this.data._index].childList[this.data._index1].id).removeClass("animated fadeInUpBig")
            .addClass("animated fadeOutDown").fadeOut(1000, function () {
            this.data._this.remove();
          })
          console.log(id)

          layer.close(index)
        }
        // alert(this.data._commentId)
        console.log('index==>' + this.data._index, 'index1==>' + this.data._index1)
        bbsApi.deleteReview(this.data._commentId).then(response => {

        })
      }, function () {

      });
    },
    mkImageShow,
    loadToc,
    backToTop,
    easeInOutQuad,
    firstReview(articleId, content) {
      console.log(articleId)
      console.log(content)
      this.reviewTotal += 1
      // let item = {
      //   id: this.reviewId,
      //   userId: this.$store.state.myUserInfoVo.id,
      //   userAvatar: this.$store.state.myUserInfoVo.avatar,
      //   userNickname: this.$store.state.myUserInfoVo.nickname,
      //   content: content,
      //   vipLevel: 'vip',
      //   gmtCreate: '刚刚',
      //   childList: []
      // }
      // this.commentList.unshift(item)
      bbsApi.firstReview(articleId, content, this.$store.state.myUserInfoVo.nickname, this.$store.state.myUserInfoVo.avatar).then(response => {
        // alert(response.data.data.commentId)
        let item = {
          id: response.data.data.commentId,
          userId: this.$store.state.myUserInfoVo.id,
          userAvatar: this.$store.state.myUserInfoVo.avatar,
          userNickname: this.$store.state.myUserInfoVo.nickname,
          content: content,
          vipLevel: 'vip',
          gmtCreate: '刚刚',
          childList: []
        }
        this.commentList.unshift(item)
      })
    },
    secondReview(articleId, content, fatherId, replyUserId, replyUserNickname, nickname, avatar) {
      console.log(articleId)
      console.log(content)
      console.log(fatherId)
      console.log(replyUserId)
      console.log(replyUserNickname)
      console.log(nickname)
      console.log(avatar)
      // this.reviewId += 1
      // let item = {
      //   id: this.reviewId,
      //   userId: this.$store.state.myUserInfoVo.id,
      //   userAvatar: this.$store.state.myUserInfoVo.avatar,
      //   userNickname: this.$store.state.myUserInfoVo.nickname,
      //   content: content,
      //   vipLevel: 'svip',
      //   replyUserId: replyUserId,
      //   replyUserNickname: replyUserNickname,
      //   gmtCreate: '刚刚'
      // }
      // console.log(this.fatherIndex)
      // this.commentList[this.fatherIndex].childList.unshift(item)

      // console.log(.unshift(item))
      bbsApi.secondReview(articleId, content, fatherId, replyUserId, replyUserNickname, nickname, avatar).then(response => {
        let item = {
          id: response.data.data.commentId,
          userId: this.$store.state.myUserInfoVo.id,
          userAvatar: this.$store.state.myUserInfoVo.avatar,
          userNickname: this.$store.state.myUserInfoVo.nickname,
          content: content,
          vipLevel: 'svip',
          replyUserId: replyUserId,
          replyUserNickname: replyUserNickname,
          gmtCreate: '刚刚'
        }
        this.commentList[this.fatherIndex].childList.unshift(item)
      })
    },
    getArticle(articleId) {
      bbsApi.getArticle(articleId).then(response => {
        // alert(response.data.data.isCollection)
        // $("#markdownValue").attr("value",response.data.data.article.content)
        this.markdownValue = response.data.data.article.content
        // alert(this.markdownValue)
        this.isCollection = response.data.data.isCollection
        this.article = response.data.data.article
        // alert(this.article.isRelease)
        this.labelList = response.data.data.labelList
        this.commentNumber = response.data.data.commentNumber
        this.markFlag = false
      })
    },
    findReview(articleId) {
      this.current += 1
      bbsApi.findArticleReview(articleId, this.current, this.limit).then(response => {
        this.commentList = response.data.data.commentList
        this.reviewTotal = response.data.data.total
        this.loadingFlag = false
      })
    },
    addAccusationInfo(e) {
      let className = $("#accuItem-" + this.accusationList[e.currentTarget.dataset.type - 1].type).prop('class')
      if (className == 'l icon-weixuanze iconfont') {
        $("#accuItem-" + this.accusationList[e.currentTarget.dataset.type - 1].type).removeClass("l icon-weixuanze iconfont")
          .addClass("l icon-xuanze iconfont")
        let info = '#' + this.accusationList[e.currentTarget.dataset.type - 1].title
        this.userAccusationList.push(info)
      } else if (className == 'l icon-xuanze iconfont') {
        $("#accuItem-" + this.accusationList[e.currentTarget.dataset.type - 1].type).removeClass("l icon-xuanze iconfont")
          .addClass("l icon-weixuanze iconfont")
        console.log('userAccusationList==>' + this.userAccusationList)
        let info = '#' + this.accusationList[e.currentTarget.dataset.type - 1].title
        let index = this.userAccusationList.findIndex((item) => item === info)
        console.log('info==>' + info)
        console.log('index==>' + index)
        this.userAccusationList.splice(index, 1)
      }
      $('#tipoff-content').val(this.userAccusationList)
    }
  },
  mounted() {
    this.createEditor()
  },
  beforeMount() {
    //查找文章详情
    // alert('获取content')
    this.getArticle(this.$route.params.bbsId)
    //查找文章评论
    this.findReview(this.$route.params.bbsId)
  },
  created() {
    setTimeout(this.mkImageShow, this.time);
    if (window.name == 'isReload') {
      this.backToTop('slide_bottom')
    } else {
      window.name = 'isReload'
    }


  }
}
</script>

<style scoped>
.layui-container {
  max-width: 1200px;
  width: 1170px;
  padding: 28px;
}

.title-article h1.title {
  font-size: 28px;
  font-weight: 600;
  color: #34495e;
  padding: 0 0 10px;
  width: 82%;
  line-height: 32px;
  word-break: break-all;
}

.title-article h1 {
  font-size: 16px;
  font-weight: 600;
  color: #34495e;
  margin-top: 5px;
}

.tp2 {
  top: 2px !important;
}

.pr {
  position: relative;
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

.svipicon {
  color: #ff503f;
  position: relative;
  top: -1px;
  background: #f9d681;
  padding: 0 2px;
  border-radius: 12px;
  top: -1px;
}

a {
  text-decoration: none;
}

.tp1 {
  top: 1px !important;
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

/*评论*/
.comment-text h3 {
  font-size: 16px;
  text-align: left;
  color: black;

}

.pinglun {
  margin-bottom: 10px;
}

.pinglun li {
  margin-bottom: 10px;
  padding: 10px;
  background: #eff3f5;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

.pinglun .pl-dan {
  border-radius: 4px;
  padding: 6px;
}

.pinglun .t-p {
  float: left;
  position: relative;
  top: -3px;
}

.position-relative {
  position: relative !important;
}

.pinglun .t-p img {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(210, 210, 210, 0.2);
  border-radius: 200px;
  position: relative;
  z-index: 555;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.pinglun .t-u {
  margin-left: 70px;
  line-height: 22px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: left;
}

.fw {
  font-weight: 600 !important;
}

a {
  text-decoration: none;
}

.layui-badge:empty {
  display: none;
}

.layui-badge {
  height: 18px;
  line-height: 18px;
}

.layui-badge, .layui-badge-dot, .layui-badge-rim {
  position: relative;
  display: inline-block;
  padding: 0 6px;
  font-size: 12px;
  text-align: center;
  background-color: #FF5722;
  color: #fff;
  border-radius: 2px;
}

.pt-1, .py-1 {
  padding-top: .25rem !important;
}

.pinglun .t-u .t-g {
  color: #999;
  font-size: 12px;
}

b, strong {
  font-weight: bolder;
}

.pinglun .t-u .t-btn a {
  background: #1ab667;
  color: #fff;
  font-size: 12px;
  border: #1ab667 1px solid;
  padding: 2px 5px;
  border-radius: 4px;
  margin-right: 10px;
}

.pinglun .t-u .t-btn a.rpl-red {
  background: #ea0d0d;
  border: 1px solid #ea0d0d;
}

.pinglun .t-u .t-btn a.rpl-red:hover {
  background: #1ab667;
  border: #1ab667 1px solid;
}

.pinglun .t-u .t-btn a .iconfont {
  font-size: 13px;
  padding-right: 3px;
}

.pinglun .t-s {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #888;
  word-break: break-word;
  line-height: 20px;
}

.pinglun .t-s p {
  word-break: break-all;
}

ol ol, ol ul, ul ol, ul ul {
  margin-bottom: 0;
}

.pinglun li.comment-child {
  padding: 10px 30px 0 10px;
  background: #ffff;
  margin-left: 75px;
  margin-right: 20px;
}

.comment-children .pl-dan {
  padding-left: 25px;
}

.loadmorechild a:hover, .loadmore a:hover {
  background: #eee;
}

.loadmorechild a, .loadmore a {
  display: block;
  background: #f5f5f5;
  padding: 5px;
}

/*富文本编辑器*/
.layui-form-item {
  margin-bottom: 15px;
  clear: both;
  *zoom: 1;
}

.layui-inline {
  display: inline;
  zoom: 1;
}

.layui-btn, .layui-edge, .layui-inline, img {
  vertical-align: middle;
}

.layui-edge, .layui-header, .layui-inline, .layui-main {
  position: relative;
}

/*举报表单*/
.tipoff-box {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -168px;
  margin-left: -225px;
  padding: 24px 32px 32px;
  width: 450px;
  height: 336px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .2);
  border-radius: 8px;
  box-sizing: border-box;
  z-index: 901;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.tipoff-box .tipoff-top-box {
  margin-bottom: 24px;
  width: 100%;
  font-size: 16px;
  color: #07111b;
  line-height: 24px;
}

.tipoff-box .tipoff-type-box {
  width: 100%;
  height: 48px;
  overflow: hidden;
  margin-bottom: 24px;
}

.clearfix {
  *zoom: 1;
}

.tipoff-box .tipoff-type-box .item {
  width: 33.3%;
  font-size: 12px;
  color: #93999f;
  line-height: 24px;
  overflow: hidden;
  cursor: pointer;
}

.tipoff-box .tipoff-type-box .item i {
  display: inline-block;
  margin-right: 4px;
  font-size: 16px;
  line-height: 24px;
}

.tipoff-box .tipoff-type-box .item p {
  max-width: 108px;
  height: 24px;
  overflow: hidden;
}

.tipoff-box .tipoff-content {
  position: relative;
}

.tipoff-box .tipoff-content .tipoff-text {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  color: #93999f;
  line-height: 12px;
}

.tipoff-box .tipoff-btn-box {
  width: 100%;
  margin-top: 24px;
}

.tipoff-box .tipoff-content .tipoff-desc {

  padding: 12px;
  width: 386px;
  height: 88px;
  background: #fff;
  border: 1px solid #d9dde1;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 14px;
  color: #07111b;
  resize: none;

}

.tipoff-box .tipoff-btn-box .tipoff-submit-btn {
  width: 76px;
  height: 36px;
  background: #1E9FFF;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
}

.tipoff-box .tipoff-btn-box .tipoff-cancel-btn {
  margin-right: 8px;
  width: 76px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #d9dde1;
  border-radius: 2px;
  font-size: 14px;
  color: #93999f;
  text-align: center;
  cursor: pointer;
}

.copy-text {
  color: #666;
  padding: 0 20px;
}

.text, .copy-text, .page-text, .comment-text, .tags-text {
  overflow: hidden;
}

.mb-4, .my-4 {
  margin-bottom: 1.5rem !important;
}

.mt-4, .my-4 {
  margin-top: 1.5rem !important;
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

.ftp2 {
  top: -2px !important;
}

.ksd-topic-tags:hover {
  background-color: #76c489;
}

.pinglun .cancel-comment-reply {
  background: #f05050;
  padding: 2px 5px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 10px;
}

.pinglun .cancel-comment-reply a {
  color: #fff;
}

.touser_sp {
  color: #31bc31;
  padding-left: 10px;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  top: -1px;
  left: -4px;
}

.touser_sp a:hover {
  color: #31bc31;
}

.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}

.bounceInDown {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}
.fadeInUpBig {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}
.pinglun li:hover {
  background: #F8F8F8;
  box-shadow: 0 0 1em #d3d3d3;
}

.layui-container.ksd-content-fixed {
  margin-left: 332px;
  margin-top: 84px;
}
</style>


















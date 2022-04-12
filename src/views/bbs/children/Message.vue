<template>
  <form id="xjy-topic-form" class="needs-validation"
        :class="{'bg-white': this.$route.path.indexOf('/topic/zl') != -1,'mg-56': this.$route.path.indexOf('/topic/zl') != -1}">
    <div v-show="!(this.$route.path.indexOf('/zl')!=-1)" class="xjy-topic-footer">
      <a href="javascript:void(0);" class="xjy-back float-left" @click="layuiBack('返回文章','继续操作','/bbs')"><i
        class="iconfont icon-fanhui pr tp1"></i>返回</a>
      <span class="sendbtn" id="xjy-sendbtn-submit" @click="publishArticle()"><i class="iconfont icon-tianjia pr-2"></i><span
        class="text">发布文章</span><span class="xjy-timer-bac"></span></span>
      <span v-show="this.$route.path.indexOf('/topic/publish-article')!=-1" @click="preserveDraft" class="sendbtn"
            id="xjy-sendbtn-submit2"
            style="background: #4caf50;">
        <i class="iconfont icon-tianjia pr-2"></i><span class="text">保存草稿</span></span>
      <a v-show="this.$route.path.indexOf('/topic/to-update')!=-1" :href="'/bbs/preview/'+ this.article.id">
        <span class="sendbtn" id="xjy-sendbtn-yulan">
          <i class="iconfont icon-icon_yulan pr-2"></i>
          <span class="text">预览</span>
          <span class="xjy-timer-bac"></span>
        </span>
      </a>
    </div>
    <div v-show="this.$route.path.indexOf('/topic/zl') !=-1" class="ksd-topic-footer"
         style="box-shadow: none;padding-right:18px;padding-top: 5px; ">
            <span style="position: absolute;top:24px;right: 342px;">
                <label class="mr-3"><input type="checkbox" v-model="bbsCheck" class="togglemark"><span
                  class="pr ftp1 pl-2" style="color: black">是否同步到江湖</span></label>
            </span>
      <span v-show="this.publishFlag" class="sendbtn" id="ksd-sendbtn-submit" @click="publishZlArticle"><i
        class="iconfont icon-tianxie pr-2"></i><span
        class="text">发布专栏文章</span></span>
      <span v-show="!this.publishFlag" @click="modifyZlArticle" class="sendbtn" id="ksd-sendbtn-edit"><i
        class="iconfont icon-tianxie pr-2"></i><span
        class="text">修改文章</span></span>
      <a href="javascript:void(0);" class="sendbtn ksd-back-close layui-btn-danger" style="background: #FF5722;"
         @click="closeZlArticle()"><i
        class="iconfont icon-chahao mr-2 pr tp1"></i>关闭编辑</a>
    </div>
    <main class="topic-container mt-1 p-3 bg-white rounded">
      <div class="topic-container-row">
        <div class="col-md-12" style="padding: 20px;">
          <div class="col-md-12 order-md-1">
            <div class="topic-container-row">
              <div class="col-md-9  blog-main">
                <input type="text" style="text-indent: 1em;" name="topicTitle"
                       class="bootstrap-tagsinput custom-select" :value="this.article.title" @keydown="bindTitle"
                       @keyup="bindTitle" ref="addTitle"
                       placeholder="请输入文章标题" maxlength="100"
                       id="addTitle" required="">
              </div>
              <div class="col-md-3 blog-main">
                <select name="topicCategoryId" style="text-indent: 1em;"
                        class="custom-select bootstrap-tagsinput d-block w-100" v-model="couponSelected" id="category">
                  <option :value="span.id" v-for="span in categoryList">{{ span.categoryName }}</option>
                </select>
              </div>
              <div class="col-md-9 mb-3 mt-3 blog-main">
                <input type="text" name="topicDescription" class="bootstrap-tagsinput custom-select"
                       placeholder="描述(用于展示首页上)" :value="this.article.description" maxlength="250" ref="addDescription"
                       style="text-indent: 1em;"
                       id="topicDescription"
                       value="" required="">
              </div>
              <div class="col-md-3 mb-3 mt-3 blog-main">
                <div class="tagsinput-primary ">
                  <div class="topic-label bootstrap-tagsinput custom-select"
                       style="overflow: hidden;display: flex;text-align: left;width: 100%;">
                    <span v-show="labelList.length != 0" class="tag label label-info" v-for="(item, index) in labelList"
                          :key="index">{{ item }}<span @click="deleteSpan(index)" data-role="remove"></span></span>
                    &nbsp;&nbsp;
                    <input :class="{'margin-bbs': this.$route.path.indexOf('/zl')}" ref="span" @keyup.enter="addSpan"
                           type="text" style="position: relative"
                           placeholder="标签可以管理自己文章分类,回车确定添加标签(选填) ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <editor-markdown :content="this.article.content"></editor-markdown>
    </main>

  </form>

</template>

<script>


import EditorMarkdown from "./EditorMarkdown";
import {layuiBack,} from "../../../common/utils";
import bbsApi from "../../../network/bbs";
import {defaultConfig} from "../../../config/editor.md";
import loginApi from "../../../network/login";

export default {
  name: "Message",
  props: {
    bbsFlag: {
      type: Boolean,
      default: true
    },
    articleList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {EditorMarkdown},
  data() {
    return {
      labelList: [],
      couponSelected: 1,
      articleId: '',
      article: {},
      columnArticle: {},
      categoryList: [
        // {
        //   id: 1,
        //   title: '程序人生'
        // },
        // {
        //   id: 2,
        //   title: '管理'
        // },
        // {
        //   id: 3,
        //   title: '教程'
        // },
        // {
        //   id: 4,
        //   title: '学习笔记'
        // },
        // {
        //   id: 5,
        //   title: '采坑记录'
        // },
        // {
        //   id: 6,
        //   title: '架构'
        // },
        // {
        //   id: 7,
        //   title: '后台'
        // },
        // {
        //   id: 8,
        //   title: '前端'
        // },
        // {
        //   id: 9,
        //   title: '问答'
        // },
        // {
        //   id: 10,
        //   title: '测试'
        // },
        // {
        //   id: 11,
        //   title: '数据库'
        // },
        // {
        //   id: 12,
        //   title: '安全'
        // },
        // {
        //   id: 13,
        //   title: '面试'
        // },
        // {
        //   id: 14,
        //   title: '理财'
        // },
      ],
      editor: null,
      publishFlag: true,
      content: '',
      editContent: '',
      zlId: '',
      bbsCheck: false
    }
  },
  methods: {
    layuiBack,
    bindTitle() {
      // window.parent.document.getElementById('zlLeftAddTitle').innerHTML = this.$refs.addTitle.value
      $('#zlLeftAddTitle', window.parent.document).val(this.$refs.addTitle.value)
    },
    setMessage() {
      this.article.title = this.$refs.addTitle.value
      this.article.description = this.$refs.addDescription.value
      this.article.content = this.editor.getMarkdown()
    },
    addSpan() {
      if (this.labelList.length < 3 && this.$refs.span.value.trim() != '') {
        this.labelList.push(this.$refs.span.value)
      } else if (this.$refs.span.value.trim() == '') {
        layer.msg('设空值干嘛！', {time: 500})
      } else {
        layer.msg('三个标签就不少了哦！', {time: 500})
      }
      this.setMessage()
      // alert()
      // let nickname = this.$store.state.myUserInfoVo.nickname
      // let avatar = this.$store.state.myUserInfoVo.avatar
      // let bbsCheck = this.bbsCheck
      // let labelList = this.labelList
      // let zlId = this.zlId
      this.$refs.span.value = ''
    },
    getConfig() {
      if (this.config) {
        return this.config;
      } else {
        return defaultConfig
      }
    },
    deleteSpan(index) {
      this.labelList.splice(index, 1)
    },
    //查询用户缓存数据
    findArticleCache() {
      bbsApi.findArticleCache().then(response => {
        if (response.data.data.article == null) {
          this.article = {
            id: 1,
            title: '',
            description: '',
            categoryId: 5,
            content: ''
          }
          this.labelList = []
        } else {
          this.article = response.data.data.article
          this.labelList = response.data.data.article.labelList
        }

      })
    },
    //标题和描述的检查
    checkTitleOrDes() {
      let span = this.labelList.length >= 3 ? this.labelList : this.$refs.span.value.trim() != '' ? (this.labelList.push(this.$refs.span.value), this.$refs.span.value = '') : this.labelList;
      if (this.$refs.addTitle.value.trim().length <= 0) {
        layer.tips('请输入标题!', '#addTitle', {
          tips: [1, 'black'],
          time: 2000
        });
        return false;
      } else if (this.$refs.addDescription.value.trim().length <= 0) {
        layer.tips('请输入文章简介描述!', '#topicDescription', {
          tips: [1, 'black'],
          time: 2000
        });
        return false;
      }
      return true
    },
    //发布江湖文章
    publishArticle() {
      if (!this.checkTitleOrDes()) {
        return;
      }
      let categoryId = this.couponSelected
      let title = this.$refs.addTitle.value
      let description = this.$refs.addDescription.value
      let content = this.editor.getMarkdown()
      let nickname = this.$store.state.myUserInfoVo.nickname
      let avatar = this.$store.state.myUserInfoVo.avatar
      this.setMessage()
      // console.log(title)
      // console.log(description)
      // console.log(categoryId)
      // console.log(content)
      // console.log(this.labelList)
      //title, description, categoryId, content, labelList, isRelease, avatar, nickname
      bbsApi.bbsArticlePublish(title, description, categoryId, content, this.labelList, true, avatar, nickname)
        .then(response => {
          this.articleId = response.data.data.articleId
          layer.confirm(`发布文章成功`, {
            btn: ['点击查看', '继续编辑'],
            data: {
              _articleId: this.articleId
            }
          }, function () {
            window.location = 'http://localhost:8080/bbs/preview/' + this.data._articleId
          })
        })


    },
    //修改专栏文章
    modifyZlArticle() {
      if (!this.checkTitleOrDes()) {
        return;
      }
      let categoryId = this.couponSelected
      // alert(categoryId)
      let title = this.$refs.addTitle.value
      let description = this.$refs.addDescription.value
      let content = this.editor.getMarkdown()
      let articleId = this.articleId
      let bbsCheck = this.bbsCheck
      let labelList = this.labelList
      let zlId = this.zlId
      this.setMessage()
      let params = new URLSearchParams()
      params.append('columnId', zlId);
      params.append('articleId', articleId);
      params.append('title', title);
      params.append('description', description);
      params.append('categoryId', categoryId);
      params.append('content', content);
      params.append('isBbs', bbsCheck);
      params.append('labelList', labelList);
      // alert('ahaha')
      bbsApi.modifyZlArticle(params)
        .then(response => {
          // layer.msg('hh')
          if(response.data.code == 20000) {
            // this.columnArticle = response.data.data.columnArticle
            // layer.msg('添加成功')
            layer.confirm(`保存文章成功`, {
              btn: ['继续编辑', '返回专栏'],
              data: {
                _this: this
              }
            }, function (index) {
              layer.close(index)
            },function () {
              parent.location.href = "/zl/" + this.data._this.zlId;
            })
          }
          // window.location = 'http://localhost:8080/bbs/preview/1'
        })
    },
    //发布专栏文章
    publishZlArticle() {
      if (!this.checkTitleOrDes()) {
        return;
      }
      // console.log(window.parent.data.articleList)
      // let categoryId = this.couponSelected
      let categoryId = this.couponSelected
      // alert(categoryId)
      let title = this.$refs.addTitle.value
      let description = this.$refs.addDescription.value
      let content = this.editor.getMarkdown()
      let nickname = this.$store.state.myUserInfoVo.nickname
      let avatar = this.$store.state.myUserInfoVo.avatar
      let bbsCheck = this.bbsCheck
      let labelList = this.labelList
      let zlId = this.zlId
      this.setMessage()
      // console.log(zlId)
      // console.log(avatar)
      // console.log(nickname)
      // console.log(title)
      // console.log(description)
      // console.log(categoryId)
      // console.log(content)
      // console.log(bbsCheck)
      // console.log(labelList)
      let params = new URLSearchParams()
      params.append('columnId', zlId);
      params.append('avatar', avatar);
      params.append('nickname', nickname);
      params.append('title', title);
      params.append('description', description);
      params.append('categoryId', categoryId);
      params.append('content', content);
      params.append('isBbs', bbsCheck);
      params.append('labelList', labelList);
      console.log(params)
      // qs.stringify({ids: [1, 2, 3]}, {arrayFormat:'repeat'})
      //形式： ids=1&ids=2&id=3
      bbsApi.publishZlArticle(params)
        .then(response => {
          if(response.data.code == 20000) {
            this.columnArticle = response.data.data.columnArticle
            // layer.msg('添加成功')
            layer.confirm(`保存文章成功`, {
              btn: ['继续编辑', '返回专栏'],
              data: {
                _this: this
              }
            }, function (index) {
              layer.close(index)
            },function () {
              parent.location.href = "/zl/" + this.data._this.zlId;
            })
          }
          // window.location = 'http://localhost:8080/bbs/preview/1'
        })
    },
    closeZlArticle() {
      // let zlid = $("body").data("zlid");
      // if (zlCntId) {
      //   let sortlen = $("#ksd-zl-itemlist").find(".ksd-zl-item").length;
      //   $("#ksd-zl-item-opedit").addClass("ksd-zl-item ksd-zl-item-" + zlCntId)
      //     .removeData("mode")
      //     .removeAttr("id")
      //     .data({sort: sortlen, opid: zlCntId}).attr("id", "ksd-zl-item-c" + sortlen);
      //   // KsdCache.setCache("zlid", zlCntId);
      // }
      parent.location.href = "/zl/" + this.zlId;
    },
    //江湖文章的保存
    preserveDraft() {
      if (!this.checkTitleOrDes()) {
        return;
      }
      //向后端保存草稿
      layer.confirm(`保存草稿成功`, {
        btn: ['点击查看', '返回编辑'],
        data: {
          _this: this
        }
      }, function () {
        let categoryId = this.data._this.couponSelected
        let title = this.data._this.$refs.addTitle.value
        let description = this.data._this.$refs.addDescription.value
        let content = this.data._this.editor.getMarkdown()
        // console.log(title)
        // console.log(description)
        // console.log(categoryId)
        // console.log(content)
        // console.log(this.data._this.labelList)
        //title, description, categoryId, content, labelList, isRelease, avatar, nickname
        bbsApi.bbsArticlePublish(title, description, categoryId, content, this.data._this.labelList, false, this.data._this.$store.state.myUserInfoVo.avatar, this.data._this.$store.state.myUserInfoVo.nickname)
          .then(response => {
            window.location = 'http://localhost:8080/bbs/preview/1'
          })

      }, function () {

      });
    },
    //文章的查询
    findArticleInfo(id) {
      // this.article = {
      //   id: 1,
      //   title: '123',
      //   description: '123',
      //   categoryId: 5,
      //   content: '$(\'#submit\').click(function(){\n' +
      //     'console.log(editor.getMarkdown()) //获取值正常\n' +
      //     'console.log(editor.getHTML()) //获取不到值\n' +
      //     'console.log(editor.getPreviewedHTML()) //正常\n' +
      //     'return false;\n' +
      //     '})'
      // }
      // this.labelList = ['a', 'b', 'c']
      bbsApi.articleFind(id).then(response => {
        this.article = response.data.data.article
        this.couponSelected = this.article.categoryId
        this.labelList = response.data.data.labelList
      })
    },
    //查询专栏文章详细数据
    findZlArticleInfo(zlId, articleId) {
      // alert(zlId + '==' + articleId)
      bbsApi.findZlArticleDetail(zlId, articleId).then(response => {
        this.article = response.data.data.article
        // this.editor.setMarkdown(this.article.content)
        this.couponSelected = this.article.categoryId
        this.labelList = response.data.data.labelList
      })
    },
    findCategory() { //查询分类
      bbsApi.findCategory()
        .then(response => {
          this.categoryList = response.data.data.categoryList
        })
    },
    editZLArticle(zlId, articleId) {
      bbsApi.findZlArticle(zlId, articleId).then(response => {
        this.article = response.data.data.article
        this.bbsCheck = this.article.isBbs
        this.editor.setMarkdown(this.article.content)
        // alert(this.article.categoryId)
        this.couponSelected = this.article.categoryId
        this.labelList = response.data.data.labelList
      })
    }
  },
  mounted() {
    this.editor = editormd('editor', this.getConfig());
    // $('#xjy-sendbtn-submit').click(function () {
    //   alert('1')
    //   this.editContent = editor.getMarkdown();
    //   alert('2')
    // })
  },
  created() {
    if (this.$route.path.indexOf('/topic/publish-article') != -1) {
      this.findCategory()
      this.findArticleCache()
      // alert(this.article.categoryId)

    } else if (this.$route.path.indexOf('/topic/to-update/') != -1) {
      let id = this.$route.params.articleId
      this.findArticleInfo(id)
    } else if (this.$route.path.indexOf('/topic/zl/add-article/') != -1) {
      this.article = {}
      this.zlId = this.$route.params.zlId
      this.findCategory()
    } else if (this.$route.path.indexOf('/topic/zl/to-update/') != -1) {
      this.zlId = this.$route.params.zlId
      this.articleId = this.$route.params.zlArticleId

      this.publishFlag = false
      // alert(this.publishFlag)
      // alert(zlId)
      // alert(articleId)
      // alert('haha')
      this.findCategory()
      this.editZLArticle(this.zlId, this.articleId)
    }
    this.couponSelected = this.article.categoryId == null ? '1492434355002302466' : this.article.categoryId
  }
}
</script>

<style scoped>
@import "../../../assets/css/message.css";

.ksd-topic-footer {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10000;
  background: #fff;
  text-align: center;
  box-shadow: 0 0 1em #b7b7b7;
}

input[type="checkbox"], input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

.ksd-topic-footer .sendbtn {
  display: inline-block;
  margin: 10px 24px 10px 0;
  width: 128px;
  float: right;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background: #37f;
  cursor: pointer;
  transition: 100ms;
}

.text {
  padding-top: 0;
  padding-bottom: 0;
  line-height: 2;
  overflow: hidden;
}

.ftp1 {
  top: -1px !important;
}

.bg-white {
  background-color: #fff !important;
}

.pr {
  position: relative;
}

.pl-2, .px-2 {
  padding-left: .5rem !important;
}

.sendbtn:hover {
  background-color: #4caf50;
}

.margin-bbs {
  margin-left: 0px;
}

.bootstrap-tagsinput .tag {
  margin-right: 2px;
  color: white;
  height: 30px;
  line-height: 30px;
}

.bootstrap-tagsinput .label-info {
  border-radius: 16px;
  background-color: #3377ff;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  padding: 0 10px;
  transition: .25s linear;
  top: -6px;
  white-space: nowrap; /*不换行*/
}

.bootstrap-tagsinput .tag [data-role="remove"] {
  margin-left: 8px;
  cursor: pointer;
}

.bootstrap-tagsinput .tag [data-role="remove"]::after {
  content: "x";
  padding: 0px 2px;
}

.mg-56 {
  margin-left: 56px;
}
</style>

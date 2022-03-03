<template>
  <form id="xjy-topic-form" class="needs-validation">
<!--    <div v-show="!this.$route.path.indexOf('/zl')" class="xjy-topic-footer">-->
<!--      <a href="javascript:void(0);" class="xjy-back float-left" @click="layuiBack('返回文章','继续操作','/bbs')"><i-->
<!--        class="iconfont icon-fanhui pr tp1"></i>返回</a>-->
<!--      <span class="sendbtn" id="xjy-sendbtn-submit"><i class="iconfont icon-tianjia pr-2"></i><span-->
<!--        class="text">发布文章</span><span class="xjy-timer-bac"></span></span>-->
<!--      <span class="sendbtn" id="xjy-sendbtn-submit2" style="background: #4caf50;">-->
<!--        <i class="iconfont icon-tianjia pr-2"></i><span class="text">保存草稿</span></span>-->
<!--      <a :href="'/bbs/preview/'+ 1">-->
<!--        <span class="sendbtn" id="xjy-sendbtn-yulan">-->
<!--          <i class="iconfont icon-icon_yulan pr-2"></i>-->
<!--          <span class="text">预览</span>-->
<!--          <span class="xjy-timer-bac"></span>-->
<!--        </span>-->
<!--      </a>-->
<!--    </div>-->
<!--    <div v-show="this.$route.path.indexOf('/zl')" class="ksd-topic-footer"-->
<!--         style="box-shadow: none;padding-right:18px;padding-top: 5px; ">-->
<!--            <span style="position: absolute;top:24px;right: 342px;">-->
<!--                <label class="mr-3"><input type="checkbox" onchange="togglemarkchange(this)" class="togglemark"><span-->
<!--                  class="pr ftp1 pl-2" style="color: black">是否同步到江湖</span></label>-->
<!--            </span>-->
<!--      <span class="sendbtn" id="ksd-sendbtn-submit"><i class="iconfont icon-tianxie pr-2"></i><span-->
<!--        class="text">发布专栏文章</span></span>-->
<!--      <a href="javascript:void(0);" class="sendbtn ksd-back-close layui-btn-danger" style="background: #FF5722;"><i-->
<!--        class="iconfont icon-chahao mr-2 pr tp1"></i>关闭编辑</a>-->
<!--    </div>-->
    <main class="topic-container mt-1 p-3 bg-white rounded">
<!--      <div class="topic-container-row">-->
<!--        <div class="col-md-12" style="padding: 20px;">-->
<!--          <div class="col-md-12 order-md-1">-->
<!--            <div class="topic-container-row">-->
<!--              <div class="col-md-9  blog-main">-->
<!--                <input type="text" style="text-indent: 1em;" name="topicTitle"-->
<!--                       class="bootstrap-tagsinput" placeholder="请输入文章标题" maxlength="100" id="title" required="">-->
<!--              </div>-->
<!--              <div class="col-md-3 blog-main">-->
<!--                <select name="topicCategoryId" style="text-indent: 1em;"-->
<!--                        class="custom-select bootstrap-tagsinput d-block w-100" id="category">-->
<!--                  <option value="1">程序人生</option>-->
<!--                  <option value="10">面试</option>-->
<!--                  <option value="11">数据库</option>-->
<!--                  <option value="12">安全</option>-->
<!--                  <option value="13">测试</option>-->
<!--                  <option value="1461614772263886849">理财</option>-->
<!--                  <option value="2">管理</option>-->
<!--                  <option value="3">教程</option>-->
<!--                  <option value="4" selected="selected">学习笔记</option>-->
<!--                  <option value="5">踩坑记录</option>-->
<!--                  <option value="6">架构</option>-->
<!--                  <option value="7">后台</option>-->
<!--                  <option value="8">前端</option>-->
<!--                  <option value="9">问答</option>-->
<!--                </select>-->
<!--              </div>-->
<!--              <div class="col-md-9 mb-3 mt-3 blog-main">-->
<!--                <input type="text" name="topicDescription" onkeyup="sysnCache()" class="bootstrap-tagsinput"-->
<!--                       placeholder="描述(用于展示首页上)" maxlength="250" style="text-indent: 1em;" id="topicDescription"-->
<!--                       value="" required="">-->
<!--              </div>-->
<!--              <div class="col-md-3 mb-3 mt-3 blog-main">-->
<!--                <div class="tagsinput-primary ">-->
<!--                  <div class="topic-label">-->
<!--                    <input :class="{'margin-bbs': this.$route.path.indexOf('/zl')}" type="text" placeholder="标签可以管理自己文章分类,回车确定添加标签(选填) ">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
      <editor-markdown></editor-markdown>
    </main>

  </form>

</template>

<script>


import EditorMarkdown from "./EditorMarkdown";
import {layuiBack,} from "../../../common/utils";

export default {
  name: "Message",
  props: {
    bbsFlag: {
      type: Boolean,
      default: true
    }
  },
  components: {EditorMarkdown},
  methods: {
    layuiBack,
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
.pr {
  position: relative;
}
.pl-2, .px-2 {
  padding-left: .5rem !important;
}
.sendbtn:hover {
  background-color: #4caf50;
}
.margin-bbs{
  margin-left: -120px;
}
</style>

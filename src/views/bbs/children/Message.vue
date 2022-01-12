<template>
  <form id="xjy-topic-form" class="needs-validation">
    <div class="xjy-topic-footer">
      <a href="javascript:void(0);" class="xjy-back float-left" @click="layuiBack('返回文章','继续操作','/bbs')"><i class="iconfont icon-fanhui pr tp1"></i>返回</a>
      <span class="sendbtn" id="xjy-sendbtn-submit"><i class="iconfont icon-tianjia pr-2" ></i><span
        class="text">发布文章</span><span class="xjy-timer-bac"></span></span>
      <span class="sendbtn" id="xjy-sendbtn-submit2" style="background: #4caf50;"><i
        class="iconfont icon-tianjia pr-2"></i><span class="text">保存草稿</span></span>
    </div>
    <main class="topic-container mt-1 p-3 bg-white rounded">
      <div class="topic-container-row">
        <div class="col-md-12" style="padding: 20px;">
          <div class="col-md-12 order-md-1">
            <div class="topic-container-row">
              <div class="col-md-9  blog-main">
                <input type="text" style="text-indent: 1em;" name="topicTitle" onkeyup="sysnCache()"
                       class="bootstrap-tagsinput" placeholder="请输入文章标题" maxlength="100" id="title" required="">
              </div>
              <div class="col-md-3 blog-main">
                <select name="topicCategoryId" style="text-indent: 1em;"
                        class="custom-select bootstrap-tagsinput d-block w-100" onchange="sysnCache()" id="category">
                  <option value="1">程序人生</option>
                  <option value="10">面试</option>
                  <option value="11">数据库</option>
                  <option value="12">安全</option>
                  <option value="13">测试</option>
                  <option value="1461614772263886849">理财</option>
                  <option value="2">管理</option>
                  <option value="3">教程</option>
                  <option value="4" selected="selected">学习笔记</option>
                  <option value="5">踩坑记录</option>
                  <option value="6">架构</option>
                  <option value="7">后台</option>
                  <option value="8">前端</option>
                  <option value="9">问答</option>
                </select>
              </div>
              <div class="col-md-9 mb-3 mt-3 blog-main">
                <input type="text" name="topicDescription" onkeyup="sysnCache()" class="bootstrap-tagsinput"
                       placeholder="描述(用于展示首页上)" maxlength="250" style="text-indent: 1em;" id="topicDescription"
                       value="" required="">
              </div>
              <div class="col-md-3 mb-3 mt-3 blog-main">
                <div class="tagsinput-primary ">
                  <div class="topic-label">
                    <input type="text" placeholder="标签可以管理自己文章分类,回车确定添加标签(选填) ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <editor-markdown></editor-markdown>
    </main>

  </form>

</template>

<script>


import EditorMarkdown from "./EditorMarkdown";
import {layuiBack} from "../../../common/utils";
export default {
  name: "Message",
  components: {EditorMarkdown},
  methods: {
    layuiBack
  }
}
</script>

<style scoped>
@import "../../../assets/css/message.css";
</style>

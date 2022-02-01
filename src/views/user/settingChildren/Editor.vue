<template>
  <div class="main-content ksd-setting-content">
    <div id="submit-video" class="section video">
      <main role="main" class="container bg-white rounded">
        <div class="row">
          <div class="col-md-12 order-md-1">
            <form class="needs-validation" method="post" action="/u/save/home-content">
              <div class="row">
                <div class="col-md-12 mb-3">
                  <h3 class="mb-3" style="font-size: 35px;">主页内容编辑</h3>
                  <editor-markdown :config="this.config"></editor-markdown>
                </div>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">提交</button>
            </form>
          </div>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import EditorMarkdown from "../../bbs/children/EditorMarkdown";
export default {
  name: "FootPrint",
  data() {
    return {
      config:{
        width : "100%",
        height : 500,
        syncScrolling : "single",
        path : "./static/lib/editormd/lib/",
        saveHTMLToTextarea : true,    // 保存 HTML 到 Textarea
        // [TOCM]  [TOC] 自动生成目录
        tocm : true,
        tocContainer : "",
        tocDropdown   : false,
        tocStartLevel : 1,     // Parse beginning of H2, Default value 1
        emoji: true,
        tex : true,                   // 开启科学公式TeX语言支持，默认关闭
        flowChart : true,             // 开启流程图支持，默认关闭
        sequenceDiagram : true,       // 开启时序/序列图支持，默认关闭,
        //图片上传
        imageUpload : true,
        imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL : "/api/oss/mdpic/upload/userhome", // 对接后端请求
        onload : function() {
        },
        /*指定需要显示的功能按钮*/
        toolbarIcons : function() {
          return ["undo","redo","|",
            "bold","del","italic","quote","ucwords","uppercase","lowercase","|",
            "list-ul","list-ol","hr","|",
            "link","image",
            "code-block","table","emoji","watch","preview"]
        }
      }
    }
  },
  components: {EditorMarkdown}
}
</script>

<style scoped>
.contribution-sidenav ~ .main-content {
  padding: 20px 20px 160px;
  box-sizing: border-box;
  margin-left: 210px;
  border-left: 1px solid #eee;
  min-height: 400px;
}
.section {
  position: relative;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
main {
  flex: 1;
  padding-bottom: 20px;
}
.container {
  max-width: 1200px;
}
.rounded {
  border-radius: .25rem !important;
}
.bg-white {
  background-color: #fff !important;
}
.order-md-1 {
  -ms-flex-order: 1;
  order: 1;
}
h1, h3, h4 {
  font-weight: 500;
}


.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn-primary.focus, .btn-primary:focus, .btn-primary:hover {
  background-color: #32c8ab;
  border-color: #32c8ab;
}
[type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}
.btn-group-lg > .btn, .btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
button {
  border-radius: 0;
}
</style>

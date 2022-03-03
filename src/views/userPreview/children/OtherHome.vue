<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class=" bottom_content" style="display: block;">
        <div class="row mx-0 ">
          <div class="col-12 content_box blog-main bg-white mb-3 pb-4 pt-3" :class="{'col-md-9': !this.other}"
               style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
            <div id="doc-content1" style="text-align: left" class="markdown-body editormd-html-preview">
              <textarea  style="display:none;" v-model="this.markDown" placeholder="markdown"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from "../../user/children/HomePage";
import scriptjs from "scriptjs";
import {indexOfFlag} from "../../../common/utils";
export default {
  name: "OtherHome",
  components: {HomePage},
  data() {
    return {
      otherEditor: null,
      other: true,
      markDown: `### 主要特性

- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；
- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；
- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；
- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;
- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；
- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；
- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；
- 支持自定义主题样式；

# Editor.md
`
    }
  },
  methods:{
    init() {
      (async () => {
        await this.fetchScript('./static/lib/editormd/lib/marked.min.js')
        await this.fetchScript('./static/lib/editormd/lib/prettify.min.js')
        await this.fetchScript('./static/lib/editormd/lib/raphael.min.js')
        await this.fetchScript('./static/lib/editormd/lib/underscore.min.js')
        await this.fetchScript('./static/lib/editormd/lib/sequence-diagram.min.js')
        await this.fetchScript('./static/lib/editormd/lib/flowchart.min.js')
        await this.fetchScript('./static/lib/editormd/lib/jquery.flowchart.min.js')
        await this.fetchScript('./static/lib/editormd/editormd.min.js')
        await this.$nextTick(() => {
          this.otherEditor = window.editormd.markdownToHTML('doc-content1', {
            htmlDecode: "style,script,iframe",  // you can filter tags decode
            emoji: true,
            taskList: true,
            tex: true,  // 默认不解析
            flowChart: true,  // 默认不解析
            sequenceDiagram: true,  // 默认不解析
          })
        })

      })()

    },
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
    indexOfFlag

  },
  mounted() {
    this.init()
  },
  created() {
    this.other = this.indexOfFlag('/other')
  }
}
</script>
<style scoped>
@import "../../../assets/css/user.css";
.other-home {
  flex: 0 0 100%;
}
.editormd-preview-container, .editormd-html-preview {
  text-align: left;
  font-size: 14px;
  line-height: 1.6;
  overflow: auto;
  width: 100%;
  background-color: #fff;
}
.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #333;
  overflow: hidden;
  font-family: "Microsoft YaHei", Helvetica, "Meiryo UI", "Malgun Gothic", "Segoe UI", "Trebuchet MS", "Monaco", monospace, Tahoma, STXihei, "华文细黑", STHeiti, "Helvetica Neue", "Droid Sans", "wenquanyi micro hei", FreeSans, Arimo, Arial, SimSun, "宋体", Heiti, "黑体", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  word-wrap: break-word;
}
.markdown-body, .title-article .hlink2 {
  overflow: hidden;
  display: block;
  margin-bottom: 5px;
}
.markdown-body, .title-article {
  background: #fff;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
  text-align: center;
}
.markdown-body > :first-child {
  margin-top: 0 !important;
}
.markdown-body * {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
textarea {
  resize: vertical;
}
textarea {
  border: 1px solid #E9E9E9;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
button, input, optgroup, option, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  outline: 0;
}

</style>

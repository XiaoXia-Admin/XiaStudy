<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class=" bottom_content" style="display: block;">
        <div class="row mx-0 ">
          <div class="col-12 content_box blog-main bg-white mb-3 pb-4 pt-3" :class="{'col-md-9': !this.other}"
               style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05);" ref="height">
            <div id="doc-content1" style="text-align: left" class="markdown-body editormd-html-preview">
<!--              <textarea  style="display:none;" v-model="this.home.content" placeholder="markdown"></textarea>-->
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
import {indexOfFlag, mkImageShow} from "../../../common/utils";
import loginApi from "../../../network/login";
export default {
  name: "OtherHome",
  components: {HomePage},
  data() {
    return {
      otherEditor: null,
      other: true,
      home: {
        content: ''
      }
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
        $("#doc-content1").html('<textarea id="appendTest"></textarea>');
        // alert('mount' + this.content)
        $("#appendTest").val(this.content);//将需要转换的内容加到转换后展示容器的textarea隐藏标签中
        await this.$nextTick(() => {
          this.otherEditor = window.editormd.markdownToHTML('doc-content1', {
            htmlDecode: "style,script,iframe",  // you can filter tags decode
            emoji: true,
            taskList: true,
            tex: true,  // 默认不解析
            flowChart: true,  // 默认不解析
            sequenceDiagram: true,  // 默认不解析
          })
          this.mkImageShow()
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
    mkImageShow,
    indexOfFlag,
    findOtherIntro(userId) {
      // alert('before')
      loginApi.findUserIntroduce(userId).then(response => {
        this.content = response.data.data.content
        // alert('请求' + this.content)
        // // alert(this.content)
        // this.$set(this.home,'content',response.data.data.content)
        // alert('content' + this.content)
      })
    }
  },
  beforeMount() {
    //查询用户主页内容
    this.findOtherIntro(this.$route.params.userId)
  },
  mounted() {
    setTimeout(this.init, 1000)
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

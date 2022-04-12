<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class=" bottom_content" style="display: block;">
        <div class="row mx-0 ">

          <div class="col-12 content_box blog-main bg-white mb-3 pb-4 pt-3" :class="{'col-md-9': !this.other && !this.loadingFlag}"
               style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
            <loading :loading-flag="this.loadingFlag"></loading>
            <div v-show="!this.loadingFlag" id="doc-content" style="text-align: left" class="markdown-body editormd-html-preview">
<!--              <textarea style="display:none;" v-model="this.content" placeholder="markdown"></textarea>-->
            </div>
          </div>
          <div v-show="!this.other && !this.loadingFlag" id="ucenterapp2" class="col-md-3 pr-0 ucenter_right_box"
               style="padding-left: 15px;">
            <div class="bg-white mb-3 position-relative" style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
              <div class="py-3 px-3">
                <a href="/vip/pay" type="button" class="btn btn-lg btn-block"
                   style="font-size:14px;background:#696969;color:#fff;font-weight: bold"><i
                  class="iconfont iconbianzu11 pr-1"></i>VIP权限已过期</a>
              </div>
            </div>
            <home-slide :home-page="this.homePage"></home-slide>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HomeSlide from "../common/HomeSlide";
import {indexOfFlag, mkImageShow} from "../../../common/utils";
import scriptjs from "scriptjs";
import loginApi from "../../../network/login";
import Loading from "../../../components/common/load/Loading";
export default {
  name: "HomePage",
  data() {
    return {
      editor: null,
      other: true,
      content: '',
      homePage: {
        // vipLevel: '',
        // articleRealeaseNumber: 0,
        // commentNumber: 0,
        // studyNumber: 0,
        // account: '',
        // nickname: '',
        // experience: 0,
        // money: 0,
        // gmtCreate: '',
      },
      loadingFlag: true,
      homeFlag: false,
      time: 1000,
      userLowerRightBox: {}//没用
    }
  },
  components: {Loading, HomeSlide},
  methods: {
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
        $("#doc-content").html('<textarea id="appendTest1"></textarea>');
        // alert('mount' + this.content)
        $("#appendTest1").val(this.content);//将需要转换的内容加到转换后展示容器的textarea隐藏标签中
        this.loadingFlag = false
        await this.$nextTick(() => {
          this.editor = window.editormd.markdownToHTML('doc-content', {
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
    mkImageShow,
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
    indexOfFlag,
    findUserHome(userId) {

      //查询右侧边栏内容
      loginApi.findUserHome(userId).then(response => {
        // console.log(response.data.data)
        this.homePage = response.data.data.userLowerRightBox
        this.loadingFlag = false
      })
      //查询主页内容
      loginApi.findUserIntroduce(this.$store.state.myUserInfoVo.id).then(response => {
        // console.log(response.data.data.content)
        this.content = response.data.data.content

      })

    }

  },
  mounted() {
    setTimeout(this.init, 500)
  },
  created() {
    this.other = this.indexOfFlag('/other')
    // alert('id'+this.$store.state.myUserInfoVo.id)
    this.findUserHome(this.$store.state.myUserInfoVo.id)
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

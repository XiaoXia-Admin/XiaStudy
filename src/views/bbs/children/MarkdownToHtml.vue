<template>
    <div :id="this.id" style="margin-left: -17px">
<!--      <textarea id="content" v-model="this.markdownValue"></textarea>-->
<!--      <textarea id="content" :value="this.markdownValue"/>-->
<!--&lt;!&ndash;      <textarea id="content"></textarea>&ndash;&gt;-->
<!--      {{this.markdownValue}}-->
<!--      <textarea id="content" v-model="this.markdownValue"></textarea>-->
    </div>
</template>

<script>
import scriptjs from "scriptjs";
import ClipboardJS from "clipboard";

export default {
  name: "MarkdownToHtml",
  props: {
    id: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '\".editormd-html-preview\"'
    },
    markdownValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      test: '',
      editor: null
    }
  },
  methods: {
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
  },
  mounted() {
    // setTimeout(() => {
    //
    // }, 1000)
  },

  created() {
    if (this.$route.path.indexOf('bbs/preview')) {
      setTimeout(function () {
        $(".editormd-html-preview").find("pre").prepend("<i class='iconfont icon-fuzhi'  title='点击复制代码' style='cursor: pointer;float: right'></i>").find(".icon-fuzhi").each(function (index, obj) {
          //这里以复制URL为例
          let clipboard = new ClipboardJS(obj, {
            text: function () {
              let text = $(obj).next().get(0).innerText;
              return text;
            }
          });

          clipboard.on('success', function (e) {
            layer.msg("复制成功", {time: 500});
          });

          clipboard.on('error', function (e) {
            layer.msg("复制失败", {time: 500});
          });
        });
      }, 2000);
    } else if (this.$route.path.indexOf('/zl')) {
      setTimeout(function () {
        $("#zl").find("pre").prepend("<i class='iconfont icon-fuzhi' title='点击复制代码' style='cursor: pointer;float: right;'></i>").find(".icon-fuzhi").each(function (index, obj) {
          //这里以复制URL为例
          let clipboard = new ClipboardJS(obj, {
            text: function () {
              let text = $(obj).next().get(0).innerText;
              return text;
            }
          });

          clipboard.on('success', function (e) {
            layer.msg("复制成功", {time: 500});
          });

          clipboard.on('error', function (e) {
            layer.msg("复制失败", {time: 500});
          });
        });
      }, 2000);
    }
    // alert("markdownValue" + this.markdownValue)
  },
  watch: {
    'markdownValue': function(newData, oldData) {
      this.markdownValue = newData
      if(this.markdownValue != '') {
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
            // alert(id)
            // $("#" + id).html('<textarea id="content" style="display:none;"></textarea>');
            // alert($("#markdownValue"))//获取需要转换的内容
            // $("#content").val(content);
            $("#" + this.id).html('<textarea id="content"></textarea>');
            $("#content").val(this.markdownValue);//将需要转换的内容加到转换后展示容器的textarea隐藏标签中
            this.editor = window.editormd.markdownToHTML(this.id, {
              htmlDecode: "style,script,iframe",  // you can filter tags decode
              emoji: true,
              taskList: true,
              tex: true,  // 默认不解析
              flowChart: true,  // 默认不解析
              sequenceDiagram: true,  // 默认不解析
              taskLists: true,
            })
          })
          // alert('markdownValue' + this.markdownValue)
        })()
      }
      // console.log('newData' + newData + 'oldData' + oldData)
    }
  }
}
</script>

<style scoped>


</style>

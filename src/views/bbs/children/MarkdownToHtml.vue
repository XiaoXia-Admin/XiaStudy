<template>
    <div :id="this.id" style="margin-left: -17px">
      <textarea id="content" v-model="this.markdownValue"/>
    </div>
</template>

<script>
import {init} from "../../../common/utils";
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
  methods: {
    init,
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
  },
  mounted() {
    this.init(this.id)
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
      }, 500);
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
      }, 500);
    }
  }
}
</script>

<style scoped>

</style>

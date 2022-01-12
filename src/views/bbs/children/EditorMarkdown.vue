<template>
  <div :id="editorId" class="col-md-12 mb-3" style="padding-left: 1px; margin: auto auto;">
    <textarea> </textarea>
  </div>
</template>

<script>
import {defaultConfig,codeThemes} from "../../../config/editor.md";
export default {
  name: "EditorMarkdown",
  props: {
    editorId: {
      type: String,//editor名字
      default: 'editor',
    },
    onchange: { // 内容改变时回调，返回（html, markdown, text）
      type: Function
    },
    config: { // 编辑器配置
      type: Object,
      default: null
    },
    codeTheme: { // 代码高亮主题
      type: String,
      default: 'vibrant-ink.min.css'
    },
    initData: {
      'type': String
    },
    initDataDelay: {
      'type': Number, // 延迟初始化数据时间，单位毫秒
      'default': 0
    }
  },
  data() {
    return {
      editor: null,
      codeThemes,
      editorLoaded: false
    }
  },
  methods: {
    getConfig() {
      if (this.config) {
        return this.config;
      } else {
        return defaultConfig
      }
    },
  },
  mounted() {
    this.editor = editormd("editor", this.getConfig())
  }
}
</script>

<style scoped>


</style>

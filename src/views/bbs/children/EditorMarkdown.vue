<template>
  <div :id="editorId" class="col-md-12 mb-3" style="padding-left: 1px; margin: auto auto;">
<!--    <textarea>{{this.content}}</textarea>-->
    <textarea></textarea>
  </div>
</template>

<script>
import {defaultConfig} from "../../../config/editor.md";

export default {
  name: "EditorMarkdown",
  props: {
    editorId: {
      type: String,//editor名字
      default: 'editor',
    },
    config: { // 编辑器配置
      type: Object,
      default: null
    }
    // content: {
    //   type: String,
    //   default: ``
    // }
  },
  data() {
    return {
      editor: null,
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

  }
}
</script>

<style scoped>


</style>

<template>
  <h3 class="v-hd3">
    <span class="f-fl tit" v-html="this.title"></span> <span class="f-fr fz13 tit">共{{this.total}}条</span>
  </h3>
</template>

<script>
export default {
  name: "MsgTitle",
  props: {
    total: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: '我的消息'
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.f-fr {
  float: right;
}
</style>

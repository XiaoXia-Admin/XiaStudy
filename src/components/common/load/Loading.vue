<template>
  <div v-show="this.loadingFlag" id="loadingbox" style="padding: 30px 0;textAlign: center">
    <div class="loading">
      <h2>数据努力挖掘中</h2>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loadingFlag: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="nav-img">
    <a href="/">
      <img v-if="pathCumputed" style="width: 112px;" src="../../../assets/img/index_topleft_logo.png" alt="">
      <img v-else style="width: 112px;" src="../../../assets/img/index_topleft_logo_black.png" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: "NavImg",
  computed: {
    pathCumputed() {
      return this.$route.path.indexOf('/login') !== -1
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}
</style>

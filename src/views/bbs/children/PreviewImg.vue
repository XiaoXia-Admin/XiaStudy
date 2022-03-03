<template>
  <div>
    <div class="ksd-imgcontainer" data-width="977.6" data-height="611">
      <div class="ksd-imgcnt"
           style="width: 976.254px; height: 610.159px; margin-left: -488.127px; margin-top: -133.079px; overflow: hidden;">
        <img class="animated bounceIn"
             :src="this.img"
             onerror="imgErrorTip(this)" width="460.61322081575247" height="287.8832630098453"></div>
      <a href="javascript:void(0);" class="ksd-imgclose"><i class="iconfont icon-chahao"></i></a>
    </div>
    <div class="tipoff-block js-tipoff-block"></div>
  </div>
</template>

<script>
export default {
  name: "PreviewImg",
  props: {
    img: {
      type: String,
      default: ''
    }
  },

}
</script>

<style scoped>

</style>

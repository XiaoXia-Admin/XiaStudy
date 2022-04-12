<template>
  <div>
    <div class="prism-player" :id="this.playerId"></div>
  </div>
</template>

<script>
import courseApi from "../../../network/course";

export default {
  data() {
    return {
      playerId: "aliplayer_" + Math.random().toString(36).substr(2),
      scriptTagStatus: 0,
      isReload: false,
      instance: null,
      videoId: '',
      playAuth: ''
    }
  },
  mounted() {
    let player = new Aliplayer({
      id: this.playerId,
      width: '100%',
      vid: this.videoId,//必选参数。音视频ID。示例：1e067a2831b641db90d570b6480f****。
      playauth: this.playAuth,//必选参数。音视频播放凭证。
      autoplay: true,
      height: '1000px',
      isLive: false,
      rePlay: false,
      playsinline: true,
      preload: true,
      controlBarVisibility: "hover",
      useH5Prism: true,
    }, function (player) {

      console.log('The player is created.')
    });
  },
  created() {
    if (window.name == 'isReload') {
      this.videoId = this.$route.params.playId
      this.playAuth = this.$route.params.videoSourceId
    } else {
      window.name = 'isReload'
      this.videoId = this.$route.params.playId
      this.playAuth = this.$route.params.videoSourceId
    }

  }
}
</script>

<style lang="postcss" scoped>
/*@import "../../../assets/css/aliplayer-min.css";*/
</style>

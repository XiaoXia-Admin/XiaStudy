<template>
   <div class="download_box_item">
     <div class="download_box_title fl">
       <a href="http://localhost/bbs" target="_blank" title="飞哥直播间">
         <div class="fl ksd-live-box-radius" style="width: 30px; text-align: center;"><img src="../../../assets/img/zip.png" alt="" width="20"></div>
         <div class="fl livebo pr tp5" style="width: 500px;"><h4 class="fz16light">【vip】微信支付课程素材代码</h4></div>
         <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 300px;"><span>vip课程</span></div>
         <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 100px;"><span>3.275MB</span></div>
       </a>
     </div>
     <div class="liveimg" style="cursor: pointer;"><a href="javascript:void(0);" @click="layuiDownload('下载','取消')" class="downloadlink"><i
       class="iconfont icon-xiazai fz12"></i><span class="ml-1">5600K币</span></a></div>
   </div>
</template>

<script>
import {layuiDownload} from "../../../common/utils";

export default {
  name: "AllCourse",
  methods: {
    layuiDownload
  }
}
</script>

<style scoped>
@import "../../../assets/css/download.css";
</style>

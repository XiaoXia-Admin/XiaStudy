<template>
  <div>
    <div class="download_box_item xjy-left" v-for="(item, index) in fileList" :key="item.id"
         :class="{'bottom-75': (index+1) == fileList.length}">
      <div class="download_box_title fl">
        <a href="http://localhost/bbs" target="_blank" title="飞哥直播间">
          <div class="fl ksd-live-box-radius" style="width: 30px; text-align: center;">
            <img src="../../../assets/img/zip.png" alt="" width="20"></div>
          <div class="fl livebo pr tp5" style="width: 500px;"><h4 class="fz16light">{{ item.name }}</h4></div>
          <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 300px;">
            <span>{{ item.categoryName }}</span></div>
          <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 100px;"><span>{{ item.size }}MB</span>
          </div>
        </a>
      </div>
      <div class="liveimg" style="cursor: pointer;">
        <a href="javascript:void(0);" @click="layuiDownload('下载','取消')" class="downloadlink">
          <i class="iconfont icon-xiazai fz12"></i>
          <span class="ml-1">{{ item.price }}K币</span>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import {layuiDownload} from "../../../common/utils";

import cookie from 'js-cookie'

export default {
  name: "AllCourse",
  props: {
    fileList: {
      type: Array,
      default: []
    }
  },
  methods: {
    layuiDownload
  }
}
</script>

<style scoped>
@import "../../../../public/static/layui/css/layui.css";
@import "../../../../public/static/layui/css/modules/layer/default/layer.css";
@import "../../../assets/css/download.css";

.bottom-75 {
  margin-bottom: 75px;
}
</style>

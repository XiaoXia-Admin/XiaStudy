<template>
  <div id="download" class="download_container">
    <div class="download_box_head">
      <div class="download_inner_box">
        <div class="download_box_head_left">
          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[0].isActive}" @click="downloadResource('all')"><span>全部</span></div>
          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[1].isActive}"  @click="downloadResource('vip')"><span>vip课程</span></div>
          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[2].isActive}"  @click="downloadResource('note')"><span>配套笔记</span></div>
          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[3].isActive}"  @click="downloadResource('code')"><span>配套代码</span></div>
        </div>
        <div class="download_box_head_right">
          <div class="input-size">
            <label for="search-input">
              查找文件:&nbsp;
            </label>
          </div>
          <div>
            <input id="search-input" type="search" placeholder="请输入文件名称进行检索!" class="form-control"
                   style="height: 30px; font-size: 12px; width: 220px;">
          </div>
          <!--          <input id="search-input" type="search" placeholder="请输入文件名称进行检索!">-->
          <div class="download_box_head_btn_size download_box_right_btn"><span
            class="download_box_head_right_btn">搜索</span></div>
        </div>
      </div>
    </div>
    <div class="download_box_item">
      <div class="fl ksd-live-box-radius" style="width: 30px; text-align: center;"></div>
      <div class="download_box_title" style="overflow: hidden; padding-bottom: 15px;">
        <div class="fl  pr tp5" style="width: 500px;"><span style="color: rgb(153, 153, 153);">&nbsp;&nbsp;&nbsp;&nbsp;标题</span>
        </div>
        <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 300px;"><span>&nbsp;分类</span></div>
        <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 100px;"><span>&nbsp;大小</span></div>
        <div class="fr  fz13  pr tp6" style="color: rgb(153, 153, 153); text-align: center;"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下载</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: "Download",
  data() {
    return {
      boxList: [
        {
          isActive: true
        },
        {
          isActive: false
        },
        {
          isActive: false
        },
        {
          isActive: false
        },
      ]
    }
  },
  methods: {
    downloadResource(path) {
      this.boxList.forEach(el => {
        el.isActive = false
      })
      if(path == 'all'){
        this.boxList[0].isActive = true
      } else if(path == 'vip') {
        this.boxList[1].isActive = true
      } else if(path == 'note') {
        this.boxList[2].isActive = true
      } else if(path == 'code') {
        this.boxList[3].isActive = true
      }
      this.$router.replace('/download/' + path);
    }
  },
  destroyed() {

  }
}
</script>

<style scoped>
@import "../../assets/css/download.css";
.btn-dark-active {
  color: #fff;
  background-color: #6bd7b0;
  border-color: #6bd7b0;
}


</style>

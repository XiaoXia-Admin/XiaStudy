<template>
  <div id="download" class="download_container">
    <div class="download_box_head">
      <div class="download_inner_box">
        <div class="download_box_head_left">
          <div v-for="(item, index) in categoryList" :id="item.id" :key="item.id" class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[index].isActive}" @click="downloadResource(item.categoryName)"><span>{{item.categoryName}}</span></div>
<!--          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[1].isActive}"  @click="downloadResource('vip')"><span>vip课程</span></div>-->
<!--          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[2].isActive}"  @click="downloadResource('note')"><span>配套笔记</span></div>-->
<!--          <div class="download_box_head_btn_size download_box_head_btn" :class="{'btn-dark-active':boxList[3].isActive}"  @click="downloadResource('code')"><span>配套代码</span></div>-->
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
    <div class="download_box_item xjy-left">
      <div class="fl ksd-live-box-radius" style="width: 30px; text-align: center;"></div>
      <div class="download_box_title" style="overflow: hidden; padding-bottom: 15px;">
        <div class="fl  pr tp5" style="width: 500px;"><span style="color: rgb(153, 153, 153);">&nbsp;&nbsp;&nbsp;&nbsp;标题</span>
        </div>
        <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 300px;"><span>&nbsp;分类</span></div>
        <div class="fl  fz13  pr tp6" style="color: rgb(153, 153, 153); width: 100px;"><span>&nbsp;大小</span></div>
        <div class="fr  fz13  pr tp6" style="color: rgb(153, 153, 153); text-align: center;margin-right: 29px;"><span>下载</span>
        </div>
      </div>
    </div>
    <all-course :file-list="this.fileList"></all-course>
  </div>

</template>

<script>

import AllCourse from "./children/AllCourse";
export default {
  name: "Download",
  components: {AllCourse},
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
      ],
      categoryList: [
        {
          id: 1,
          categoryName: '全部'
        },
        {
          id: 2,
          categoryName: 'vip课程'
        },
        {
          id: 4,
          categoryName: '配套课程',
        },
        {
          id: 5,
          categoryName: '配套笔记'
        }
      ],
      fileList: [
        {
          id: 1,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 2,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 3,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 1,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 2,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 3,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 1,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 2,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 3,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 1,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 2,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 3,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 1,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 2,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 3,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 1,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 2,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        },
        {
          id: 3,
          name: '【vip】微信支付课程素材代码',
          categoryName: 'vip课程',
          size: '3.275',
          price: '5600'
        }
      ]
    }
  },
  methods: {
    downloadResource(path) {
      this.boxList.forEach(el => {
        el.isActive = false
      })
      if(path == '全部'){
        this.boxList[0].isActive = true
      } else if(path == 'vip课程') {
        this.boxList[1].isActive = true
      } else if(path == '配套课程') {
        this.boxList[2].isActive = true
      } else if(path == '配套笔记') {
        this.boxList[3].isActive = true
      }
      // this.$router.replace('/download/' + path);
      // 异步请求根据id获取响应的下载问价
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

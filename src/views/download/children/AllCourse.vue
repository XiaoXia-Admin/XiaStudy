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
        <a href="javascript:void(0);" :data-money="item.price" @click="layuiDownload($event, item.id)" class="downloadlink">
          <i class="iconfont icon-xiazai fz12"></i>
          <span class="ml-1">{{ item.price }}K币</span>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import cookie from 'js-cookie'
import {layuiOpen} from "../../../common/utils";
import oosApi from "../../../network/oos";

export default {
  name: "AllCourse",
  props: {
    fileList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    layuiOpen,
    layuiDownload(e, id) {
      let money = e.currentTarget.dataset.money
      let userMoney = this.$store.state.myUserInfoVo.money
      let flag = userMoney > money ? true : false;
      if (cookie.get('wx_token')) {

        if(!flag) {
          layer.msg('k币不够哦')
        } else {
          layer.confirm(`<span style="margin:auto 97px">点击下载将会扣除对应K币,且K币不会退还!</span>`, {
            btn: ['下载', '取消'], //按钮,
            data: {
              _id: id,
              _flag: flag,
              _money: money,
              _this: this
            }
          }, function () {
            layer.msg('正在请求资源', {icon: 1});
            let params = new URLSearchParams()
            params.append('id', this.data._id);
            alert(this.data._id)
            oosApi.fileDownload(params).then(response => {
              // alert('hahah')
              layer.msg('请求成功', {icon: 1});
              // this.$store.commit("reduceMoney",)
              let blob = new Blob([response.data.data], { type: "application/zip" });
              let url = window.URL.createObjectURL(blob);
              const link = document.createElement("a"); // 创建a标签
              link.href = url;
              // link.download = "pic.zip"; // 重命名文件
              link.setAttribute("download", 'pic.zip');
              document.body.appendChild(link);
              link.click();
              // window.URL.revokeObjectURL(link.href);
            })
            // if(this.data._flag) {
            //   this.data._this.$store.commit("reduceMoney", this.data._money)
            //
            // } else {
            //   layer.msg('k币不够哦')
            // }

          }, function () {
            layer.msg('已取消下载', {
              time: 5000, //20s后自动关闭
            });
          });
          this.$store.commit("reduceMoney", money)
        }
      } else {
        this.layuiOpen()
      }
    }
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

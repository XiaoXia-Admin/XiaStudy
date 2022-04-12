<template>
  <div class="container">
    <div class="ksd-main-content">
      <div style="padding:15px;background: #fff;">
        <div id="ksd-topic-cube-list-add" :class="{show: indexOfFlag('other/user')}" class="ksd-topic-cube-list">
          <div class="media text-muted ksd-topic-items-c ksd-topic-items-c-first text-center block"
               id="ksd-topic-items-c-addbox">
            <a href="javascript:void(0);" class="block" @click="createBlock">
                <span style="position: relative;top:15px;">
                   <i class="iconfont icon-chuangjiantianjiapiliangtianjia fz24"></i>
                   <p class="fz12 mt-1">创建专栏</p>
               </span>
            </a>
          </div>
          <div class="media ksd-editmode text-muted ksd-topic-items-c" id="ksd-topic-add"
               :class="{special_display:this.specialCreate}"
               style="background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);width:422px;">
            <a href="javascript:void(0);" class="text-white font-weight-bold text-decoration-none d-block">
              <div class="media-body load-topics-page pr">
                <h3 class="zl-title" style="width: 384px;"><input maxlength="60" ref="special_add"
                                                                  id="ksd-zl-title-input" autofocus="autofocus"
                                                                  style="padding:2px 4px;font-size:12px;text-indent: 0.5em;border-radius:8px;"
                                                                  placeholder="输入专栏名称..." type="text"></h3>
              </div>
              <p class="text-right overflow-hidden">
                   <span class="fl fz12" id="ksd-zl-del-link" @click="deleteSpecial">
                       <i class="iconfont icon-shanchu mr-1 fz12"></i>
                       删除
                   </span>
                <span class="fl fz12 ml-3" id="ksd-zl-save-link" @click="addSpecial">
                       <i class="iconfont icon-tianjia fz12"></i>
                       创建
                   </span>
                <span class="fr fz12">
                        <i class="iconfont icon-yinsi mr-2"></i>
                        <span>所有人可见</span>
                   </span>
              </p>
            </a>
          </div>
        </div>


        <div id="ksd-topic-cube-list" class="ksd-topic-cube-list">
          <div :title="item.title" v-for="(item,index) in this.columnList" :key="item.id"
               class="animated fadeIn text-muted ksd-topic-items-c ksd-topic-item delay-1s" :style="item.color">
            <a :href="'/zl/'+item.id" target="_blank" class="text-white font-weight-bold text-decoration-none d-block">
              <div class="media-body load-topics-page pr" :title="item.title">
                <h3 class="zl-title">
                  {{ item.title }}
                </h3>
              </div>
              <p class="text-right overflow-hidden">
                   <span class="fl fz12">
                       <i class="iconfont icon-icon_yulan mr-1 pr tp1"></i>
                       {{ item.views }}
                   </span>
                <span class="fr" style="transform: scale(0.82)">
                        <i class="iconfont icon-yinsi mr-2" :class="{show: indexOfFlag('other/user')}"></i>
                        <i class="pr tp1 iconfont icon-bukejian" :class="{show: !indexOfFlag('other/user')}"></i>
                        <span>{{ visibilityList[item.vsibility].visibility }}</span>
                   </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {indexOfFlag} from "../../../common/utils";
import loginApi from "../../../network/login";
import bbsApi, {bbs} from "../../../network/bbs";

export default {
  name: "SpecialColumn",
  props: {
    columnList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      specialCreate: true,
      visibilityList: [
        {
          visibility: '所有人可见'
        },
        {
          visibility: '仅对会员可见'
        },
        {
          visibility: '仅对自己可见'
        },
        {
          visibility: '仅对年会员可见'
        },
        {
          visibility: '仅对终身会员可见'
        }

      ],

    }
  },
  methods: {
    createBlock() {
      $('#ksd-topic-add').show();
    },
    deleteSpecial() {
      $('#ksd-topic-add').fadeOut("slow", function () {
        $('#ksd-zl-title-input').val('')
      });
    },
    addSpecial() {
      let title = this.$refs.special_add.value
      let nickname = this.$store.state.myUserInfoVo.nickname
      let avatar = this.$store.state.myUserInfoVo.avatar
      // 异步添加专栏
      bbsApi.createSpecial(title, nickname, avatar).then(response => {
        // alert(response.data.data.columnId)
        let item = {
          id: response.data.data.columnId,
          title: title,
          views: 0,
          vsibility: 0,
          color: 'background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);'
        }
        this.columnList.push(item);
      })
      this.deleteSpecial()
    },
    indexOfFlag
  }
}
</script>

<style scoped>
.ksd-topic-cube-list {
  overflow: hidden;
}

.ksd-topic-cube-list .ksd-topic-items-c.ksd-topic-items-c-first {
  border: 2px dotted #e9e9ea;
}

.ksd-topic-cube-list .ksd-topic-items-c {
  border-radius: 12px;
  float: left;
  width: 270px;
  height: 86px;
  margin-right: 15px;
  padding: 8px 18px;
}

.ksd-topic-items-c-first {
  background: #fff;
}

.ksd-topic-items-c {
  margin-bottom: 15px;
}

.text-center {
  text-align: center !important;
}

.block {
  display: block;
}

.text-muted {
  color: #34495e !important;
}

.fz24 {
  font-size: 24px !important;
}

.fz12 {
  font-size: 12px !important;
}

.mt-1, .my-1 {
  margin-top: .25rem !important;
}

.ksd-topic-items-c:hover {
  background-color: #EFF3F5;
}

.ksd-topic-cube-list .ksd-topic-items-c {
  border-radius: 12px;
  float: left;
  width: 270px;
  height: 86px;
  margin-right: 15px;
  color: #fff;
  padding: 8px 18px;
}

.text-muted {
  color: #34495e !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-white {
  color: #fff !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.d-block {
  display: block !important;
}

.ksd-topic-cube-list .ksd-topic-items-c .zl-title {
  font-size: 14px;
  padding: 10px 0;
  font-weight: bold;
  width: 171px;
  height: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.text-right {
  text-align: right !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.fz12 {
  font-size: 12px !important;
}

.l, .z, .fl {
  float: left;
}

.special_display {
  display: none;
}

.r, .y, .fr {
  float: right;
}

.ksd-topic-item:hover {
  background: #666 !important;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}
</style>

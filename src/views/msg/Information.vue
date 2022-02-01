<template>
  <div class="view-container g-bd6 f-cb" style="margin-top: 68px;width: 77%;">
    <div class="g-sd6"><h2 class="n-msgtit f-ff2">消息中心</h2>
      <ul id="tab-box" class="n-msgtab f-cb" style="  font-size: 14px;">
        <li :class="{'z-slt':this.me}" @click="pathHop('/msg')" class="j-iflag"><a
          href="javascript:void(0);"><span>我的消息</span></a>
        </li>
        <li :class="{'z-slt':this.friend}" @click="pathHop('/msg/friend')" class="j-iflag"><a
          href="javascript:void(0);"><span>好友动态</span></a></li>
        <li :class="{'z-slt':this.replay}" @click="pathHop('/msg/replay')" class="j-iflag"><a
          href="javascript:void(0);"><span>回复我的</span></a></li>
        <li :class="{'z-slt':this.system}" @click="pathHop('/msg/system')" class="j-iflag"><a
          href="javascript:void(0);"><span>系统消息</span></a></li>
        <li :class="{'z-slt':this.course}" @click="pathHop('/msg/course')" class="j-iflag"><a
          href="javascript:void(0);"><span>课程通知</span></a></li>
      </ul>
    </div>
    <div class="g-mn6">
      <div class="g-mn6c">
        <div class="g-wrap"><h3 class="v-hd3">
          <span class="f-fl tit">我的消息</span> <span class="f-fr fz13 tit">共7条</span>
        </h3>
          <router-view></router-view>
        </div>
      </div>
      <div id="loadingbox" style="padding: 30px 0px; text-align: center; display: none;"></div>
    </div>
  </div>
</template>

<script>
import {pathHop} from "../../common/utils";

export default {
  name: "Information",
  data() {
    return {
      me: true,
      friend: false,
      system: false,
      replay: false,
      course: false
    }
  },
  methods: {
    pathHop
  }
}
</script>

<style scoped>
.g-sd6 {
  position: absolute;
  float: left;
  width: 184px;
  height: 100%;
  border-right: 1px solid #d3d3d3;
}

.view-container, .layui-container {
  width: 1200px;
}

.g-bd6 {
  width: 1120px;
  min-height: 720px;
  _height: 720px;
  margin: 0 auto;
  position: relative;
  background: #fff;
}

.n-msgtab li a:hover {
  text-decoration: none;
  background: #fff;
}

.n-msgtit {
  padding: 32px 0 14px 40px;
  font-size: 20px;
  font-weight: normal;
  line-height: 30px;
}

.f-ff2 {
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

.n-msgtab {
  border-top: 1px solid #ddd;
}
.n-msgtab li.z-slt a {
  background: #fff;
  border-right: 1px solid #fff;
}

.n-msgtab li.z-slt {
  position: relative;
  width: 185px;
}

.n-msgtab li {
  float: left;
  width: 184px;
  border-bottom: 1px solid #ddd;
}


.n-msgtab li a {
  display: block;
  height: 53px;
  padding-left: 35px;
  background: #f7f7f7;
  border-top: 1px solid #fff;
  border-right: 1px solid #d3d3d3;
  line-height: 53px;
}

.n-msgtab li span {
  float: left;
  margin: 0 8px 0 6px;
}


/*myself*/
.g-mn6 {
  float: right;
  width: 100%;
  margin-left: -185px;
  background: #fff;
}

.g-mn6c {
  margin-left: 183px;
  border-left: 1px solid #d3d3d3;
}

.f-cb {
  overflow: hidden;
  font-size: 13px;
  position: relative;
}

.g-mn6c * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.g-wrap {
  padding: 40px;
  overflow: hidden;
}

.v-hd3 {
  height: 35px;
  border-bottom: 3px solid #eff3f5;
  position: relative;
  top: -10px;
}


.v-hd3 .tit {
  font-size: 14px;
  font-weight: bold;
  line-height: 35px;
}

.f-fr {
  float: right;
}

.fz13 {
  font-size: 13px !important;
}


 .n-msgnt-hvr .item * {
  cursor: pointer;
  word-break: break-all;
}


.f-fl {
  position: relative;
  left: -412px;
}



.n-msgnt .cont .time i {
  position: relative;
  *top: 1px;
  margin-right: 0;
}



.n-msgnt .cont .sec2-1 p {
  width: 96%;
  padding-top: 5px;
  text-align: left;
}

b, strong {
  font-weight: bolder;
  text-align: justify;
  text-justify: newspaper;
  word-break: break-all;
}


</style>

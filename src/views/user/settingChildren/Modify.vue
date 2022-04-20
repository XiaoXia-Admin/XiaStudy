<template>
  <div class="main-content ksd-setting-content">
    <div id="submit-video" class="section video">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <div class="row">
              <div class="col-md-2">
                <label for="sign">用户等级 LV<span class="ksd-badge-tags" data-exp="2305">{{ level }}</span></label>
              </div>
              <!--              <div class="col-md-10" style="padding-top: 3px;">-->
              <!--                &lt;!&ndash;                <div class="layui-progress layui-progress-big" lay-showPercent="true">&ndash;&gt;-->
              <!--                &lt;!&ndash;                  <div class="layui-progress-bar layui-bg-blue" lay-percent="80%"></div>&ndash;&gt;-->
              <!--                &lt;!&ndash;                </div>&ndash;&gt;-->
              <!--                <div class="layui-progress">-->
              <!--&lt;!&ndash;                  <div class="progress-bar" id="exp" role="progressbar" style="width: 76.8333%;" aria-valuenow="25"&ndash;&gt;-->
              <!--&lt;!&ndash;                       aria-valuemin="0" aria-valuemax="100"><span class="ksd-badage-text">2305/3000</span>&ndash;&gt;-->
              <!--&lt;!&ndash;                  </div>&ndash;&gt;-->
              <!--                  <div class="layui-progress-bar layui-bg-green" lay-percent="40%">2305/3000</div>-->
              <!--                </div>-->
              <!--              </div>-->
              <div class="col-md-10 layui-progress layui-progress-big">
                <div class="layui-progress-bar layui-bg-blue" lay-percent="35%" :style=progressLevel><span
                  class="ksd-badge-text">{{ this.userInfo.experience }}/{{
                    this.levelExperience[level].experience
                  }} </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3">
              <div>
                <ul>
                  <li v-for="(item, index) in avatarList" :key="index" class="img-selectbox" :data-num=index
                      :data-img="item">
                    <a href="javascript:void(0);" @click="exchangeAvatar('./static/avatar/'+ (index + 1) +'.jpg')">
                      <img :src="item" alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="nickname">用户昵称</label>
              <input type="text" name="nickname" class="form-control ksd-user-update" data-method="nickname"
                     placeholder="请输入昵称..." ref="nickname" maxlength="20" id="nickname" data-field="nickname"
                     :value="this.userInfo.nickname" :title="this.userInfo.nickname">
            </div>
            <div class="col-md-6 mb-3">
              <label for="usernum">用户账号</label>
              <input type="text" class="form-control" id="usernum" disabled="" :value="this.userInfo.account">
            </div>
          </div>

          <div class="mb-3">
            <label for="ksd-user-sex">性别 </label>
            <select class="custom-select d-block w-100" v-model="selected" @change="getSex" id="ksd-user-sex" data-field="sex" data-method="sex"
                    data-sex="1">
              <option value="">--请选择性别--</option>
              <option v-for="(item, index) in sexList" :key="index" :value="item.id">{{item.name}}</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="address">当前住址(活动礼品寄送需要正确填写地址)</label>
            <input type="text" name="address" class="form-control ksd-user-update" data-field="address"
                   data-method="address" maxlength="100" ref="address" id="address" required="" :value="this.userInfo.address">
          </div>

          <div class="mb-3">
            <label for="sign">个性签名</label>
            <input type="text" name="sign" class="form-control ksd-user-update" data-field="sign" data-method="sign"
                   maxlength="60" id="sign" ref="sign" :placeholder="this.userInfo.sign" :title="this.userInfo.sign " :value="this.userInfo.sign ">
          </div>
          <button class="btn btn-primary btn-lg btn-block modify-btn" @click="modifyUserInfo" id="saveupdate">提交修改</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {exchangeAvatar, getLevel} from "../../../common/utils";
import loginApi from "../../../network/login";

export default {
  name: "Modify",
  data() {
    return {
      img: './static/avatar/1.jpg',
      // avatarList: [
      //   {
      //     url: './static/avatar/1.jpg',
      //   },
      //   {
      //     url: './static/avatar/2.jpg',
      //   },
      //   {
      //     url: './static/avatar/3.jpg',
      //   },
      //   {
      //     url: './static/avatar/4.jpg',
      //   },
      //   {
      //     url: './static/avatar/5.jpg',
      //   },
      //   {
      //     url: './static/avatar/6.jpg',
      //   },
      //   {
      //     url: './static/avatar/7.jpg',
      //   },
      //   {
      //     url: './static/avatar/8.jpg',
      //   },
      //   {
      //     url: './static/avatar/9.jpg',
      //   },
      //   {
      //     url: './static/avatar/10.jpg',
      //   },
      //   {
      //     url: './static/avatar/11.jpg',
      //   },
      //   {
      //     url: './static/avatar/12.jpg',
      //   },
      //   {
      //     url: './static/avatar/13.jpg',
      //   },
      //   {
      //     url: './static/avatar/14.jpg',
      //   },
      //   {
      //     url: './static/avatar/15.jpg',
      //   }
      //
      // ],
      avatarList: [
      //   './static/avatar/1.jpg',
      //   './static/avatar/2.jpg',
      //   './static/avatar/3.jpg',
      //   './static/avatar/4.jpg',
      //   './static/avatar/5.jpg',
      //   './static/avatar/6.jpg',
      //   './static/avatar/7.jpg',
      //   './static/avatar/8.jpg',
      //   './static/avatar/9.jpg',
      //   './static/avatar/10.jpg',
      // './static/avatar/11.jpg',
      // './static/avatar/12.jpg',
      // './static/avatar/13.jpg',
      // './static/avatar/14.jpg',
      // './static/avatar/15.jpg'
      ],
      levelExperience: [
        {
          experience: 1000
        },
        {
          experience: 3000
        },
        {
          experience: 9000
        },
        {
          experience: 18000
        },
        {
          experience: 36000
        },
        {
          experience: 72000
        }
      ],
      userInfo: {
        // id: 1,
        experience: 10000,
        nickname: '往事随风',
        account: '999988',
        sex: 0,
        address: '哈尔滨市道里区新农镇',
        sign: '我还是从前那个少年，心中从未有改变!',
      },
      sexList: [
        {
          id: false,
          name: '妹子',
        },
        {
          id: true,
          name: '汉子'
        }
      ],
      selected: ''
    }
  },
  methods: {
    exchangeAvatar,
    getLevel,
    getSex() {
      this.userInfo.nickname = this.$refs.nickname.value
    },
    findAvatar() {
      loginApi.findAvatar()
        .then(response => {
          this.avatarList = response.data.data.avatarList
        })
    },
    getUserDetail(){
      loginApi.findUserInfo()
        .then(response => {
          this.userInfo = response.data.data.userDate
        })
    },
    //修改资料
    modifyUserInfo() {
      let nickname = this.$refs.nickname.value
      let sex = this.selected
      let address = this.$refs.address.value
      let sign = this.$refs.sign.value
      layer.msg('修改成功!', {time: 500})
      loginApi.modifyUserAccountInfo('', nickname, sex, address, sign)
        .then(response => {
          // layer.msg('操作成功', {icon: 1, time: 500});
        })
    }
  },
  computed: {
    progressLevel() {
      return 'width: ' + Math.round(this.userInfo.experience / this.levelExperience[this.getLevel(this.userInfo.experience)].experience * 10000) / 100.00 + '%'
    },
    level() {
      return this.getLevel(this.userInfo.experience)
    }
  },
  created() {
    this.selected = this.sexList[this.userInfo.sex].id
    this.findAvatar()
    this.getUserDetail()
  }
}
</script>

<style scoped>
.section {
  position: relative;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.mb-3, .my-3 {
  margin-bottom: 1rem !important;
}

.ksd-badge-text {
  position: relative;
  right: 43%;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

.col-md-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-md-10 {
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.progress {
  display: -ms-flexbox;
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: .75rem;
  background-color: #e9ecef;
  border-radius: .25rem;
}

.progress-bar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width .6s ease;
}

.img-selectbox {
  width: 48px;
  height: 48px;
  float: left;
  border: 4px solid #ddd;
  margin-right: 8px;
}

.img-selectbox img {
  width: 100%;
  height: 100%;
}

.img-selectbox:hover {
  border-color: #5FB878;
}

.mb-3, .my-3 {
  margin-bottom: 1rem !important;
}

.col-md-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

input[type="text"], input[type="email"], input[type="url"], textarea {
  border: 1px solid #E9E9E9;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

.w-100 {
  width: 100% !important;
}

.d-block {
  display: block !important;
}

.custom-control-label::before, .custom-file-label, .custom-select {
  transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.custom-control-label::before, .custom-file-label, .custom-select {
  transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem 1.75rem .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-primary {
  background-color: #1E9FFF;
  color: #fff;
  border-color: #1E9FFF;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-group-lg > .btn, .btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.modify-btn:hover {
  background-color: #5FB878;
}
</style>

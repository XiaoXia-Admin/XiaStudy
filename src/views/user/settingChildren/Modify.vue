<template>
  <div class="main-content ksd-setting-content">
    <div id="submit-video" class="section video">
      <div class="row">
        <div class="col-md-12">
          <div class="mb-3">
            <div class="row">
              <div class="col-md-2">
                <label for="sign">用户等级 LV<span class="ksd-badge-tags" data-exp="2305">1</span></label>
              </div>
              <div class="col-md-10" style="padding-top: 3px;">
                <!--                <div class="layui-progress layui-progress-big" lay-showPercent="true">-->
                <!--                  <div class="layui-progress-bar layui-bg-blue" lay-percent="80%"></div>-->
                <!--                </div>-->
                <div class="progress">
                  <div class="progress-bar" id="exp" role="progressbar" style="width: 76.8333%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100"><span class="ksd-badage-text">2305/3000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mb-3">
              <label for="sign">修改头像</label>
              <div>
                <ul>
                  <li class="img-selectbox" data-num=1 data-img="../../../assets/avatar/1.png"><a href="javascript:void(0);"
                                                                                       @click="exchangeAvatar('../../../public/static/img/1.jpg')"><img
                    src="../../../assets/avatar/1.png" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/2.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/2.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/3.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/3.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/4.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/4.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/5.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/5.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/6.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/6.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/7.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/7.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/8.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/8.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/9.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/9.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/10.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/10.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/11.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/11.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/12.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/12.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/13.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/13.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/14.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/14.jpg" alt=""></a></li>
                  <li class="img-selectbox" data-img="../../../assets/avatar/15.jpg"><a href="javascript:void(0);"><img
                    src="../../../assets/avatar/15.png" alt=""></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="nickname">用户昵称</label>
              <input type="text" name="nickname" class="form-control ksd-user-update" data-method="nickname"
                     placeholder="请输入昵称..." maxlength="20" id="nickname" data-field="nickname" value="夏金宇" title="夏金宇">
            </div>
            <div class="col-md-6 mb-3">
              <label for="usernum">用户账号</label>
              <input type="text" class="form-control" id="usernum" disabled="" value="904489">
            </div>
          </div>

          <div class="mb-3">
            <label for="ksd-user-sex">性别 </label>
            <select class="custom-select d-block w-100" id="ksd-user-sex" data-field="sex" data-method="sex"
                    data-sex="1">
              <option value="">--请选择性别--</option>
              <option value="1">汉子</option>
              <option value="0">妹子</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="address">当前住址(活动礼品寄送需要正确填写地址)</label>
            <input type="text" name="address" class="form-control ksd-user-update" data-field="address"
                   data-method="address" maxlength="100" id="address" placeholder="中国" required="" value="">
          </div>

          <div class="mb-3">
            <label for="sign">个性签名</label>
            <input type="text" name="sign" class="form-control ksd-user-update" data-field="sign" data-method="sign"
                   maxlength="60" id="sign" placeholder="不个性，没有签名...." title="加油 " value="加油 ">
          </div>
          <button class="btn btn-primary btn-lg btn-block modify-btn" id="saveupdate">提交修改</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {exchangeAvatar} from "../../../common/utils";

export default {
  name: "Modify",
  methods: {
    exchangeAvatar
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

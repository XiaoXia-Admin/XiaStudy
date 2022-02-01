<template>
  <div class="main-content ksd-setting-content">
    <div id="submit-video" class="section video">
      <div>
        <h4 class="mb-3 ksd-account-h4-tip" style="display: none;">你的账号存在安全风险,请及时完善信息</h4>
        <table class="table">
          <tbody>
          <tr>

            <th>
              <svg style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </th>
            <td>领取数字账号</td>

            <td>904489</td>

            <td>
              <a href="javascript:void(0);" data-clipboard-text="904489" class="ksd-getusernum2x ksdcopylink  bluefont">点击复制</a>
            </td>
          </tr>
          <tr>

            <th>
              <svg style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </th>
            <td>绑定微信</td>
            <td>夏金宇</td>
            <td>
              <a href="javascript:void(0);" class="bluefont">已绑定</a>
            </td>
          </tr>
          <tr>

            <th>
              <svg style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </th>
            <td>绑定邮箱</td>
            <td id="ksd-bg-email">{{this.email}}</td>
            <td>
              <a href="javascript:void(0);" @click="openEmail" class="bluefont ksd-user-updateemail-btn">更换邮箱</a>
            </td>
          </tr>
          <tr>

            <td>
              <svg style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </td>
            <td>登录密码</td>
            <td>
              <span class="fz16 ksd-user-updatepwd-star" :class="{'ksd-user-updatepwd-btn2':!this.pwdFlag}"
                    style="letter-spacing: 4px;">*******</span>
              <input type="text" class="pwdinput" :class="{'ksd-user-updatepwd-btn2':this.pwdFlag}" :value="this.pwd"
                     id="updatepwd"
                     autocomplete="off" style="width:180px;font-weight: bold;" placeholder="请输入密码长度6~16位..."
                     maxlength="16" ref="pwdinput">
            </td>


            <td>
              <a href="javascript:void(0);" :class="{'ksd-user-updatepwd-btn2':!this.pwdFlag}"
                 class="bluefont  ksd-user-updatepwd-update"
                 @click="exchangePassword">修改密码</a>
              <a href="javascript:void(0);" style="padding-right:6px;" :class="{'ksd-user-updatepwd-btn2':this.pwdFlag}"
                 class="bluefont ksd-user-updatepwd2" @click="editorBtn">保存</a>
              <a href="javascript:void(0);" class="bluefont ksd-user-updatepwd-cancel"
                 :class="{'ksd-user-updatepwd-btn2':this.pwdFlag}" @click="cancelBtn">取消</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
import {openEmail, editorBtn} from "../../../common/utils";

export default {
  name: "FootPrint",
  data() {
    return {
      pwdFlag: true,
      pwd: 900049,
      email: '123@163.com'
    }
  },
  methods: {
    openEmail,
    exchangePassword() {
      this.pwdFlag = false
    },
    cancelBtn() {
      this.pwdFlag = true
    },
    editorBtn
  }
}
</script>

<style scoped>
.section {
  position: relative;
}

.mb-3, .my-3 {
  margin-bottom: 1rem !important;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border-spacing: 0;
}

.table th, .table td {
  border-bottom: 1px solid #eee;
  padding: 16px;
}

svg {
  overflow: hidden;
}

.bluefont {
  color: #1E9FFF;
}


.ksd-user-updatepwd-btn1, .ksd-user-updatepwd-finished, .ksd-user-updatepwd-btn2 {
  display: none;
}

.pwdinput {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 4px;
  text-align: center;
}
</style>


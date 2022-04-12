<template>
  <div class="main-content ksd-setting-content">
    <div id="submit-video" class="section video">
      <div>
        <h4 class="mb-3 ksd-account-h4-tip" style="display: none;">你的账号存在安全风险,请及时完善信息</h4>
        <table class="table">
          <tbody>
          <tr>
            <th>
              <svg v-show="this.userSecurity.account != ''" style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <svg  v-show="this.userSecurity.account == '' " style="color: red;font-weight: bold" class="bi bi-exclamation-circle-fill ksd-email-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </th>
            <td>领取数字账号</td>
            <td v-show="this.userSecurity.account != ''">{{ this.userSecurity.account }}</td>
            <td v-show="this.userSecurity.account == ''">每个人唯一的数字登陆凭证</td>
            <td>
              <a v-show="this.userSecurity.account != ''" href="javascript:void(0);" @click="copyAccount" :data-clipboard-text="this.userSecurity.account"
                 class="ksd-getusernum2x ksdcopylink  bluefont copy">点击复制</a>
              <a v-show="this.userSecurity.account == ''" href="javascript:void(0);" @click="receiveAccount" :data-clipboard-text="this.userSecurity.account"
                 class="ksd-getusernum2x ksdcopylink  bluefont copy">领取</a>
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
            <td>绑定手机号</td>
            <td>{{ this.userSecurity.phontNumber }}</td>
            <td>
              <a href="javascript:void(0);" class="bluefont">已绑定</a>
            </td>
          </tr>
          <tr>
            <th>
              <svg v-show="this.userSecurity.email != ''" style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <svg  v-show="this.userSecurity.email == '' " style="color: red;font-weight: bold" class="bi bi-exclamation-circle-fill ksd-email-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </th>
            <td>绑定邮箱</td>
            <td id="ksd-bg-email">{{ this.userSecurity.email }}</td>
            <td>
              <a href="javascript:void(0);" @click="openEmail" class="bluefont ksd-user-updateemail-btn">更换邮箱</a>
            </td>
          </tr>
          <tr>

            <td>
              <svg v-show="this.userSecurity.password != ''" style="color: #25c925;font-weight: bold" class="bi bi-check-circle-fill" width="1em" height="1em"
                   viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
              <svg  v-show="this.userSecurity.password == '' " style="color: red;font-weight: bold" class="bi bi-exclamation-circle-fill ksd-email-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </td>
            <td>登录密码</td>
            <td>
              <span v-show="this.userSecurity.password != ''" class="fz16 ksd-user-updatepwd-star" :class="{'ksd-user-updatepwd-btn2':!this.pwdFlag}"
                    style="letter-spacing: 4px;">*******</span>
              <input v-show="this.userSecurity.password == '' || !this.pwdFlag" type="text" class="pwdinput"
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
import ClipboardJS from "clipboard";
import loginApi from "../../../network/login";
export default {
  name: "Security",
  data() {
    return {
      pwdFlag: true,
      pwd: 900049,
      email: '123@163.com',
      userSecurity: {
        // id: 1,
        // account: '',
        // nickname: '往事随风',
        // email: '2500563965@qq.com',
        // password: '111'
      }
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
    editorBtn,
    copyAccount() {
      let clipboard = new ClipboardJS('.copy');
      clipboard.on('success', function(e) {
        layer.msg('复制成功!')
      });
    },
    receiveAccount() {
      layer.msg('  领取成功，领取的数字账号是：【933839】')
    },
    findSecurity() {
      loginApi.findSecurityInfo()
        .then(response => {
          this.userSecurity = response.data.data.userSecurity
        })
    },
    modifySecurity(email, password) {
      loginApi.modifySecurityInfo(email, password)
        .then(response => {

        })
    }
  },
  created() {
    this.findSecurity()
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


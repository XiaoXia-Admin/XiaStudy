<template>
  <div id="ksdloginbox">
    <div style="position: relative;top:-2px;">
      <div>
        <a class="btn btn-sm btn-primary loginbtn layui-layer-btn0" @click="layuiOpen" href="javascript:void(0)">
          <svg style="position: relative;top:1px;" class="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
          </svg>
          登录
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {exchangeColor,leaveColor} from "../../../common/utils";

export default {
  name: "NavBtn",
  data() {
    return {
      isActive1: false,
      isActive2: false
    }
  },
  methods: {
    exchangeColor,
    leaveColor,
    //示范一个公告层
    layuiOpen() {
      let index = layer.open({
        id: 'navOpen',
        content: `<div class="login_title" >打开微信扫一扫登录/注册</div>
                            <div class="wx-qr-code-img">
                                <div class="img">
                                    <a class="weixin-login weixin-login-btn" >
                                        <i class="iconfont icon-weixin1"></i>微信扫描注册/登录
                                    </a>
                                </div>
                            </div>
                    `,
        skin: 'box',
        offset: '100px',
        area: ['500px','450px'],
        title: false,
        resize: false,
        btn: '',
        anim: 1
      })
      layer.style(index, {
        borderRadius: '15px'
      });
    }
  }
}
</script>

<style scoped>
.btn-sm {
  padding: .25rem .5rem;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: .2rem;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

a {
  text-decoration: none;
  background-color: transparent;
}

.btn-primary:hover {
  background-color: #28c58d;
}


</style>

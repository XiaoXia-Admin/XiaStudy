import Vue from 'vue'
import Vuex from 'vuex'
import {layuiOpen} from "../common/utils";

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
  state:{
    loginInfo: {
      id: '',
      age: '',
      avatar: '',
      mobile: '',
      nickname: '',
      sex: '',
      account: '',
      sign: '',
      gmt_create: '',
      address: ' '
    },
    token: ' '
  },
  mutations: {
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store;

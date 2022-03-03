import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
  state: {
    loginInfo: {
      id: 123,
      avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
      nickname: '往事随风',
      account: '896698',
      experience: 1000,
      money: 5291,
      articleNumber: 123,
      attentionNumber: 12,
      fansNumber: 1233,
      bgImg: '',
      isSignIn: 0,
      vipLevel: 'vip',
    },
    token: '',
    email: '123@163.com'
  },
  mutations: {
    editAvatar(state, avatar) {
      state.loginInfo.avatar = avatar;
    },
    editIsSing(state, isSignIn) {
      state.loginInfo.isSignIn = isSignIn
    },
    editToken(state, token) {
      state.token = token
    },
    editLoginUserInfo(state, userInfo) {
      state.loginInfo = userInfo
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store;

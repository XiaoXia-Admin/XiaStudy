import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
//安装插件
Vue.use(Vuex)
//loginInfo
//创建对象
const store = new Vuex.Store({
  state: {
    myUserInfoVo: {
      id: '',
      avatar: '',
      nickname: '',
      bbsArticleNumber: 0,
      attentionNumber: 0,
      fansNumber: 0,
      isSign: false,
      vipLevel: "",
      account: "",
      experience: 0,
      money: 0
    },
    token: '',
    email: '123@163.com',
    reloadFlag: 0,
    vipList: ['','vip','svip','zVip']
  },
  mutations: {
    editAvatar(state, avatar) {
      state.myUserInfoVo.avatar = avatar;
    },
    editIsSing(state, isSignIn) {
      state.myUserInfoVo.isSign = isSignIn
    },
    editToken(state, token) {
      state.token = token
    },
    editLoginUserInfo(state, userInfo) {
      state.myUserInfoVo = userInfo
    },
    editReloadFlag(state, flag) {
      state.reloadFlag = flag;
    }
  },
  actions: {},
  getters: {},
  modules: {},
  plugins: [createPersistedState()]
})

export default store;

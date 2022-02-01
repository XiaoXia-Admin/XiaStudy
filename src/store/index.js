import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建对象
const store = new Vuex.Store({
  state:{
    loginInfo: {
      id: 123,
      avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132',
      nickname: '往事随风',
      sex: 0,
      account: '896698',
      sign: 'Ta很懒，什么也没留下哦！',
      gmt_create: '2018-11-22 12:11:40',
      address: '中国',
      experience: 1000,
      money: 5291,
      articleNumber: 123,
      followNumber: 12,
      fansNumber: 1233,
      bgImg: ''
    },
    token: '',
    email: '123@163.com'
  },
  mutations: {
    editAvatar(state, avatar) {
      state.loginInfo.avatar = avatar;
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store;

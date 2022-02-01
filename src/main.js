import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/index"
import UUID from 'vue-uuid'
import animate from 'animate.css'
Vue.use(UUID)
Vue.use(animate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

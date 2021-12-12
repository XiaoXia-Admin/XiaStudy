<template>
  <div id="app">
    <nav-bar>
      <nav-img></nav-img>
      <nav-content active-color="white" active-bg-color="#EFF3F5"></nav-content>
      <nav-btn></nav-btn>
    </nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavContent from "components/common/navbar/NavContent";
import NavImg from "./components/common/navbar/NavImg";
import NavBtn from "./components/common/navbar/NavBtn";
export default {
  name: 'App',
  components: {
    NavBtn,
    NavImg,
    NavBar,
    NavContent
  },
  created() {
    const g = this;
    let i = 0;
    document.onkeydown = function (e) {
      let key = e.key;
      if (key == 'b') {
        i++;
        if (i == 8) {
          this.flag = g.randomNum(0,2);
          i = 0;
        }
      }
    }
  }
}
</script>

<style>
  /*@import "./assets/css/base.css";*/
  body {
    background-color: #EFF3F5;
  }
</style>

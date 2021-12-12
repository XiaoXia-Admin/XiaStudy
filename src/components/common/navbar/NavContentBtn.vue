<template>
<!--  <a class="nav-link ksd-nav-linknav" :class="{'active-login':isActive2}" @mouseleave="leaveColor"-->
<!--     @mousemove="exchangeColor('2')" target="_blank" href="/bbs">江湖</a>-->
</template>

<script>
import {exchangeColor,leaveColor} from "../../../common/utils";
export default {
  name: "NavContentBtn",
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false
    }
  },
  methods: {
    exchangeColor,
    leaveColor
  }

}
</script>

<style scoped>

</style>

<template>
  <nav class="navbar" :class="{shadow:!this.indexOfFlag('login')} " :style="containerColor">
    <div class="nav_container">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import {indexOfFlag} from "../../../common/utils";

export default {
  name: "NavBar",
  data() {
    return {
      loginFlag: true
    }
  },
  methods: {
    indexOfFlag
  },
  computed: {
    containerColor() {
      let flag = this.indexOfFlag('login')
      return flag ? {backgroundColor: 'transparent !important'} : {backgroundColor: 'white'}
    },

  }
}
</script>
<style scoped>
.navbar {
  z-index: 100;

  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 30;
  height: 54px;
  padding: .5rem 1rem;
}

.shadow {
  box-shadow: 0 0 1em #e6ecef;
}

.nav_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 1200px;
  max-width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -5px;
}

</style>

<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light" :style="containerColor">
    <div class="container" >
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import NavImg from "components/common/navbar/NavImg";

export default {
  name: "NavBar",
  data() {
    return {

    }
  },
  components: {
    NavImg
  },
  computed: {
    containerColor() {
      let flag = this.$route.path.indexOf('/login') !== -1
      return flag ? {backgroundColor: 'transparent !important'}: {backgroundColor: 'white'}
    }
  }
}
</script>
<style scoped>
.navbar {
  box-shadow: none !important;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 30;
  height: 54px;
  padding: .5rem 1rem;
}

.container {
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

a {
  text-decoration: none;
  background-color: transparent;
}

</style>

<template>
  <div class="view-main">
    <div class="nopagebox">

      <div class="l3_euy">






        <div>
          <h1 class="tit">{{this.permission.title}}</h1>
          <h3 class="tit mt-3 fz20" style="color: #999">{{this.permission.visibility}}</h3>
          <div class="cont">
            您可以尝试<a href="/" rel="noopener noreferrer">&nbsp;&nbsp;返回「首页」</a>
            或者您可以尝试<a href="/bbs" rel="noopener noreferrer">&nbsp;&nbsp;返回「文章」</a>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Permission",
  props: {
    permission: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    'permission': function(newData, oldData) {
      if(this.permission != '') {
        alert(this.permission)
      }
      this.permission = newData
    }
  }
}
</script>

<style scoped>
.view-main {
  flex: 1;
}

.nopagebox .tit {
  font-size: 24px;
  font-weight: bold;
}
.nopagebox .cont {
  font-size: 16px;
  margin: 40px 0 0;
}
.view-main a {
  color: #ff1d00;
}
.fz20 {
  font-size: 20px !important;
}
.mt-3, .my-3 {
  margin-top: 1rem !important;
}
.nopagebox {

  width: 800px;
  margin: 223px auto;
  background: #d2d2d2;
  padding: 50px;
  text-align: center;

}
</style>

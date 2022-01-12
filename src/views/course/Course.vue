<template>
  <div class="course">
    <div class="course_img">
      <div class="course_img_item">
        <h2 class="course_img_item_title">KuangStudy,以学相伴，一生相伴</h2>
        <p class="course_img_context">须知少年凌云志，曾许人间第一流</p>
        <ul class="course_nav course_auto">
          <li class="course_nav_item course_position_relative">
            <a class="course_link" href="/course/special" :class="{bgColor:this.specialLanguage}">专题课</a>
          </li>
          <li class="course_nav_item course_position_relative">
            <a class="course_link" href="/course/java" :class="{bgColor:this.javaLanguage}">java全栈</a>
          </li>
          <li class="course_nav_item course_position_relative">
            <a class="course_link" href="/course/web" :class="{bgColor:this.webLanguage}">前端全栈</a>
          </li>
          <li class="course_nav_item course_position_relative">
            <a class="course_link" href="/course/web" :class="{bgColor:this.goLanguage}">Go语言</a>
          </li>
          <li class="course_nav_item course_position_relative">
            <a class="course_link" href="/course/bigdata" :class="{bgColor:this.bigDataLanguage}">大数据</a>
          </li>
          <li class="course_nav_item course_position_relative">
            <a class="course_link" href="/course/C" :class="{bgColor:this.cLanguage}">C/C++</a>
          </li>
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Course",
  data() {
    return {
      javaLanguage: false,
      specialLanguage: false,
      goLanguage: false,
      cLanguage: false,
      bigDataLanguage: false,
      webLanguage: false,

    }
  },
  methods: {

  },
  computed: {
    BgColor() {
      return {backgroundColor: "#42de8d"}
    }
  },
  created() {
    this.javaLanguage = this.$route.path.indexOf('/java') !== -1
    this.specialLanguage = this.$route.path.indexOf('/special') !== -1
    this.goLanguage = this.$route.path.indexOf('/go') !== -1
    this.cLanguage = this.$route.path.indexOf('/C') !== -1
    this.bigDataLanguage = this.$route.path.indexOf('/bigdata') !== -1
    this.webLanguage = this.$route.path.indexOf('/web') !== -1
  },


}
</script>

<style scoped>
@import "../../assets/css/course.css";

.course_link:hover {
  color: #FFFFFF;
  background-color: cornflowerblue;
}
.bgColor {
  transition: all .3s;
  background: #42de8d;
  margin: 0 5px;
  box-shadow: inset 0 0 1em #5f78e1;
  color: #fafafa;
  text-transform: capitalize;
  font-weight: 500;
  display: block;
  border-radius: 4px;
  padding: 8px 17px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}


</style>

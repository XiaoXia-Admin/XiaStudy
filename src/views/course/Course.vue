<template>
  <div class="course">
    <div class="course_img">
      <div class="course_img_item">
        <h2 class="course_img_item_title">KuangStudy,以学相伴，一生相伴</h2>
        <p class="course_img_context">须知少年凌云志，曾许人间第一流</p>
        <ul class="course_nav course_auto">
          <li class="course_nav_item position-relative">
            <a class="course_link" href="/course">专题课</a>
          </li>
          <li class="course_nav_item position-relative">
            <a class="course_link" href="/bbs">java全栈</a>
          </li>
          <li class="course_nav_item position-relative">
            <a class="course_link" href="/download">前端全栈</a>
          </li>
          <li class="course_nav_item position-relative">
            <a class="course_link" href="/document">Go语言</a>
          </li>
          <li class="course_nav_item position-relative">
            <a class="course_link" href="/document">大数据</a>
          </li>
          <li class="course_nav_item position-relative">
            <a class="course_link" href="/document">C/C++</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap">
      <transition name="slide-fade" appear>
        <div class="courseListBox">
          <div class="course-row">
            <div class="course_box_head">
              <h2>
                <span class="cro_icon1">1</span>
                <span>第一阶段:&nbsp;&nbsp;JavaSE</span>
              </h2>
            </div>
          </div>
          <div class="course_box">
            <a href="/course/detail/1317500148100386817" target="_blank" title="聊聊编程这条路">
              <div class="course_box_item">
                <div class="course-img">
                  <img src="../../assets/course/01.jpg" data-original="src/assets/course/01.jpg" style="" width="100%"
                       height="140">
                  <span class="course_num">1</span>
                  <span class="course_time">46:58</span>
                </div>
              </div>
              <div class="course_box_content">
                <h3 title="聊聊编程这条路" class="course_box_title">聊聊编程这条路</h3>
                <p class="course_box_author">编程到底该如何学习？</p>
              </div>
              <div class="course_box_price_wrap">
                <span
                  class="course_box_btn">
                  <svg
                    class="bi bi-people-fill bipeople"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  </svg>93985人学过</span>
              </div>
            </a>
          </div>
        </div>

      </transition>
    </div>

<!--    <div class="slide">-->
<!--      <div class="slide-item"></div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Course",
  data() {
    return {
      flag: true,
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/course.css";

.slide {

}

.slide-item {

}

</style>

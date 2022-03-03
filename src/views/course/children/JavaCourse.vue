<template>
  <div class="wrap">
      <div class="courseListBox" v-for="(item,index) in categoryList" :key="item.id">
        <div :id="item.id" class=" animated fadeInUpBig delay-1s course-row">
          <div class="course_box_head">
            <h2>
              <a class="cro_icon1">{{ index+1 == categoryList.length ? '.' : index+1 }}</a>
              <span>{{ item.title }}</span>
            </h2>
          </div>
        </div>
        <div class="course_box  animated fadeInUpBig delay-1s" v-for="(item1,index) in item.courseList" :key="item1.id">
          <a :href="'/course/detail/' + item1.id" class="xjy-left" target="_blank" :title="item1.title">
            <div class="course_box_item">
              <div class="course-img">
                <img :src="item1.cover" categoryList-original="src/assets/course/01.jpg" style=""
                     width="100%"
                     height="140">
                <span class="course_num">{{ index+1 }}</span>
                <span class="course_time">{{ item1.totalLength }}</span>
              </div>
            </div>
            <div class="course_box_content">
              <h3 :title="item1.title" class="course_box_title">{{ item1.title }}</h3>
              <p class="course_box_author">{{ item1.description }}</p>
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
                  </svg>{{ item1.views }}人学过</span>
            </div>
          </a>
        </div>
      </div>
    <slide-bar :slide-title-list="this.categoryList" :category-list="this.categoryList" :slide-array="this.slideArray">
      <div v-for="(item,index) in slideTitleList" :key="item.id">
        <div class="slide_item" :id="item.id"
             @click="backToTop(categoryList[index].id)" :title="item.slideTitle">
          {{ item.slideTitle }}
        </div>
      </div>
    </slide-bar>
  </div>
</template>

<script>
import SlideBar from "../SlideBar";
import {activeBtn, backToTop, easeInOutQuad, slideArrayTop} from "../../../common/utils";

export default {
  id: "JavaCourse",
  props: {
    categoryList: {
      type: Array,
      default: []
    },
    slideTitleList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      visible: false,
      interval: null,
      show: false,
      slideArray: []
    }
  },
  components: {
    SlideBar
  },
  methods: {
    easeInOutQuad,
    backToTop,
    slideArrayTop
  },
  mounted() {
    window.addEventListener('scroll', this.slideArrayTop);
  }
}
</script>

<style scoped>
ul {
  display: flex;
  background-color: #EFF3F5;
  padding-left: 25px;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  flex-wrap: wrap;
  align-content: space-around;
}


.slide_item {
  width: 78px;
  height: 24px;
  margin-bottom: 10px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  transition: all .2s;
  user-select: none;
  color: black;
  background: #fff;
}

.slide_item:hover {
  background-color: #00a1d6;
  color: #fff;
}
</style>

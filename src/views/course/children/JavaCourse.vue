<template>
  <div class="wrap">
    <transition-group tag="ul" name="slide-fade" appear>
    <div class="courseListBox" v-for="item in data" :key="item.num">
      <div :id="item.name" class="course-row">
        <div class="course_box_head">
          <h2>
            <a  class="cro_icon1">{{ item.num }}</a>
            <span>{{ item.content }}</span>
          </h2>
        </div>
      </div>
      <div class="course_box" v-for="item1 in item.boxList" :key="item1.id">
        <a href="/course/detail/1317500148100386817" target="_blank" :title="item1.title">
          <div class="course_box_item">
            <div class="course-img">
              <img src="../../../assets/course/01.jpg" data-original="src/assets/course/01.jpg" style="" width="100%"
                   height="140">
              <span class="course_num">{{ item1.num }}</span>
              <span class="course_time">{{ item1.time }}</span>
            </div>
          </div>
          <div class="course_box_content">
            <h3 title="聊聊编程这条路" class="course_box_title">{{ item1.title }}</h3>
            <p class="course_box_author">{{ item1.author }}</p>
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
                  </svg>{{ item1.people }}</span>
          </div>
        </a>
      </div>
    </div>
    </transition-group>
    <slide-bar :slide-list="this.slideBarList">
      <div v-for="item in slideBarList" :key="item.id">
        <div class="slide_item" :id="item.slideId" :style="getStyle(item)" @click="backToTop(item),activeBtn(item,slideBarList)"  :title="item.title">
          {{item.name}}
        </div>
      </div>
    </slide-bar>
  </div>
</template>

<script>
import SlideBar from "../SlideBar";
import {activeBtn, backToTop, easeInOutQuad, getStyle, scrollTop} from "../../../common/utils";

export default {
  name: "JavaCourse",
  data() {
    return {
      visible: false,
      interval: null,
      show: false,
      data: [
        {
          num: 1,
          name: 'javaSE',
          content: '第一阶段:  JavaSE',
          boxList: [
            {
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },{
              id: 11,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 22,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            }
          ]
        },
        {
          num: 2,
          name: 'web',
          content: '第二阶段:  前端基础',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            }
          ]
        },
        {
          num: 3,
          name: 'mysql',
          content: '第三阶段:  MySQL',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            }
          ]
        },
        {
          num: 4 ,
          name: 'javaWeb',
          content: '第四阶段:  JavaWeb',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            }
          ]
        },
        {
          num: 5,
          name: 'ssm',
          content: '第五阶段:  SSM',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
          ]
        },
        {
          num: 6,
          name: 'bigWeb',
          content: '第六阶段:  大前端进阶',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            }

          ]
        },
        {
          num: 7,
          name: 'microServe',
          content: '第七阶段:  微服务开发',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            }
          ]
        },
        {
          num: 8,
          name: 'linux',
          content: '第八阶段:  Linux运维',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            }
          ]
        },
        {
          num: 9,
          name: 'middle',
          content: '第九阶段:  常用的中间件',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            }
          ]
        },
        {
          num: 10,
          name: 'enterprise',
          content: '第十阶段:  企业常用技术',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            }

          ]
        },
        {
          num: 11,
          name: 'source',
          content: '第十一阶段:  源码探究、设计模式学习',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 66,
              num: 4,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            }
          ]
        },
        {
          num: 12,
          name: 'project',
          content: '第十二阶段:  走进企业、项目实战',
          boxList: [
            {
              id: 33,
              num: 1,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            },
            {
              id: 44,
              num: 2,
              title: '预科阶段',
              author: '学习编程之前你要了解的知识',
              people: '69776人学过',
              time: '01:18:12'
            },
            {
              id: 55,
              num: 3,
              title: '聊聊编程这条路',
              author: '编程到底该如何学习？',
              people: '93985人学过',
              time: '48:56'
            }
          ]
        },
        {
          num: '.',
          content: '恭喜您,学习完毕所有课程! 完结,撒花!',
        },
      ],
      slideBarList: [
        {
          slideId: 'javaSE1',
          isActive: false,
          name: 'javaSE',
          id:'javaSE',
          title: '第一阶段：JavaSE'
        },
        {
          slideId: 'web1',
          isActive: false,
          name: '前端基础',
          id:'web',
          title: '第二阶段：前端基础'
        },
        {
          slideId: 'mysql1',
          isActive: false,
          name: '数据库',
          id:'mysql',
          title: '第三阶段：MySQL'
        },
        {
          slideId: 'javaWeb1',
          isActive: false,
          name: 'javaWeb',
          id:'javaWeb',
          title: '第四阶段：JavaWeb'
        },
        {
          slideId: 'ssm1',
          isActive: false,
          name: 'SSM框架',
          id:'ssm',
          title: '第五阶段：SSM框架'
        },
        {
          slideId: 'bigWeb1',
          isActive: false,
          name: '大前端',
          id:'bigWeb',
          title: '第六阶段：大前端进阶'
        },
        {
          slideId: 'microServe1',
          isActive: false,
          name: '微服务',
          id:'microServe',
          title: '第七阶段：微服务开发'
        },
        {
          slideId: 'linux1',
          isActive: false,
          name: '运维',
          id:'linux',
          title: '第八阶段：Linux运维'
        },
        {
          slideId: 'middle1',
          isActive: false,
          name: '中间件',
          id:'middle',
          title: '第九阶段：常用中间件'
        },
        {
          slideId: 'enterprise1',
          isActive: false,
          name: '三方应用',
          id:'enterprise',
          title: '第十阶段：企业常用第三方技术'
        },
        {
          slideId: 'source1',
          isActive: false,
          name: '源码探究',
          id:'source',
          title: '第十一阶段：源码探究、设计模式学习'
        },
        {
          slideId: 'project1',
          isActive: false,
          name: '走进企业',
          id:'project',
          title: '第十二阶段：走近企业、项目实战'
        },
      ]
    }
  },
  components: {
    SlideBar
  },
  methods: {
    getStyle,
    scrollTop,
    easeInOutQuad,
    backToTop,
    activeBtn,

  },
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

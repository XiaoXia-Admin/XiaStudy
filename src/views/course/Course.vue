<template>
  <div class="course">
    <div class="course_img">
      <div class="course_img_item">
        <h2 class="course_img_item_title">KeepStudy,以学相伴，一生相伴</h2>
        <p class="course_img_context">须知少年凌云志，曾许人间第一流</p>
        <ul class="course_nav course_auto">
          <li class="course_nav_item course_position_relative"  v-for="(item) in categoryFirstList" :key="item.id">
            <a class="course_link" href="javascript:void(0);" @click="getFirstId(item.id)" :class="{bgColor: item.id == ($route.query.id ? $route.query.id : cid)}">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <java-course :category-list="this.categoryList" :slide-title-list="this.slideTitleList"></java-course>
  </div>
</template>

<script>
import {indexOfFlag} from "../../common/utils";
import JavaCourse from "./children/JavaCourse";
import courseApi from "../../network/course";

export default {
  name: "Course",
  data() {
    return {
      categoryFirstList: [

      ],
      categoryList: [

      ],
      // categoryList: [
      //   {
      //     id: 'javaSE',
      //     title: '第一阶段:  JavaSE',
      //     courseList: [
      //       {
      //         id: 1,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 2,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 3,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 4,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 5,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 6,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 7,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 8,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 9,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 10,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 11,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 12,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 13,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 14,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'web',
      //     title: '第二阶段:  前端基础',
      //     courseList: [
      //       {
      //         id: 15,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 16,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 18,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'mysql',
      //     title: '第三阶段:  MySQL',
      //     courseList: [
      //       {
      //         id: 19,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 20,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 21,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'javaWeb',
      //     title: '第四阶段:  JavaWeb',
      //     courseList: [
      //       {
      //         id: 22,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 23,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 24,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 25,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 26,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 27,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 28,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 29,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 30,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 31,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 32,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'ssm',
      //     title: '第五阶段:  SSM',
      //     courseList: [
      //       {
      //         id: 33,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 34,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 35,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //     ]
      //   },
      //   {
      //     id: 'bigWeb',
      //     title: '第六阶段:  大前端进阶',
      //     courseList: [
      //       {
      //         id: 36,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 37,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 38,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 39,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 40,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 41,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 42,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 43,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //
      //     ]
      //   },
      //   {
      //     id: 'microServe',
      //     title: '第七阶段:  微服务开发',
      //     courseList: [
      //       {
      //         id: 44,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 45,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 46,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 47,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 48,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 49,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 50,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'linux',
      //     title: '第八阶段:  Linux运维',
      //     courseList: [
      //       {
      //         id: 51,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 52,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 53,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 54,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 55,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'middle',
      //     title: '第九阶段:  常用的中间件',
      //     courseList: [
      //       {
      //         id: 56,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 57,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 58,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 59,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 60,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 61,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'enterprise',
      //     title: '第十阶段:  企业常用技术',
      //     courseList: [
      //       {
      //         id: 62,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 63,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 64,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 65,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 66,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 67,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 68,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //
      //     ]
      //   },
      //   {
      //     id: 'source',
      //     title: '第十一阶段:  源码探究、设计模式学习',
      //     courseList: [
      //       {
      //         id: 69,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 70,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 71,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 72,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 73,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 74,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 75,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       }
      //     ]
      //   },
      //   {
      //     id: 'project',
      //     title: '第十二阶段:  走进企业、项目实战',
      //     courseList: [
      //       {
      //         id: 76,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 77,
      //         title: '预科阶段',
      //         description: '学习编程之前你要了解的知识',
      //         views: '69776',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '1'
      //       },
      //       {
      //         id: 78,
      //         title: '聊聊编程这条路',
      //         description: '编程到底该如何学习？',
      //         views: '93985',
      //         cover: 'https://www.kuangstudy.com/assert/course/c1/01.jpg',
      //         totalLength: '48:56',
      //         status: '0'
      //       }
      //     ]
      //   },
      //   {
      //     title: '恭喜您,学习完毕所有课程! 完结,撒花!',
      //   },
      // ],
      slideTitleList: [
        {
          slideTitle: 'javaSE',
          id: 'javaSE1',
        },
        {
          slideTitle: '前端基础',
          id: 'web1',
        },
        {
          slideTitle: '数据库',
          id: 'mysql1',
        },
        {
          slideTitle: 'javaWeb',
          id: 'javaWeb1',
        },
        {
          slideTitle: 'SSM框架',
          id: 'ssm1',
        },
        {
          slideTitle: '大前端',
          id: 'bigWeb1',
        },
        {
          slideTitle: '微服务',
          id: 'microServe1',
        },
        {
          slideTitle: '运维',
          id: 'linux1',
        },
        {
          slideTitle: '中间件',
          id: 'middle1',
        },
        {
          slideTitle: '三方应用',
          id: 'enterprise1',
        },
        {
          slideTitle: '源码探究',
          id: 'source1',
        },
        {
          slideTitle: '走进企业',
          id: 'project1',
        },
      ],
      cid: ''
    }
  },
  components:{
    JavaCourse
  },
  methods: {
    indexOfFlag,
    getFirstId(id) {
      this.cid = id
      window.location.href = 'http://localhost:8080/course?id=' + id
    },
    getCategoryFirstList() {
      console.log('获取一级标题')
      courseApi.findFirstCategory().then(response => {
        this.categoryFirstList = response.data.data.categoryFirstList
      })
    },
    getCategoryList(id) {
      console.log('获取下面课程')
      courseApi.findSecondCourse(id).then(response => {
        console.log('categoryList' + response.data.data.categoryList)
        console.log('silideList' + response.data.data.slideTitleList)
        this.categoryList = response.data.data.categoryList
        this.slideTitleList = response.data.data.slideTitleList
      })
    }
  },
  created() {
    if(!this.$route.query.id) {
      this.cid = '1490979376278302721'
    } else {
      this.cid = this.$route.query.id
    }

    this.getCategoryFirstList()
    this.getCategoryList(this.cid)
  }
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

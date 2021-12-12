import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const Bbs = () => import("../views/bbs/Bbs");
const Course = () => import("../views/course/Course");
const Document = () => import("../views/document/Document");
const Download = () => import("../views/download/Download");
const Home = () => import("../views/home/Home");
const BigDataCourse = () => import("../views/course/children/BigDataCourse");
const JavaCourse = () => import("../views/course/children/JavaCourse");
const WebCourse = () => import("../views/course/children/WebCourse");
const GoCourse = () => import("../views/course/children/GoCourse");
const CCourse = () => import("../views/course/children/CCourse");
const SpecialCourse = () => import("../views/course/children/SpecialCourse");
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Home,
  },
  {
    path: '/course',
    component: Course,
    // children: [
    //   {
    //     path: 'bigdata',
    //     component: BigDataCourse
    //   },
    //   {
    //     path: 'c',
    //     component: CCourse
    //   },
    //   {
    //     path: 'java',
    //     component: JavaCourse
    //   },
    //   {
    //     path: 'web',
    //     component: WebCourse
    //   },
    //   {
    //     path: 'special',
    //     component: SpecialCourse
    //   },
    //   {
    //     path: 'go',
    //     component: GoCourse
    //   }
    // ]
  },
  {
    path: '/bbs',
    component: Bbs
  },
  {
    path: '/message',
    component: Document
  },
  {
    path: '/download',
    component: Download
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;

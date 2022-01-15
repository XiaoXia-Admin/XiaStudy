import Vue from "vue";
import VueRouter from 'vue-router'
import store from "../store/index"

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
const AllCourse = () => import("../views/download/children/AllCourse");
const VipCourse = () => import("../views/download/children/VipCourse");
const Note = () => import("../views/download/children/Note");
const Code = () => import("../views/download/children/Code");
const Message = () => import("../views/bbs/children/Message");
const User = () => import("../views/user/User");
const Article = () => import("../views/user/children/Article");
const Fans = () => import("../views/user/children/Fans");
const Follow = () => import("../views/user/children/Follow");
const HomePage = () => import("../views/user/children/HomePage");
const Setting = () => import("../views/user/children/Setting");
const Study = () => import("../views/user/children/Study");
const SpecialColumn = () => import("../views/user/children/SpecialColumn");
const TalkAbout = () => import("../views/user/children/TalkAbout");
const ArticleManagement = () => import("../views/user/articleChildren/ArticleManagement");
const CollectArticle = () => import("../views/user/articleChildren/CollectArticle");
const ArticleTag = () => import("../views/user/articleChildren/ArticleTag");
const PurchaseCourse = () => import("../views/user/studyChildren/PurchaseCourse");
const FootPrint = () => import("../views/user/studyChildren/FootPrint");
const Modify = () => import("../views/user/settingChildren/Modify");
const Security = () => import("../views/user/settingChildren/Security");
const Editor = () => import("../views/user/settingChildren/Editor");
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/course',
    component: Course,
    children: [
      {
        path: '',
        redirect: 'special'
      },
      {
        path: 'bigdata',
        component: BigDataCourse
      },
      {
        path: 'C',
        component: CCourse
      },
      {
        path: 'java',
        component: JavaCourse
      },
      {
        path: 'web',
        component: WebCourse
      },
      {
        path: 'special',
        component: SpecialCourse
      },
      {
        path: 'go',
        component: GoCourse
      }
    ],
    meta: {
      title: '课程'
    }
  },
  {
    path: '/bbs',
    component: Bbs,
    meta: {
      title: '江湖'
    }
  },
  {
    path: '/topic',
    component: Message,
    meta: {
      title: '发布文章',
    }
  },
  {
    path: '/message',
    component: Document,
    meta: {
      title: '官方文档'
    }
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        redirect: 'homepage'
      },
      {
        path: 'article',
        component: Article,
        children: [
          {
            path: '',
            redirect: 'management'
          },
          {
            path: 'management',
            component: ArticleManagement
          },
          {
            path: 'collect',
            component: CollectArticle
          },
          {
            path: 'tag',
            component: ArticleTag
          },
        ]
      },
      {
        path: 'fans',
        component: Fans
      },
      {
        path: 'follow',
        component: Follow
      },
      {
        path: 'homepage',
        component: HomePage
      },
      {
        path: 'setting',
        component: Setting,
        children: [
          {
            path: '',
            redirect: 'security'
          },
          {
            path: 'security',
            component: Security
          },
          {
            path: 'edit',
            component: Editor
          },
          {
            path: 'modify',
            component: Modify
          },
        ]
      },
      {
        path: 'special',
        component: SpecialColumn
      },
      {
        path: 'study',
        component: Study,
        children: [
          {
            path: '',
            redirect: 'footprint'
          },
          {
            path: 'footprint',
            component: FootPrint
          },
          {
            path: 'purchase',
            component: PurchaseCourse
          }
        ]
      },
      {
        path: 'talk',
        component: TalkAbout
      }
    ],
    meta: {
      title: '个人中心',
    }
  },
  {
    path: '/download',
    component: Download,
    children: [
      {
        path: '',
        redirect: 'all'
      },
      {
        path: 'all',
        component: AllCourse
      },
      {
        path: 'vip',
        component: VipCourse
      },
      {
        path: 'note',
        component: Note
      },
      {
        path: 'code',
        component: Code
      }
    ],
    meta: {
      title: '下载',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router;

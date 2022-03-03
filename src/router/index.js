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
const Preview = () => import("../views/bbs/children/Preview");
const Special = () => import("../views/user/special/Special");
const Information = () => import("../views/msg/Information");
const Friend = () => import("../views/msg/children/Friend");
const System = () => import("../views/msg/children/System");
const Myself = () => import("../views/msg/children/Myself");
const CourseInformation = () => import("../views/msg/children/CourseInformation");
const Replay = () => import("../views/msg/children/Replay");
const Detail = () => import("../views/course/children/Detail");
const UserPreview = () => import("../views/userPreview/UserPreview");
const Play = () => import("../views/course/children/Play");

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
    meta: {
      title: '课程'
    }
  },
  {
    path: '/other/user/:userId',
    component: UserPreview,
    meta: {
      title: '狂神说-KeepStudy'
    }
  },
  {
    path: '/course/detail/:detailId',
    component: Detail,
    meta: {
      title: '详情'
    }
  },
  {
    path: '/course/play/:playId',
    component: Play,
    meta: {
      title: '视频播放'
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
    path: '/zl/:zlId',
    component: Special
  },
  {
    path: '/topic',
    component: Message,
    meta: {
      title: '发布文章',
    }
  },
  {
    path: '/topic/add/:messageId',
    component: Message,
    meta: {
      title: '编辑文章'
    }
  },
  {
    path: '/bbs/preview/:bbsId',
    component: Preview
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
    meta: {
      title: '下载',
    }
  },
  {
    path: '/msg',
    component: Information,
    children: [
      {
        path: '',
        redirect: 'me'
      },
      {
        path: 'me',
        component: Myself
      },
      {
        path: 'friend',
        component: Friend
      },
      {
        path: 'replay',
        component: Replay
      },
      {
        path: 'system',
        component: System
      },
      {
        path: 'course',
        component: CourseInformation
      }
    ],
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

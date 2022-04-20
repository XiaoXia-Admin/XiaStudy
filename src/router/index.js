import Vue from "vue";
import VueRouter from 'vue-router'

//临时解决路径冗余方案
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);


const Bbs = () => import("../views/bbs/Bbs");
const Course = () => import("../views/course/Course");
const Document = () => import("../views/document/Document");
const Download = () => import("../views/download/Download");
const Home = () => import("../views/home/Home");
const Message = () => import("../views/bbs/children/Message");
const User = () => import("../views/user/User");
const Article = () => import("../views/user/children/Article");
const Fans = () => import("../views/user/children/Fans");
const FollowList = () => import("../views/user/children/FollowList");
const VipPay = () => import("../views/vip/VipPay");

const HomePage = () => import("../views/user/children/HomePage");
const Setting = () => import("../views/user/children/Setting");
const Study = () => import("../views/user/children/Study");
const SpecialColumnList = () => import("../views/user/children/SpecialColumnList");
const TalkList = () => import("../views/user/children/TalkList");
const ArticleManagement = () => import("../views/user/articleChildren/ArticleManagement");
const CollectArticle = () => import("../views/user/articleChildren/CollectArticle");
const Tag = () => import("../views/user/articleChildren/Tag");
const PurchaseCourse = () => import("../views/user/studyChildren/PurchaseCourse");
const FootPrint = () => import("../views/user/studyChildren/FootPrint");
const Modify = () => import("../views/user/settingChildren/Modify");
const Security = () => import("../views/user/settingChildren/Security");
const Editor = () => import("../views/user/settingChildren/Editor");
const WxLogin = () => import("../views/home/login/WxLogin");
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
    meta: {
      title: '首页'
    }
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
    path: '/course/detail/:detailId',
    component: Detail,
    meta: {
      title: '详情'
    }
  },
  {
    path: '/course/play/:playId/:videoSourceId',
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
    path: '/topic/to-update/:articleId',
    component: Message,
    meta: {
      title: '更新文章'
    }
  },
  {
    path: '/zl/:zlId+',
    component: Special,
    meta: {
      title: '专栏'
    }
  },
  {
    path: '/topic/publish-article',
    component: Message,
    meta: {
      title: '发布文章',
      keepAlive: true
    }
  },
  {
    path: '/topic/edit-article/:messageId',
    component: Message,
    meta: {
      title: '编辑文章'
    }
  },
  {
    path: '/bbs/preview/:bbsId',
    component: Preview,
    meta: {
      title: '文章'
    }
  },
  {
    path: '/wx/login',
    component: WxLogin,
    meta: {
      title: '文章'
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
    path: '/topic/zl/add-article/:zlId',
    component: Message,
    meta: {
      title: '添加专栏'
    }
  },
  {
    path: '/topic/zl/to-update/:zlId/:zlArticleId',
    component: Message,
    meta: {
      title: '专栏编辑'
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
            component: Tag
          },
        ]
      },
      {
        path: 'fans',
        component: Fans
      },
      {
        path: 'follow',
        component: FollowList
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
        component: SpecialColumnList
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
        component: TalkList
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
    path: '/vip/pay',
    component: VipPay,
    meta: {
      title: '办理会员',
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
    meta:{
      title: '消息中心'
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
    path: "/:carchAll(.*)",
    name: "NotFound",
    redirect: '/login',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to' + to.matched)
  // console.log(to)
  document.title = to.matched[0].meta.title
  next()
})
export default router;

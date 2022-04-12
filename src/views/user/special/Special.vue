<template>
  <div v-cloak>
    <main  v-if="!this.permissionFlag" class="ksd-book-box flex" style="position: relative;
    bottom: -20px;height: 730px;margin-bottom: -66px;background: rgb(255, 255, 255);margin-top: -30px;margin-left: -9px;">
      <!--      <div id="ksd-zl-loading" style="position: fixed;top:50px;right:0;left:10rem;z-index:110;"></div>-->
      <aside class="book-menu ksd-book-menu">
        <span class="ksd-expand-zl ksd-expand-zl-right" style="top:130px"><i
          class="iconfont icon-xiangzuo1 pr ftp1"></i></span>
        <span class="ksd-expand-zl ksd-expand-zl-left" style="top:130px"><i
          class="iconfont icon-xiangyou1 pr ftp1"></i></span>

        <nav class="pr" style="box-shadow: 0 0 1em #e6ecef;z-index: 10;background-color: white;margin-bottom: -66px;">
          <!--        待定-->
          <h2 :title="this.columnDetail.title" @click="showPage"
              class="book-brand fz16  book-brand-ell fw editspan  xjy-left" id="ksd-book-brand-tlt">
            <a href="javascript:void(0)"><span>{{ this.columnDetail.title }}</span></a>
          </h2>

          <a
            v-show="this.authorList.findIndex((item) => {return item.userId == this.$store.state.myUserInfoVo.id}) != -1"
            class="ksd-zl-link-edit fz12" href="javascript:void(0);" @click="editSpecial"><i
            class="iconfont icon-tianxie pr-2 fz12 pr tp4"></i></a>

          <ul
            v-show="this.authorList.findIndex((item) => {return item.userId == this.$store.state.myUserInfoVo.id}) != -1">
            <li style="overflow:hidden;">
              <a v-show="this.add" class="fl ksd-addzl-link mr-3 fz12" href="javascript:void(0);" @click="addDialog"><i
                class="iconfont icon-jia pr-1"></i><span>添加文章</span></a>
              <a v-show="!this.add" class="fl ksd-addzl-link mr-3 fz12" href="javascript:void(0);" @click="addDialog"><i
                class="iconfont pr-1 pr tp1 icon-chahao"></i><span>关闭编辑</span></a>
              <a class="fl fz12" href="javascript:void(0);"><i
                class="iconfont icon-jia pr-1"></i><span>解析</span></a>
              <a class="fl ml-3 ksd-editzl-link fz12" v-show="this.editMode" href="javascript:void(0);"
                 @click="editListMode"><i
                class="iconfont icon-chanpin-copy pr-1"></i><span>编辑模式</span></a>
              <a class="fl ml-3 ksd-editzl-link fz12" v-show="!this.editMode" href="javascript:void(0);"
                 @click="editListMode"><i
                class="iconfont icon-chahao pr-1"></i><span>关闭操作</span></a>
            </li>
          </ul>
          <hr>
          <div class="book-search ksd-book-parsebox pr" style="display: none">
            <input type="text" id="book-search-input-link" class="fz12" placeholder="输入KuangStudy平台文章链接[含https]"
                   aria-label="搜索" maxlength="100" data-hotkeys="s/">
            <button class="ksd-parse-link"><i
              class="iconfont iconsetlocation mr-1 fz12"></i>解析
            </button>
          </div>
          <ul id="ksd-zl-itemlist" v-show="!this.add || !this.editMode || this.columnArticleList.length != 0">
            <!--          关闭页面-->
            <li v-for="(item, index) in columnArticleList" :key="item.articleId"
                class="ksd-zl-item ksd-zl-item-1494627662873108482"
                :id="'ksd-zl-item-c' + (index + 1)" style="text-align: left;margin-left: 10px;" :data-sort="item.sort"
                @click="findZlArticle($event, index)"
                :title="item.title"
                :data-opid="item.articleId" :class="{'editmode': !editMode,'active': index == clickFlag}">
            <span v-show="!editMode" class="fl pr ftp1 sorteditbox mr-2" title="设置排序，升序"><input
              @blur="editSort(index,$event)" class="ksd-sortinp"
              :data-sort="item.sort"
              maxlength="3"
              style="border:1px solid #009688;width: 2rem;text-align: center;padding:2px;"
              type="text"
              :value="item.sort"
              :data-opid="item.articleId"></span>
              <span class="editsp editspan3">
                        <span v-show="editMode" class="editnum" style="">0{{ index + 1 }}、</span>

                        <span :id="'ksd-zl-item-tlt-' + item.articleId" class="title">{{ item.title }}</span>

                    </span>
              <div class="fr">
              <span v-show="!editMode" class="fr pr tp2 editbtn fz12" @click="removeItemReal($event, index)"
                    :data-articleId="item.articleId"
                    title="删除"><i class="iconfont fz12 icon-chahao pr tp1 mr-1"></i></span>

                <span v-show="!editMode" class="fr pr tp2 editbtn copydata mr-2 fz12"
                      @click.stop="editZlArticle($route.params.zlId, item.articleId)"
                      :data-articleId="item.articleId" title="编辑"><i
                  class="iconfont fz14 icon-tianxie pr tp1 mr-1"></i></span>
              </div>
            </li>
            <li v-show="!this.add && this.editArticleFlag" data-mode="edit" class="ksd-zl-item active"
                id="ksd-zl-item-opedit">
            <span class="fl pr ftp1 sorteditbox mr-2" style="display: none" title="设置排序，升序"><input class="ksd-sortinp"
                                                                                                   style="border:1px solid #009688;width: 2rem;text-align: center;padding:2px;"
                                                                                                   type="text"></span>
              <span class="editsp ">
     <span class="editnum">0{{ this.columnArticleList.length + 1 }}、</span>
     <input type="text" style="width: 15rem;padding:5px;" id="zlLeftAddTitle" @keydown="bindTitle" @keyup="bindTitle"
            ref="leftTitle"
            class="title" value="">

 </span>
              <div class="fr pr tp3">
              <span @click="removeItem($event)" title="删除" class="fr"><i
                class="iconfont icon-chahao"></i></span>
              </div>
            </li>
          </ul>

          <div v-show="this.add && this.editMode && this.columnArticleList.length == 0"
               class="ksd-empty-al text-center mt-5"
               style="display:block">
            <img src="../../../assets/img/nodata.png" alt="" width="150">
            <p style="color: #999;font-weight: bold" class="mt-3">暂无数据</p>
          </div>
        </nav>
      </aside>

      <div class="book-page book-page-main"
           style="z-index: 5;height: 740px;margin-bottom: -66px;width: 100%;background: rgb(255, 255, 255) none repeat scroll 0% 0%;margin-top: -30px;margin-left: -9px;">
        <div class="book-page book-page-main" style="width: 1080px;background: #fff;margin-top: 76px;">
          <!--            封面-->
          <div v-show="this.add && this.zlFlag" id="ksd-zhuanlan-mainbox-c"
               :class="{editClass: this.flag,'pd-120': this.edit}" class="ksd-zhuanlan-mainbox">
            <div class="ksd-zhuanlan-mdj" style="  margin-top: 60px;">
              <div class="imgbox text-center mb-4"><img onerror="imgErrorLogo(this)"
                                                        src="../../../assets/img/index_topleft_logo_black.png" alt=""
                                                        width="200"></div>
              <h1 class="ksd-zhuanlan-mun ksd-zl-div-source-title  fw" :class="{'ksd-zl-div-source':this.flag}">
                <span>{{ this.columnDetail.title }}</span></h1>
              <div class="ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
                <input type="text" id="zlTitle" ref="zlTitle" placeholder="请输入专栏名称..." maxlength="60"
                       :title="this.columnDetail.title" :value="this.columnDetail.title">
              </div>
              <div class="mt-2 text-center ksd-zl-div-source-desc" :class="{'ksd-zl-div-source':this.flag}"
                   style="padding:0px 0 50px;color:#666;">
                {{ this.columnDetail.description }}
              </div>

              <p class="ksd-zhuanlan-sumhrh mt-1" :class="{'ksd-zl-div-source':this.flag}">

              </p>
              <div class="ksd-zhuanlan-wgzr mt-4" :class="{'ksd-zl-div-source':this.flag}">
                <div class="ksd-zhuanlan-module">
                  <div :id="'ksd-zhuanlan-itemezy-' + item.userId" v-for="(item, index) in this.authorList"
                       :key="item.userId" class="ksd-zhuanlan-itemezy">
                    <a :href="'/other/user/' + item.userId" target="_blank"><span
                      class=" ksd-zhuanlan-inblock larkui-popover-trigger"><img data-testid="img-avatar"
                                                                                :src="item.avatar" :alt="item.nickname"
                                                                                :title="item.nickname"
                                                                                style="width: 32px; min-width: 32px; height: 32px; border-radius: 16px;vertical-align: -6px;"></span>
                      <span class="fz12"
                            style="text-overflow: ellipsis;max-width:100px;overflow: hidden;display: inline-block;white-space: nowrap;">{{
                          item.nickname
                        }}</span>
                    </a>
                  </div>
                </div>
                <p class="ksd-zhuanlan-sumhrh">共 <span
                  class="ksd-zhuanlan-sumhrh-num">{{ this.authorList.length }}</span> 位作者
                </p>
              </div>
              <p class="ksd-zhuanlan-sumhrh mt-5" :class="{'ksd-zl-div-source':this.flag}">
                可见性：
                <span class="ksd-zhuanlan-sumhrh-status">


                                  <span>{{ this.visibilityList[this.columnDetail.vsibility] }}</span>


                              </span>
                <span class="ml-4">浏览数：<span>{{ this.columnDetail.views }}</span></span>
              </p>
              <div class="mt-2 mb-2 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
              <textarea id="zlDescription" placeholder="请输入专栏描述,少于400字..." ref="zlDescription"
                        v-model="this.columnDetail.description" maxlength="400"></textarea>
              </div>
              <div class="mt-2 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
                <input type="text" id="zlBackground" title="请输入专栏卡片背景色" ref="zlColor" placeholder="请输入专栏卡片背景色..."
                       maxlength="100"
                       :value="this.columnDetail.color">
                <p class="text-center mt-2 fz12">渐变色参考网站1：<a href="https://webgradients.com/" target="_blank">https://webgradients.com/</a>&nbsp;&nbsp;渐变色参考网站2：<a
                  href="https://uigradients.com" target="_blank">https://uigradients.com</a></p>
              </div>
              <div class="mt-3 ksd-zl-edit text-center" :class="{'ksd-zl-div-edit':this.edit}">
                <label v-for="(item, index) in visibilityList" class="mr-1 ml-3" :key="index"><input
                  v-model="radioValue"
                  @click.stop="chooseRadio(index)"
                  type="radio"
                  :value="index"
                  name="zlShow"
                  :title="item"
                  class="mr-1">{{ item }}</label>
              </div>


              <div class="mt-3 text-center ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
                <label v-for="(item, index) in publishList" :key="index" class="mr-3 ml-3"><input type="radio"
                                                                                                  v-model="publishValue"
                                                                                                  @click.stop="choosePublishRadio(index)"
                                                                                                  name="zlStatus"
                                                                                                  :value="index"
                                                                                                  class="mr-1">{{
                    item
                  }}</label>
              </div>
              <div class="text-center mt-3 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}"
                   style="color:#666;">
                <button class="fz12" data-opid="1484369401750142978"
                        @click="deleteSpecial"><i
                  class="iconfont iconremove1 mr-1 pr tp1"></i> 删除专栏
                </button>
                <button class="fz12"
                        @click="updateSpecial"><i
                  class="iconfont iconedit1 mr-1 pr tp1"></i> 保存修改
                </button>
              </div>

              <div class="ksd-zhuanlan-wam ksd-product-desctext" :class="{'ksd-zl-div-source':this.flag}"
                   style="padding-top: 20px">
                生活原本沉闷，但跑起来就有风
              </div>
            </div>
          </div>
          <!--        文章展示-->
          <div v-show="!this.zlFlag" id="ksd-book-mainbox" style="width: 85%;margin-left: 84px;">

            <div id="ksd-book-mainbox-cnt">

              <div class="layui-container ksd-layui-container water-mark" id="preview_article"
                   style="padding:0;max-width: 100%;background:#fff;min-height: 93vh">
                <div class="ksd-layout-bbs-main layui-row layui-col-space10 main pr">
                  <div id="zl_article" class="layui-col-md12 layui-col-lg12">
                    <preview-title v-show="!this.loadingFlag" :article="this.article" @editZlArticle="editZlArticle">
                    </preview-title>
                    <markdown-to-html v-show="!this.loadingFlag" :target="this.target" :id="this.id"
                                      :markdown-value="this.article.content"></markdown-to-html>
                    <!--                  加载动画-->

                  </div>

                </div>
                <loading :loading-flag="this.loadingFlag"></loading>

              </div>

            </div>
          </div>
          <!--        添加文章-->
          <div id="iframeDiv" v-show="!this.add" class="book-pagex book-page-editbox"
               style="width: 100%;margin-left: -23px;">
            <div style="width: 100%;">
              <iframe id="iframebox" ref="mainIframe" border="0" style="height: 685px;"
                      frameborder="no">
                <!--              <message :article-list="this.columnArticleList"></message>-->
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <aside v-show="this.rightFlag" class="book-toc ksd-book-toc book-menu" :class="{'ksd-zl-div-source':this.flag}">
        <span class="ksd-expand-zl-toc ksd-expand-zl-right-toc"><i class="iconfont icon-xiangzuo1 pr ftp1"></i></span>
        <span class="ksd-expand-zl-toc ksd-expand-zl-left-toc"><i class="iconfont icon-xiangyou1 pr ftp1"></i></span>
        <nav id="ksd-chapterlist"
             style="margin-left: -18px;text-align: left;box-shadow: 0 0 1em #e6ecef;z-index: 10;background-color: white;margin-bottom: -66px;">

        </nav>
      </aside>

      <a href="javascript:void(0);" class="ksd-nextbtn ksd-nextbtn-left" style="left: 385px;" v-show="this.add"><i
        class="iconfont icon-xiangzuo1 fz20 fw"></i></a>
      <a href="javascript:void(0);" class="ksd-nextbtn ksd-nextbtn-right" v-show="this.add"><i
        class="iconfont icon-xiangyou1 fz20 fw"></i></a>
      <!--    <preview-img :img="this.img"></preview-img>-->

    </main>
    <permission  v-else :permission="permission"></permission>
  </div>
</template>

<script>
import EditorMarkdown from "../../bbs/children/EditorMarkdown";
import Message from "../../bbs/children/Message";
import Preview from "../../bbs/children/Preview";
import PreviewImg from "../../bbs/children/PreviewImg";
import MarkdownToHtml from "../../bbs/children/MarkdownToHtml";
import {backToTop, easeInOutQuad, init, loadChapterHead, mkImageShow} from "../../../common/utils";
import scriptjs from "scriptjs";
import Toc from "../../bbs/children/Toc";
import PreviewTitle from "../../bbs/children/PreviewTitle";
import {defaultConfig} from "../../../config/editor.md";
import Loading from "../../../components/common/load/Loading";
import bbsApi from "../../../network/bbs";
import Permission from "../common/Permission";

export default {
  name: "Special",
  components: {Permission, Loading, PreviewTitle, Toc, MarkdownToHtml, PreviewImg, Preview, Message, EditorMarkdown},
  data() {
    return {
      edit: true,
      flag: false,
      add: true,
      editMode: true,
      clickFlag: -1,
      permissionFlag: '',
      permission: {},
      columnArticleList: [
        // {
        //   articleId: 1,
        //   sort: 1,
        //   title: '第一天'
        // },
        // {
        //   articleId: 2,
        //   sort: 1,
        //   title: '第二天'
        // },
        // {
        //   articleId: 3,
        //   sort: 1,
        //   title: '第三天'
        // },
        // {
        //   articleId: 4,
        //   sort: 1,
        //   title: '第五天'
        // }
      ],
      columnDetail: {
        // columnId: "1508008133925105665",
        // title: "Spring Cloud Alibaba专栏",
        // description: "Spring Cloud 的用法",
        // vsibility: 0,
        // views: 0,
        // color: "background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);",
        // isRelease: true,
        // authorList: [
        //   {
        //     userId: "1489885385067622401",
        //     nickname: "天天搬砖",
        //     avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/07VIZwpL6UkSTYaCUf2krXZs3FKtTIQnXNWjDhH8LRCPia62Dss7gTI4hFEGJ59w9eCUIjiaUzvR1vpa02lrmic1g/132"
        //   },
        //   {
        //     userId: "1",
        //     nickname: "天天搬砖",
        //     avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/07VIZwpL6UkSTYaCUf2krXZs3FKtTIQnXNWjDhH8LRCPia62Dss7gTI4hFEGJ59w9eCUIjiaUzvR1vpa02lrmic1g/132"
        //   }
        // ]
      },
      visibilityList: ['所有人可见', '仅对会员可见', '仅对自己可见', '仅对年会员可见', '仅对终身会员可见'],
      article: {
        // articleId: 3,
        // title: '第一天',
        // isExcellentArticle: 1,
        // userId: 123,
        // avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/oJc2IiaoibeUm3HGMyHJ87JdLYwhvHqqcf2dETPwibotxaWGBE0vibrB8ibiazLiapBZClEHPBu3MCg7eXEicVDclFmI1A/132',
        // nickname: '花开富贵',
        // vipLevel: 'vip',
        // categoryName: '教程',
        // view: 12222,
        // content: '',
        // gmtModified: '2022/02/20 00:03',
        // gmtCreate: '2022/02/20 00:03'
      },
      labelList: [],
      target: '\"#zl\"',
      id: 'preview',
      loadingFlag: true,
      rightFlag: false,
      zlFlag: true,
      img: 'https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2020/11/05/kuangstudy922adc10-910e-43d7-90fd-b5a7198f55db.jpg',
      i: 0,
      radioValue: '',
      publishValue: '',
      publishList: [
        '不发布', '发布'
      ],
      editArticleFlag: true,
      stopFlag: true,
      tempDescription: '',
      authorList: []
    }
  },
  methods: {
    choosePublishRadio(item) {
      this.publishValue = item
    },
    chooseRadio(item) {
      this.radioValue = item
    },
    showPage() {
      this.rightFlag = false
      this.zlFlag = true
    },
    editSpecial() {
      this.edit = false
      this.flag = true
    },
    getConfig() {
      if (this.config) {
        return this.config;
      } else {
        return defaultConfig
      }
    },
    editZlArticle(zlId, articleId) {
      // alert('ahah')
      this.stopFlag = false
      this.add = !this.add
      this.editArticleFlag = false
      this.zlFlag = true
      this.rightFlag = false

      this.clickFlag = this.columnArticleList.findIndex((item) => item.articleId == articleId)
      // let a =  "/topic/zl/to-update" + zlId + '/' + articleId
      // alert(a)
      // alert(zlId)
      // alert(articleId)
      $("#iframebox").height($(window).height() - 100).attr("src", "/topic/zl/to-update/" + zlId + '/' + articleId);
    },
    mkImageShow,
    addDialog() {
      this.editArticleFlag = true
      this.add = !this.add
      this.zlFlag = true
      this.rightFlag = false
      this.clickFlag = -1
      $("#iframebox").height($(window).height() - 100).attr("src", "/topic/zl/add-article/" + this.$route.params.zlId);
      $('.ksd-zl-itemlist').append('')
      // document.getElementById("iframebox").contentWindow.Message.publishZlArticle(123);
    },
    //删除专栏文章
    removeItemReal(e, index) {
      let articleId = e.currentTarget.dataset.articleid
      // alert(articleId)
      let zlId = this.$route.params.zlId
      layer.confirm(`你确定删除吗？`, {
        btn: ['确定移出', '放弃操作'], //按钮
        data: {
          _articleId: articleId,
          _this: this,
          _index: index,
          _zlId: zlId
        }
      }, function () {
        // this.data._this.remove()
        this.data._this.columnArticleList.splice(this.data._index, 1)
        // alert(this.data._articleId)
        // alert(this.data._zlId)1513034774108938242
        bbsApi.deleteZlArticle(this.data._articleId, this.data._zlId).then(response => {
          layer.msg('删除成功', {time: 1000})
        })
      }, function () {

      });

    },
    editItemReal() {

    },
    bindTitle() {
      $('#iframebox').contents().find('#addTitle').val(this.$refs.leftTitle.value)
    },
    deleteDialog() {

    },
    //查询封面数据，和左边数据
    findColumnDetail() {
      let zlId = this.$route.params.zlId
      this.radioValue = this.columnDetail.vsibility
      this.publishValue = this.columnDetail.isRelease ? 1 : 0
      bbsApi.findSpecialData(zlId).then(response => {
        let level = this.$store.state.myUserInfoVo.vipLevel == null ? 0 : this.$store.state.vipList.findIndex((item) => {
          return item == this.$store.state.myUserInfoVo.vipLevel
        })
        let myselfFlag = response.data.data.columnDetail.authorList.findIndex((item) => {
          return item.userId == this.$store.state.myUserInfoVo.id
        })
        //说明你是专栏的作者，直接访问不用判断
        if (myselfFlag != -1) {
          // alert('hh')
          this.columnArticleList = response.data.data.columnArticleList
          this.columnDetail = response.data.data.columnDetail
          this.authorList = response.data.data.columnDetail.authorList
          this.tempDescription = this.columnDetail.description
          this.radioValue = this.columnDetail.vsibility
          this.publishValue = this.columnDetail.isRelease ? 1 : 0
        } else { //说明你不是作者
          //需要判断你是否符合专栏可见度的要求
          //如果你是专栏的作者你也可以直接访问
          if (myselfFlag != -1) {
            // alert('hh')
            this.columnArticleList = response.data.data.columnArticleList
            this.columnDetail = response.data.data.columnDetail
            this.authorList = response.data.data.columnDetail.authorList
            this.tempDescription = this.columnDetail.description
            this.radioValue = this.columnDetail.vsibility
            this.publishValue = this.columnDetail.isRelease ? 1 : 0
          } else if ((response.data.data.columnDetail.vsibility < level) && response.data.data.columnDetail.vsibility != 1) {
            this.columnArticleList = response.data.data.columnArticleList
            this.columnDetail = response.data.data.columnDetail
            this.authorList = response.data.data.columnDetail.authorList
            this.tempDescription = this.columnDetail.description
            this.radioValue = this.columnDetail.vsibility
            this.publishValue = this.columnDetail.isRelease ? 1 : 0
          } else { //这里说明你没有权限
            // alert('你没有权限哦')
            // this.$router.push({name: 'Permission', params: {'zlId': this.zlId}})
            // this.$router.replace('/permission');
            this.permissionFlag = true
            let item = {
              title: response.data.data.columnDetail.title,
              visibility: this.visibilityList[response.data.data.columnDetail.vsibility]
            }

            this.permission = item
            // this.$router.push({name:'Permission',params:{zlId:this.zlId}});
          }
          // }
          // if(response.data.data.columnDetail.vsibility == 2) {
          //   alert('仅对自己可见')
          // }
          // // alert(response.data.data.columnDetail.vsibility)
          // if((response.data.data.columnDetail.vsibility > level)) {
          //   // alert('haha')
          //   this.$router.push({name: 'Permission', params: {zlId: this.zlId}})
          // } else {
          //   // alert('hh')
          //   this.columnArticleList = response.data.data.columnArticleList
          //   this.columnDetail = response.data.data.columnDetail
          //   this.authorList = response.data.data.columnDetail.authorList
          //   this.tempDescription = this.columnDetail.description
          //   this.radioValue = this.columnDetail.vsibility
          //   this.publishValue = this.columnDetail.isRelease ? 1 : 0
          // }
        }
      })

    },
    editListMode() {
      this.editMode = !this.editMode
      this.sortItem(this.columnArticleList)
    },
    deleteSpecial() {
      this.edit = false
      this.flag = true
      let zlId = this.$route.params.zlId //专栏id
      layer.confirm(`你确定要移出该专栏吗？`, {
        btn: ['确定移出', '放弃操作'], //按钮
        data: {
          _zlId: zlId
        }
      }, function () {
        bbsApi.deleteSpecial(this.data._zlId).then(response => {
          if (response.data.code == 20000) {
            layer.msg('删除成功', {time: 1000})
            setTimeout(() => {
              window.location = 'http://localhost:8080/user'
            }, 1000)
          }
        })
      }, function () {

      });

    },
    sortItem(item) {
      item.sort(function (a, b) {
        return a.sort - b.sort
      });
    },
    removeZl() {

    },
    editZl() {

    },
    editSort(index, obj) {
      // let zlCntId = $(obj).data("opid");
      // let zlId = $("body").data("zlid");
      // let csort = $(obj).data("sort");
      this.columnArticleList[index].sort = obj.currentTarget.value
      // console.log(obj.currentTarget.value)
      // console.log(index)
      // console.log(this.columnArticleList[0])
      // console.log(this.columnArticleList[index].articleId)
      bbsApi.modifyZlSort(obj.currentTarget.value, this.columnArticleList[index].articleId).then(response => {
        this.labelList = response.data.data.labelList
        this.article = response.data.data.article
      })
    },
    removeItem(event) {
      if (confirm("你确定移除吗?")) {
        $(event.currentTarget).parents("li").fadeOut("slow", function () {
          $(event.currentTarget).hide();
          $(".book-page-main").show();
          $(".book-page-editbox").hide();
          $("#ksd-zl-item-opedit").hide();
          $("#zlLeftAddTitle").val('')
          // //重新排序
          // this.sortItem(this.columnArticleList);
          // controlNoEmpty();
        });
        this.add = true
      } else {
        this.add = false
      }
    },
    findZlArticle(e, index) {
      this.clickFlag = index;
      if (this.stopFlag) {
        this.zlFlag = false;
        this.rightFlag = true;
        this.loadingFlag = true;
        $('#preview_article').removeClass('animated fadeInDownBig')
        let zlArticleId = e.currentTarget.dataset.opid;
        let zlId = this.$route.params.zlId //专栏id
        // alert(zlArticleId)
        // alert(zlId)
        bbsApi.findZlArticleDetail(zlId, zlArticleId).then(response => {
          this.labelList = response.data.data.labelList
          // console.log(response.data)
          this.article = response.data.data.article
          // alert(this.article.isRelease)
          // alert(this.article.content)
          $('#preview_article').addClass('animated fadeInDownBig')

          this.loadChapterHead()
          this.loadingFlag = false
        })
        // setTimeout(function () {
        //   $('#loadingbox').hide().empty();
        //   // this.loading = false
        // },5000)
      }
      // loading()
      // setTimeout(clear, 500)
    },
    backToTop,
    easeInOutQuad,
    updateSpecial() {
      let columnId = this.$route.params.zlId;
      let title = this.$refs.zlTitle.value;
      let description = this.$refs.zlDescription.value
      let color = this.$refs.zlColor.value
      let vsibility = this.radioValue
      let isRelease = this.publishValue == 1 ? true : false
      // console.log(columnId)
      // console.log(title)
      // console.log(description)
      // console.log(color)
      // console.log(vsibility)
      // console.log(isRelease)
      bbsApi.modifySpecialData(columnId, title, description, color, vsibility, isRelease).then(response => {
        if (response.data.code == 20000) {
          layer.msg('修改成功!', {time: 700})
          this.columnDetail.description = description
          this.columnDetail.title = title
          this.columnDetail.color = color
          this.columnDetail.vsibility = vsibility
          this.columnDetail.isRelease = isRelease
          this.edit = true
          this.flag = false
        }
      })
    },
    init,
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
    closeIFrame() {
      alert('haha')
    },
    loadChapterHead
  },
  mounted() {
    this.init(this.id)
    editormd('editor', this.getConfig());
  },
  beforeCreate() {
    if (this.$route.path.indexOf('/zl') == 0) {
      document.querySelector('body').className = 'bg-white'
    } else {
      document.querySelector('body').className = 'bg-gray'
    }

  },
  created() {
    setTimeout(this.mkImageShow, 500);
    if (window.name == 'isReload') {
      this.backToTop('slide_bottom')
    } else {
      window.name = 'isReload'
    }
    this.$nextTick(this.findColumnDetail())

    // alert(this.$store.state.myUserInfoVo.vipLevel)
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}

main {
  flex: 1;
  padding-bottom: 20px;
}

.book-menu {
  flex: 0 0 21rem;
  font-size: .875rem;
}

.book-menu:hover .ksd-expand-zl-right {
  display: block;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}


.ksd-zl-div-edit {
  display: none;
}

.ksd-zl-div-source {
  display: none;
}

.book-page, .book-menu nav, .book-toc nav {
  padding: 1rem;
}

.book-menu nav {
  width: 21rem;
  padding: 1rem;
  box-shadow: 0 0 1em #e6ecef;
  position: fixed;
  top: 56px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.book-brand-ell {
  text-overflow: ellipsis;
  width: 15rem;
  line-height: 24px;
}

.ml-3, .mx-3 {
  margin-left: 1rem !important;
}

.fw {
  font-weight: 600 !important;
}

.fz16 {
  font-size: 16px !important;
}

.book-brand {
  margin-top: 0;
  font-size: 18px;
}

.book-menu a, .book-menu label {
  color: inherit;
  cursor: pointer;
  word-wrap: break-word;
}

a {
  text-decoration: none;
}


.ksd-zl-link-edit {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 12px;
}

.fz12 {
  font-size: 12px !important;
}

aside nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  color: black;
}

aside nav ul li {
  margin: 1em 0;
  position: relative;
}

li {
  list-style: none;
}


.l, .z, .fl {
  float: left;
}

.pr-1, .px-1 {
  padding-right: .25rem !important;
}

.mr-3, .mx-3 {
  margin-right: 1rem !important;
}

aside nav ul a {
  display: block;
}

aside nav, .book-page, .book-header aside, .markdown {
  transition: .2s ease-in-out;
  transition-property: all;
  transition-property: transform, margin, opacity, visibility;
  will-change: transform, margin, opacity;
}

.book-page {
  /*margin: 0 auto;*/
  margin: 0 -84px;
  padding: 1.5rem !important;
}

.ksd-zhuanlan-mainbox {
  padding: 56px 0;
  width: 877px;
  margin: 0 auto;
}

.text-center {
  text-align: center !important;
}

.mb-4, .my-4 {
  margin-bottom: 1.5rem !important;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.ksd-zhuanlan-mdj .ksd-zhuanlan-mun {
  text-align: center;
  color: #3a5169;
  font-size: 24px;
}

.ksd-zl-div-source-title {
  padding-bottom: 20px;
}

.fw {
  font-weight: 600 !important;
}

.ksd-zhuanlan-sumhrh {
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
  color: #8c8c8c;
}

.mt-1, .my-1 {
  margin-top: .25rem !important;
}

.mt-4, .my-4 {
  margin-top: 1.5rem !important;
}

.ksd-zhuanlan-module {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.ksd-zhuanlan-sumhrh {
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
  color: #8c8c8c;
}

.mt-5, .my-5 {
  margin-top: 3rem !important;
}

.ml-4, .mx-4 {
  margin-left: 1.5rem !important;
}

.ksd-zhuanlan-mdj .ksd-zhuanlan-wam {
  margin-top: 12px;
  font-size: 14px;
  color: #8c8c8c;
  line-height: 24px;
  text-align: center;
}

.ksd-product-desctext {
  color: #8c888b;
  background: -webkit-linear-gradient(45deg, #70f7fe, #fbd7c6, #fdefac, #bfb5dd, #bed5f5);
  background-clip: border-box;
  color: transparent;
  letter-spacing: 2px;
  -webkit-background-clip: text;
  animation: ran 10s linear infinite;
}

.book-toc {
  flex: 0 0 16rem;
  font-size: .75rem !important;
}

.ksd-book-toc:hover .ksd-expand-zl-left-toc {
  display: block;
}

.ksd-expand-zl-left-toc {
  right: 15.3rem;
}

.ksd-expand-zl-left:hover {
  box-shadow: #ccc 0px 0px 10px !important;
}

.ksd-expand-zl-right:hover {
  box-shadow: #ccc 0px 0px 10px !important;
}

.ksd-expand-zl-toc {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  position: fixed;
  top: 147px;
  z-index: 100;
  display: none;
  cursor: pointer;
}

.ftp1 {
  top: -1px !important;
}

.pr {
  position: relative;
}

.ksd-nextbtn {
  position: fixed;
  top: 42%;
  background: #fafafa;
  display: none;
  padding: 0px 10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
}

.fz20 {
  font-size: 20px !important;
}

.ksd-nextbtn-right {
  right: 272px;
}


.ksd-expand-zl {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  position: fixed;
  top: 130px;
  z-index: 100;
  display: none;
  cursor: pointer;
}

.ksd-zl-edit input[type="text"] {
  border: 2px dotted #ccc;
  height: 40px;
  line-height: 40px;
  text-indent: 0.5em;
  font-size: 16px;
}

.mb-2, .my-2 {
  margin-bottom: .5rem !important;
}

.mt-2, .my-2 {
  margin-top: .5rem !important;
}

.ksd-zl-edit textarea {
  border: 2px dotted #ccc;
  padding: 10px;
  height: 150px;
  resize: none;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

.mr-1, .mx-1 {
  margin-right: .25rem !important;
}

.ksd-zl-edit button {
  background: #03a9f4;
  color: #fff;
  border: 1px solid #ccc;
  margin: 0 10px;
  height: 32px;
  line-height: 28px;
  width: 120px;
}

.ksd-zl-item:hover, .ksd-zl-item.active {
  color: #25b864;
}

.ksd-zl-item {
  cursor: pointer;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

aside nav ul li {
  margin: 1em 0;
  position: relative;
}

.tp3 {
  top: 3px !important;
}

li {
  list-style: none;
}

.book-page-editbox iframe {
  width: 1250px;
  broder: 0;
}

.ksd-expand-zl-right {
  left: 19.7rem;
}

.editmode {
  background: #eee;
  padding: 10px;
  margin: 2px 0;
  overflow: hidden;
}

.ksd-zl-item:hover, .ksd-zl-item.active {
  color: #25b864;
}

.mr-2, .mx-2 {
  margin-right: .5rem !important;
}

.layui-container {
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}

.layui-container {
  width: 1024px;
}

.layui-container .main {
  margin: 10px auto;
}

.pr {
  position: relative;
}

.layui-row::after, .layui-row::before {
  content: '';
  display: block;
  clear: both;
}

.layui-col-space10 > * {
  padding: 5px;
}

.layui-col-lg12 {
  width: 100%;
}

.layui-row::after, .layui-row::before {
  content: '';
  display: block;
  clear: both;
}

.editClass {
  padding-top: 4px;
  margin-left: 167px;
}

.pd-120 {
  padding-top: 0px;

}

.ksd-zhuanlan-itemezy {
  margin: 8px 8px 0;
}

.ksd-zhuanlan-inblock {
  display: inline-block;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.ksd-zhuanlan-module {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>

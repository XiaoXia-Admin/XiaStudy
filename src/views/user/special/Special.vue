<template>
  <main class="ksd-book-box flex" style="position: relative;
    bottom: -20px;height: 730px;margin-bottom: -66px;background: rgb(255, 255, 255);margin-top: -30px;margin-left: -9px;">
    <div id="ksd-zl-loading" style="position: fixed;top:50px;right:0;left:10rem;z-index:110;"></div>
    <aside class="book-menu ksd-book-menu">
      <span class="ksd-expand-zl ksd-expand-zl-right" style="top:130px"><i class="iconfont icon-xiangzuo1 pr ftp1"></i></span>
      <span class="ksd-expand-zl ksd-expand-zl-left" style="top:130px"><i
        class="iconfont icon-xiangyou1 pr ftp1"></i></span>

      <nav class="pr" style="box-shadow: 0 0 1em #e6ecef;z-index: 10;background-color: white;margin-bottom: -66px;">
        <h2 title="12345" class="book-brand fz16  book-brand-ell fw editspan" id="ksd-book-brand-tlt"
            style="margin-left: -135px;">
          <a href="javascript:void(0)"><span>fanfajdfja;fkdja;flj</span></a>
        </h2>
        <a class="ksd-zl-link-edit fz12" href="javascript:void(0);" @click="editSpecial"><i
          class="iconfont icon-tianxie pr-2 fz12 pr tp4"></i></a>

        <ul>
          <li style="overflow:hidden;">
            <a v-show="this.add" class="fl ksd-addzl-link mr-3 fz12" href="javascript:void(0);" @click="addDialog"><i
              class="iconfont icon-jia pr-1"></i><span>添加文章</span></a>
            <a v-show="!this.add" class="fl ksd-addzl-link mr-3 fz12" href="javascript:void(0);" @click="addDialog"><i
              class="iconfont pr-1 pr tp1 icon-chahao"></i><span>关闭编辑</span></a>
            <a class="fl fz12" href="javascript:void(0);" @click="editzldialog(this)"><i
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
          <button class="ksd-parse-link" @click="parseLink(this)"><i
            class="iconfont iconsetlocation mr-1 fz12"></i>解析
          </button>
        </div>
        <ul id="ksd-zl-itemlist" v-show="!this.add || !this.editMode || this.articleList.length != 0">
          <!--          关闭页面-->
          <li v-for="(item, index) in articleList" :key="item.id" class="ksd-zl-item ksd-zl-item-1494627662873108482"
              :id="'ksd-zl-item-c' + (index + 1)" style="text-align: left;margin-left: 10px;" data-sort="1"
              :title="item.title"
              :data-opid="item.id" :class="{'editmode': !editMode}">
            <span v-show="!editMode" class="fl pr ftp1 sorteditbox mr-2" title="设置排序，升序"><input
              @blur="editSort(index,$event)" class="ksd-sortinp"
              :data-sort="item.sort"
              maxlength="3"
              style="border:1px solid #009688;width: 2rem;text-align: center;padding:2px;"
              type="text"
              :value="item.sort"
              :data-opid="item.id"></span>
            <span class="editsp editspan3">
                        <span v-show="editMode" class="editnum" style="">0{{ index + 1 }}、</span>

                        <span :id="'ksd-zl-item-tlt-' + item.id" class="title">{{ item.title }}</span>

                    </span>
            <div class="fr">
              <span v-show="!editMode" class="fr pr tp2 editbtn fz12" @click="removeItemReal($event)"
                    :data-opid="item.id"
                    title="删除"><i class="iconfont fz12 icon-chahao pr tp1 mr-1"></i></span>

              <span v-show="!editMode" class="fr pr tp2 editbtn copydata mr-2 fz12" @click="editItemReal($event)"
                    :data-opid="item.id" title="编辑"><i
                class="iconfont fz14 icon-tianxie pr tp1 mr-1"></i></span>
            </div>
          </li>
          <li v-show="!this.add" data-mode="edit" class="ksd-zl-item active" id="ksd-zl-item-opedit">
            <span class="fl pr ftp1 sorteditbox mr-2" style="display: none" title="设置排序，升序"><input class="ksd-sortinp"
                                                                                                   style="border:1px solid #009688;width: 2rem;text-align: center;padding:2px;"
                                                                                                   type="text"
                                                                                                   value="1"></span>
            <span class="editsp ">
     <span class="editnum">0{{ this.articleList.length + 1 }}、</span>
     <input type="text" style="width: 15rem;padding:5px;" onkeydown="toggleAdd(this)"
            onkeyup="toggleAdd(this)" class="title" value="">

 </span>
            <div class="fr pr tp3">
              <span @click="removeItem($event)" title="删除" class="fr"><i
                class="iconfont icon-chahao"></i></span>
            </div>
          </li>
        </ul>

        <div v-show="this.add && this.editMode && this.articleList.length == 0" class="ksd-empty-al text-center mt-5"
             style="display:block">
          <img src="../../../assets/img/nodata.png" alt="" width="150">
          <p style="color: #999;font-weight: bold" class="mt-3">暂无数据</p>
        </div>
      </nav>
    </aside>

    <div v-show="this.add" class="book-page book-page-main"
         style="z-index: 5;height: 740px;margin-bottom: -66px;width: 100%;background: rgb(255, 255, 255) none repeat scroll 0% 0%;margin-top: -30px;margin-left: -9px;">
      <!--      封面-->
      <!--      <div id="ksd-zhuanlan-mainbox-c" class="ksd-zhuanlan-mainbox" style="padding-top: 120px;">-->
      <!--        <div class="ksd-zhuanlan-mdj" style="  margin-top: 60px;">-->
      <!--          <div class="imgbox text-center mb-4"><img onerror="imgErrorLogo(this)"-->
      <!--                                                    src="../../../assets/img/index_topleft_logo_black.png" alt=""-->
      <!--                                                    width="200"></div>-->
      <!--          <h1 class="ksd-zhuanlan-mun ksd-zl-div-source-title  fw" :class="{'ksd-zl-div-source':this.flag}">-->
      <!--            <span>12345</span></h1>-->
      <!--          <div class="ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">-->
      <!--            <input type="text" id="zlTitle" placeholder="请输入专栏名称..." maxlength="60" title="12345" value="12345">-->
      <!--          </div>-->
      <!--          <div class="mt-2 text-center ksd-zl-div-source-desc" :class="{'ksd-zl-div-source':this.flag}"-->
      <!--               style="padding:0px 0 50px;color:#666;"></div>-->

      <!--          <p class="ksd-zhuanlan-sumhrh mt-1" :class="{'ksd-zl-div-source':this.flag}">-->

      <!--          </p>-->
      <!--          <div class="ksd-zhuanlan-wgzr mt-4" :class="{'ksd-zl-div-source':this.flag}">-->
      <!--            <div class="ksd-zhuanlan-module">-->

      <!--            </div>-->
      <!--            <p class="ksd-zhuanlan-sumhrh">共 <span class="ksd-zhuanlan-sumhrh-num">0</span> 位作者-->
      <!--            </p>-->
      <!--          </div>-->
      <!--          <p class="ksd-zhuanlan-sumhrh mt-5" :class="{'ksd-zl-div-source':this.flag}">-->
      <!--            可见性：-->
      <!--            <span class="ksd-zhuanlan-sumhrh-status">-->


      <!--                            <span>仅对自己可见</span>-->


      <!--                        </span>-->
      <!--            <span class="ml-4">浏览数：<span>0</span></span>-->
      <!--          </p>-->
      <!--          <div class="mt-2 mb-2 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">-->
      <!--            <textarea id="zlDescription" placeholder="请输入专栏描述,少于400字..." maxlength="400"></textarea>-->
      <!--          </div>-->
      <!--          <div class="mt-2 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">-->
      <!--            <input type="text" id="zlBackground" title="请输入专栏卡片背景色" placeholder="请输入专栏卡片背景色..." maxlength="100"-->
      <!--                   value="background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);">-->
      <!--            <p class="text-center mt-2 fz12">渐变色参考网站1：<a href="https://webgradients.com/" target="_blank">https://webgradients.com/</a>&nbsp;&nbsp;渐变色参考网站2：<a-->
      <!--              href="https://uigradients.com" target="_blank">https://uigradients.com</a></p>-->
      <!--          </div>-->
      <!--          <div class="mt-3 ksd-zl-edit text-center" :class="{'ksd-zl-div-edit':this.edit}">-->
      <!--            <label><input type="radio" value="1" name="zlShow" title="所有人可见" class="mr-1">所有人可见</label>-->
      <!--            <label class="mr-1 ml-3"><input type="radio" title="仅对会员可见" name="zlShow" value="2"-->
      <!--                                            class="mr-1">仅对会员可见</label>-->
      <!--            <label class="mr-1 ml-3"><input type="radio" value="3" name="zlShow" title="仅对自己可见" class="mr-1"-->
      <!--                                            checked="checked">仅对自己可见</label>-->
      <!--            <label class="mr-1 ml-3"><input type="radio" value="4" name="zlShow" title="仅对年会员可见"-->
      <!--                                            class="mr-1">仅对年会员可见</label>-->
      <!--            <label class="ml-3"><input type="radio" value="5" name="zlShow" title="仅对终身会员可见"-->
      <!--                                       class="mr-1">仅对终身会员可见</label>-->
      <!--          </div>-->


      <!--          <div class="mt-3 text-center ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">-->
      <!--            <label class="mr-3 ml-3"><input type="radio" name="zlStatus" value="0" class="mr-1">不发布</label>-->
      <!--            <label><input type="radio" value="1" name="zlStatus" class="mr-1" checked="checked">发布</label>-->
      <!--          </div>-->
      <!--          <div class="text-center mt-3 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}"-->
      <!--               style="padding:30px 0 300px;color:#666;">-->
      <!--            <button class="fz12" data-opid="1484369401750142978"-->
      <!--                    @click="deleteSpecial, removeZl(this)"><i-->
      <!--              class="iconfont iconremove1 mr-1 pr tp1"></i> 删除专栏-->
      <!--            </button>-->
      <!--            <button class="fz12" data-opid="1484369401750142978"-->
      <!--                    @click="updateSpecial, editZl(this)"><i-->
      <!--              class="iconfont iconedit1 mr-1 pr tp1"></i> 保存修改-->
      <!--            </button>-->
      <!--          </div>-->

      <!--          <div class="ksd-zhuanlan-wam ksd-product-desctext" :class="{'ksd-zl-div-source':this.flag}"-->
      <!--               style="padding-top: 20px">-->
      <!--            生活原本沉闷，但跑起来就有风-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="book-page book-page-main" style="width: 1080px;background: #fff;overflow: hidden;margin-top: 76px;">
        <div id="ksd-zhuanlan-mainbox-c" class="ksd-zhuanlan-mainbox" style="padding-top: 120px; display: none;">
          <div class="ksd-zhuanlan-mdj">
            <div class="imgbox text-center mb-4"><img onerror="imgErrorLogo(this)"
                                                      src="https://www.kuangstudy.com/assert/images/index_topleft_logo_black.png"
                                                      alt="" width="200"></div>
            <h1 class="ksd-zhuanlan-mun ksd-zl-div-source ksd-zl-div-source-title fw"><span>904489</span></h1>
            <div class="ksd-zl-div-edit">
              <input type="text" id="zlTitle" placeholder="请输入专栏名称..." maxlength="60" title="904489" value="904489">
            </div>
            <div class="mt-2 text-center ksd-zl-div-source ksd-zl-div-source-desc"
                 style="padding:0px 0 50px;color:#666;"></div>

            <p class="ksd-zhuanlan-sumhrh ksd-zl-div-source mt-1">


            </p>
            <div class="ksd-zhuanlan-wgzr ksd-zl-div-source mt-4">
              <div class="ksd-zhuanlan-module">
                <div id="ksd-zhuanlan-itemezy-e73cbe9b3c21455ca55f371cf9efd0aa" class="ksd-zhuanlan-itemezy">
                  <a href="/user/e73cbe9b3c21455ca55f371cf9efd0aa" target="_blank"><span
                    class=" ksd-zhuanlan-inblock larkui-popover-trigger"><img data-testid="img-avatar"
                                                                              src="/assert/images/avatar/6.jpg"
                                                                              alt="夏金宇" title="夏金宇"
                                                                              style="width: 32px; min-width: 32px; height: 32px; border-radius: 16px;vertical-align: -6px;"></span>
                    <span class="fz12"
                          style="text-overflow: ellipsis;max-width:100px;overflow: hidden;display: inline-block;white-space: nowrap;">夏金宇</span>
                  </a>
                </div>
              </div>
              <p class="ksd-zhuanlan-sumhrh">共 <span class="ksd-zhuanlan-sumhrh-num">1</span> 位作者
              </p>
            </div>
            <p class="ksd-zhuanlan-sumhrh ksd-zl-div-source mt-5">
              可见性：
              <span class="ksd-zhuanlan-sumhrh-status">


                            <span>仅对自己可见</span>


                        </span>
              <span class="ml-4">浏览数：<span>6</span></span>
            </p>
            <div class="ksd-zl-div-edit mt-2 mb-2">
              <textarea id="zlDescription" placeholder="请输入专栏描述,少于400字..." maxlength="400"></textarea>
            </div>
            <div class="ksd-zl-div-edit mt-2">
              <input type="text" id="zlBackground" title="请输入专栏卡片背景色" placeholder="请输入专栏卡片背景色..." maxlength="100"
                     value="background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);">
              <p class="text-center mt-2 fz12">渐变色参考网站1：<a href="https://webgradients.com/" target="_blank">https://webgradients.com/</a>&nbsp;&nbsp;渐变色参考网站2：<a
                href="https://uigradients.com" target="_blank">https://uigradients.com</a></p>
            </div>
            <div class="ksd-zl-div-edit mt-3 text-center">
              <label><input type="radio" value="1" name="zlShow" title="所有人可见" class="mr-1">所有人可见</label>
              <label class="mr-1 ml-3"><input type="radio" title="仅对会员可见" name="zlShow" value="2"
                                              class="mr-1">仅对会员可见</label>
              <label class="mr-1 ml-3"><input type="radio" value="3" name="zlShow" title="仅对自己可见" class="mr-1"
                                              checked="checked">仅对自己可见</label>
              <label class="mr-1 ml-3"><input type="radio" value="4" name="zlShow" title="仅对年会员可见" class="mr-1">仅对年会员可见</label>
              <label class="ml-3"><input type="radio" value="5" name="zlShow" title="仅对终身会员可见"
                                         class="mr-1">仅对终身会员可见</label>
            </div>


            <div class="ksd-zl-div-edit mt-3 text-center">
              <label class="mr-3 ml-3"><input type="radio" name="zlStatus" value="0" class="mr-1">不发布</label>
              <label><input type="radio" value="1" name="zlStatus" class="mr-1" checked="checked">发布</label>
            </div>
            <div class="ksd-zl-div-edit text-center mt-3" style="padding:30px 0 300px;color:#666;">
              <button class="fz12" onclick="ksdZlEdit.removeZl(this)" data-opid="1488780759778418689"><i
                class="iconfont iconremove1 mr-1 pr tp1"></i> 删除专栏
              </button>
              <button class="fz12" onclick="ksdZlEdit.editZl(this)" data-opid="1488780759778418689"><i
                class="iconfont iconedit1 mr-1 pr tp1"></i> 保存修改
              </button>
            </div>
            <div class="ksd-zhuanlan-wam ksd-zl-div-source  ksd-product-desctext" style="padding-top: 20px">
              屏幕前的你一定是个很温柔的人吧
            </div>
          </div>

        </div>
        <div id="ksd-book-mainbox">

          <div id="ksd-book-mainbox-cnt">
            <div class="layui-container ksd-layui-container water-mark" id="preview_article"
                 style="padding:0;max-width: 100%;background:#fff;min-height: 93vh">
<!--              <div class="ksd-layout-bbs-main layui-row layui-col-space10 main pr">-->
<!--                <div id="zl_article" class="layui-col-md12 layui-col-lg12">-->
<!--                  &lt;!&ndash;                  <preview-title>&ndash;&gt;-->
<!--                  &lt;!&ndash;                  </preview-title>&ndash;&gt;-->
<!--                  &lt;!&ndash;                  <markdown-to-html :target="this.target" :id="this.id" :markdown-value="this.markdownValue"></markdown-to-html>&ndash;&gt;-->

<!--                  &lt;!&ndash;                  加载动画&ndash;&gt;-->
<!--                </div>-->

<!--              </div>-->
              <div id="loadingbox" style="padding: 30px 0px; text-align: center;display: none" >

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="!this.add" class="book-pagex book-page-editbox" style="width: 100%; margin-top: 50px;">
      <div style="width: 100%;padding:20px;">
        <iframe id="iframebox" border="0" style="height: 685px;"
                frameborder="no">
          <message></message>
        </iframe>
      </div>
    </div>
    <aside v-show="this.add" class="book-toc ksd-book-toc book-menu" :class="{'ksd-zl-div-source':this.flag}">
      <span class="ksd-expand-zl-toc ksd-expand-zl-right-toc"><i class="iconfont icon-xiangzuo1 pr ftp1"></i></span>
      <span class="ksd-expand-zl-toc ksd-expand-zl-left-toc"><i class="iconfont icon-xiangyou1 pr ftp1"></i></span>
      <nav id="ksd-chapterlist"
           style="margin-left: -18px;box-shadow: 0 0 1em #e6ecef;z-index: 10;background-color: white;margin-bottom: -66px;"></nav>
    </aside>

    <a href="javascript:void(0);" class="ksd-nextbtn ksd-nextbtn-left" style="left: 385px;" v-show="this.add"><i
      class="iconfont icon-xiangzuo1 fz20 fw"></i></a>
    <a href="javascript:void(0);" class="ksd-nextbtn ksd-nextbtn-right" v-show="this.add"><i
      class="iconfont icon-xiangyou1 fz20 fw"></i></a>
    <!--    <preview-img :img="this.img"></preview-img>-->

  </main>
</template>

<script>
import EditorMarkdown from "../../bbs/children/EditorMarkdown";
import Message from "../../bbs/children/Message";
import Preview from "../../bbs/children/Preview";
import PreviewImg from "../../bbs/children/PreviewImg";
import MarkdownToHtml from "../../bbs/children/MarkdownToHtml";
import {init, loading, mkImageShow, backToTop, easeInOutQuad} from "../../../common/utils";
import scriptjs from "scriptjs";
import ClipboardJS from "clipboard";
import Toc from "../../bbs/children/Toc";
import PreviewTitle from "../../bbs/children/PreviewTitle";

export default {
  name: "Special",
  components: {PreviewTitle, Toc, MarkdownToHtml, PreviewImg, Preview, Message, EditorMarkdown},
  data() {
    return {
      edit: true,
      flag: false,
      add: true,
      editMode: true,
      articleList: [
        {
          id: 1,
          sort: 1,
          title: '第一天'
        },
        {
          id: 2,
          sort: 1,
          title: '第二天'
        },
        {
          id: 3,
          sort: 1,
          title: '第三天'
        },
        {
          id: 4,
          sort: 1,
          title: '第五天'
        }
      ],
      target: '\"#zl\"',
      id: 'zl',
      markdownValue: `### 主要特性

- 支持“标准”Markdown / CommonMark和Github风格的语法，也可变身为代码编辑器；
- 支持实时预览、图片（跨域）上传、预格式文本/代码/表格插入、代码折叠、搜索替换、只读模式、自定义样式主题和多语言语法高亮等功能；
- 支持ToC（Table of Contents）、Emoji表情、Task lists、@链接等Markdown扩展语法；
- 支持TeX科学公式（基于KaTeX）、流程图 Flowchart 和 时序图 Sequence Diagram;
- 支持识别和解析HTML标签，并且支持自定义过滤标签解析，具有可靠的安全性和几乎无限的扩展性；
- 支持 AMD / CMD 模块化加载（支持 Require.js & Sea.js），并且支持自定义扩展插件；
- 兼容主流的浏览器（IE8+）和Zepto.js，且支持iPad等平板设备；
- 支持自定义主题样式；

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**目录 (Table of Contents)**

[TOCM]

[TOC]

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")
## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

#### 标题（用底线的形式）Heading (underline)

This is an H1
=============

This is an H2
-------------

### 字符效果和横线等

----

~~删除线~~ <s>删除线（开启识别HTML标签时）</s>
*斜体字*      _斜体字_
**粗体**  __粗体__
***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**

> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes

> 引用：如果想要插入空白换行\`即<br />标签\`，在插入处先键入两个以上的空格然后回车即可，[普通链接](http://localhost/)。

### 锚点与链接 Links

[普通链接](http://localhost/)

[普通链接带标题](http://localhost/ "普通链接带标题")

直接链接：<https://github.com>

[锚点链接][anchor-id]

[anchor-id]: http://www.this-anchor-link.com/

GFM a-tail link @pandao

> @pandao

### 多语言代码高亮 Codes

#### 行内代码 Inline code

执行命令：\`npm install marked\`

#### 缩进风格

即缩进四个空格，也做为实现类似\`<pre>\`预格式化文本(Preformatted Text)的功能。

    <?php
        echo "Hello world!";
    ?>

预格式化文本：

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### JS代码　

\`\`\`javascript
function test(){
\tconsole.log("Hello world!");
}

(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

\t\t\treturn this;
        },

\t\tadd : function(str){
\t\t\talert("add", str);

\t\t\treturn this;
\t\t},

\t\tremove : function(str){
\t\t\talert("remove", str);

\t\t\treturn this;
\t\t}
    };

    box.fn.init.prototype = box.fn;

    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
\`\`\`

#### HTML代码 HTML codes

\`\`\`html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
\`\`\`

### 图片 Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩

###图片加链接 Images

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：李健首张专辑《似水流年》封面

----

### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)

- 列表一
- 列表二
- 列表三

#### 无序列表（星号）Unordered Lists (*)

* 列表一
* 列表二
* 列表三

#### 无序列表（加号和嵌套）Unordered Lists (+)

+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三

#### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行
3. 第三行

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

----

### 绘制表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| \`help()\`      | Display the help window.       |
| \`destroy()\`   | **Destroy your computer!**     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |

----

#### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

### Emoji表情 :smiley:

> Blockquotes :star:

#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao;
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);

#### 反斜杠 Escape

\\*literal asterisks\\*

### 科学公式 TeX(KaTeX)

$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$

$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$

多行公式：

\`\`\`math
\\displaystyle
\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2
\\leq
\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)
\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)
\`\`\`

\`\`\`katex
\\displaystyle
    \\frac{1}{
        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{
        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {
        1+\\frac{e^{-6\\pi}}
        {1+\\frac{e^{-8\\pi}}
         {1+\\cdots} }
        }
    }
\`\`\`

\`\`\`latex
f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi
\`\`\`

### 绘制流程图 Flowchart

\`\`\`flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
\`\`\`

### 绘制序列图 Sequence Diagram

\`\`\`seq
Andrew->China: Says Hello
Note right of China: China thinks\\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
\`\`\`

### End`,
      img: 'https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2020/11/05/kuangstudy922adc10-910e-43d7-90fd-b5a7198f55db.jpg'
    }
  },
  methods: {
    editSpecial() {
      this.edit = false
      this.flag = true
    },
    mkImageShow,
    addDialog() {
      this.add = !this.add
      $("#iframebox").height($(window).height() - 100).attr("src", "/topic");
      $('.ksd-zl-itemlist').append('')
    },
    removeItemReal() {

    },
    editItemReal() {

    },
    deleteDialog() {

    },
    editListMode() {
      this.editMode = !this.editMode
      this.sortItem(this.articleList)
    },
    deleteSpecial() {
      this.edit = true
      this.flag = false
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
      this.articleList[index].sort = obj.currentTarget.value
    },
    removeItem(event) {
      if (confirm("你确定移除吗?")) {
        $(event.currentTarget).parents("li").fadeOut("slow", function () {
          $(event.currentTarget).remove();
          $(".book-page-main").show();
          $(".book-page-editbox").hide();
          $("#ksd-zl-item-opedit").remove();
          $(".ksd-addzl-link").find("span").text("添加文章");
          // //重新排序
          // this.sortItem(this.articleList);
          // controlNoEmpty();
        });
      }
    },
    backToTop,
    easeInOutQuad,
    updateSpecial() {
      this.edit = true
      this.flag = false
    },
    init,
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
    loading,

  },
  mounted() {
    this.init(this.id)
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
    setTimeout(function () {
      loading()
    }, 500)
    if (window.name == 'isReload') {
      this.backToTop('slide_bottom')
    } else {
      window.name = 'isReload'
    }
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
  margin: 0 auto;
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
  width: 100%;
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



</style>

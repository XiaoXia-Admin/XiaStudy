<template>
  <div class="main">
    <div class="layui-container" style="padding:0;">
      <div class="title-article"
           style="background-color: white;margin-top: 62px;box-shadow: rgba(0, 0, 0, 0.1) -4px -4px 12px;text-align: left;margin-left: -17px;padding: 10px 17px;margin-right: 17px;">
        <h1 class="title" id="sharetitle">
        <span style="color:#F44336;font-weight: normal;font-size:30px;" title="精品推荐"
              class="iconfont icon-tuijian ksd-iconstar-blue pr tp2"></span>&nbsp;
          <span style="color: black">Markdown写作指南</span>

        </h1>
        <div class="title-msg">
                        <span>
                        <a class="c999" href="/user/4d694f8625c44aef9ff7a04424c1ca12" target="_blank" title="狂神说">
                            <img
                              src="https://thirdwx.qlogo.cn/mmopen/vi_32/xsX5nr5cD3hmQJ76ypehicz2DbQNhEwC0duolhfo3o6z3xlWnPM0KGqgFT5RJI8qBImfuZ6eECtZp3eCRzOAOgw/132"
                              class="ksd-avatar" alt="">
                            <span class="mx-1">狂神说</span>
                        </a>

                        <span class="svipicon"><i class="iconfont icon-svip"></i></span>
                          &nbsp;&nbsp;
                    </span>
          <span class="c999" style="padding:0 6px;">分类：<a class="c999" href="/bbs?cid=3" target="_blank">教程</a></span>&nbsp;&nbsp;
          <span class="c999">浏览：<span>22016</span></span>&nbsp;&nbsp;
          <span class="c999"><a href="#comments" class="c999">评论：<span>65</span></a></span>&nbsp;&nbsp;
          <a href="javascript:void(0);" class="c999 ksd-update-fontsize"><i
            class="iconfont icon-weixuanze pr tp1"></i><span>字体</span></a>&nbsp;&nbsp;
          <a href="javascript:void(0);" class="c999 ksd-update-skin"><i
            class="iconfont icon-weixuanze pr tp1"></i><span>皮肤</span></a>
          &nbsp;&nbsp;
          <a href="javascript:void(0);" @click="showAccusation" data-opid="1356475333565587458" rel="nofollow"
             class="ksd-tiff ksd-operator ksd-reply-link-main-report" title="健康"><i class="iconfont icon-dunpai fz24"></i>
          </a>
          <a href="javascript:void(0);" class="ksd-tiff2 ksd-tiff-collect" @click="collectArticle" :class="{show: this.flag}">
            <i class="iconfont icon-chuangjiantianjiapiliangtianjia pr-1" ></i>
            <span class="zzmsg">收藏</span>
          </a>
          <a href="javascript:void(0);" style="margin-top: -3px;" class="ksd-tiff2 ksd-tiff-collect"  @click="cancelCollectArticle" :class="{show: !this.flag}">
            <i class="iconfont icon-shoucang pr-1" style="font-size: 20px"></i><span  class="zzmsg">已收藏</span>
          </a>

          <a href="javascript:void(0);" data-opid="1356475333565587458"
             class="edittopics-link ksd-operator-expand pl-4 pr tp1"><i class="iconfont icon-fuzhi pr tp1"></i>&nbsp;<span
            class="rmsg">左侧展开</span></a>
          <span class="fr c999 ksd-update-span">
                             <span style="position:relative;right: -384px;">
                                 最后修改于：
                                <span>2021/02/02 13:32:00</span>
                            </span>
                        </span>
        </div>
      </div>
      <div id="preview" style="margin-left: -17px">
        <textarea id="content" v-model="this.markdownVale"/>
      </div>
      <div class="layui-row layui-col-space15 main mt-4"
           style="margin-bottom: 100px; margin-left: -17px;margin-right: 16px;">
        <div class="layui-col-md12 layui-col-lg12" style="padding:10px 25px;">
          <div class="comment-text layui-form">
            <div id="comments">
              <div id="commentbox-post">
                <div id="respond-post" class="respond">
                  <div class="cancel-comment-reply">
                    <a id="cancel-comment-reply-link" href="javascript:void(0);" style="display: none;">
                      取消回复
                    </a>
                  </div>
                  <div class="layui-form-item">
                    <div id="commentarea">

                    </div>
                  </div>
                  <div class="layui-inline">
                    <button id="submit-comment" style="margin-left: 963px;" class="layui-btn layui-btn-normal fr"><i
                      class="iconfont icon-tianxie pr-2"></i>提交评论
                    </button>
                  </div>
                </div>
              </div>
              <div id="commentbox" data-topicid="1363074625050828802">
                <br>
                <h3>总共已有 <span class="totalcount1">139</span> 条评论</h3>
                <br>
                <div>
                  <div class="pinglun">
                    <ol class="comment-list-ol comment-list-ol-ol">
                      <li data-ctotal="139" data-total="104" data-pages="11"
                          id="li-comment-e5bf14f58112444c8457d2f44505075c"
                          class="animated fadeInUpBig comment-body comment-parent comment-odd">
                        <div id="comment-e5bf14f58112444c8457d2f44505075c" class="pl-dan comment-txt-box">
                          <div class="t-p comment-author position-relative">
                            <a href="/user/cedb811f43074a41a01141d9c52b85af" target="_blank"><img class="avatar"
                                                                                                  src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqLDCEthzsJEicIU4uEzW0Rr1QZfzvCRXVib0g3KIcnyaNM9ibloCTwbTpTkTMza5iaicuGt2MibSOqVfYQ/132"
                                                                                                  width="40" height="40"></a>
                          </div>
                          <div class="t-u comment-author">
                <span>
                    <a href="/user/cedb811f43074a41a01141d9c52b85af" class="fw" target="_blank"><span>天天搬砖</span></a>



                    <span class="layui-badge"></span>
                </span>
                            <div class="pt-1">
                    <span class="t-btn">
                        <a href="#respond-post-e5bf14f58112444c8457d2f44505075c"
                           data-opid="e5bf14f58112444c8457d2f44505075c" data-nickname="天天搬砖"
                           data-avatar="https://thirdwx.qlogo.cn/mmopen/vi_32/JGZP0cy1Hhvo9kdcsLMdTkfwBvUichsgDADp3fjib7guWt82fvRedv6GDVLqnm7rOHWKh7xsHkgdhia89yD0TGWhw/132"
                           data-ruid="cedb811f43074a41a01141d9c52b85af" rel="nofollow" class="ksd-reply-link"><i
                          class="iconfont icon-fenxiang" @click="replayPreview"></i>回复</a>

                        <span class="t-g">2022-01-16 18:52:44</span>
                    </span>
                            </div>
                            <div><b></b></div>
                            <div class="t-s"><p>666<br></p></div>
                          </div>
                        </div>
                        <div class="pl-list comment-children">
                          <ol class="comment-list" id="comment-list-children-e5bf14f58112444c8457d2f44505075c">
                            <li id="li-comment-437f5e2b694442448dabe9d949c4432a"
                                class="comment-body comment-child comment-level-odd comment-odd comment-by-author animation4 fadeInUpBig">
                              <div id="comment-437f5e2b694442448dabe9d949c4432a" class="pl-dan comment-txt-box">
                                <div class="t-p comment-author position-relative">
                                  <a href="/user/e73cbe9b3c21455ca55f371cf9efd0aa" target="_blank"><img class="avatar"
                                                                                                        src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132"
                                                                                                        width="40"
                                                                                                        height="40"></a>
                                </div>
                                <div class="t-u comment-author">
                                <span>
                                    <a href="/user/e73cbe9b3c21455ca55f371cf9efd0aa" class="fw" target="_blank"><span>夏金宇</span></a>


                                    <span class="touser_sp">@<a href="/user/cedb811f43074a41a01141d9c52b85af"
                                                                target="_blank">天天搬砖</a></span>
                                    <span class="layui-badge"></span>
                                </span>
                                  <div class="pt-1">
                                <span class="t-btn">
                                    <a href="javascript:void(0)"
                                       data-opid="e5bf14f58112444c8457d2f44505075c" data-nickname="夏金宇"
                                       data-avatar="/assert/images/avatar/1.jpg"
                                       data-ruid="e73cbe9b3c21455ca55f371cf9efd0aa" rel="nofollow"
                                       class="ksd-reply-link"  @click="replayPreview"><i class="iconfont icon-fenxiang "></i>回复</a>
                                    <a data-commentid="437f5e2b694442448dabe9d949c4432a"
                                       class="ksd-comment-deletelink rpl-red" href="javascript:void(0);" @click="deletePreview"><i
                                      class="iconfont icon-shanchu1"></i>删除</a>
                                    <span class="t-g">2022-01-16 18:53:03</span>
                                </span></div>
                                  <div><b></b></div>
                                  <div class="t-s"><p>666</p></div>
                                </div>
                              </div>
                            </li>
                          </ol>

                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div class="mt-5 mt-5 text-center ksd-empty-box-c" style="display: none;">
                  <div class="ksd-noempty none" style="background: rgb(255, 255, 255) !important; display: block;">
                  <span class="font-weight-bold"><img
                    src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqLDCEthzsJEicIU4uEzW0Rr1QZfzvCRXVib0g3KIcnyaNM9ibloCTwbTpTkTMza5iaicuGt2MibSOqVfYQ/132"
                    alt="" width="200"></span>
                    <p>坐等您的评论...</p>
                  </div>
                </div>
                <div class="loadmore" style=""><a href="javascript:void(0);"><span class="msg">加载更多评论</span>
                  (共<span class="totalcount fw">104</span>条 / 当前<span class="fw pages">1</span>页)</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tipoff-box js-tipoff-box animated bounceInDown" :class="{show: this.accusation}">
      <div class="tipoff-top-box clearfix">
        <p class="l tipoff-title">举报</p>
        <span class="r tipoff-close-btn icon-close2 js-tipoff-close"></span>
      </div>
      <div class="tipoff-type-box js-tipoff-typebox clearfix">
        <div class="item l" title="广告或垃圾信息"><i class="l icon-weixuanze iconfont" data-type="1"></i>
          <p class="l">广告或垃圾信息</p></div>
        <div class="item l" title="辱骂"><i class="l icon-weixuanze iconfont" data-type="2"></i>
          <p class="l">辱骂</p></div>
        <div class="item l" title="涉政或违法"><i class="l icon-weixuanze iconfont" data-type="3"></i>
          <p class="l">涉政或违法</p></div>
        <div class="item l" title="抄袭"><i class="l icon-weixuanze iconfont" data-type="4"></i>
          <p class="l">抄袭</p></div>
        <div class="item l" title="不合适内容"><i class="l iconfont icon-weixuanze" data-type="5"></i>
          <p class="l">不合适内容</p></div>
      </div>
      <div class="tipoff-content">
        <textarea name="tipoff-content" id="tipoff-content" class="tipoff-desc js-tipoff-desc" placeholder="写下举报理由"></textarea>
        <div class="tipoff-text"><span class="js-tipoff-text" style="color: rgb(147, 153, 159);">0</span>/150</div>
      </div>
      <div class="tipoff-btn-box clearfix">
        <div class="r tipoff-submit-btn js-tipoff-submit" @click="submitBtn">提交
        </div>
        <div class="r tipoff-cancel-btn js-tipoff-close" @click="cancelBtn">取消</div>
      </div>
    </div>
    <div class="tipoff-block js-tipoff-block" :class="{show: this.accusation}"></div>
  </div>

</template>

<script>

import scriptjs from 'scriptjs'
import ClipboardJS from 'clipboard';
import EditorMarkdown from "./EditorMarkdown";
import {createEditor,init} from "../../../common/utils";

export default {
  name: "Preview",
  components: {EditorMarkdown},
  data() {
    return {
      editor: null,
      config: {
        width: "98%",
        height: 440,
        path: "./static/lib/editormd/lib/",
        codeFold: true, // 代码折叠
        lineWrapping: true, // 编辑框不换行
        watch: true,// 实时预览
        saveHTMLToTextarea: true,    // 保存 HTML 到 Textarea
        searchReplace: true,
        htmlDecode: "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
        emoji: false,
        taskList: true,
        tocm: true,         // Using [TOCM]
        tex: true,                   // 开启科学公式TeX语言支持，默认关闭
        flowChart: true,             // 开启流程图支持，默认关闭
        sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
        imageUpload: true,
        imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL: "./php/upload.php",


        toolbarIcons: function () {
          return [
            "bold",
            "list-ul", "list-ol", "emoji"
          ]
        },
        toolbarIconTexts: {
          model: `<i class="fa" style="font-size: 16px;text-align: center;display: block;font-weight: bolder;padding: 5px;" name="testIcon" unselectable="on">模板</i>`,  // 如果没有图标，则可以这样直接插入内容，可以是字符串或HTML标签
          markdown: `<i class="fa" name="layoutmd" unselectable="on"><a href="https://www.kuangstudy.com/bbs/1356475333565587458" target="_blank">MarkDown指南</a></i>`
        },
        onload: function () {
        }
      },
      markdownVale: `### 主要特性

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

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

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
      collectFlag: true,
      accusation: true,
      flag: false
    }
  },
  methods: {
    init,
    fetchScript(url) {
      return new Promise((resolve) => {
        scriptjs(url, () => {
          resolve()
        })
      })
    },
    createEditor,
    showAccusation() {
      this.accusation = false
    },
    cancelBtn() {
      this.accusation = true
    },
    submitBtn() {
      this.accusation = true
    },
    collectArticle() {
      layer.msg('收藏成功!')
      this.flag = true
    },
    cancelCollectArticle() {
      layer.msg('取消收藏成功!')
      this.flag = false
    },
    replayPreview() {
      alert('回复用户')
    },
    deletePreview() {
      layer.confirm('你确定删除吗?', {
        title: '提示',
        btn:['点击删除', '放弃删除'],
      }, function (index) {
        layer.close(index); //如果设定了yes回调，需进行手工关闭
      });
    }
  },
  mounted() {
    this.init('preview')
    this.createEditor()
  },
  created() {
    setTimeout(function () {
      $(".editormd-html-preview").find("pre").prepend("<i class='iconfont icon-fuzhi' title='点击复制代码' style='cursor: pointer;float: right'></i>").find(".icon-fuzhi").each(function (index, obj) {
        //这里以复制URL为例
        let clipboard = new ClipboardJS(obj, {
          text: function () {
            let text = $(obj).next().get(0).innerText;
            console.log(text)
            return text;
          }
        });

        clipboard.on('success', function (e) {
          layer.msg("复制成功", {time: 500});
        });

        clipboard.on('error', function (e) {
          layer.msg("复制失败", {time: 500});
        });
      });
    }, 500);
  }
}
</script>

<style scoped>
.layui-container {
  max-width: 1200px;
  width: 1170px;
  padding: 28px;
}

.title-article h1.title {
  font-size: 28px;
  font-weight: 600;
  color: #34495e;
  padding: 0 0 10px;
  width: 82%;
  line-height: 32px;
  word-break: break-all;
}

.title-article h1 {
  font-size: 16px;
  font-weight: 600;
  color: #34495e;
  margin-top: 5px;
}

.tp2 {
  top: 2px !important;
}

.pr {
  position: relative;
}

.title-article .title-msg {
  margin-bottom: 0px;
  font-size: 12px;
  color: #999;
}

.title-article .title-msg span {
  margin-right: 3px;
}

.title-article .title-msg span.c999, .title-article .title-msg span a.c999 {
  color: #999999 !important;
}

.ksd-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: baseline;
  top: 7px;
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;

}

.mr-1, .mx-1 {
  margin-right: .25rem !important;
}

.svipicon {
  color: #ff503f;
  position: relative;
  top: -1px;
  background: #f9d681;
  padding: 0 2px;
  border-radius: 12px;
  top: -1px;
}

a {
  text-decoration: none;
}

.tp1 {
  top: 1px !important;
}

.title-article .title-msg a.ksd-tiff {
  position: absolute;
  top: 35px;
  right: 25px;
  color: #4CAF50;
  font-weight: bold;
}

.title-article .title-msg a {
  color: #999;
}

.title-article .title-msg a.ksd-tiff2 {
  position: absolute;
  top: 40px;
  right: 66px;
  color: #ff6700 !important;
  font-weight: bold;
  font-size: 14px;
}

.pr-1, .px-1 {
  padding-right: .25rem !important;
}

.title-article .title-msg span {
  margin-right: 3px;
}

.title-article .title-msg span {
  margin-right: 3px;
}

.pl-4, .px-4 {
  padding-left: 1.5rem !important;
}

.fz24 {
  font-size: 24px !important;
}

.layui-container .main {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  padding: 20px;
  background: #fff;
}

/*评论*/
.comment-text h3 {
  font-size: 16px;
  text-align: left;
  color: black;

}

.pinglun {
  margin-bottom: 10px;
}

.pinglun li {
  margin-bottom: 10px;
  padding: 10px;
  background: #eff3f5;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}

.pinglun .pl-dan {
  border-radius: 4px;
  padding: 6px;
}

.pinglun .t-p {
  float: left;
  position: relative;
  top: -3px;
}

.position-relative {
  position: relative !important;
}

.pinglun .t-p img {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(210, 210, 210, 0.2);
  border-radius: 200px;
  position: relative;
  z-index: 555;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.pinglun .t-u {
  margin-left: 70px;
  line-height: 22px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: left;
}

.fw {
  font-weight: 600 !important;
}

a {
  text-decoration: none;
}

.layui-badge:empty {
  display: none;
}

.layui-badge {
  height: 18px;
  line-height: 18px;
}

.layui-badge, .layui-badge-dot, .layui-badge-rim {
  position: relative;
  display: inline-block;
  padding: 0 6px;
  font-size: 12px;
  text-align: center;
  background-color: #FF5722;
  color: #fff;
  border-radius: 2px;
}

.pt-1, .py-1 {
  padding-top: .25rem !important;
}

.pinglun .t-u .t-g {
  color: #999;
  font-size: 12px;
}

b, strong {
  font-weight: bolder;
}

.pinglun .t-u .t-btn a {
  background: #1ab667;
  color: #fff;
  font-size: 12px;
  border: #1ab667 1px solid;
  padding: 2px 5px;
  border-radius: 4px;
  margin-right: 10px;
}

.pinglun .t-u .t-btn a.rpl-red {
  background: #ea0d0d;
  border: 1px solid #ea0d0d;
}

.pinglun .t-u .t-btn a.rpl-red:hover {
  background: #1ab667;
  border: #1ab667 1px solid;
}

.pinglun .t-u .t-btn a .iconfont {
  font-size: 13px;
  padding-right: 3px;
}

.pinglun .t-s {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #888;
  word-break: break-word;
  line-height: 20px;
}

.pinglun .t-s p {
  word-break: break-all;
}

ol ol, ol ul, ul ol, ul ul {
  margin-bottom: 0;
}

.pinglun li.comment-child {
  padding: 10px 30px 0 10px;
  background: #ffff;
  margin-left: 75px;
  margin-right: 20px;
}

.comment-children .pl-dan {
  padding-left: 25px;
}

.loadmorechild a:hover, .loadmore a:hover {
  background: #eee;
}

.loadmorechild a, .loadmore a {
  display: block;
  background: #f5f5f5;
  padding: 5px;
}

/*富文本编辑器*/
.layui-form-item {
  margin-bottom: 15px;
  clear: both;
  *zoom: 1;
}

.layui-inline {
  display: inline;
  zoom: 1;
}

.layui-btn, .layui-edge, .layui-inline, img {
  vertical-align: middle;
}

.layui-edge, .layui-header, .layui-inline, .layui-main {
  position: relative;
}

/*举报表单*/
.tipoff-box {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -168px;
  margin-left: -225px;
  padding: 24px 32px 32px;
  width: 450px;
  height: 336px;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
  border-radius: 8px;
  box-sizing: border-box;
  z-index: 901;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.tipoff-box .tipoff-top-box {
  margin-bottom: 24px;
  width: 100%;
  font-size: 16px;
  color: #07111b;
  line-height: 24px;
}
.tipoff-box .tipoff-type-box {
  width: 100%;
  height: 48px;
  overflow: hidden;
  margin-bottom: 24px;
}
.clearfix {
  *zoom: 1;
}
.tipoff-box .tipoff-type-box .item {
  width: 33.3%;
  font-size: 12px;
  color: #93999f;
  line-height: 24px;
  overflow: hidden;
  cursor: pointer;
}
.tipoff-box .tipoff-type-box .item i {
  display: inline-block;
  margin-right: 4px;
  font-size: 16px;
  line-height: 24px;
}
.tipoff-box .tipoff-type-box .item p {
  max-width: 108px;
  height: 24px;
  overflow: hidden;
}
.tipoff-box .tipoff-content {
  position: relative;
}

.tipoff-box .tipoff-content .tipoff-text {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  color: #93999f;
  line-height: 12px;
}
.tipoff-box .tipoff-btn-box {
  width: 100%;
  margin-top: 24px;
}
.tipoff-box .tipoff-content .tipoff-desc {

  padding: 12px;
  width: 386px;
  height: 88px;
  background: #fff;
  border: 1px solid #d9dde1;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 14px;
  color: #07111b;
  resize: none;

}
.tipoff-box .tipoff-btn-box .tipoff-submit-btn {
  width: 76px;
  height: 36px;
  background: #1E9FFF;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
}
.tipoff-box .tipoff-btn-box .tipoff-cancel-btn {
  margin-right: 8px;
  width: 76px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #d9dde1;
  border-radius: 2px;
  font-size: 14px;
  color: #93999f;
  text-align: center;
  cursor: pointer;
}

.tipoff-block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,17,27,.6);
  z-index: 900;

}
</style>

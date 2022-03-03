<template>
  <div class="main-content ksd-setting-content">
    <div id="submit-video" class="section video">
      <main role="main" class="container bg-white rounded">
        <div class="row">
          <div class="col-md-12 order-md-1">
            <form class="needs-validation" method="post" action="/u/save/home-content">
              <div class="row">
                <div class="col-md-12 mb-3">
                  <h3 class="mb-3" style="font-size: 35px;">主页内容编辑</h3>
                  <editor-markdown :content="this.homePage.content" :config="this.config"></editor-markdown>
                </div>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">提交</button>
            </form>
          </div>
        </div>
      </main>
    </div>

  </div>
</template>

<script>
import EditorMarkdown from "../../bbs/children/EditorMarkdown";
export default {
  name: "Editor",
  data() {
    return {
      config:{
        width : "100%",
        height : 500,
        syncScrolling : "single",
        path : "./static/lib/editormd/lib/",
        saveHTMLToTextarea : true,    // 保存 HTML 到 Textarea
        // [TOCM]  [TOC] 自动生成目录
        tocm : true,
        tocContainer : "",
        tocDropdown   : false,
        tocStartLevel : 1,     // Parse beginning of H2, Default value 1
        emoji: true,
        tex : true,                   // 开启科学公式TeX语言支持，默认关闭
        flowChart : true,             // 开启流程图支持，默认关闭
        sequenceDiagram : true,       // 开启时序/序列图支持，默认关闭,
        //图片上传
        imageUpload : true,
        imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL : "/api/oss/mdpic/upload/userhome", // 对接后端请求
        onload : function() {
        },
        /*指定需要显示的功能按钮*/
        toolbarIcons : function() {
          return ["undo","redo","|",
            "bold","del","italic","quote","ucwords","uppercase","lowercase","|",
            "list-ul","list-ol","hr","|",
            "link","image",
            "code-block","table","emoji","watch","preview"]
        }
      },
      homePage: {
        content: `### 主要特性

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

### End`
      }
    }
  },
  components: {EditorMarkdown}
}
</script>

<style scoped>
.contribution-sidenav ~ .main-content {
  padding: 20px 20px 160px;
  box-sizing: border-box;
  margin-left: 210px;
  border-left: 1px solid #eee;
  min-height: 400px;
}
.section {
  position: relative;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
main {
  flex: 1;
  padding-bottom: 20px;
}
.container {
  max-width: 1200px;
}
.rounded {
  border-radius: .25rem !important;
}
.bg-white {
  background-color: #fff !important;
}
.order-md-1 {
  -ms-flex-order: 1;
  order: 1;
}
h1, h3, h4 {
  font-weight: 500;
}


.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
.btn-primary.focus, .btn-primary:focus, .btn-primary:hover {
  background-color: #32c8ab;
  border-color: #32c8ab;
}
[type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}
.btn-group-lg > .btn, .btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
button {
  border-radius: 0;
}
</style>

<template>
  <main class="ksd-book-box flex">
    <div id="ksd-zl-loading" style="position: fixed;top:50px;right:0;left:10rem;z-index:110;"></div>
    <aside class="book-menu ksd-book-menu">
            <span class="ksd-expand-zl ksd-expand-zl-right" style="top:130px"><i class="iconfont icon-xiangzuo1 pr ftp1"></i></span>
            <span class="ksd-expand-zl ksd-expand-zl-left" style="top:130px"><i class="iconfont icon-xiangyou1 pr ftp1"></i></span>

      <nav class="pr" style="box-shadow: 0 0 1em #e6ecef;z-index: 10;background-color: white;margin-bottom: -66px;">
        <h2 title="12345" class="book-brand fz16  book-brand-ell fw editspan" id="ksd-book-brand-tlt"
            style="margin-left: -135px;">
          <a href="javascript:void(0)"><span>fanfajdfja;fkdja;flj</span></a>
        </h2>
        <a class="ksd-zl-link-edit fz12" href="javascript:void(0);" @click="editSpecial"><i
          class="iconfont icon-tianxie pr-2 fz12 pr tp4"></i></a>

        <ul>
          <li style="overflow:hidden;">
            <a class="fl ksd-addzl-link mr-3 fz12" href="javascript:void(0);" onclick="ksdZlEdit.adddialog(this)"><i
              class="iconfont icon-jia pr-1"></i><span>添加文章</span></a>
            <a class="fl fz12" href="javascript:void(0);" onclick="ksdZlEdit.editzldialog(this)"><i
              class="iconfont icon-jia pr-1"></i><span>解析</span></a>
            <a class="fl ml-3 ksd-editzl-link fz12" href="javascript:void(0);" onclick="ksdZlEdit.editlistmode(this)"><i
              class="iconfont icon-chanpin-copy pr-1"></i><span>编辑模式</span></a>

          </li>
        </ul>
        <hr>
        <div class="book-search ksd-book-parsebox pr" style="display: none">
          <input type="text" id="book-search-input-link" class="fz12" placeholder="输入KuangStudy平台文章链接[含https]"
                 aria-label="搜索" maxlength="100" data-hotkeys="s/">
          <button class="ksd-parse-link" onclick="ksdZlEdit.parseLink(this)"><i
            class="iconfont iconsetlocation mr-1 fz12"></i>解析
          </button>
        </div>
        <ul id="ksd-zl-itemlist">

        </ul>

        <div class="ksd-empty-al text-center mt-5" style="display:block">
          <img src="../../../assets/img/nodata.png" alt="" width="150">
          <p style="color: #999;font-weight: bold" class="mt-3">暂无数据</p>
        </div>
      </nav>
    </aside>

    <div class="book-page book-page-main"
         style="z-index: 5;height: 740px;margin-bottom: -66px;width: 1300px;background: rgb(255, 255, 255) none repeat scroll 0% 0%;overflow: hidden;margin-top: -30px;margin-left: -9px;">
      <div id="ksd-zhuanlan-mainbox-c" class="ksd-zhuanlan-mainbox" style="padding-top: 120px;">
        <div class="ksd-zhuanlan-mdj">
          <div class="imgbox text-center mb-4"><img onerror="imgErrorLogo(this)"
                                                    src="../../../assets/img/index_topleft_logo_black.png" alt=""
                                                    width="200"></div>
          <h1 class="ksd-zhuanlan-mun ksd-zl-div-source-title  fw" :class="{'ksd-zl-div-source':this.flag}"><span>12345</span></h1>
          <div class="ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
            <input type="text" id="zlTitle" placeholder="请输入专栏名称..." maxlength="60" title="12345" value="12345">
          </div>
          <div class="mt-2 text-center ksd-zl-div-source-desc" :class="{'ksd-zl-div-source':this.flag}"
               style="padding:0px 0 50px;color:#666;"></div>

          <p class="ksd-zhuanlan-sumhrh mt-1" :class="{'ksd-zl-div-source':this.flag}">

          </p>
          <div class="ksd-zhuanlan-wgzr mt-4" :class="{'ksd-zl-div-source':this.flag}">
            <div class="ksd-zhuanlan-module">

            </div>
            <p class="ksd-zhuanlan-sumhrh">共 <span class="ksd-zhuanlan-sumhrh-num">0</span> 位作者
            </p>
          </div>
          <p class="ksd-zhuanlan-sumhrh mt-5" :class="{'ksd-zl-div-source':this.flag}">
            可见性：
            <span class="ksd-zhuanlan-sumhrh-status">


                            <span>仅对自己可见</span>


                        </span>
            <span class="ml-4">浏览数：<span>0</span></span>
          </p>
          <div class="mt-2 mb-2 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
            <textarea id="zlDescription" placeholder="请输入专栏描述,少于400字..." maxlength="400"></textarea>
          </div>
          <div class="mt-2 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
            <input type="text" id="zlBackground" title="请输入专栏卡片背景色" placeholder="请输入专栏卡片背景色..." maxlength="100"
                   value="background-image: linear-gradient(to right, rgb(130, 178, 242) 0%, rgb(51, 51, 51) 100%);">
            <p class="text-center mt-2 fz12">渐变色参考网站1：<a href="https://webgradients.com/" target="_blank">https://webgradients.com/</a>&nbsp;&nbsp;渐变色参考网站2：<a
              href="https://uigradients.com" target="_blank">https://uigradients.com</a></p>
          </div>
          <div class="mt-3 ksd-zl-edit text-center" :class="{'ksd-zl-div-edit':this.edit}">
            <label><input type="radio" value="1" name="zlShow" title="所有人可见" class="mr-1">所有人可见</label>
            <label class="mr-1 ml-3"><input type="radio" title="仅对会员可见" name="zlShow" value="2"
                                            class="mr-1">仅对会员可见</label>
            <label class="mr-1 ml-3"><input type="radio" value="3" name="zlShow" title="仅对自己可见" class="mr-1"
                                            checked="checked">仅对自己可见</label>
            <label class="mr-1 ml-3"><input type="radio" value="4" name="zlShow" title="仅对年会员可见"
                                            class="mr-1">仅对年会员可见</label>
            <label class="ml-3"><input type="radio" value="5" name="zlShow" title="仅对终身会员可见"
                                       class="mr-1">仅对终身会员可见</label>
          </div>


          <div class="mt-3 text-center ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}">
            <label class="mr-3 ml-3"><input type="radio" name="zlStatus" value="0" class="mr-1">不发布</label>
            <label><input type="radio" value="1" name="zlStatus" class="mr-1" checked="checked">发布</label>
          </div>
          <div class="text-center mt-3 ksd-zl-edit" :class="{'ksd-zl-div-edit':this.edit}" style="padding:30px 0 300px;color:#666;">
            <button class="fz12" onclick="ksdZlEdit.removeZl(this)" data-opid="1484369401750142978" @click="deleteSpecial"><i
              class="iconfont iconremove1 mr-1 pr tp1" ></i> 删除专栏
            </button>
            <button class="fz12" onclick="ksdZlEdit.editZl(this)" data-opid="1484369401750142978" @click="updateSpecial"><i
              class="iconfont iconedit1 mr-1 pr tp1"></i> 保存修改
            </button>
          </div>

          <div class="ksd-zhuanlan-wam ksd-product-desctext" :class="{'ksd-zl-div-source':this.flag}"  style="padding-top: 20px">
            生活原本沉闷，但跑起来就有风
          </div>
        </div>
      </div>
    </div>

    <aside class="book-toc ksd-book-toc book-menu" :class="{'ksd-zl-div-source':this.flag}">
      <span class="ksd-expand-zl-toc ksd-expand-zl-right-toc"><i class="iconfont icon-xiangzuo1 pr ftp1"></i></span>
      <span class="ksd-expand-zl-toc ksd-expand-zl-left-toc"><i class="iconfont icon-xiangyou1 pr ftp1"></i></span>
      <nav id="ksd-chapterlist" style="margin-left: -18px;box-shadow: 0 0 1em #e6ecef;z-index: 10;background-color: white;margin-bottom: -66px;"></nav>
    </aside>

    <a href="javascript:void(0);" class="ksd-nextbtn ksd-nextbtn-left" style="display: block; left: 378px;"><i class="iconfont icon-xiangzuo1 fz20 fw"></i></a>
    <a href="javascript:void(0);" class="ksd-nextbtn ksd-nextbtn-right" style="display: block;"><i
      class="iconfont icon-xiangyou1 fz20 fw"></i></a>
  </main>
</template>

<script>
export default {
  name: "Special",
  data() {
    return {
      edit: true,
      flag: false,
    }
  },
  methods: {
    editSpecial() {
      this.edit = false
      this.flag = true
    },
    editMode() {
      alert('编辑模式')
    },
    addDialog() {
      alert('添加文章')
    },
    deleteDialog() {
      alert('删除文章')
    },
    deleteSpecial() {
      this.edit = true
      this.flag = false
    },
    updateSpecial() {
      this.edit = true
      this.flag = false
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
/*.ksd-expand-zl-left {*/
/*  display: none;*/
/*  left: 0.25rem;*/
/*}*/
/*.ksd-expand-zl {*/
/*  width: 24px;*/
/*  height: 24px;*/
/*  border: 1px solid #ccc;*/
/*  line-height: 24px;*/
/*  text-align: center;*/
/*  border-radius: 50%;*/
/*  position: fixed;*/
/*  top: 130px;*/
/*  z-index: 100;*/
/*  display: none;*/
/*  cursor: pointer;*/
/*}*/
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

.editspan {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 12rem;
  display: inline-block;
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
  right: 16.3rem;
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
.ksd-expand-zl-right {
  left: 20.3rem;
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
</style>

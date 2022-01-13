<template>
  <div class="layui-container" style="top: 55px;">
    <div class="layui-row layui-col-space15 bbs-main">
      <div class="layui-col-md9 layui-col-lg9" style="min-height: 790px;">
        <nav class="bbs-nav">
          <ol class="breadcrumb fl animated fadeIn">
            <li class=""><a href="/bbs">全部 <span class="bbs-total">( 11916 )</span></a></li>
          </ol>
          <div class="fr" style="padding: 7px;">
            <form method="get" action="/bbs?pageNo=1" onsubmit="return searchbbs(this)">
              <div class="fl">
                <input type="text" id="searchKey" name="searchKey" value="" autocomplete="off" maxlength="20"
                       class="xjy-layui-input" placeholder="请输入文章关键词或标签" onfocus="this.placeholder=''"
                       onblur="this.placeholder='请输入文章关键词或标签'">
                <input type="hidden" id="searchcid" name="cid" value="">
                <input type="hidden" id="pageNo" value="">
                <input type="hidden" id="pages" value="">
                <input type="hidden" id="total" value="">
                <input type="hidden" id="cid" value="">
                <input type="hidden" id="isrecommend" value="">
                <input type="hidden" name="pageNo" value="">
                <input type="hidden" name="pageSize" value="">
              </div>
              <div class="fl">
                <button class="layui-btn layui-btn-sm layui-btn-primary" type="submit"><i class="layui-icon"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="fr" style="margin: 15px;font-size:12px;">
            热门关键词：<a href="/bbs?searchKey=学相伴">学相伴</a>&nbsp;&nbsp;<a href="/bbs?searchKey=java">Java</a>
          </div>
        </nav>
        <div class="bbs-page" data-total="11920">
          <div class="bbs-article-title bbs-title-article-link list-card animated fadeIn delay-1s"
               data-href="bbs/1363074625050828802">
            <span class="iconfont icon-zhiding ksd-iconzhiding"></span>
            <a target="_blank" href="/bbs" class="hlink">
              <h1>个人中心换肤的尝试</h1>
            </a>
            <a target="_blank" href="bbs/1363074625050828802" class="hlink2">
              <p>这个功能很久前就开发了，终于想起来要玩起来！</p>
            </a>
            <div class="bbs-title-msg">
              <span>
                 <a href="/user/4d694f8625c44aef9ff7a04424c1ca12" target="_blank" title="狂神说">
                   <img
                     src="https://thirdwx.qlogo.cn/mmopen/vi_32/xsX5nr5cD3hmQJ76ypehicz2DbQNhEwC0duolhfo3o6z3xlWnPM0KGqgFT5RJI8qBImfuZ6eECtZp3eCRzOAOgw/132"
                     data-original="https://thirdwx.qlogo.cn/mmopen/vi_32/xsX5nr5cD3hmQJ76ypehicz2DbQNhEwC0duolhfo3o6z3xlWnPM0KGqgFT5RJI8qBImfuZ6eECtZp3eCRzOAOgw/132"
                     class="ksd-avatar" alt="" style="">
                   &nbsp;&nbsp;
                     <span class="mx-1">狂神说</span></a>
                    &nbsp;&nbsp;
                    <span class="svipIcon"><i class="iconfont1 icon-svip3"></i></span>
                &nbsp;&nbsp;
              </span>
              <span class="pr-2 pl-2 ksd-screen-time-no"><label
                class="fw">时间：</label><span>2021/02/20 18:34</span></span>
              &nbsp;&nbsp;
              <span class="pr-2 none"><label class="fw">评论数：</label><span>96</span></span>
              &nbsp;&nbsp;
              <span class=" pr-2"><label class="fw">浏览：</label><span>12416</span></span>
              &nbsp;&nbsp;
              <span><label class="fw">分类：</label>
                            <a href="/bbs?uid=&amp;from=&amp;cid=3" class="ksd-topic-tags">教程</a>
                        </span>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-col-md3 layui-col-lg3 animated fadeIn">
        <div class="send-article">
          <a href="/topic"
             class="layui-btn nav-link-down nav-link-login layui-btn-normal" style="width: 100%;">
            <span class="layui-icon layui-icon-edit"></span>
            发布文章
          </a>
        </div>
        <div class="slide-card mb-3 position-relative animated fadeIn" style="border:none;border-radius: 6px;">
          <div class="p-3">
            <div class="slide-card-row mx-0 text-center pb-2">
              <div class="slide-card-col px-0">
                <div class="pb-0 fz14">230475</div>
                <div class=" mt-2 fz14 small text-muted">用户</div>
              </div>
              <div class="slide-card-col px-0">
                <div class="pb-0 fz14">12025</div>
                <div class=" mt-2 fz14 small text-muted">文章</div>
              </div>
              <div class="slide-card-col">
                <div class="pb-0 fz14">7384</div>
                <div class=" mt-2 fz14 small text-muted">回复</div>
              </div>
            </div>
          </div>
        </div>
        <div class="slide-column">
          <h3 class="slide-column-title">
            <a href="/bbs"><i class="layui-icon pr tp1"></i>文章分类</a>
            <a href="/bbs?isrecommend=1&amp;cid=" class="fr fz12 pr"
               style="top:4px;color:#666;">查看精品文章</a>
          </h3>
          <ul class="layui-row layui-col-space5">
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-1s" id="xjy-category-1"
                title="程序人生">
              <a href="/bbs?isrecommend=&amp;cid=1&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                程序人生
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-2s" id="xjy-category-2"
                title="管理">
              <a href="/bbs?isrecommend=&amp;cid=2&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                管理
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-3s" id="xjy-category-3"
                title="教程">
              <a href="/bbs?isrecommend=&amp;cid=3&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                教程
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-4s" id="xjy-category-4"
                title="学习笔记">
              <a href="/bbs?isrecommend=&amp;cid=4&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                学习笔记
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-5s" id="xjy-category-5"
                title="踩坑记录">
              <a href="/bbs?isrecommend=&amp;cid=5&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                踩坑记录
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-6s" id="xjy-category-6"
                title="架构">
              <a href="/bbs?isrecommend=&amp;cid=6&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                架构
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-7s" id="xjy-category-7"
                title="后台">
              <a href="/bbs?isrecommend=&amp;cid=7&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                后台
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-8s" id="xjy-category-8"
                title="前端">
              <a href="/bbs?isrecommend=&amp;cid=8&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                前端
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-9s" id="xjy-category-9"
                title="问答">
              <a href="/bbs?isrecommend=&amp;cid=9&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                问答
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-10s" id="xjy-category-13"
                title="测试">
              <a href="/bbs?isrecommend=&amp;cid=13&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                测试
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-11s" id="xjy-category-11"
                title="数据库">
              <a href="/bbs?isrecommend=&amp;cid=11&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                数据库
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-12s" id="xjy-category-12"
                title="安全">
              <a href="/bbs?isrecommend=&amp;cid=12&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                安全
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-13s" id="xjy-category-10"
                title="面试">
              <a href="/bbs?isrecommend=&amp;cid=10&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                面试
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
            <li class="slide-column-item layui-col-md12 layui-col-xs12 animated fadeIn delay-14s"
                id="ksd-category-1461614772263886849" title="理财">
              <a href="/bbs?isrecommend=&amp;cid=1461614772263886849&amp;searchKey=&amp;pageNo=1" style="display: block"
                 class="ksd-nav-linknav-rorate">
                理财
                <span class="iconfont icon-icon-jiantou1 fw" style="position: absolute;right: 5px;top:7px;"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./children/Message";
export default {
  name: "Bbs",
  components: {Message},
  mounted() {
    $(function() {
      let editor = editormd("editor", {
        height : 440,
        path   : "./static/lib/editormd/lib/"
      });
    });
  }
}
</script>

<style scoped>
@import "../../assets/css/bbs.css";

.layui-btn {
  display: inline-block;
  background-color: #1E9FFF;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  border: none;
  border-radius: 2px;
}

.layui-btn, .layui-disabled, .layui-icon, .layui-unselect {
  -webkit-user-select: none;
}

.layui-col-space5 {
  margin: -2.5px;
}

.layui-col-space5 .slide-column-item {
  padding: 2px;
}

.layui-col-md12 {
  width: 100%;
}

.layui-col-md12, .layui-col-md3, .layui-col-md9 {
  float: left;
}

.layui-col-lg3, .layui-col-lg9, .layui-col-md12, .layui-col-md3, .layui-col-md9, .layui-col-xs12 {
  position: relative;
  display: block;
  box-sizing: border-box;
}

.layui-col-lg3 {
  width: 25%;
}

.layui-col-lg3, .layui-col-md3 {
  position: relative;
  display: block;
  box-sizing: border-box;
}

input {
  font-family: inherit;
  font-style: inherit;
  outline: 0;
  overflow: visible;
}


</style>

<template>
  <div class="main-content ksd-topic-content">
    <div>
      <div class="alert alert-primary" style="background-color: #f4f5f7;border-color: #f4f5f7;">
        <a href="/topic" style="display: block;text-align: right;" target="_blank">Hi,今天又学到新知识了吗？快快记录下来吧，<span
          style="text-decoration: underline;color:#4caf50;">点击发表文章!</span></a>
      </div>
      <div id="ksd-topic-cube-list">
        <div class="media text-muted ksd-topic-items" id="delete-topicid-1473650657826283521">
          <div class="media-body load-topics-page pr">
            <h3 style="font-size:16px;padding:10px 0;">
              <a href="/bbs/1473650657826283521" target="_blank"
                 class="text-dark font-weight-bold text-decoration-none d-block">
                <span>11111111111111111111</span>
                <span class="red fw pl-2" title="违规文章，仅自己可见！"><i
                  class="iconfont icon-weiguitongzhi fz18 pr tp1"></i></span>
              </a>
            </h3>
            <p><a href="/bbs/1473650657826283521">1</a></p>
            <div class="mt-2">
                    <span class="pr-3 fz12">
                        分类：<a href="/bbs?from=1&amp;cid=11">数据库</a>
                    </span>
              <span class="mr-3 mt-2">
                        <i class="iconfont icon-icon_yulan tp2">
                        </i>
                        <span>1</span>
                    </span>
              <span>
                    </span>
              <span class="mr-3 mt-2">
                       <i class="iconfont icon-shijian"></i><span>2021-12-22 21:44:31</span>
                    </span>
              <span>
                       <a data-topicid="1473650657826283521" class="topic-delete-a badge badge-danger float-right"
                          style="font-weight: 400;background:transparent;color: #745e5e;border:1px solid #bcbcbc;padding:4px 12px;border-radius: 0;">
                          <i class="iconfont icon-shanchu"></i>删除
                       </a>
                       <a href="/topic/to-update/1473650657826283521" target="_blank"
                          class="badge badge-success mr-2 float-right"
                          style="font-weight: 400;background:transparent;color: #7d7455;border:1px solid #bcbcbc;padding:4px 12px;border-radius: 0;">
                           <i class="iconfont icon-tianxie"></i>
                           编辑
                       </a>
                   </span>
            </div>
          </div>
        </div>
        <!--        <div class="media text-muted ksd-topic-items" id="delete-topicid-1472231647083495426">-->
        <!--          <div class="media-body load-topics-page pr">-->
        <!--            <h3 style="font-size:16px;padding:10px 0;">-->
        <!--              <a href="/bbs/1472231647083495426" target="_blank" class="text-dark font-weight-bold text-decoration-none d-block">-->
        <!--                <span>Haha</span>-->

        <!--              </a>-->

        <!--            </h3>-->
        <!--            <p><a href="/bbs/1472231647083495426">hahah</a></p>-->
        <!--            <div class="mt-2">-->
        <!--                    <span class="pr-3 fz12">-->
        <!--                        分类：<a href="/bbs?from=1&amp;cid=10">面试</a>-->
        <!--                    </span>-->
        <!--              <span class="mr-3 mt-2">-->
        <!--                        <i class="iconfont iconliulan tp2"></i>-->
        <!--                        <span>2</span>-->
        <!--                    </span>-->

        <!--              <span>-->
        <!--                        -->
        <!--                    </span>-->
        <!--              <span class="mr-3 mt-2">-->
        <!--                       <i class="layui-icon"></i>-->
        <!--                        <span>2021-12-18 23:45:52</span>-->
        <!--                    </span>-->
        <!--              <span class="mr-3 mt-2" style="color:#144d7b;font-size:12px;" title="发布状态"><i class="iconfont iconlock1 pr-1"></i>未发布</span>-->
        <!--              <span>-->
        <!--                       <a data-topicid="1472231647083495426" class="topic-delete-a badge badge-danger float-right" style="font-weight: 400;background:transparent;color: #745e5e;border:1px solid #bcbcbc;padding:4px 12px;border-radius: 0;">-->
        <!--                          <i class="iconfont iconremove"></i>删除-->
        <!--                       </a>-->
        <!--                       <a href="/topic/to-update/1472231647083495426" target="_blank" class="badge badge-success mr-2 float-right" style="font-weight: 400;background:transparent;color: #7d7455;border:1px solid #bcbcbc;padding:4px 12px;border-radius: 0;">-->
        <!--                           <i class="iconfont iconbianji1"></i>-->
        <!--                           编辑-->
        <!--                       </a>-->
        <!--                   </span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </div>-->


        <!--      <div class="ksd-page-loadmore ksd-page loadmore" data-pages="1" data-total="2" data-pageno="1">-->
        <!--        <a href="javascript:void(0);"><span class="msg">没有更多了</span></a>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleManagement"
}
</script>

<style scoped>
.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

a {
  color: #000000;
}

.ksd-topic-items:hover {
  background: #fafafa;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  border: 3px dashed #B8B8B8;
}

.ksd-topic-items {
  background: #ffffff;
  padding: 20px 30px;
  margin-bottom: 10px;
  border: 3px solid #f4f5f7;
}

.text-muted {
  color: #34495e !important;
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}

.media-body {
  -ms-flex: 1;
  flex: 1;
}

h1, h3, h4 {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
}

h1, h3, h4 {
  font-weight: 500;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-dark {
  color: #343a40 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.d-block {
  display: block !important;
}

.fw {
  font-weight: 600 !important;
}

.red {
  color: red;
}

.pl-2, .px-2 {
  padding-left: .5rem !important;
}

.tp1 {
  top: 1px !important;
}

.fz18 {
  font-size: 18px !important;
}

i {
  opacity: 0.8;
}

.mt-2, .my-2 {
  margin-top: .5rem !important;
}

.fz12 {
  font-size: 12px !important;
}

.pr-3, .px-3 {
  padding-right: 1rem !important;
}

.mr-3, .mx-3 {
  margin-right: 1rem !important;
}

.mt-2, .my-2 {
  margin-top: .5rem !important;
}

.tp2 {
  top: 2px !important;
}

.ksd-topic-items .topic-delete-a {
  font-size: 12px;
  cursor: pointer;
  background: rgba(236, 93, 82, 0.92);
}

a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.float-right {
  float: right !important;
}

.badge {
  display: inline-block;
  margin-bottom: 8px;
  padding: .75em 2.4em;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 1.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.ksd-topic-items .badge-success i, .ksd-topic-items .topic-delete-a i {
  font-size: 14px;
  position: relative;
  top: 0px;
}

.ksd-topic-items .badge-success {
  font-size: 12px;
  cursor: pointer;
  background: rgba(40, 167, 69, 0.92);
}
</style>

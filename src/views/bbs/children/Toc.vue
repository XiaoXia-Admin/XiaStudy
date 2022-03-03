<template>
  <div class="ksd-chapterlist-box">
    <a href="javascript:void(0);" class="expand-chapterlist mb-1">
      <span class="msg">展开目录</span>
      <span class="fr ksd-topic-add fz24 pr ftp4" style="color: #999">+</span>
      <span class="fr ksd-topic-minus fz24 pr ftp4" style="color: #999;display: none">-</span>
    </a>
    <div id="ksd-chapterlist">
    </div>
  </div>
  <!--  <div class="ksd-chapterlist-box">-->
  <!--    <a href="javascript:void(0);" class="expand-chapterlist mb-1"  @click="this.unfoldToc">-->
  <!--      <span class="msg">展开目录</span>-->
  <!--      <span class="fr ksd-topic-add fz24 pr ftp4" v-show="this.unfold" style="color: #999">+</span>-->
  <!--      <span class="fr ksd-topic-minus fz24 pr ftp4" v-show="!this.unfold" style="color: #999">-</span>-->
  <!--    </a>-->
  <!--    <div v-show="!this.unfold" id="ksd-chapterlist">-->
  <!--      <ul>-->
  <!--        <li>-->
  <!--          <a href="#header1">-->
  <!--            欢迎来到KuangStudy，这是一篇Markdown指南，愿您能够在这里留下美好的回忆。-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header2">-->
  <!--            1、标题-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header3">-->
  <!--            2、引用-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header4">-->
  <!--            3、链接或图片-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header5">-->
  <!--            4、列表-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header6">-->
  <!--            5、分隔线-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header7">-->
  <!--            6、强调-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header8">-->
  <!--            7、插入代码-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header9">-->
  <!--            8、表格-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header10">-->
  <!--            9、数学公式-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header11">-->
  <!--            10、流程图-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header12">-->
  <!--            11、UML时序图-->
  <!--          </a>-->

  <!--        </li>-->
  <!--        <li>-->
  <!--          <a href="#header13">-->
  <!--            好啦，学习的差不多了，快开始您的写作之旅吧！KuangStudy，以学为伴，一生相伴！-->
  <!--          </a>-->

  <!--        </li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "Toc",
  data() {
    return {
      unfold: true,
      toc: []
    }
  },
  methods: {
    unfoldToc() {
      this.unfold = !this.unfold
    }
  }
}
</script>

<style scoped>
.ksd-chapterlist-box {
  background: #eff3f5;
  margin: 32px 15px 0;
  padding: 10px;
  border-radius: 10px;
}

.ksd-chapterlist-box a {
  display: block;
  padding: 2px;
}

.mb-1, .my-1 {
  margin-bottom: .25rem !important;
}

.ftp4 {
  top: -4px !important;
}

.pr {
  position: relative;
}

.fz24 {
  font-size: 24px !important;
}

a {
  color: #34495e;
  text-decoration: none;
  background-color: transparent;
}

#ksd-chapterlist li {
  padding: 2px 0;
}

li {
  list-style: none;
}

#ksd-chapterlist li a {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 264px;
  white-space: nowrap;
  display: block;
}

#ksd-chapterlist a {
  color: #4183c4;
}

.ksd-chapterlist-box a {
  display: block;
  padding: 2px;
}

#ksd-chapterlist {
  display: none;
}
</style>

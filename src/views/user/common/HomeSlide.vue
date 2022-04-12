<template>
  <div>
    <div class="bg-white mb-3 position-relative" style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
      <div class="pb-4 pt-4">
        <div class="bg-white row mx-0 text-center">
          <div class="col">
            <div class="pb-2  ksd-user-center-count-size">{{this.homePage.articleRealeaseNumber}}</div>
            <div class="mb-0 small text-muted">文章数</div>
          </div>
          <div class="col">
            <div class="pb-2  ksd-user-center-count-size">{{this.homePage.commentNumber}}</div>
            <div class=" mb-0 small text-muted">评论数</div>
          </div>
          <div class="col">
            <div class="pb-2  ksd-user-center-count-size">{{this.homePage.studyNumber}}</div>
            <div class=" mb-0 small text-muted">学习数</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white mb-3 position-relative" style="text-align: left;box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
      <div class="py-3 px-3"><span style="font-size: 1.2rem;">账号信息</span></div>
      <div class="pb-4 px-3">
        <div class="py-2">
          <svg class="bi bi-shield-lock" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"></path>
            <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
            <path
              d="M7.411 8.034a.5.5 0 0 1 .493-.417h.156a.5.5 0 0 1 .492.414l.347 2a.5.5 0 0 1-.493.585h-.835a.5.5 0 0 1-.493-.582l.333-2z"></path>
          </svg>
          用户ID：<span>{{this.homePage.account}}</span>
        </div>
        <div class="py-2">
          <svg class="bi bi-person-circle" width="1em" height="1em" viewBox="0 0 16 16"
               fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"></path>
            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
            <path fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
          </svg>
          昵称：<span>{{this.homePage.nickname}}</span>
        </div>
        <div class="py-2">
          <svg class="bi bi-graph-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"></path>
            <path fill-rule="evenodd"
                  d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"></path>
            <path fill-rule="evenodd"
                  d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"></path>
          </svg>
          等级：<span class="ksd-user-exp" :data-exp="this.homePage.experience">Lv{{this.getLevel(this.homePage.experience)}}</span>
        </div>
        <div class="py-2">
          <svg class="bi bi-credit-card" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
            <rect width="3" height="3" x="2" y="9" rx="1"></rect>
            <path d="M1 5h14v2H1z"></path>
          </svg>
          K币：<span>{{this.homePage.money}}</span>
        </div>
        <div class="py-2">
          <svg class="bi bi-clock-history" width="1em" height="1em" viewBox="0 0 16 16"
               fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
            <path fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
            <path fill-rule="evenodd"
                  d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
          </svg>
          注册时间：<span>{{this.homePage.gmtCreate}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getLevel} from "../../../common/utils";

export default {
  name: "HomeSlide",
  props: {
    homePage: {
      type: Object,
      default: () => {
        return {
        }
      }
    }
  },
  methods: {
    getLevel
  }
}
</script>

<style scoped>
@import "../../../assets/css/user.css";
</style>

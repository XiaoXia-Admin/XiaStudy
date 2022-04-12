<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class="page-video" style="padding-bottom: 45px;">
        <div class="alert ksd-alert-primary" style="margin:20px 20px 0;border-radius: 40px;" role="alert"
             v-show="this.searchBox">
          <input type="text" ref="searchUser" placeholder="请输入用户数字账号或用户名进行搜索..." id="keyword" maxlength="60"
                 class="cinput"
                 style="border-radius: 20px;padding: 8px;">
          <button class="btn btn-primary ksd-btn-primary ksd-btn-searchuser" @click="searchUser"><i
            class="iconfont icon-sousuotianchong pr-2"></i>全站搜索
          </button>
        </div>
        <div class="person_works" id="ksd_person_works">
          <div>
            <ul class="comment_list" style="padding:0px 20px 0" id="ksd-fanslist-box">
              <li v-for="(item, index) in userFollowList" :key="item.userId" class="xjy-left animated fadeInLeftBig"
                  data-pages="1" data-total="1">
                <a :href="'/other/user/' + item.userId" class="com_head z" target="_blank"><img :src="item.avatar"></a>
                <div class="conmment-info fl">
                  <div class="conmment-info-name">
                    <a target="_blank" :href="'/other/user/' + item.userId" class="re_person">{{ item.nickname }}</a>

                    <span class="svipicon"><i class="iconfont icon-svip1"></i></span>
                    <span class="time">{{ item.gmtCreate }}</span>
                  </div>
                  <p class="detail">{{ item.sign }}</p>
                </div>
                <a :href="'/other/user/' + item.userId" target="_blank" class="ksd-gz-link"><i
                  class="iconfont icon-home2 pr-1 pr tp1"></i>进入TA的主页</a>
              </li>
            </ul>
            <div v-show="this.total != 0" :data-pages="this.total" :data-total="this.total" :data-pageno="this.current"
                 class="ksd-page-loadmore ksd-page loadmore"
                 style="margin: 20px;">
              <a v-show="this.current < Math.ceil(this.total/this.limit)" href="javascript:void(0);"
                 @click="findFollow"><span v-show="this.current < Math.ceil(this.total/this.limit)" class="msg"
                                           style="color: black;">点击加载更多，共 <span
                class="fw">{{ this.total }}</span>，当前: <span
                class="fw">{{ this.current }}/{{ Math.ceil(this.total / 10) }}</span></span></a>
              <a href="javascript:void(0);" v-show="this.current == Math.ceil(this.total/this.limit)"><span class="msg">没有更多了</span></a>
            </div>
          </div>
        </div>
        <div v-show="this.total == 0" class="person_works" id="ksd_person_search_works">
          <div class="ksd-show-searchbox">
            <span class="font-weight-bold"><img :src="this.img" alt="" width="200"></span>
            <div class="ksd-follow-nodata" v-show="this.searchFlag" style="width: 90%">没有找到该用户，请检查账号或用户名输入是否正确!!!</div>
            <div class="ksd-follow-nodata" v-show="this.fansFlag && !this.searchFlag" style="width: 90%">还没有人关注你哦！</div>
            <div class="ksd-follow-nodata" v-show="this.followFlag && !this.searchFlag" style="width: 90%">快去关注一个小伙伴吧！
            </div>

          </div>
          <ul class="comment_list" id="commentlist"></ul>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

import loginApi from "../../../network/login";

export default {
  name: "Follow",
  props: {
    userFollowList: {
      type: Array,
      default: () => {
        return []
      },
    },
    searchBox: {
      type: Boolean,
      default: true
    },
    total: {
      type: Number,
      default: 0
    },
    fansFlag: {
      type: Boolean,
      default: false
    },
    followFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      page: 1, //当前页码
      current: 1,
      limit: 15,
      searchFlag: false,
      searchCurrent: 0,
      img: './static/img/nodata.png'
    }
  },
  methods: {
    //查找关注的用户
    findFollow() {
      this.current += 1
      loginApi.findFollow(this.current, this.limit, this.$store.state.myUserInfoVo.id).then(response => {
        this.userFollowList = this.userFollowList.concat(response.data.data.userFollowList)
      })
    },
    //全站搜索用户
    searchUser() {
      this.searchCurrent += 1
      let user = this.$refs.searchUser.value
      alert(user)
      alert(this.searchCurrent)
      loginApi.findUserByAccountOrName(this.searchCurrent, this.limit, user).then(response => {
        this.userFollowList = response.data.data.userList
        this.total = response.data.data.total
        if (this.total == 0) {
          this.searchFlag = true
        }
      })
    }
  }
}
</script>

<style scoped>
.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.page-video {
  background: #fff;
  overflow: hidden;
  position: relative;
}

.ksd-alert-primary {
  color: #004085;
  background-color: #f4f5f7;
  border-color: #f4f5f7;
}

.alert {
  position: relative;
  padding: .75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: .25rem;
}

.cinput, .selected {
  text-indent: 0.5em;
  padding: 10px !important;
  border: 1px solid #ccc;
  width: 82% !important;
  margin: 0 8px;
}

button, input, optgroup, option, select, textarea {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  outline: 0;
}

.ksd-btn-primary {
  width: 15%;
  border-radius: 20px;
  background: #f4f5f7;
  color: #34495e;
  border-color: #dcdee3;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  background-color: transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.ksd-btn-primary {
  width: 15%;
  border-radius: 20px;
  background: #f4f5f7;
  color: #34495e;
  border-color: #dcdee3;
}

.btn-primary.focus, .btn-primary:focus, .btn-primary:hover {
  background-color: #32c8ab;
  border-color: #32c8ab;
  color: white;
}

.person_works .comment_list {
  margin: 20px 0;
  padding: 20px;
}

.person_works .comment_list li {
  padding: 25px 20px;
  box-sizing: border-box;
  overflow: hidden;
  background: #f4f5f7;
  margin-bottom: 10px;
  border-radius: 10px;
}

.person_works .comment_list li:hover {
  background-color: #dddddd;
}


.person_works .com_head {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  float: left;
}

.person_works .conmment-info {
  margin-left: 10px;
  width: 79%;
  margin-top: -10px;
}

.person_works .conmment-info a {
  display: inline-block;
  font-size: 16px;
  color: #303133;
  font-weight: 500;
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

.svipicon .iconfont {
  font-size: 32px;
  position: relative;
  font-weight: 500;
  top: 7px;
  left: 0;
}

.person_works .conmment-info .time {
  color: #bfc4cd;
  display: inline-block;
  margin-left: 5px;
}

.person_works .conmment-info p.detail {
  color: #606266;
  font-weight: normal;
  margin-top: 2px;
}

.person_works .conmment-info p {
  line-height: 20px;
  font-size: 14px;
  color: #303133;
  font-weight: 500;
}

.person_works .comment_list .ksd-gz-link {
  border: 1px solid #ccd0d7;
  border-radius: 27px;
  padding: 6px 24px;
  font-size: 14px;
  display: inline-block;
  color: black;
}

.person_works .comment_list .ksd-gz-link i {
  position: relative;
  top: -2px;
}

.tp1 {
  top: 1px !important;
}

.pr {
  position: relative;
}

.ksd-pages-nodata, .ksd-noempty, .loadmore, .ksd-page-loadmore {
  text-align: center;
  background: #f4f5f7 !important;
  position: relative;
  z-index: 100;
  padding: 5px;
  color: #666;
  height: 54px;
}

.loadmore a {
  display: block;
  background: #f4f5f7;
  padding: 10px;
}

.ksd-show-searchbox .ksd-follow-nodata {

  text-align: center;
  color: #878484;
  padding: 20px;
  background: #f4f5f7;
  font-size: 16px;
  margin: auto;
  inline-size: 12px;
  height: 58px;

}

.person_works .com_head img {
  width: 50px;
  height: 50px;
}
.person_works .comment_list .ksd-gz-link:hover {
  background: white;
}
</style>

<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class="page-video" style="padding-bottom: 45px;">
        <div class="alert ksd-alert-primary" style="margin:20px 20px 0;border-radius: 40px;" role="alert">
          <input type="text" placeholder="请输入用户数字账号或用户名进行搜索..." id="keyword" maxlength="60" class="cinput" style="border-radius: 20px;padding: 8px;">
          <button class="btn btn-primary ksd-btn-primary ksd-btn-searchuser"><i class="iconfont icon-sousuotianchong pr-2"></i>全站搜索</button>
        </div>
        <div class="person_works" id="ksd_person_works">
          <div>
            <ul class="comment_list" style="padding:0px 20px 0" id="ksd-fanslist-box">
              <li class="xjy-left animated fadeInLeftBig" data-pages="1" data-total="1">
                <a href="/user/4d694f8625c44aef9ff7a04424c1ca12" class="com_head z" target="_blank"><img src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epURBSUSGSM0q0fGicY2cY4buicEPspibhcTuVPOmbKZRoibdD0KzxeEczApTIYZYIpdCOsh1PSptJzyQ/132"></a>
                <div class="conmment-info fl">
                  <div class="conmment-info-name">
                    <a target="_blank" href="/user/4d694f8625c44aef9ff7a04424c1ca12" class="re_person">狂神说</a>

                    <span class="svipicon"><i class="iconfont icon-svip1"></i></span>
                    <span class="time">2022/01/15 12:24</span>
                  </div>
                  <p class="detail"> 我们的征途是星辰大海！ </p>
                </div>
                <a href="/user/4d694f8625c44aef9ff7a04424c1ca12" target="_blank" class="ksd-gz-link"><i class="iconfont icon-home2 pr-1 pr tp1"></i>进入TA的主页</a>
              </li>
            </ul>
            <div class="comment_list" style="padding:0 20px 20px">

              <div class="ksd-page-loadmore  ksd-page loadmore">
                <a href="javascript:void(0);">没有更多了</a>
              </div>

            </div>
          </div>
        </div>
        <div class="person_works" id="ksd_person_search_works">
          <div class="ksd-show-searchbox">
            <div class="ksd-follow-nodata" style="width: 100%">没有找到该用户，请检查账号或用户名输入是否正确!!!</div>

          </div>
          <ul class="comment_list" id="commentlist"></ul>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage"
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
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
  margin: 20px;
  inline-size: 12px;
  height: 58px;

}
</style>

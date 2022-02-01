<template>
  <div class="container">
    <div class="ksd-main-content">
      <div class=" bottom_content" style="display: block;">
        <div class="row mx-0 ">
          <div class="col-12 col-md-9 content_box blog-main bg-white mb-3 pb-4 pt-3"
               style="box-shadow: 0 1px 4px 0 rgba(0,0,0,.05)">
            <talk-about :other-talk="true"></talk-about>
          </div>
          <div id="ucenterapp2" class="col-md-3 pr-0 ucenter_right_box" style="padding-left: 15px;">
            <home-slide></home-slide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSlide from "../../user/common/HomeSlide";
import TalkAbout from "../../user/children/TalkAbout";

export default {
  name: "OtherTalk",
  components: {
    HomeSlide,
    TalkAbout
  }
}
</script>

<style scoped>

</style>

<template>
  <div v-show="!this.$store.state.loadingFlag">
    <msg-title :total="this.total" :title="this.title"></msg-title>
    <div v-show="this.total != 0" class="xjy-left n-msgnt n-msgnt-1 n-msgnt-hvr j-flag">
      <div  v-for="(item,index) in systemNewsList" :key="item.id" class="item f-cb ">
        <div class="cont" style="margin-left: 0px;">
          <div class="sec1">
            <div class="time s-fc4">{{item.gmtCreate}}&nbsp;<i class="u-icn u-icn-57"></i></div>
            <div class="mn"><a target="_self" href="javascript:void(0);" class="s-fc0 f-fs1 f-fw1 fw fz14">{{item.title}}</a>&nbsp;
              <sup class="u-icn u-icn-1 "></sup></div>
          </div>
          <div class="sec2 sec2-1 f-thide s-fc4 fz12">
            <p class="f-thide" v-html="item.content" style="line-height:1.6">
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="this.total == 0">暂无信息</div>
  </div>
</template>

<script>
import MsgTitle from "../common/MsgTitle";
import informationApi from "../../../network/information";
export default {
  name: "System",
  components: {MsgTitle},
  data() {
    return {
      total: 190,
      title: '系统消息',
      systemNewsList:[
        {
          id: '',
          title: '',
          content: "",
          gmtCreate: '',
        }
      ],
      current: 0,
      limit: 10
    }
  },
  methods: {
    //查询系统消息
    findSystemInfo() {
      this.current += 1
      informationApi.findSystemInfo(this.current, this.limit).then(response => {
        this.total = response.data.data.total
        this.systemNewsList = response.data.data.systemNewsList
        this.$store.commit("editLoadingFlag", false)
      })
    },
  },
  created() {
    this.findSystemInfo()
  }
}
</script>

<style scoped>
@import "../../../assets/css/msg.css";

</style>


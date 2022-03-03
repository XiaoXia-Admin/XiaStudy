<template>
  <div class="main-content ksd-topic-content">
    <div v-show="this.flag" class="alert alert-primary" role="alert">
      合理使用标签可以将文章进行更好的分类管理，点击标签查看自己对应标签下的文章，即文章分类.
    </div>

    <div class="xjy-left">
      <a v-for="(item,index) in labelList" :key="index" :href="'/bbs?from=1&amp;searchKey=' + item.labelName"
         class="badge tagscolor mr-2" :class="badgeColor(index)" target="_blank"><i
        class="iconfont icon-biaoqian pr-2 pr tp1"></i><span style="font-weight: bold;">{{ item.labelName }}</span></a>
    </div>
  </div>
</template>

<script>

export default {
  name: "ArticleTag",
  props: {
    labelList: {
      type: Array,
      default: [
        {
          labelName: 'a'
        },
        {
          labelName: 'b'
        },
        {
          labelName: 'c'
        },
        {
          labelName: 'd'
        },
        {
          labelName: 'e'
        },
      ],
    },
    flag: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      colorLevel: [
        {
          color: 'success'
        },
        {
          color: 'warning'
        },
        {
          color: 'danger'
        },
        {
          color: 'primary'
        }
      ],
      flag: 0,
      flagRecord: 3
    }
  },
  methods: {
    badgeColor(num) {
      return 'badge-' + this.colorLevel[num % 4].color
    }
  }
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

.tagscolor {
  margin-bottom: 10px;
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

.mr-2, .mx-2 {
  margin-right: .5rem !important;
}

.badge-success {
  color: #fff;
  background-color: #28a745;
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

.badge-primary {
  color: #fff;
  background-color: #007bff;
}

.badge-warning {
  color: #212529;
  background-color: #ffc107;
}

a.badge-danger:hover, a.badge-danger:active {

  color: #fff;
  background-color: #bd2130;
}

a.badge-danger:focus {
  -webkit-appearance: none;
  outline: 5px solid #bd2130;
}

a.badge-primary:hover, a.badge-primary:active {
  -webkit-appearance: none;
  color: #fff;
  background-color: #0062cc;
}

a.badge-primary:focus {
  -webkit-appearance: none;
  outline: 5px solid #0062cc;
}

a.badge:focus, a.badge:hover {
  text-decoration: none;
}

a.badge-warning:hover, a.badge-warning:active {
  -webkit-appearance: none;
  color: #212529;
  background-color: #d39e00;
}

a.badge-warning:focus {
  -webkit-appearance: none;
  outline: 5px solid #d39e00;
}

a.badge-success:hover, a.badge-success:active {
  -webkit-appearance: none;
  color: #fff;
  background-color: #1e7e34;
}

a.badge-success:focus {
  -webkit-appearance: none;
  outline: 5px solid #1e7e34;
}
</style>

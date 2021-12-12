<template>
  <div>
    <div class="product-name"><img style="width: 280px;" src="../../../assets/img/indexlogo.png" alt=""></div>
    <p class="product-desc">为每个想学习知识的人提供一个少走弯路的平台</p>
    <p class="product-desc ksd-product-desctext fz16">{{messageList[randomNum(0,13)]}}</p>
  </div>
</template>

<script>
export default {
  name: "SecMessage",
  data() {
    return {
      messageList: [
        "生活明朗，万物可爱，人间值得，未来可期",
        "你若盛开，蝴蝶自来",
        "真正喜欢的人和事，都值得我们坚持",
        "须知少年凌云志，曾许人间第一流",
        "凡是不能杀死你的，最终都会让你更强",
        "一群有情有义的人、在一起做一些有价值有意义的事情",
        "世界上只有少数人能够最终达到自己的理想",
        "向着月亮出发，即使不能到达，也能站着群星之中",
        "我们缺乏的不是知识，而是学而不厌的态度",
        "希望有一天自己也成为一个小太阳去温暖别人",
        "屏幕前的你一定是个很温柔的人吧",
        "我们的征途是星辰大海",
        "生活原本沉闷，但跑起来就有风",
        "你只有走完必须走的路，才能过想过的生活",
      ]
    }
  },
  methods: {
    randomNum(min, max) {
      let num = Math.floor(Math.random() * (max - min) + min)
      while(this.flag === num) {
        num = Math.floor(Math.random() * (max - min) + min)
      }
      this.flag = num;
      this.flagRecord = this.flag;
      return num;
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.product-name + .product-desc {
  opacity: 1;
  font-family: Avenir-Medium;
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin: 12px auto 0;
  max-width: 860px;
}
.product-desc:last-child {
  opacity: 1;
  font-family: Avenir-Medium;
  color: #fff;
  text-align: center;
  margin: 12px auto 0;
  max-width: 860px;
}
.fz16 {
  font-size: 16px !important;
}

.ksd-product-desctext {
  background: -webkit-linear-gradient(45deg, #70f7fe, #fbd7c6, #fdefac, #bfb5dd, #bed5f5);
  letter-spacing: 2px;
  -webkit-background-clip: text;
  animation: ran 10s linear infinite;
}
p {
  -webkit-box-sizing: border-box;
}
.product-name {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

</style>

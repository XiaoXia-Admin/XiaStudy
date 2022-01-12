<template>
  <div id="sec">
    <section class="top-section sec_bg_img" :style="{backgroundImage: 'url('+this.imgUrl[this.flag != this.flagRecord ? (this.flagRecord != this.flag ? this.flagRecord.default : this.flagRecord) : this.flag] +')'}">
      <div class="vertical-middle">
        <SecMessage></SecMessage>
        <SecBtn></SecBtn>
        <div class="blink" style="position: fixed;left:0;right:0;text-align: center;bottom: -100px;">连按8次【B】键，可以切换背景</div>
      </div>
    </section>
  </div>

</template>
<script>
import SecMessage from "./SecMessage";
import SecBtn from "./SecBtn";
import {randomNum} from "../../../common/utils";

export default {
  name: "Sec",
  components: {
    SecBtn,
    SecMessage
  },
  data() {
    return {
      imgUrl: [
        require('../../../assets/img/1.png'),
        require('../../../assets/img/2.png'),
        require('../../../assets/img/3.png'),
        require('../../../assets/img/4.png'),
        require('../../../assets/img/5.png'),
        require('../../../assets/img/6.png'),
        require('../../../assets/img/7.png'),
        require('../../../assets/img/8.png'),
        require('../../../assets/img/9.png'),
        require('../../../assets/img/10.png'),
        require('../../../assets/img/11.png'),
        require('../../../assets/img/12.png'),
        require('../../../assets/img/13.png'),
        require('../../../assets/img/14.png'),
        require('../../../assets/img/15.png')
      ],
      flag: {
        type: Number,
        default: 0
      },
      flagRecord: {
        type: Number,
        default: 11
      }
    }
  },
  methods: {
    randomNum
  },
  created() {
    const g = this;
    let i = 0;
    document.onkeydown = function (e) {
      let key = e.key;
      if (key == 'b') {
        i++;
        if (i == 8) {
          this.flag = g.randomNum(0, 14);
          i = 0;
        }
      }
    }
  }
}
</script>

<style scoped>
.top-section {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: transparent;

}

.sec_bg_img {
  background-size: cover !important;
  background: rgb(33, 150, 243) url("../../../assets/img/10.png") no-repeat scroll 0% 0%;
}

section {
  display: block;
}

.vertical-middle {
  background: transparent !important;
  box-shadow: none;
  position: absolute;
  left: 0;
  top: 44%;
  transform: translateY(-50%);
  box-sizing: border-box;
  max-width: 960px;
  text-align: center;
  padding: 40px;
  margin: 0 auto;
  right: 0;
}

@-webkit-keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

.blink {
  color: #fff;
  animation: blink 2s alternate infinite;
  /* 其它浏览器兼容性前缀 */
  -webkit-animation: blink 2s alternate infinite;
  -moz-animation: blink 2s alternate infinite;
  -ms-animation: blink 2s alternate infinite;
  -o-animation: blink 2s alternate infinite;
  text-align: center;
}
</style>

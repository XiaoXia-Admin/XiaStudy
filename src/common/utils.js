//获取随机数，不与之前的重复
export function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min)
  while (this.flag === num) {
    num = Math.floor(Math.random() * (max - min) + min)
  }
  this.flag = num;
  this.flagRecord = this.flag;
  return num;
}

//监控滚动盖度
export function scrollTop() {
  // 页面滚动距顶部距离
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
    document.body.scrollTop
  if (scrollTop > 345) {
    this.show = true;
  } else {
    this.show = false;
  }
  this.slideArray.forEach((val, index, arr) => {
    if ((arr[index].distance-175 < scrollTop && (scrollTop) < arr[index + 1].distance-175) || (arr[index].distance-175 < (scrollTop) && arr[index+1].distance == -1 )) {
      document.getElementById(arr[index].id).style.setProperty("color","#fff")
      document.getElementById(arr[index].id).style.setProperty("background-color","#00a1d6")
    } else {
      document.getElementById(arr[index].id).style.setProperty("color","#000000")
      document.getElementById(arr[index].id).style.setProperty("background-color","#fff")
    }
  })
}

//返回顶部
export function backToTop(item) {
  let backPosition
  let i = 0;
  let distanceY = window.pageYOffset;
  console.log('distance' + distanceY);
  if ("slide_bottom" === item) {
    backPosition = 95;
  } else {
    backPosition = document.getElementById(item.id).offsetTop;
  }
  this.interval = setInterval(() => {
    let next = Math.floor(this.easeInOutQuad(10 * i, distanceY, -distanceY, 500))
    if (next <= (backPosition + 95)) {
      window.scrollTo(0, (backPosition - 95))
      clearInterval(this.interval)
    } else {
      window.scrollTo(0, next)
    }
    i--
  }, 0.5)
}

// 设置返回的过渡动画
export function easeInOutQuad(t, b, c, d) {
  // 判断当前时间是否总在总时间的一半以内，是的话执行缓入函数，否则的话执行缓出函数
  if ((t /= d / 2) < 1) {
    return (c / 2 * t * t + b)
  } else {
    // 将总长度设置为一半，并且时间从当前开始递减，对图像进行垂直向上平移
    return -c / 2 * (--t * (t - 2) - 1) + b
  }
}

export function getStyle(item) {
  if (item.isActive) {
    return {'background-color': '#00a1d6', 'color': '#fff'}
  }
  return {}
}

export function activeBtn(item, slideBarList) {
  let currentState = item.isActive;
  slideBarList.forEach(el => {
    el.isActive = false
  })
  item.isActive = !currentState
}

export function slideArrayTop() {
  let array = new Array();
  this.slideList.forEach(el => {
    array.push({id: el.slideId, distance: document.getElementById(el.id).offsetTop});
  })
  array.push({id:'replace',distance: -1})
  this.slideArray = array;
}

export function layuiOpen() {
  let index = layer.open({
    id: 'navOpen',
    content: `<div class="login_title" >打开微信扫一扫登录/注册</div>
                            <div class="wx-qr-code-img">
                                <div class="img">
                                    <a class="weixin-login weixin-login-btn" href="http://localhost:8160/api/ulogin/wx/login">
                                        <i class="iconfont icon-weixin1"></i>微信扫描注册/登录
                                    </a>
                                </div>

                            </div>
                    `,
    skin: 'box',
    offset: '100px',
    area: ['500px', '450px'],
    title: false,
    resize: false,
    btn: '',
    anim: 1
  })
  layer.style(index, {
    borderRadius: '15px'
  });
}
// ,path,vm
export function layuiBack(btn1,btn2,path){

  layer.confirm(`<span style="margin:auto 97px">你确定要离开吗？</span>`, {
    btn: [btn1,btn2] //按钮
  }, function(){
    window.location.href = path
  }, function(){

  });
}

export function layuiDownload(btn1,btn2){

  layer.confirm(`<span style="margin:auto 97px">点击下载将会扣除对应K币,且K币不会退还!</span>`, {
    btn: [btn1,btn2] //按钮
  }, function(){
    layer.msg('正在请求资源', {icon: 1});
  }, function(){
    layer.msg('已取消下载', {
      time: 5000, //20s后自动关闭
    });
  });
}

export function  cancelSign() {
  // this.sign = false
  // if(this.$refs.signature.value != 'TA很懒，什么都没有留下...' ) {
  //   this.inputValue = this.$refs.signature.value;
  // }
  layer.msg("haha")
}

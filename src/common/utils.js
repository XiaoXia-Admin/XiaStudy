export function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min)
  while(this.flag === num) {
    num = Math.floor(Math.random() * (max - min) + min)
  }
  this.flag = num;
  this.flagRecord = this.flag;
  return num;
}

export function exchangeColor(min, max) {

}

export function leaveColor(min, max) {

}


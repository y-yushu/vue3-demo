<script setup>
import { ref } from 'vue'
const input = ref('')
// 是否抖动
const dong = ref(false)
// 回车触发
const carriageReturn = () => {
  dong.value = true
  setTimeout(() => (dong.value = false), 800)
}
// 小demo
const demo = () => {
  console.log(Math.random() <= 0.666 ? 666 : Math.random())
}
// 还有一道题   abc三种方法    a执行5次后，通知b去执行。b执行10次后，通知c去执行。c执行15次后，通知a去执行
// 小demo2
const demo2 = () => {
  // 判断当前运行方法，并执行下次运行
  let n = 1 // 总轮次
  const to = (title, cb, to, t, max) => {
    console.log(`第<${t}>次运行<${title}>方法`)
    if (t < max) cb(t + 1)
    else {
      // 判断轮次，每次执行c完，轮次加1
      console.log(`第<${n}>轮执行完成`)
      if (title === 'c') n++
      if (n > 10) return
      // 不暂停继续执行
      to(1)
    }
  }
  // 方法A：执行2次后运行B
  const a = t => setTimeout(() => to('a', a, b, t, 5), 500)
  // 方法B：执行3次后运行C
  const b = t => setTimeout(() => to('b', b, c, t, 10), 500)
  // 方法C：执行4次后运行A
  const c = t => setTimeout(() => to('c', c, a, t, 15), 500)
  // 启动方法A
  a(1)
}
</script>

<template>
  <el-button type="text" @click="demo2">触发</el-button>
  <el-input class="page_input" :class="[{ shake: dong }]" v-model="input" @keyup.enter="carriageReturn" />
  <div class="box">
    <div class="box_1">左</div>
    <div class="box_2">右</div>
    <div class="box_3">上</div>
    <div class="box_4">下</div>
    <div class="box_5">前</div>
    <div class="box_6">后</div>
  </div>
</template>

<style lang="scss" scoped>
.page_input {
  margin: 20px;
  width: 220px;
}
.shake {
  animation-name: errtips;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
@keyframes errtips {
  10% {
    transform: rotateX(6deg) rotateY(6deg);
  }
  30% {
    transform: rotateX(-6deg) rotateY(6deg);
  }
  55% {
    transform: rotateX(-6deg) rotateY(-6deg);
  }
  70% {
    transform: rotateX(6deg) rotateY(-10deg);
  }
}
.box {
  transform-style: preserve-3d;
  width: 200px;
  height: 200px;
  border: 1px dotted #ccc;
  margin: 200px auto;
  transition: all 4s;
  position: relative;
}

.box div {
  width: 200px;
  height: 200px;
  position: absolute;
  color: #fff;
  transition: 2s;
}

.box:hover {
  transform: rotateX(360deg) rotateY(180deg);

  .box_1 {
    transform: translateZ(-200px);
  }
  .box_2 {
    transform: rotateX(90deg) translateZ(-200px);
  }
  .box_3 {
    transform: rotateX(90deg) translateZ(200px);
  }
  .box_4 {
    transform: translateZ(200px);
  }
  .box_5 {
    transform: rotateY(90deg) translateZ(-200px);
  }
  .box_6 {
    transform: rotateY(90deg) translateZ(200px);
  }
}

.box_1 {
  background: #777bce;
  transform: translateZ(-100px);
}
.box_2 {
  background: #c0d6cb;
  transform: rotateX(90deg) translateZ(-100px);
}
.box_3 {
  background: #f52443;
  transform: rotateX(90deg) translateZ(100px);
}
.box_4 {
  background: #e3dbbf;
  transform: translateZ(100px);
}
.box_5 {
  background: #eddd9e;
  transform: rotateY(90deg) translateZ(-100px);
}
.box_6 {
  background: #7d7d00;
  transform: rotateY(90deg) translateZ(100px);
}
</style>

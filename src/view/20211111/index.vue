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
</script>

<template>
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

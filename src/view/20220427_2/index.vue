<script setup>
import { ref } from 'vue'
const url = 'https://uploadfile.bizhizu.cn/up/e2/13/42/e213428537902d057e680dbcb2d14cae.jpg'

const is_move = ref(false) // 鼠标是否移入
const is_stop = ref(true) // 动画是否停止
const cls = ref('start') // 样式动画

// 鼠标移入
const mouseMove = () => {
  if (!is_move.value) {
    is_move.value = true
    is_stop.value = false
    const donghua = () => {
      cls.value = cls.value === 'start' ? 'end' : 'start'
      setTimeout(() => {
        // 动画结束
        if (is_stop.value) return
        donghua() // 再次调用
      }, 2000)
    }
    donghua() // 开始动画
  }
}
// 鼠标移出
const mouseOut = () => {
  if (is_move.value) {
    is_move.value = false
    is_stop.value = true // 切换停止
    cls.value = 'start' // 立刻回到初始位置
  }
}
</script>

<template>
  <div class="box">
    <div class="box_image" @mousemove="mouseMove()" @mouseout="mouseOut()">
      <img :class="cls" :src="url" alt="" srcset="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box_image {
  width: 200px;
  height: 200px;
  border: 1px solid;
}
.box_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  //   object-position: 0% 0%;
  transition: 2s;
}
.start {
  object-position: 0% 0%;
}
.end {
  object-position: 100% 100%;
}
// .box_image:hover img {
//   animation: huadong 2s linear infinite;
// }
@keyframes huadong {
  0%,
  100% {
    object-position: 0% 0%;
  }
  50% {
    object-position: 100% 100%;
  }
}
</style>

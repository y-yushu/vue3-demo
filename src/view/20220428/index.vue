<script setup>
import { ref } from 'vue'

const text = ref('')

setInterval(() => {
  if (text.value === '....') text.value = ''
  text.value += '.'
}, 500)
</script>

<template>
  <div class="body">
    <div class="circle"></div>
    <span class="text">{{ 'Loading' + text }}</span>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(0, #7117ea, #ea6060, #3a88e7);
    // background: linear-gradient(135deg, #7117ea, #ea6060);
    animation: xuanzhuan 1s linear infinite;
  }
  .circle::before {
    content: '';
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, #7117ea, #ea6060);
    filter: blur(35px);
  }
  .circle::after {
    content: '';
    width: 160px;
    height: 160px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    background-color: #333;
  }
  @keyframes xuanzhuan {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .text {
    position: absolute;
    color: #fff;
    font-weight: 800;
  }
}
</style>

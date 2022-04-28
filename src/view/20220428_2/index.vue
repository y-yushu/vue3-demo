<script setup>
import { ref, computed } from 'vue'
const direc = ref(0)

const tran = computed(() => {
  return `transform: rotateY(${direc.value}deg);`
})

const overturn = () => {
  direc.value = direc.value === 180 ? 0 : 180
}
</script>

<template>
  <div class="body">
    <div class="box">
      <div class="flipper">
        <div class="front">123</div>
        <div class="back">456</div>
      </div>
    </div>
    <div class="box_2">
      <!-- <div class="flipper" :style="{ transform: 'rotateY(' + direc + 'deg)' }"> -->
      <div class="flipper" :style="tran">
        <div class="front">
          <button @click="overturn()">翻转</button>
        </div>
        <div class="back">
          <button @click="overturn()">再次翻转</button>
        </div>
      </div>
    </div>
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
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 200px;
    height: 240px;
    perspective: 1000;
  }
  .box:hover .flipper {
    transform: rotateY(180deg);
  }
  .box_2 {
    width: 200px;
    height: 240px;
    perspective: 1000;
  }
  .flipper,
  .front,
  .back {
    width: 100%;
    height: 100%;
  }
  .flipper {
    transition: 1.2s;
    transform-style: preserve-3d;
  }
  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    background: orange;
  }
  .back {
    background: blueviolet;
    transform: rotateY(180deg);
  }
}
</style>

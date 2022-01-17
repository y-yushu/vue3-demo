<script setup>
import { ref } from 'vue'
import Menu from './components/menu.vue'

// 隐藏菜单方法
const props = defineProps({
  change: Function
})
const hide = () => props.change()

const menuRef = ref(null)
// 右键点击
const openMenu = e => {
  menuRef.value.open(e)
}
</script>

<template>
  <Menu ref="menuRef" />
  <div class="page">
    <div @click="hide()">隐藏菜单栏</div>
    <div class="tong demo1" @contextmenu.prevent="openMenu">1</div>
    <div class="tong demo2" @contextmenu.prevent="openMenu">2</div>
    <div class="tong demo3" @contextmenu.prevent="openMenu">3</div>
    <div class="tong demo4" @contextmenu.prevent="openMenu">4</div>
    <div class="tong demo5" @contextmenu.prevent="openMenu">5</div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #00f5a0, #00d9f5);
  .tong {
    margin-bottom: 20px;
  }
  .demo1 {
    width: 100%;
    height: 300px;
    background: linear-gradient(to left, #c84e89, #f15f79);
  }
  .demo2 {
    width: 100%;
    height: 300px;
    background: linear-gradient(to left, #9400d3, #4b0082);
  }
  .demo3 {
    width: 100%;
    height: 300px;
    background: linear-gradient(to left, #00416a, #e4e5e6);
  }
  .demo4 {
    width: 100%;
    height: 300px;
    background: linear-gradient(to left, #fbed96, #abecd6);
  }
  .demo5 {
    width: 100%;
    height: 300px;
    background: linear-gradient(to top, #799f0c, #acbb78);
  }
}
</style>

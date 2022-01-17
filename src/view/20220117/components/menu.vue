<script setup>
import { ref, onBeforeUnmount, defineExpose } from 'vue'

// 显示控制&定位控制
const menuRef = ref(null)
const visible = ref(false)
const clientX = ref('0')
const clientY = ref('0')

// 打开菜单方法
const open = e => {
  clientX.value = e.clientX + 'px'
  clientY.value = e.clientY + 'px'
  visible.value = true
}

// 监听点击事件
const clickFunc = e => {
  // 判断组件是否开启
  if (visible.value) {
    // 判断点击点是否在组件内
    if (!menuRef.value.contains(e.target)) {
      visible.value = false
    }
  }
}
// 监听滚动事件
const scrollFunc = () => {
  // 判断组件是否开启
  if (visible.value) visible.value = false
}
document.addEventListener('click', clickFunc)
document.addEventListener('scroll', scrollFunc)
// 组件销毁
onBeforeUnmount(() => {
  document.removeEventListener('click', clickFunc)
  document.removeEventListener('click', scrollFunc)
})
// 暴露方法
defineExpose({
  open
})
</script>

<template>
  <div v-if="visible" ref="menuRef" class="location">
    <div class="menu">
      <div class="menu-item">菜单按钮1</div>
      <div class="menu-item">菜单按钮2</div>
      <div class="menu-item">菜单按钮3</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.location {
  position: fixed;
  top: v-bind('clientY');
  left: v-bind('clientX');
  .menu {
    width: 100px;

    .menu-item {
      border: 1px solid #000;
      background-color: #fff;
    }
  }
}
</style>

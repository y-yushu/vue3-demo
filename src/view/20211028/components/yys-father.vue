<script setup>
import { provide, ref, defineExpose, computed } from 'vue'

// 是否高亮
const isR = ref(false)
provide(
  'isHighlight',
  computed(() => isR.value)
)
// 广播文本
const text = ref('')
provide(
  'text',
  computed(() => text.value)
)

// 取消事件
provide('uncheck', () => {
  isR.value = false
})

// 点击广播
const open = _t => {
  isR.value = true
  text.value = _t
}

defineExpose({ open })
</script>

<template>
  <div class="page">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin: 20px;
}
</style>

<script setup>
import { ref, inject, defineEmits } from 'vue'

// 接收参数
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

// 发送方法
const emit = defineEmits(['toShow'])

// 是否高亮
const isRed = ref(inject('isHighlight'))

// 广播文本
const text = ref(inject('text'))

// 取消报红事件
const uncheck = inject('uncheck')

// 点击输入框
const clickChildren = () => {
  if (isRed.value) {
    uncheck()
    emit('toShow', text.value)
  } else {
    console.log('无效点击')
  }
}
</script>

<template>
  <div class="page" :class="isRed ? 'isHighlight' : ''" @click="clickChildren">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-top: 20px;
}
.isHighlight {
  ::v-deep(.el-input__inner) {
    border: 1px solid red;
    border-radius: 4px;
  }
}
</style>
